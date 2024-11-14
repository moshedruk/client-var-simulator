import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useAppSelector } from '../../redux/store';
import '../../css/registerattac.css'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchgetOrganizition } from '../../redux/slice/getOrg';
import { fetchuser } from '../../redux/slice/user';

export default function Registerattacking() {
  
  const dispatch = useAppDispatch();
  const { position } = useAppSelector((state) => state.positionplayer);
  const { org } = useAppSelector((state) => state.organizition); 

  const navigate = useNavigate();
  
  
  
    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organization_name, setorganization_name] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
     dispatch(fetchgetOrganizition({position}))
  }, []);
  console.log(position)
  console.log(org)

const getMyOrganization = async () =>{
  dispatch(fetchuser({username,password,organization_name}))
  navigate("/attacking");
}
const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
  const value = event.target.value;
  setorganization_name(value);
  
  console.log('Selected option:', value);
};
  return (
    <div className='register-main'>      
      <input
      className='inp-reg'
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      className='inp-reg'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select className="styled-select" onChange={handleSelectChange}> 
        {org.map((org, index) => (
          <option key={index} value={org.name}>{org.name}</option>
        ))}
      </select>    
      
      
      <button className='btn-reg' onClick={getMyOrganization}>
        register
      </button>
    </div>
  );
}