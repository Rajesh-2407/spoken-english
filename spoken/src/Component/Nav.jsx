import React, { useState } from 'react'
import './nav.css'
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { Link } from 'react-router-dom';  


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
                    <li className='nav-li'> <Link to='/'>Home</Link></li>
                    <li className='nav-li'><a href="#fileupload">Upload File</a></li>
                    <li className='nav-li'><a href="">Chat</a></li>
                    <li className='nav-li'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navbutton">
                <button className='nav-btn'><Link to="/Otp">Sign In</Link> </button>
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
                        <li><a href=""><FaHome />&nbsp; Home</a></li>
                        <li><a href="#fileupload"><FaFileUpload />&nbsp; File Upload</a></li>
                        <li><a href=""><IoChatbubbles />&nbsp; Chat</a></li>
                        <li><a href="#contact"><MdContacts />&nbsp; Contact</a></li>
                        <li className='button'><Link to='/otp'>Sign In</Link></li>
                    </ul>
                    <button className='btn-menuclose' onClick={() => setIsCartActive(false)}><IoMdClose /></button>
                </div>

            </div>

        </>
    )
}
