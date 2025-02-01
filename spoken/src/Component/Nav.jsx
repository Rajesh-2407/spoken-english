import React, { useState } from 'react'
import './nav.css'
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

export const Nav = () => {
    const [isCartActive, setIsCartActive] = useState(false);



    return (
        <>
            <div className="navbar">
                <div className={`navlogo ${isCartActive ? 'nav-active' : ''}`}>
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
                        <li className='button'><a href="">Sign In</a></li>
                    </ul>
                    <button className='btn-menuclose' onClick={() => setIsCartActive(false)}><IoMdClose /></button>
                </div>

            </div>

        </>
    )
}
