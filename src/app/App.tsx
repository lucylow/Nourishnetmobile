import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#27AE60] to-[#2F80ED] max-w-md mx-auto">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl animate-pulse">
          <Leaf className="w-16 h-16 text-[#27AE60]" />
        </div>
        <h1 className="text-4xl text-white mb-2">NourishNet</h1>
        <p className="text-white/90 text-lg">Agents for Zero Hunger</p>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}