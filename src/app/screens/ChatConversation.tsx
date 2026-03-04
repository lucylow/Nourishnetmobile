import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Send, Paperclip } from "lucide-react";

export function ChatConversation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const chatData = {
    "agent-logistics": {
      name: "Logistics Agent",
      avatar: "🤖",
      status: "Active",
    },
    "sunrise-bakery": {
      name: "Sunrise Bakery",
      avatar: "🥖",
      status: "Online",
    },
  };

  const chat = chatData[id as keyof typeof chatData] || chatData["agent-logistics"];

  const messages = [
    {
      from: "them",
      text: "🍱 Free food alert! Sunrise Bakery has 3 sandwiches. Code: NOURISH5.",
      time: "5:42 PM",
    },
    {
      from: "me",
      text: "Great! What time can I pick up?",
      time: "5:43 PM",
    },
    {
      from: "them",
      text: "Available until 8 PM today. Show this code at the counter: NOURISH5",
      time: "5:43 PM",
    },
    {
      from: "me",
      text: "On my way!",
      time: "5:45 PM",
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle send logic
      setMessage("");
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-[#DDE6EE] flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-[#F6F8FA] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-[#0F1724]" />
        </button>
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 bg-[#F6F8FA] rounded-full flex items-center justify-center text-2xl">
            {chat.avatar}
          </div>
          <div>
            <h2 className="text-[#0F1724]">{chat.name}</h2>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#1EBC70] rounded-full"></div>
              <span className="text-xs text-[#5B6470]">{chat.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                msg.from === "me"
                  ? "bg-[#2F80ED] text-white rounded-br-sm"
                  : "bg-[#F6F8FA] text-[#0F1724] rounded-bl-sm"
              }`}
            >
              <p>{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.from === "me" ? "text-white/70" : "text-[#5B6470]"
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-[#DDE6EE]">
        <div className="flex items-center gap-2">
          <button className="p-2 text-[#5B6470] hover:bg-[#F6F8FA] rounded-lg transition-colors">
            <Paperclip className="w-6 h-6" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-[#F6F8FA] border-none rounded-xl px-4 py-3 text-[#0F1724] placeholder:text-[#5B6470] focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
          />
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-12 h-12 bg-[#27AE60] text-white rounded-xl flex items-center justify-center hover:bg-[#229954] transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
