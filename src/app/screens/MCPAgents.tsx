import { useNavigate } from "react-router";
import { ArrowLeft, Camera, Users, Truck, Zap, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function MCPAgents() {
  const navigate = useNavigate();
  const [latency, setLatency] = useState(47);
  const [messageRate, setMessageRate] = useState(2.8);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (47 - 18 + 1)) + 18);
      setMessageRate(Math.random() * (3.5 - 2.0) + 2.0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const agents = [
    {
      name: "SCOUT AGENT",
      model: "YOLOv9 + Llama 3.1",
      status: "Sunrise Bakery EC1Y: 3 sandwiches",
      confidence: 92.4,
      color: "#2F80ED",
      icon: Camera,
      emoji: "🔍",
      details: [
        { label: "Detection Rate", value: "3.2/min" },
        { label: "Accuracy", value: "92.4%" },
        { label: "Items Found", value: "847 today" },
      ],
      thumbnail: true,
    },
    {
      name: "COORDINATOR AGENT",
      model: "Mistral 7B",
      status: "87 charities ranked | St Mungo's #1",
      confidence: 94.0,
      color: "#F2C94C",
      icon: Users,
      emoji: "🤝",
      details: [
        { label: "Match Score", value: "0.94" },
        { label: "Charities", value: "87 active" },
        { label: "Matches", value: "1,247/week" },
      ],
    },
    {
      name: "LOGISTICS AGENT",
      model: "Gemma 2B",
      status: "WhatsApp/Telegram dispatched",
      confidence: 100.0,
      color: "#27AE60",
      icon: Truck,
      emoji: "🚚",
      details: [
        { label: "Dispatched", value: "3/3 confirmed" },
        { label: "Avg Distance", value: "217m" },
        { label: "ETA", value: "4 min" },
      ],
      channels: [
        { name: "WhatsApp", status: "connected" },
        { name: "Telegram", status: "connected" },
        { name: "SMS", status: "standby" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1a1f2e] to-[#0F1419]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00D4FF]/20 to-[#2F80ED]/20 backdrop-blur-xl px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-white">MCP Agent Coordination</h1>
            <p className="text-sm text-white/70">Multi-agent system</p>
          </div>
        </div>
      </div>

      {/* MCP Status Header */}
      <div className="px-6 py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/10 backdrop-blur-xl rounded-2xl p-6 border border-[#00D4FF]/30 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#27AE60] rounded-full animate-pulse shadow-lg shadow-[#27AE60]/50"></div>
              <span className="text-white">3 Agents Active</span>
            </div>
            <Zap className="w-5 h-5 text-[#F6AD55]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-white/70 mb-1">Latency</div>
              <motion.div
                key={latency}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-2xl text-white"
              >
                {latency}ms
              </motion.div>
            </div>
            <div>
              <div className="text-sm text-white/70 mb-1">Message Rate</div>
              <motion.div
                key={messageRate.toFixed(1)}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-2xl text-white"
              >
                {messageRate.toFixed(1)} msg/sec
              </motion.div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
            <CheckCircle className="w-4 h-4 text-[#27AE60]" />
            <span>All systems operational</span>
          </div>
        </motion.div>
      </div>

      {/* Agent Cards */}
      <div className="px-6 pb-6 space-y-4">
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          return (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${agent.color}20` }}
                >
                  <span className="text-2xl">{agent.emoji}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white">{agent.name}</h3>
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: agent.color }}
                    ></div>
                  </div>
                  <p className="text-sm text-white/70 mb-2">{agent.model}</p>
                  <p className="text-sm text-white/90">{agent.status}</p>
                </div>
              </div>

              {/* Confidence */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-white/70 mb-2">
                  <span>Confidence</span>
                  <span>{agent.confidence}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${agent.confidence}%` }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: agent.color }}
                  >
                    <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
              </div>

              {/* Camera Thumbnail for Scout */}
              {agent.thumbnail && (
                <div className="mb-4 bg-black/30 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-[#00D4FF]" />
                    <span className="text-xs text-white/70">Live Camera Feed</span>
                  </div>
                  <div className="relative h-24 bg-gradient-to-br from-white/5 to-white/10 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs text-white/50">Bounding boxes: 3 detected</div>
                    </div>
                    {/* Simulated bounding boxes */}
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-2 left-2 w-12 h-8 border-2 rounded"
                      style={{ borderColor: agent.color }}
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.6, 0.3, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="absolute top-3 right-3 w-10 h-10 border-2 rounded"
                      style={{ borderColor: agent.color }}
                    ></motion.div>
                  </div>
                </div>
              )}

              {/* Details */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                {agent.details.map((detail, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-lg p-2 text-center border border-white/5"
                  >
                    <div className="text-sm text-white mb-1">{detail.value}</div>
                    <div className="text-xs text-white/50">{detail.label}</div>
                  </div>
                ))}
              </div>

              {/* Channels for Logistics */}
              {agent.channels && (
                <div className="flex gap-2">
                  {agent.channels.map((channel, i) => (
                    <div
                      key={i}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs ${
                        channel.status === "connected"
                          ? "bg-[#27AE60]/20 border border-[#27AE60]/30 text-white"
                          : "bg-white/5 border border-white/10 text-white/50"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          channel.status === "connected" ? "bg-[#27AE60]" : "bg-white/30"
                        }`}
                      ></div>
                      <span>{channel.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer Action */}
      <div className="px-6 pb-6">
        <button
          onClick={() => navigate("/supervisor")}
          className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white py-4 rounded-xl hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all"
        >
          <span className="block mb-1">Human-in-Loop Tasks</span>
          <span className="text-xs text-white/80">2 pending verifications</span>
        </button>
      </div>
    </div>
  );
}
