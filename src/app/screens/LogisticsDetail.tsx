import { Link } from "react-router";
import { ArrowLeft, MessageSquare, Phone } from "lucide-react";

export function LogisticsDetail() {
  const activeChats = [
    {
      id: "1",
      name: "Sarah M.",
      lastMessage: "On my way!",
      time: "2 min ago",
      unread: 0,
      status: "active",
      avatar: "SM",
    },
    {
      id: "2",
      name: "Downtown Food Bank",
      lastMessage: "Thanks! We'll send someone at 3 PM",
      time: "15 min ago",
      unread: 1,
      status: "active",
      avatar: "DF",
    },
    {
      id: "3",
      name: "John D.",
      lastMessage: "Got it, code received!",
      time: "1 hr ago",
      unread: 0,
      status: "completed",
      avatar: "JD",
    },
  ];

  const todayStats = [
    { label: "Messages Sent", value: "47" },
    { label: "Codes Issued", value: "12" },
    { label: "Active Chats", value: "3" },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-green-50 to-teal-50 pb-4">
      {/* Header */}
      <div className="bg-green-600 text-white px-6 py-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/" className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            <h1 className="text-xl">Logistics Agent</h1>
          </div>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {todayStats.map((stat, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
              <p className="text-2xl">{stat.value}</p>
              <p className="text-xs text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Conversations */}
      <div className="px-6 mt-6">
        <h2 className="text-lg text-gray-800 mb-4">Active Conversations</h2>
        <div className="space-y-3">
          {activeChats.map((chat) => (
            <Link
              key={chat.id}
              to={`/agent-chat/${chat.id}`}
              className="block bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white">
                    {chat.avatar}
                  </div>
                  {chat.status === "active" && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-800">{chat.name}</h3>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <div className="bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ml-2">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="text-gray-800 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              <span>Send Pickup Code</span>
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>Broadcast Update</span>
            </button>
          </div>
        </div>
      </div>

      {/* Agent Info */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <h3 className="text-gray-800">About Logistics Agent</h3>
          </div>
          <p className="text-sm text-gray-600">
            Handles real-time messaging between donors, recipients, and food banks. Sends pickup
            codes, coordinates timing, and ensures smooth food transfers.
          </p>
        </div>
      </div>
    </div>
  );
}
