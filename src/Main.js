import React from 'react'
import { useNavigate } from 'react-router-dom';
import './main.css'
import Signup from './Signup';

function Main() {
  const navigate = useNavigate();


  return (
    <div>
      <div className='body'>
        <h1 className='main-h'>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button onClick={() => navigate("/signup")} className='register'>Create Account</button>
        <button className='login' onClick={() => navigate("/login")}>Already Registered?Login</button>
      </div>
    </div>
  )
}

export default Main