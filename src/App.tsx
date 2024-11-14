import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/app.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './componnets/auth/login'
import Register from './componnets/auth/registerattacking'
import Newregister from './componnets/page/newregister'
import Registerattacking from './componnets/auth/registerattacking'
import Registerdefensive from './componnets/auth/registerdefensive'
import Realtimedataatackt from './componnets/page/realtimedataatackt'
import Realtimedatadefensive from './componnets/page/realtimedatadefensive'
// import Register from './componnets/auth/register'
function App() {
  const [count, setCount] = useState(0)

  return (    
      <div className='app'>
       
      <Routes>
        <Route path='login' element ={<Login/>} />
        <Route path='register' element ={<Newregister/>} />
        <Route path='register/defensive' element ={<Registerdefensive/>} />
        <Route path='register/attacking' element ={<Registerattacking/>} />
        <Route path='/attacking' element ={<Realtimedataatackt/>} />
        <Route path='defensive' element ={<Realtimedatadefensive/>} />        
        <Route path="/" element={<Navigate to={"/login"} />} />
        </Routes>   
      </div>
      
    
  )
}

export default App
