import React from 'react'
import './Header.css'
import head from '../assets/head.png'
const Header = () => {
  return (
   <>

       <div className="head-contant">

<div className="head-tittle">
<h1 className="head-tittle-h1">ThisAI <br />Spoken English</h1>
<p className="head-tittle-p">Knowledge is
Power...
Learn from yesterday
Live for today
Hope for Tommorrow</p>
  <button className="head-btn"> Click me!</button>
</div>

<div className="img-box">
  <img src={head} alt="" />
  {/* <h1>Spoken English</h1> */}
</div>

</div>
    
   
   </>
  )
}

export default Header