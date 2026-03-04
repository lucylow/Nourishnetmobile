import { Link } from "react-router";
import {
  Settings,
  Bell,
  HelpCircle,
  Shield,
  LogOut,
  ChevronRight,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";

export function Profile() {
  const userStats = [
    { label: "Meals", value: "47", icon: TrendingUp, color: "text-[#27AE60]" },
    { label: "Days", value: "12", icon: Award, color: "text-[#F2C94C]" },
    { label: "Impact", value: "High", icon: Heart, color: "text-[#E23E3E]" },
  ];

  const menuItems = [
    {
      icon: TrendingUp,
      label: "View Full Impact",
      link: "/impact",
      color: "text-[#27AE60]",
      bg: "bg-[#27AE60]/10",
    },
    {
      icon: Bell,
      label: "Notifications",
      link: "#",
      color: "text-[#8B5CF6]",
      bg: "bg-[#8B5CF6]/10",
    },
    {
      icon: Settings,
      label: "Settings",
      link: "#",
      color: "text-[#5B6470]",
      bg: "bg-[#5B6470]/10",
    },
    {
      icon: Shield,
      label: "Privacy & Security",
      link: "#",
      color: "text-[#2F80ED]",
      bg: "bg-[#2F80ED]/10",
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      link: "#",
      color: "text-[#F2C94C]",
      bg: "bg-[#F2C94C]/10",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-[#F6F8FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2F80ED] to-[#27AE60] text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl mb-6">Profile</h1>
        
        {/* User Info */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2F80ED] text-2xl shadow-lg">
              SM
            </div>
            <div>
              <h2 className="text-xl mb-1">Sarah Martinez</h2>
              <p className="text-white/90 text-sm">sarah.m@email.com</p>
              <p className="text-white/80 text-xs mt-1">Member since Jan 2026</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {userStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                  <Icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
                  <p className="text-lg mb-0.5">{stat.value}</p>
                  <p className="text-xs text-white/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.link}
              className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className={`${item.bg} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="flex-1 text-[#0F1724]">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-[#5B6470]" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Logout */}
      <div className="px-4 pb-4">
        <button className="w-full bg-white text-[#E23E3E] rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-[#E23E3E]/10 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
        <p className="text-center text-xs text-[#5B6470] mt-3">Version 1.0.0</p>
      </div>
    </div>
  );
}
