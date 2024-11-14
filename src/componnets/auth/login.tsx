

import React, {useState } from 'react'
// import { fetchlogin } from '../../redux/slices/userSlice';
// import { useAppDispatch, useAppSelector } from '../../redux/store';
import { NavLink } from 'react-router-dom';
import '../../css/login.css'
import { socket } from '../../main';

export default function Login() {
//   const dispatch = useAppDispatch();
//   const { user } = useAppSelector((state) => state.user);
const kkk = 11111
  socket.emit("newvote",kkk)
  socket.on("newvote2",(www)=>{
    console.log(www)
    console.log("new vote2")
  })
  // const navigate = useNavigate()
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (

    <div className='login'>
        
      <input
      className='inp'
        type="text"
        placeholder="User Name"
        value={name}
        onChange={(e) => setUsername(e.target.value)}
      />      
      <input
      className='inp'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <button onClick={() => dispatch(fetchlogin({ name, password }))}>
        Login
      </button> */}
      <button className='btn'>
        Login
      </button>
      <div className='register'>
      <NavLink to={"/register"}>register</NavLink>
      </div>
    </div>
  );
}