import React from 'react'
import img1 from '../assets/head3.png'
import './Content.css'
const Content = () => {
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
  <img src={img1} alt="" />
  {/* <h1>Spoken English</h1> */}
</div>

</div>
    
    
    
    </>
  )
}

export default Content