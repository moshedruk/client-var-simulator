import React, { useState } from 'react'
import { useAppSelector } from '../../redux/store';
import '../../css/realtimedataatackt.css'
import { loction_attackt } from '../../enum/enumloctin';

export default function Realtimedataatackt() {
  const [name, setname] = useState('');
  const [namerocket, setnameRocket] = useState('');
  const [locition, setLocition] = useState('');
  const { myOrg } = useAppSelector((state) => state.organizition);
  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setLocition(value);    
    console.log('Selected option:', value);
  };
  const newattack = () =>{
    
  }
  console.log(myOrg)
  return (
    <div className='main-atackt'>
        organizition : {myOrg?.name}
        <div className='disply'>
          
          <div className='disply-informtion-missiles'>
            <select onChange={handleSelectChange}>
              <option value={loction_attackt.Center}>{loction_attackt.Center}</option>
              <option value={loction_attackt.North}>{loction_attackt.North}</option>
              <option value={loction_attackt.South}>{loction_attackt.South}</option>
              <option value={loction_attackt.WestBank}>{loction_attackt.WestBank}</option>              
            </select>
            {myOrg?.resources.map(resource =>{
              return (
                <div className='myMissiles'>
                   <button onClick={()=>setnameRocket(resource.name)}>{resource.name}</button>*
                   {resource.amount}
                </div>
              )
            })}
            <button>🚪</button>
          </div>
          <button className='btn-attack' >attack</button>
          <div className='table-ataackt'>
            dfdf
          </div>
        </div>
    </div>
  )
}
