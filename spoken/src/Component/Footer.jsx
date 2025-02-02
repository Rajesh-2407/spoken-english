import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <div className='footer' id='contact'>

        <ul className='foot-ul'>
            <li className='heading'>Address</li>
            <li>3rd,Floor BMC Market,ThisAi</li>
            <li>Books , Thisaiyanvilai,</li>
            <li>Tirunelveli DT-627657</li>
        </ul>
        <ul className='foot-ul'>
            <li className='heading'>Our Services</li>
            <li>Speaching</li>
            <li>Writting</li>
            <li>Grammer</li>
        </ul>
        <ul className='foot-ul'>
            <li className='heading'>Contact us</li>
            <li><a href='sms:+916380683086'><FaPhone />&nbsp; &nbsp; +91 6380683086</a></li>
            <li><a href='mailto:sales@thisaitech.com?subject=hello!'><CiMail />&nbsp; &nbsp; sales@thisaitech.com</a></li>
        </ul>
        <ul className='foot-ul'>
            <li className='heading'>Follow</li>
            <div className='icon'>
                
               <span className='wa'><a href="https://wa.me/916380683086"><FaSquareWhatsapp /></a></span>

               <span className='insta'><a href='https://www.instagram.com/thisaibook/'><FaSquareInstagram /></a>
               </span> 


                <span className="yt"><a href="https://www.youtube.com/@ThisAI_Groups"><FaYoutube /></a></span>
                <span className="tw"><FaTwitter /></span>

            </div>
        </ul>

    </div>
    </>
  )
}
