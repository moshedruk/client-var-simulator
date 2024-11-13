import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useAppSelector } from '../../redux/store';
import '../../css/registerattac.css'
import { organizition } from '../../enum/enumorganizition';

export default function Registerattacking() {
//   const { user } = useAppSelector((state) => state.user);
//   console.log(user)
  const navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);
//   useEffect(() => {
//     if (user?._id) {
//       navigate("/votes");
//     }
//   }, []);

//   const handleRegister = async () => {
//     try {
//         const res = await fetch("http://localhost:1871/api/users/register", {
//             method: "post",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({name, password, isAdmin}),
//           });
//           const data = await res.json();
//           return data
//     } catch (err) {
//         console.log({err})
//     }
//   }
const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const value = event.target.value;
  setSelectedOption(value);
  console.log('Selected option:', value);
};
  return (
    <div className='register-main'>      
      <input
      className='inp-reg'
        type="text"
        placeholder="User Name"
        value={name}
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
      <option value="" disabled selected hidden> organizition ▼</option>
      <option value={organizition.Hamas}>Hamas</option> 
      <option value={organizition.Hezbollah}>Hezbollah</option> 
      <option value={organizition.Houthis}>Houthis</option> 
      <option value={organizition.IRGC}>IRGC</option>      
      </select>
      
      <button className='btn-reg'>
        register
      </button>
    </div>
  );
}