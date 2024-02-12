import React from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate=useNavigate();

    return (
        <div>
            <div className='container'>
                <h2>Create your PopX account</h2>
                <form>
                    <div className='input-group'>
                        <input type='text' required />
                        <label>First name</label>
                    </div>
                    <div className='input-group'>
                        <input type='number' required class='phn' />
                        <label>Phone number</label>
                    </div>
                    <div className='input-group'>
                        <input type='email' required />
                        <label>Email address</label>
                    </div>
                    <div className='input-group'>
                        <input type='Password' required />
                        <label>Password</label>
                    </div>
                    <div className='input-group'>
                        <input type='email' required />
                        <label>Company name</label>
                    </div>
                    <section>
                        <lable className='radio'>Are you an Agency</lable><br />
                        <label className='radio-btn1'>
                            <input type="radio" name="Agency" value="Yes" /> Yes
                        </label>

                        <label className='radio-btn2'>
                            <input type="radio" name="Agency" value="No" /> No
                        </label>

                    </section>
                    <button type='submit'onClick={()=>navigate("/home")} >Create Account</button>

                </form>
            </div>
        </div>
    )
}

export default Signup