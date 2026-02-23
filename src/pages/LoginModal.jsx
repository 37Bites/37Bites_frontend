import React, { useState } from "react";
import api from "../api/axios";

const LoginModal = ({ closeModal }) => {
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("user");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("login");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        mobile: mobile.trim(),
        role,
      });

      if (res.data.token) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            user: res.data.user,
            accessToken: res.data.token,
          })
        );
        window.location.reload();
      }

      if (res.data.requiresOtp) {
        setStep("otp");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleVerifyOtp = async (e) => {
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

      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-start pt-28 z-50">

      <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl relative">

        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 text-lg"
        >
          ✕
        </button>

        {step === "login" ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Login
            </h2>

            <form onSubmit={handleLogin}>
              <select
                className="w-full mb-4 p-2 border rounded"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="restaurant">Restaurant</option>
              </select>

              <input
                type="text"
                placeholder="Enter Mobile"
                className="w-full mb-4 p-2 border rounded"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-xl"
              >
                Continue
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
                className="w-full mb-4 p-2 border rounded"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-xl"
              >
                Verify
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;