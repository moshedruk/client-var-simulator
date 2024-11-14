import React from 'react'
import '../../css/newregister.css'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { decprotection, incattackt } from '../../redux/slice/player';
export default function Newregister() {
  const dispatch = useAppDispatch();
  const { position } = useAppSelector((state) => state.positionplayer);
    const navigate = useNavigate();


    const handelattacking = () => {
      dispatch(incattackt())
        navigate("/register/attacking");
    }
    const handeldefensive = () => {
      dispatch(decprotection())
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
