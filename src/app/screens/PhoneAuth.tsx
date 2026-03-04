import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Smartphone } from "lucide-react";

export function PhoneAuth() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState("");

  const handleSendCode = () => {
    if (phone.length >= 10) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setStep("otp");
        startTimer();
      }, 1000);
    }
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }

      // Auto-submit when all filled
      if (newOtp.every((digit) => digit !== "") && index === 5) {
        handleVerifyOtp(newOtp.join(""));
      }
    }
  };

  const handleVerifyOtp = (code: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (code === "123456") {
        navigate("/");
      } else {
        setError("Invalid code. Please try again.");
        setOtp(["", "", "", "", "", ""]);
      }
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col bg-white max-w-md mx-auto">
      {/* Header */}
      <div className="px-6 py-6">
        <button
          onClick={() => (step === "otp" ? setStep("phone") : navigate(-1))}
          className="p-2 hover:bg-[#F6F8FA] rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-[#0F1724]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 pt-8">
        <div className="w-20 h-20 bg-gradient-to-br from-[#2F80ED] to-[#27AE60] rounded-full flex items-center justify-center mb-8 mx-auto">
          <Smartphone className="w-10 h-10 text-white" />
        </div>

        {step === "phone" ? (
          <>
            <h1 className="text-3xl text-center text-[#0F1724] mb-2">
              Enter your phone
            </h1>
            <p className="text-center text-[#5B6470] mb-8">
              We'll text a code to verify your number
            </p>

            {/* Country Code + Phone Input */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <select className="bg-[#F6F8FA] border-none rounded-xl px-4 py-4 text-[#0F1724] focus:outline-none focus:ring-2 focus:ring-[#2F80ED]">
                  <option>🇺🇸 +1</option>
                  <option>🇬🇧 +44</option>
                  <option>🇨🇦 +1</option>
                </select>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="flex-1 bg-[#F6F8FA] border-none rounded-xl px-4 py-4 text-[#0F1724] placeholder:text-[#5B6470] focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
                />
              </div>

              <button
                onClick={handleSendCode}
                disabled={phone.length < 10 || isLoading}
                className="w-full bg-[#27AE60] text-white py-4 rounded-xl hover:bg-[#229954] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Code"}
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl text-center text-[#0F1724] mb-2">
              Enter verification code
            </h1>
            <p className="text-center text-[#5B6470] mb-2">
              We sent a code to {phone}
            </p>
            <button
              onClick={() => setStep("phone")}
              className="text-[#2F80ED] text-sm mb-8 mx-auto block hover:underline"
            >
              Change number
            </button>

            {/* OTP Input */}
            <div className="flex gap-2 justify-center mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-12 h-14 bg-[#F6F8FA] border-2 border-transparent rounded-xl text-center text-2xl text-[#0F1724] focus:outline-none focus:border-[#2F80ED] transition-colors"
                  maxLength={1}
                />
              ))}
            </div>

            {error && (
              <p className="text-[#E23E3E] text-sm text-center mb-4">{error}</p>
            )}

            {/* Resend Timer */}
            <div className="text-center">
              {timer > 0 ? (
                <p className="text-[#5B6470] text-sm">
                  Resend code in {timer}s
                </p>
              ) : (
                <button
                  onClick={() => {
                    setTimer(60);
                    startTimer();
                  }}
                  className="text-[#2F80ED] text-sm hover:underline"
                >
                  Resend code
                </button>
              )}
            </div>

            {isLoading && (
              <div className="mt-8 text-center">
                <div className="inline-block w-8 h-8 border-4 border-[#DDE6EE] border-t-[#2F80ED] rounded-full animate-spin"></div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-8 py-6 text-center text-sm text-[#5B6470]">
        By continuing, you agree to our Terms & Privacy Policy
      </div>
    </div>
  );
}
