import { Link } from "react-router";
import { Search, MessageSquare } from "lucide-react";

export function Chat() {
  const conversations = [
    {
      id: "logistics",
      name: "Logistics Agent",
      avatar: "LA",
      lastMessage: "Pickup code sent to Sarah M.",
      time: "2 min ago",
      unread: 2,
      color: "from-green-400 to-teal-500",
    },
    {
      id: "1",
      name: "Sarah M.",
      avatar: "SM",
      lastMessage: "On my way!",
      time: "5 min ago",
      unread: 0,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "2",
      name: "Downtown Food Bank",
      avatar: "DF",
      lastMessage: "Thanks! We'll send someone at 3 PM",
      time: "15 min ago",
      unread: 1,
      color: "from-purple-400 to-purple-600",
    },
    {
      id: "3",
      name: "John D.",
      avatar: "JD",
      lastMessage: "Got it, code received!",
      time: "1 hr ago",
      unread: 0,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-teal-50 to-green-50 pb-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2A9D8F] to-[#2B6E4F] text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl mb-4">Messages</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-white/20 backdrop-blur-sm text-white placeholder-white/60 rounded-full pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="px-6 mt-6 space-y-3">
        {conversations.map((conversation) => (
          <Link
            key={conversation.id}
            to={`/agent-chat/${conversation.id}`}
            className="block bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${conversation.color} rounded-full flex items-center justify-center text-white shadow-md`}
                >
                  <span className="text-sm">{conversation.avatar}</span>
                </div>
                {conversation.unread > 0 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center shadow-md">
                    {conversation.unread}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-gray-800 truncate">{conversation.name}</h3>
                  <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">
                    {conversation.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State (if needed) */}
      {conversations.length === 0 && (
        <div className="px-6 mt-20 text-center">
          <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg text-gray-600 mb-2">No conversations yet</h3>
          <p className="text-sm text-gray-400">
            Messages from agents and recipients will appear here
          </p>
        </div>
      )}
    </div>
  );
}
