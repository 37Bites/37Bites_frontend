import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";
import api from "../api/axios";

const LoginModal = ({ closeModal }) => {

const dispatch = useDispatch();
const navigate = useNavigate();

const [mobile, setMobile] = useState("");
const [otp, setOtp] = useState("");
const [otpArray, setOtpArray] = useState(["","","","","",""]);
const [step,setStep] = useState("login");
const [loading,setLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

// MOBILE VALIDATION
const handleMobileChange = (e)=>{
const value = e.target.value.replace(/\D/g,"");
if(value.length <= 10){
setMobile(value);
}
};


// OTP CHANGE
const handleOtpChange = (value,index)=>{

if(!/^[0-9]?$/.test(value)) return;

const newOtp = [...otpArray];
newOtp[index] = value;

setOtpArray(newOtp);
setOtp(newOtp.join(""));

if(value && index < 5){
document.getElementById(`otp-${index+1}`).focus();
}

};


// BACKSPACE SUPPORT
const handleKeyDown = (e,index)=>{
if(e.key === "Backspace" && !otpArray[index] && index>0){
document.getElementById(`otp-${index-1}`).focus();
}
};


// OTP PASTE SUPPORT
const handlePaste = (e)=>{

const pasteData = e.clipboardData.getData("text").trim();

if(/^\d{6}$/.test(pasteData)){

const otpDigits = pasteData.split("");

setOtpArray(otpDigits);
setOtp(pasteData);

}

};


// SEND OTP
const handleLogin = async(e)=>{

e.preventDefault();

if(mobile.length !== 10){
alert("Enter valid 10 digit mobile number");
return;
}

setLoading(true);

try {
  const res = await api.post("/auth/login", {
    mobile: mobile.trim(),
    role: "user"
  });

  if(res.data.requiresOtp){
    setStep("otp");
    setErrorMessage(""); // clear previous errors
    return;
  }

  if(res.data.user){
    dispatch(loginSuccess({ user: res.data.user }));
    closeModal();
    navigate("/");
  }

} catch(err) {
  // Show backend message inline
  setErrorMessage(err.response?.data?.message || "Login failed");
} finally {
  setLoading(false);
}

};



// VERIFY OTP
const handleVerifyOtp = async(e)=>{

e.preventDefault();

if(otp.length !== 6){
alert("Enter valid 6 digit OTP");
return;
}

setLoading(true);

try {
  const res = await api.post("/auth/verify-otp", {
    mobile,
    otp,
    role: "user"
  });

  const { user } = res.data;

  dispatch(loginSuccess({ user }));
  closeModal();
  navigate("/");

} catch(err) {
  setErrorMessage(err.response?.data?.message || "Invalid OTP");
} finally {
  setLoading(false);
}

};



return(

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-28 z-50">

<div className="bg-white w-96 p-8 rounded-2xl shadow-2xl relative">

<button
onClick={closeModal}
className="absolute top-4 right-4 text-gray-500 text-lg"
>
✕
</button>


{/* LOGO */}

<div className="flex flex-col items-center mb-6">

<img
 src="/logo.jpeg"
 alt="37Bites"
 className="h-20 object-contain mb-2"
/>

<h2 className="text-xl font-semibold text-gray-800">
User Login
</h2>

<p className="text-sm text-gray-500">
Secure access to your account
</p>

</div>



{step === "login" ? (

<form onSubmit={handleLogin}>

<label className="text-sm font-medium text-gray-600">
Mobile Number
</label>

<div className="flex items-center border rounded-lg mt-2 mb-4 overflow-hidden">

<span className="px-3 text-gray-500 border-r">
+91
</span>

<input
type="tel"
placeholder="Enter 10 digit mobile number"
value={mobile}
onChange={handleMobileChange}
className="w-full p-3 outline-none"
/>

</div>

{errorMessage && (
  <p className="text-sm text-red-500 text-center mb-4">
    {errorMessage}
  </p>
)}
<button
type="submit"
disabled={loading}
className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium"
>
{loading ? "Sending OTP..." : "Continue"}
</button>

<p className="text-xs text-center text-gray-400 mt-4">
Login to access your account
</p>

</form>

) : (

<form onSubmit={handleVerifyOtp}>

<p className="text-center text-gray-500 mb-4">
Enter the 6 digit OTP sent to +91 {mobile}
</p>


{/* OTP BOXES */}

<div
className="flex justify-center gap-3 mb-6"
onPaste={handlePaste}
>

{otpArray.map((digit,index)=>(
<input
key={index}
id={`otp-${index}`}
type="text"
maxLength="1"
value={digit}
onChange={(e)=>handleOtpChange(e.target.value,index)}
onKeyDown={(e)=>handleKeyDown(e,index)}
className="w-12 h-12 text-center text-xl border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
/>
))}

</div>


<button
type="submit"
disabled={loading}
className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium"
>
{loading ? "Verifying..." : "Verify OTP"}
</button>

</form>

)}

</div>
</div>

);

};

export default LoginModal;