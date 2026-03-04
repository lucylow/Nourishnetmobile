import { Link } from "react-router";
import { Search, MessageCircle } from "lucide-react";

export function Messages() {
  const conversations = [
    {
      id: "agent-logistics",
      type: "agent",
      name: "Logistics Agent",
      avatar: "🤖",
      lastMessage: "🍱 Free food alert! Code: NOURISH5 — pickup 7–8pm",
      time: "2 min ago",
      unread: 2,
      badge: "Agent",
    },
    {
      id: "sunrise-bakery",
      type: "business",
      name: "Sunrise Bakery",
      avatar: "🥖",
      lastMessage: "Pickup ready at back entrance",
      time: "15 min ago",
      unread: 0,
      badge: null,
    },
    {
      id: "food-bank",
      type: "charity",
      name: "Downtown Food Bank",
      avatar: "🏛️",
      lastMessage: "Thanks! We'll send someone at 3 PM",
      time: "1 hr ago",
      unread: 1,
      badge: "Charity",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-[#F6F8FA]">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-[#DDE6EE]">
        <h1 className="text-2xl text-[#0F1724] mb-4">Messages</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5B6470]" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-[#F6F8FA] border-none rounded-xl pl-11 pr-4 py-3 text-[#0F1724] placeholder:text-[#5B6470] focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
        {conversations.map((conv) => (
          <Link
            key={conv.id}
            to={`/messages/${conv.id}`}
            className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-[#F6F8FA] rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {conv.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#0F1724]">{conv.name}</h3>
                    {conv.badge && (
                      <span className="text-xs bg-[#2F80ED]/10 text-[#2F80ED] px-2 py-0.5 rounded-full">
                        {conv.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#5B6470] ml-2">{conv.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#5B6470] truncate">{conv.lastMessage}</p>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 bg-[#E23E3E] text-white text-xs rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                      {conv.unread}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {conversations.length === 0 && (
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 text-[#DDE6EE] mx-auto mb-4" />
            <h3 className="text-lg text-[#0F1724] mb-2">No messages yet</h3>
            <p className="text-[#5B6470]">
              Messages from agents and community members will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
