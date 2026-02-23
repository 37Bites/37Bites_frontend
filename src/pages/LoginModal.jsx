import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import api from "../api/axios";

const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("user");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("login");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        mobile: mobile.trim(),
        role,
      });

      // ✅ Direct login
      if (res.data.user) {
        dispatch(
          loginSuccess({
            user: res.data.user,
            accessToken: null, // cookie based auth
          })
        );
        closeModal();
        return;
      }

      // ✅ OTP required
      if (res.data.requiresOtp) {
        setStep("otp");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/verify-otp", {
        mobile,
        otp,
      });

      dispatch(
        loginSuccess({
          user: res.data.user,
          accessToken: null,
        })
      );

      closeModal();
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
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
                disabled={loading}
                className="w-full bg-orange-500 text-white py-2 rounded-xl"
              >
                {loading ? "Please wait..." : "Continue"}
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
                disabled={loading}
                className="w-full bg-orange-500 text-white py-2 rounded-xl"
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