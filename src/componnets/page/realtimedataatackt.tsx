import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import '../../css/realtimedataatackt.css'
import { loction_attackt } from '../../enum/enumloctin';
import { socket } from '../../main';
import { getuser } from '../../redux/slice/user';
import { eventState } from '../../types/redux';

export default function Realtimedataatackt() {
  const dispatch = useAppDispatch();
  const [time, setTimee] = useState('');
  const [namerocket, setnameRocket] = useState('');
  const [locition, setLocition] = useState('');
  const { myOrg } = useAppSelector((state) => state.organizition);
  const { user } = useAppSelector((state) => state.user); 
  const { status } = useAppSelector((state) => state.event);
  const [qevent, seteventt] = useState<eventState[]>([]);
  
  
  const getEventfromDB = async() => {
    const res  = await fetch("http://localhost:2211/api/event",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameattack:user?.user.organization.name,
      }),
    })
    const data = await res.json()
    console.log(data)
    return data

  }
  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setLocition(value);    
    console.log('Selected option:', value);
  };
  const newattack = async () =>{
      const event = { 
      nameattack: user?.user.organization.name,    
      namerocket,
      location: locition,
    }
    const name = user.user.username
    const rocket = user?.user.organization.resources.name
    socket.emit("newevent",event)
    socket.on("timerocket",(e)=>{
      seteventt(e)
      console.log(e,"gggggggggggggggg")
      setTimee(time) 
      
      dispatch(getuser({name,rocket}))
    })
    const res =  await getEventfromDB()
    console.log(res)
    seteventt(res)

  }
  console.log("gggggggggggggggg")
  return (
    <div className='main-atackt'>
        organizition : {user?.user.organization.name}
        <div className='disply'>          
          <div className='disply-informtion-missiles'>
            <select onChange={handleSelectChange}>
              <option value={loction_attackt.Center}>{loction_attackt.Center}</option>
              <option value={loction_attackt.North}>{loction_attackt.North}</option>
              <option value={loction_attackt.South}>{loction_attackt.South}</option>
              <option value={loction_attackt.WestBank}>{loction_attackt.WestBank}</option>              
            </select>
            {user?.user.organization?.resources.map(resource =>{
              return (
                <div className='myMissiles'>
                   <button onClick={()=>setnameRocket(resource.name)}>{resource.name}</button>*
                   {resource.amount}
                </div>
              )
            })}
            <button>🚪</button>
          </div>
          <button className='btn-attack' onClick={newattack}>attack</button>
          <div className='table-ataackt'>
            {qevent ? <div className=''>{qevent.namerocket}</div>:
            <div className=''>{qevent}</div>}
            <div className=''>{time}</div> </div>    </div>
    </div>
  )
}
