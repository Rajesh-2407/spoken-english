import { BsFillShieldLockFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";
import './otp.css'

const Otp = () => {
    const[otp,setotp]=useState("")
    const[ph,setPh]=useState("")
    const[showOTP,setShowOTP]=useState(false)
  return (
    
    <>
    <div className="otp-page">
        <div className="otp-verification">
            <h1 className="heading">Welcome to <br /> ThisAI Spoken English</h1>
            {showOTP ? (
  <>
    <span className="icon"><BsFillShieldLockFill /></span>
    <label htmlFor="ph">Enter OTP</label>
    <OtpInput 
      value={otp} 
      onChange={setOtp} 
      otpLength={6} 
      otpType="number" 
      disabled={false} 
      autoFocus
    />
    <button className="otp-submit">
      <span>Verify OTP</span>
    </button>
  </>
) : (
  <>
    <span className="icon"><BsFillTelephoneFill /></span>
    <label htmlFor="">Verify Your Phone Number</label>
    <PhoneInput 
      country={"in"} 
      value={ph} 
      onChange={setPh} 
    />
    <button className="otp-submit">
      <span>Send Code Via SMS</span>
    </button>
  </>
)}


          
        </div>
    </div>
    </>
  )
} 

export default Otp