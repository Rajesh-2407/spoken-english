import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
    <div className='footer'>

        <ul>
            <li className='heading'>Address</li>
            <li>3rd,Floor BMC Market,ThisAi</li>
            <li>Books , Thisaiyanvilai,</li>
            <li>Tirunelveli DT-627657</li>
        </ul>
        <ul >
            <li className='heading'>Our Services</li>
            <li>Speaching</li>
            <li>Writting</li>
            <li>Grammer</li>
        </ul>
        <ul>
            <li className='heading'>Contact us</li>
            <li><a href=''><FaPhone />+91 6380683086</a></li>
            <li>sales@thisaitech.com</li>
        </ul>
        <ul>
            <li className='heading'>Follow</li>
            <li><FaSquareWhatsapp /></li>
            <li> <FaSquareInstagram /></li>
            <li><FaYoutube /></li>
            <li><FaTwitter /></li>
        </ul>

    </div>
    </>
  )
}
