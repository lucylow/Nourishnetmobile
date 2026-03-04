import { Link, useParams } from "react-router";
import { ArrowLeft, Phone, Send, Paperclip } from "lucide-react";
import { useState } from "react";

export function AgentChat() {
  const { agentId } = useParams();
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const chatName = agentId === "1" ? "Sarah M." : "Downtown Food Bank";

  const messages = [
    {
      from: "agent",
      text: "🍱 Free food alert! Sunrise Bakery has 3 sandwiches. Code: NOURISH5.",
      time: "10:23 AM",
    },
    {
      from: "user",
      text: "Great! What time can I pick up?",
      time: "10:24 AM",
    },
    {
      from: "agent",
      text: "Available until 6 PM today. Show this code at the counter: NOURISH5",
      time: "10:24 AM",
    },
    {
      from: "user",
      text: "On my way!",
      time: "10:25 AM",
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle message send
      setMessage("");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 to-teal-50">
      {/* Header */}
      <div className="bg-green-600 text-white px-6 py-4 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/logistics" className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm">LA</span>
            </div>
            <div>
              <h1 className="text-lg">Logistics Agent</h1>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-xs text-white/90">Active</span>
              </div>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
          <Phone className="w-6 h-6" />
        </button>
      </div>

      {/* Chat recipient info */}
      <div className="bg-white border-b border-gray-200 px-6 py-2">
        <p className="text-sm text-gray-600">
          Chatting with: <span className="text-gray-800">{chatName}</span>
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                msg.from === "user"
                  ? "bg-blue-500 text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm shadow-md"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.from === "user" ? "text-blue-100" : "text-gray-400"
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl px-4 py-3 shadow-md">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Paperclip className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
