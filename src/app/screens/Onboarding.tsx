import { useState } from "react";
import { Link } from "react-router";
import { Leaf, Search, Users, MessageCircle, ChevronRight, Shield } from "lucide-react";

export function Onboarding() {
  const [step, setStep] = useState(0);

  const screens = [
    {
      icon: Leaf,
      title: "Welcome to NourishNet",
      subtitle: "Agents for Zero Hunger",
      description: "AI-powered food rescue connecting surplus food with people who need it",
      color: "from-[#27AE60] to-[#2F80ED]",
    },
    {
      icon: Search,
      title: "How It Works",
      subtitle: "Powered by intelligent agents",
      description: "Our AI agents detect surplus food, match with recipients, and notify you in real-time",
      steps: [
        { icon: Search, label: "Detect", color: "text-[#2F80ED]" },
        { icon: Users, label: "Match", color: "text-[#F2C94C]" },
        { icon: MessageCircle, label: "Notify", color: "text-[#27AE60]" },
      ],
      color: "from-[#2F80ED] to-[#F2C94C]",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      subtitle: "Your data is safe with us",
      description: "We'll verify your phone number to ensure secure, trusted connections within the community",
      color: "from-[#F2C94C] to-[#27AE60]",
    },
  ];

  const currentScreen = screens[step];
  const Icon = currentScreen.icon;

  return (
    <div className="h-screen flex flex-col bg-white max-w-md mx-auto">
      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-2 pt-12 pb-8">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === step ? "w-8 bg-[#2F80ED]" : "w-2 bg-[#DDE6EE]"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Icon */}
        <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${currentScreen.color} flex items-center justify-center mb-8 shadow-2xl`}>
          <Icon className="w-20 h-20 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-3xl text-center text-[#0F1724] mb-2">
          {currentScreen.title}
        </h1>
        <p className="text-lg text-center text-[#5B6470] mb-4">
          {currentScreen.subtitle}
        </p>

        {/* Description */}
        <p className="text-center text-[#5B6470] mb-8 max-w-sm">
          {currentScreen.description}
        </p>

        {/* Steps (for step 1) */}
        {currentScreen.steps && (
          <div className="flex items-center justify-center gap-4 mb-8">
            {currentScreen.steps.map((stepItem, index) => {
              const StepIcon = stepItem.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className={`flex flex-col items-center ${index > 0 ? 'ml-4' : ''}`}>
                    <div className="w-16 h-16 bg-[#F6F8FA] rounded-full flex items-center justify-center mb-2">
                      <StepIcon className={`w-8 h-8 ${stepItem.color}`} />
                    </div>
                    <span className="text-sm text-[#5B6470]">{stepItem.label}</span>
                  </div>
                  {index < currentScreen.steps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-[#DDE6EE] mt-[-24px]" />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="p-8 space-y-3">
        {step < screens.length - 1 ? (
          <>
            <button
              onClick={() => setStep(step + 1)}
              className="w-full bg-[#27AE60] text-white py-4 rounded-xl hover:bg-[#229954] transition-colors shadow-lg"
            >
              Continue
            </button>
            <Link
              to="/auth"
              className="block text-center text-[#5B6470] py-2 hover:text-[#0F1724] transition-colors"
            >
              Skip
            </Link>
          </>
        ) : (
          <Link
            to="/auth"
            className="block w-full bg-[#27AE60] text-white py-4 rounded-xl text-center hover:bg-[#229954] transition-colors shadow-lg"
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}
