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
  const [step, setStep] = useState("login");
  const [loading, setLoading] = useState(false);

  // ✅ Send OTP
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        mobile: mobile.trim(),
      });

      if (res.data.requiresOtp) {
        setStep("otp");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Verify OTP + Auto Role Handling
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/verify-otp", {
        mobile,
        otp,
      });

      const { user, accessToken } = res.data;

      // ✅ Save in Redux
      dispatch(
        loginSuccess({
          user,
          accessToken,
        })
      );

      // ✅ Save token in localStorage
      localStorage.setItem("token", accessToken);

      closeModal();

      // ✅ Role Based Redirect
      if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else if (user.role === "partner") {
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

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-start pt-28 z-50">
      <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl relative">

        {/* Close Button */}
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
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl transition"
              >
                {loading ? "Sending OTP..." : "Continue"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Verify OTP
            </h2>

            <form onSubmit={handleVerifyOtp}>
              <input
                type="text"
                placeholder="Enter OTP"
                maxLength="6"
                className="w-full mb-4 p-3 border rounded-lg text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl transition"
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