import React from 'react'
import myimmage from './Ellipse 114.png' 
import myimmage2 from'./Group 1585.png'
import './home.css'

function Home(){
  return(
    <div>
        <div className='container'>
          <div className='header'><h3>Account Settings</h3></div>
          <div className='content'>
            <div className='img'><img src={myimmage}/><img src={myimmage2}/></div>
            <h6>Marry Doe</h6>
            <p className='email'>Marry@Gmail.Com</p>
            </div>
            <p className='longpara'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>




        
    </div>
  )
}

export default Home





