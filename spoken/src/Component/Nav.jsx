import React from 'react'
import './nav.css'

import { IoMdMenu } from "react-icons/io";

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
                        <li className='nav-li'><a href="">Home</a></li>
                        <li className='nav-li'><a href="">Components</a></li>
                        <li className='nav-li'><a href="">Chat</a></li>
                        <li className='nav-li'><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="navbutton">
                    <button className='nav-btn'><a href="">Sign In</a></button>
                </div>
                <div id='menu-bar' ><IoMdMenu/></div>
               
            </div>
         
      
            
            
              
        </>
    )
}
