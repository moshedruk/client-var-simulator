import React from 'react'
import '../../css/newregister.css'
import { useNavigate } from 'react-router-dom';
export default function Newregister() {
    const navigate = useNavigate();
    const handelattacking = () => {
        navigate("/register/attacking");
    }
    const handeldefensive = () => {
        navigate("/register/defensive");
    }
  return (
    <div className="background">   
    <div className='newUser'>
        <button className='btn-player' onClick={handelattacking}>attacking player</button>       
        <button className='btn-player' onClick={handeldefensive}>defensive player</button>
    </div>
    </div>
  )
}
