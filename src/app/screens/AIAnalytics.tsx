import { useNavigate } from "react-router";
import { ArrowLeft, TrendingUp, CloudRain, Zap, Activity, Brain } from "lucide-react";
import { motion } from "motion/react";

export function AIAnalytics() {
  const navigate = useNavigate();

  const nutritionGauges = [
    { label: "Protein", value: 92, color: "#27AE60", icon: "🥩" },
    { label: "Vit C", value: 78, color: "#00D4FF", icon: "🍊" },
    { label: "Carbs", value: 85, color: "#F6AD55", icon: "🍞" },
  ];

  const liveMetrics = {
    surplusCount: 847,
    rainProbability: 43,
    perfectMatches: 94,
    postcode: "EC1Y 8LE",
  };

  const agentActivity = [
    { agent: "Scout", status: "Scanning 3 bakeries", color: "#2F80ED", icon: "🔍" },
    { agent: "Coordinator", status: "Matched 12 charities", color: "#F2C94C", icon: "🤝" },
    { agent: "Logistics", status: "Dispatching drivers", color: "#27AE60", icon: "🚚" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1a1f2e] to-[#0F1419]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#27AE60]/20 to-[#00D4FF]/20 backdrop-blur-xl px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-white">AI Analytics</h1>
            <p className="text-sm text-white/70">Real-time insights</p>
          </div>
          <div className="flex items-center gap-2 bg-[#27AE60]/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 bg-[#27AE60] rounded-full animate-pulse"></div>
            <span className="text-xs text-white">LIVE</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Hero Section - Live Surplus Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#27AE60]/20 to-[#00D4FF]/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#F6AD55]" />
            <span className="text-sm text-white/70">AI SCANNING LIVE - {liveMetrics.postcode}</span>
          </div>
          
          <div className="flex items-baseline gap-2 mb-3">
            <motion.span
              key={liveMetrics.surplusCount}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-5xl text-white"
            >
              {liveMetrics.surplusCount}
            </motion.span>
            <span className="text-xl text-white/70">meals available</span>
          </div>

          <div className="flex items-center gap-2 bg-[#00D4FF]/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-[#00D4FF]/30">
            <CloudRain className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-white">Rain: +{liveMetrics.rainProbability}% priority boost</span>
          </div>
        </motion.div>

        {/* Nutrition Gauges */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-[#F6AD55]" />
            <h2 className="text-lg text-white">Nutrition Intelligence</h2>
          </div>
          
          {nutritionGauges.map((gauge, index) => (
            <motion.div
              key={gauge.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{gauge.icon}</span>
                  <span className="text-white">{gauge.label}</span>
                </div>
                <span className="text-2xl text-white">{gauge.value}%</span>
              </div>
              
              {/* Arc Progress */}
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${gauge.value}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${gauge.color}, ${gauge.color}cc)` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          <div className="bg-gradient-to-br from-[#27AE60]/20 to-[#1EBC70]/20 backdrop-blur-sm rounded-xl p-4 border border-[#27AE60]/30 mt-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#27AE60]" />
              <span className="text-white">{liveMetrics.perfectMatches}% nutrition-perfect matches today</span>
            </div>
          </div>
        </div>

        {/* Agent Activity */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-[#00D4FF]" />
            <h2 className="text-lg text-white">Agent Activity</h2>
          </div>

          {agentActivity.map((activity, index) => (
            <motion.div
              key={activity.agent}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                  <span className="text-xl">{activity.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white">{activity.agent} Agent</span>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activity.color }}></div>
                  </div>
                  <p className="text-sm text-white/70">{activity.status}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button
            onClick={() => navigate("/mcp-agents")}
            className="bg-gradient-to-r from-[#00D4FF]/20 to-[#00D4FF]/10 backdrop-blur-sm text-white py-4 rounded-xl border border-[#00D4FF]/30 hover:border-[#00D4FF]/50 transition-all"
          >
            <span className="block text-sm mb-1">View Agents</span>
            <span className="text-xs text-white/70">Live coordination</span>
          </button>
          <button
            onClick={() => navigate("/prophet-forecast")}
            className="bg-gradient-to-r from-[#F6AD55]/20 to-[#F6AD55]/10 backdrop-blur-sm text-white py-4 rounded-xl border border-[#F6AD55]/30 hover:border-[#F6AD55]/50 transition-all"
          >
            <span className="block text-sm mb-1">Forecasting</span>
            <span className="text-xs text-white/70">7-day Prophet</span>
          </button>
        </div>
      </div>
    </div>
  );
}
