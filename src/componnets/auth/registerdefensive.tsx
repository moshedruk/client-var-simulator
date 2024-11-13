import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loction } from '../../enum/enumIDF';
import '../../css/registerdefensiv.css'

export default function Registerdefensive() {
    const navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    console.log('Selected option:', value);
  };
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
      <option value="IDF"> IDF </option>            
      </select>

          <select className="styled-select-d" onChange={handleSelectChange}>     
          <option value="" disabled selected hidden> loction ▼</option>
          <option value={loction.IDFCenter}>IDFCenter</option> 
          <option value={loction.IDFNorth}>IDFNorth</option> 
          <option value={loction.IDFSouth}>IDFSouth</option> 
          <option value={loction.IDFWestBank}>IDFWestBank</option>      
          </select>
          <button className='btn-reg-d'>
        register
      </button>
    </div>
  )
}
