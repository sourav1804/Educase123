import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
  return (
    <div>
      <div className='container'>
        <h2>Signin to your PopX account</h2>
        <p className='login-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form className='login-form'>
        <div className='input-group'>
                        <input type='email' required />
                        <label>Email address</label>
                    </div>
                    <div className='input-group'>
                        <input type='password' required />
                        <label>password</label>
                    </div>
                    <button  className='loginbtn'type='submit'onClick={()=>navigate("/home")}>Login</button>
        </form>
      </div>




    </div>
  )
}

export default Login