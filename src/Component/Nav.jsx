<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 98743672a4fb1f1f73feb53408577e35381bbd56
import './nav.css'

import { IoMdMenu } from "react-icons/io";

export const Nav = () => {
<<<<<<< HEAD
  
  
=======
    const [isCartActive, setIsCartActive] = useState(false);



>>>>>>> 98743672a4fb1f1f73feb53408577e35381bbd56
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
<<<<<<< HEAD
                <div id='menu-bar' ><IoMdMenu/></div>
               
            </div>
         
      
            
            
              
=======
             
                <button
                    className="cart-icon"
                    onClick={() => setIsCartActive(true)}
                >
                    <IoMdMenu />
                </button>
                </div>
                {/* Cart Component */}
                <div className={`cart ${isCartActive ? 'menu-active' : ''}`}>
                <div className="menu">
                        <h2 className='menu-heading'>ThisAI Spoken English</h2>

                        <ul className='menu-item'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Components</a></li>
                            <li><a href="">Chat</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <button className='btn-menuclose' onClick={() => setIsCartActive(false)}>Close</button>
                    </div>
                    
                </div>
            





        





>>>>>>> 98743672a4fb1f1f73feb53408577e35381bbd56
        </>
    )
}
