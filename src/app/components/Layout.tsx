import { Outlet, useLocation, Link } from "react-router";
import { Home, Map, Plus, MessageCircle, User } from "lucide-react";

export function Layout() {
  const location = useLocation();
  
  const tabs = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/map", icon: Map, label: "Map" },
    { path: "/create", icon: Plus, label: "Create", isFab: true },
    { path: "/messages", icon: MessageCircle, label: "Messages" },
    { path: "/profile", icon: User, label: "Profile" },
  ];
  
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };
  
  return (
    <div className="flex flex-col h-screen bg-white max-w-md mx-auto relative">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      
      {/* Bottom Tab Bar */}
      <nav className="bg-white border-t border-[#DDE6EE] shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around h-16 relative">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(tab.path);
            
            if (tab.isFab) {
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className="absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-14 bg-gradient-to-br from-[#27AE60] to-[#1EBC70] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                >
                  <Icon className="w-6 h-6 text-white" />
                </Link>
              );
            }
            
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  active ? "text-[#2F80ED]" : "text-[#5B6470]"
                }`}
              >
                <Icon className={`w-6 h-6 ${active ? "mb-0.5" : ""}`} />
                {active && <div className="w-1 h-1 bg-[#2F80ED] rounded-full mt-1"></div>}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
