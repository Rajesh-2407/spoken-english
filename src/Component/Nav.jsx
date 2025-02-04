<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import './nav.css'
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

export const Nav = () => {
>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
    const [isCartActive, setIsCartActive] = useState(false);



<<<<<<< HEAD
>>>>>>> 98743672a4fb1f1f73feb53408577e35381bbd56
    return (
        <>
            <div className="navbar">
                <div className="navlogo">
=======
    return (
        <>
            <div className="navbar">
                <div className={`navlogo ${isCartActive ? 'nav-active' : ''}`}>
>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
                    <h2>ThisAI</h2>
                    <h4>spoken English</h4>
                </div>
                <div className="navlist">
                    <ul className='nav-ul'>
                        <li className='nav-li'><a href="">Home</a></li>
<<<<<<< HEAD
                        <li className='nav-li'><a href="">Components</a></li>
                        <li className='nav-li'><a href="">Chat</a></li>
=======
                        <li className='nav-li'><a href="">Upload File</a></li>
                       <li className='nav-li'><a href="">Chat</a></li>
>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
                        <li className='nav-li'><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="navbutton">
                    <button className='nav-btn'><a href="">Sign In</a></button>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div id='menu-bar' ><IoMdMenu/></div>
               
            </div>
         
      
            
            
              
=======
             
=======

>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
                <button
                    className="cart-icon"
                    onClick={() => setIsCartActive(true)}
                >
                    <IoMdMenu />
                </button>
<<<<<<< HEAD
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
=======
            </div>
            {/* Cart Component */}
            <div className={`cart ${isCartActive ? 'menu-active' : ''}`}>
                <div className="menu">
                    <h2 className='menu-heading'>ThisAI Spoken English</h2>

                    <ul className='menu-item'>
                        <li><a href=""><FaHome />&nbsp; Home</a></li>
                        <li><a href=""><FaFileUpload />&nbsp; File Upload</a></li>
                        <li><a href=""><IoChatbubbles />&nbsp; Chat</a></li>
                        <li><a href=""><MdContacts />&nbsp; Contact</a></li>
                        <li className='button'><a href="">Sign In</a></li>
                    </ul>
                    <button className='btn-menuclose' onClick={() => setIsCartActive(false)}><IoMdClose /></button>
                </div>

            </div>

>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
        </>
    )
}
