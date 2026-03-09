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
const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
const [step, setStep] = useState("login");
const [loading, setLoading] = useState(false);

// OTP Change
const handleOtpChange = (value, index) => {
if (!/^[0-9]?$/.test(value)) return;


const newOtp = [...otpArray];
newOtp[index] = value;
setOtpArray(newOtp);
setOtp(newOtp.join(""));

// move forward
if (value && index < 5) {
  document.getElementById(`otp-${index + 1}`).focus();
}


};

// Backspace support
const handleKeyDown = (e, index) => {
if (e.key === "Backspace" && !otpArray[index] && index > 0) {
document.getElementById(`otp-${index - 1}`).focus();
}
};

// Send OTP
const handleLogin = async (e) => {
e.preventDefault();
setLoading(true);


try {
  const res = await api.post("/auth/login", {
    mobile: mobile.trim(),
    role: "user",
  });

  if (res.data.requiresOtp) {
    setStep("otp");
    return;
  }

  if (res.data.user) {
    dispatch(loginSuccess({ user: res.data.user }));
    closeModal();
    navigate("/");
  }

} catch (err) {
  alert(err.response?.data?.message || "Login failed");
} finally {
  setLoading(false);
}


};

// Verify OTP
const handleVerifyOtp = async (e) => {
e.preventDefault();
setLoading(true);


try {
  const res = await api.post("/auth/verify-otp", {
    mobile,
    otp,
    role: "user",
  });

  const { user } = res.data;

  dispatch(loginSuccess({ user }));

  closeModal();

  if (user.role === "admin") {
    navigate("/admin-dashboard");
  } else if (user.role === "restaurant") {
    navigate("/partner-dashboard");
  } else {
    navigate("/");
  }

} catch (err) {
  alert(err.response?.data?.message || "Invalid OTP");
} finally {
  setLoading(false);
}


};

return ( <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-start pt-28 z-50"> <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl relative">


    <button
      onClick={closeModal}
      className="absolute top-4 right-4 text-gray-500 text-lg"
    >
      ✕
    </button>

    {step === "login" ? (
      <>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login with Mobile
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl"
          >
            {loading ? "Sending OTP..." : "Continue"}
          </button>
        </form>
      </>
    ) : (
      <>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Verify OTP
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Enter the 6-digit OTP sent to +91{mobile}
        </p>

        <form onSubmit={handleVerifyOtp}>

          {/* OTP BOXES */}
          <div className="flex justify-center gap-3 mb-6">
            {otpArray.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) =>
                  handleOtpChange(e.target.value, index)
                }
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>

        </form>
      </>
    )}
  </div>
</div>


);
};

export default LoginModal;
