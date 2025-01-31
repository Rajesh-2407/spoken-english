import React from 'react'
import './nav.css'

export const Nav = () => {
  return (
    <>
    <div className="navbar">
        <div className="navlogo">
            <h2>ThisAI</h2>
            <h4>spoken English</h4>
        </div>
        <div className="navlist">
            <ul className='nav-ul'>
                <li className='nav-li'>Home</li>
                <li className='nav-li'>Components</li>
                <li className='nav-li'>Chat</li>
                <li className='nav-li'>Contact</li>
            </ul>
        </div>
        <div className="navbutton">
            <button className='nav-btn'><a href="">Sign In</a></button>
        </div>
    </div>
    </>
  )
}
