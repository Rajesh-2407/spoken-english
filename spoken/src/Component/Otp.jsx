import { BsFillShieldLockFill } from "react-icons/bs"; 
import { BsFillTelephoneFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./otp.css";

const Otp = () => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    function onCaptchVerifiy() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(getAuth(), "recaptcha-container", {
                size: "invisible",
                callback: (response) => {
                    onSignup();
                },
                "expired-callback": () => {
                    console.log("Recaptcha expired. Try again.");
                },
            });
        }
    }

    function onSignup() {
        onCaptchVerifiy();

        const appVerifier = window.recaptchaVerifier;
        const phoneNumber = "+" + ph;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setShowOTP(true);
                toast.success("OTP sent successfully!");
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to send OTP");
            });
    }

    function onOTPVerifiy() {
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setUser(res.user);
                toast.success("Login successful!");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Invalid OTP. Please try again.");
            });
    }

    function handleClose() {
        setShowOTP(false); // Close OTP view
        setOtp(""); // Clear OTP input
        setPh(""); // Clear phone number input
    }

    return (
        <>
            <div className="otp-page" id="sign-in">
                <div id="recaptcha-container"></div>
                {user ? (
                    <div>
                        <h1>Login successful</h1>
                    </div>
                ) : (
                    <div className="otp-verification">
                        <h1 className="heading">Welcome to <br /> ThisAI Spoken English</h1>

                        {/* Close Button */}
                        <button onClick={handleClose} className="close-btn">
                            close
                        </button>

                        {showOTP ? (
                            <>
                                <span className="icon-mob"><BsFillShieldLockFill /></span>
                                <label htmlFor="otp">Enter OTP</label>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    otpLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                />
                                <button onClick={onOTPVerifiy} className="otp-submit">
                                    <span>Verify OTP</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="icon-mob"><BsFillTelephoneFill /></span>
                                <label htmlFor="">Verify Your Phone Number</label>
                                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                                <button onClick={onSignup} className="otp-submit">
                                    <span>Send Code Via SMS</span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Otp;
