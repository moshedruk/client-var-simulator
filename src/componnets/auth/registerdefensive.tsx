import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loction } from '../../enum/enumIDF';
import '../../css/registerdefensiv.css'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchgetOrganizition, fetchgetOrganizitionbyID } from '../../redux/slice/getOrg';

export default function Registerdefensive() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const { position } = useAppSelector((state) => state.positionplayer);
  const { org } = useAppSelector((state) => state.organizition);
  console.log(position)
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setname(value);
    console.log('Selected option:', value);
  };
  const getMyOrganization = async () =>{
    dispatch(fetchgetOrganizitionbyID({name}))
    navigate("/defensive");
  }
  useEffect(() => {
    dispatch(fetchgetOrganizition({position}))
 }, []);
    return (
        <div className='register-main-d'>      
          <input
          className='inp-reg-d'
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
          className='inp-reg-d'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
    <select className="styled-select-d" onChange={handleSelectChange}>     
      <option value="" disabled selected hidden> organizition ▼</option>
      {org.map((org, index) => (
          <option key={index} value={org.name}>{org.name}</option>
        ))}          
      </select>

          <select className="styled-select-d" onChange={handleSelectChange}>     
          <option value="" disabled selected hidden> loction ▼</option>
          <option value={loction.IDFCenter}>IDFCenter</option> 
          <option value={loction.IDFNorth}>IDFNorth</option> 
          <option value={loction.IDFSouth}>IDFSouth</option> 
          <option value={loction.IDFWestBank}>IDFWestBank</option>      
          </select>
          <button className='btn-reg-d' onClick={getMyOrganization}>
        register
      </button>
    </div>
  )
}
