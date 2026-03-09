import { useState, useRef } from "react";
import api from "../../api/axios";

export default function RestautrantLogin() {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(mobile)) {
      alert("Enter valid mobile number");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", {
        mobile,
        role: "restaurant",
      });

      if (res.data.success) {
        // agar user already verified hai to direct login ho sakta hai
        if (!res.data.requiresOtp) {
          alert("Login Successful 🎉");
          window.location.href = "/ResaurantDashboard";
          return;
        }

        alert("OTP Sent Successfully");
        setStep(2);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (element, index) => {
    if (!/^[0-9]?$/.test(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      alert("Enter complete OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/verify-otp", {
        mobile,
        otp: finalOtp,
      });

      if (res.data.success) {
        alert("Login Successful 🎉");
        window.location.href = "/ResaurantDashboard";
      }
    } catch (error) {
      alert(error.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div className="text-white flex flex-col justify-center">
          <h4 className="uppercase tracking-widest text-orange-400 mb-3">
            Partner with 37 Bite
          </h4>

          <h1 className="text-5xl font-bold leading-tight">
            Reach customers far <br /> away from you
          </h1>

          <p className="mt-4 text-gray-300">
            Join 37 Bite and grow your restaurant business.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full ml-auto">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold mb-2">Get Started</h2>

              <p className="text-gray-500 text-sm mb-6">
                Enter mobile number to continue
              </p>

              <input
                type="tel"
                maxLength={10}
                placeholder="Enter Mobile number"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, ""))
                }
                className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                onClick={handleSendOtp}
                disabled={loading}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-70"
              >
                {loading ? "Sending..." : "Continue"}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold mb-2">Verify OTP</h2>

              <p className="text-gray-500 text-sm mb-6">
                Enter OTP sent to {mobile}
              </p>

              <div className="flex justify-between gap-2 mb-6">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={data}
                    ref={(el) => (inputsRef.current[index] = el)}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-12 border rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                ))}
              </div>

              <button
                onClick={handleVerify}
                disabled={loading}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-70"
              >
                {loading ? "Verifying..." : "Verify & Submit"}
              </button>

              <button
                onClick={() => setStep(1)}
                className="w-full mt-3 text-sm text-orange-500"
              >
                Change number
              </button>
            </>
          )}

          <p className="text-xs text-gray-400 mt-4">
            By continuing, I agree to 37 Bite’s Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}