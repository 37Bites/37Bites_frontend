import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { mobile } = location.state || {};
  const [otp, setOtp] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/verify-otp", {
        mobile,
        otp,
      });

      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: res.data.user,
          accessToken: res.data.token,
        })
      );

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleVerify}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Verify OTP
        </h2>

        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full mb-4 p-2 border rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;