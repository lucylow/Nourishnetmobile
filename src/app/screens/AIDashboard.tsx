import { useNavigate } from "react-router";
import { ArrowLeft, Brain, Zap, MapPin, TrendingUp, Hexagon, DollarSign, Users, Activity } from "lucide-react";
import { motion } from "motion/react";

export function AIDashboard() {
  const navigate = useNavigate();

  const aiFeatures = [
    {
      id: 1,
      title: "AI Analytics Dashboard",
      description: "Live nutrition gauges & surplus counter",
      icon: Brain,
      color: "from-[#27AE60] to-[#1EBC70]",
      metrics: { value: "94%", label: "Perfect matches" },
      route: "/ai-analytics",
    },
    {
      id: 2,
      title: "MCP Agent Coordination",
      description: "Real-time multi-agent system",
      icon: Zap,
      color: "from-[#00D4FF] to-[#2F80ED]",
      metrics: { value: "47ms", label: "Latency" },
      route: "/mcp-agents",
    },
    {
      id: 3,
      title: "Nutrition Gap Heatmap",
      description: "87 UK charity protein needs",
      icon: MapPin,
      color: "from-[#E23E3E] to-[#F6AD55]",
      metrics: { value: "87", label: "Charities" },
      route: "/nutrition-heatmap",
    },
    {
      id: 4,
      title: "Prophet Forecasting",
      description: "7-day AI prediction",
      icon: TrendingUp,
      color: "from-[#F6AD55] to-[#F2C94C]",
      metrics: { value: "847", label: "Tomorrow" },
      route: "/prophet-forecast",
    },
    {
      id: 5,
      title: "NFT Food Donations",
      description: "Blockchain verified surplus",
      icon: Hexagon,
      color: "from-[#8B5CF6] to-[#A78BFA]",
      metrics: { value: "3", label: "NFTs" },
      route: "/nft-gallery",
    },
    {
      id: 6,
      title: "RL Pricing Optimization",
      description: "QMIX MARL dynamic pricing",
      icon: DollarSign,
      color: "from-[#F6AD55] to-[#8B5CF6]",
      metrics: { value: "+23%", label: "Welfare boost" },
      route: "/rl-pricing",
    },
  ];

  const stats = [
    { icon: Activity, value: "3", label: "Agents Active", color: "text-[#00D4FF]" },
    { icon: Users, value: "87", label: "Charities", color: "text-[#27AE60]" },
    { icon: Brain, value: "94%", label: "AI Accuracy", color: "text-[#F6AD55]" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1a1f2e] to-[#0F1419]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#00D4FF]/20 backdrop-blur-xl px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-white">AI Command Center</h1>
            <p className="text-sm text-white/70">NourishNet v2.0</p>
          </div>
          <div className="bg-[#27AE60]/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-white border border-[#27AE60]/30">
            All systems operational
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-xl p-4 text-center border border-white/10"
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Features Grid */}
        <div className="space-y-4">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => navigate(feature.route)}
                className="w-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all text-left"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/70 mb-3">{feature.description}</p>
                      <div className="flex items-center gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5">
                          <span className="text-sm text-white">{feature.metrics.value}</span>
                          <span className="text-xs text-white/70 ml-1">{feature.metrics.label}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
              </motion.button>
            );
          })}
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
        >
          <h3 className="text-white mb-4">System Status</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-white/70">Scout Agent (YOLOv9)</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
                <span className="text-white">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-white/70">Coordinator (Mistral 7B)</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
                <span className="text-white">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-white/70">Logistics (Gemma 2B)</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
                <span className="text-white">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white/70">Prophet Forecast</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
                <span className="text-white">Updated 2h ago</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
