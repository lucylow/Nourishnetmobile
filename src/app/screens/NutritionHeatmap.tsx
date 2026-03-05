import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Navigation, TrendingDown, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function NutritionHeatmap() {
  const navigate = useNavigate();
  const [selectedCharity, setSelectedCharity] = useState(0);

  const charities = [
    {
      id: 1,
      name: "St Mungo's",
      postcode: "EC1Y 8LE",
      distance: 217,
      proteinGap: -43,
      capacity: 847,
      waiting: 12,
      priority: "critical",
      match: "3 sandwiches PERFECT",
    },
    {
      id: 2,
      name: "Trussell Trust",
      postcode: "M1 1AA",
      distance: 262000,
      proteinGap: -32,
      capacity: 1200,
      waiting: 28,
      priority: "high",
      match: "Driver dispatch available",
      subsidy: 28,
      eta: "3hr",
    },
    {
      id: 3,
      name: "Food Foundation",
      postcode: "SE1 7TP",
      distance: 1800,
      proteinGap: -18,
      capacity: 450,
      waiting: 8,
      priority: "medium",
      match: "5 meals matched",
    },
    {
      id: 4,
      name: "Crisis UK",
      postcode: "EC2A 4NE",
      distance: 890,
      proteinGap: -41,
      capacity: 620,
      waiting: 15,
      priority: "critical",
      match: "Urgent protein need",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return { bg: "#E23E3E", border: "#E23E3E", text: "🔴 Critical" };
      case "high":
        return { bg: "#F6AD55", border: "#F6AD55", text: "🟠 High" };
      case "medium":
        return { bg: "#F2C94C", border: "#F2C94C", text: "🟡 Medium" };
      default:
        return { bg: "#27AE60", border: "#27AE60", text: "🟢 Low" };
    }
  };

  const formatDistance = (meters: number) => {
    if (meters < 1000) return `${meters}m`;
    return `${(meters / 1000).toFixed(1)}km`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1a1f2e] to-[#0F1419] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E23E3E]/20 to-[#F6AD55]/20 backdrop-blur-xl px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-white">Nutrition Gap Heatmap</h1>
            <p className="text-sm text-white/70">87 UK charities</p>
          </div>
          <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
            <Navigation className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
          <MapPin className="w-5 h-5 text-white/70" />
          <input
            type="text"
            placeholder="EC1Y 8LE"
            className="flex-1 bg-transparent text-white placeholder-white/50 outline-none"
          />
          <div className="w-2 h-2 bg-[#E23E3E] rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Map Area - Simulated */}
      <div className="relative flex-1 bg-gradient-to-br from-[#1a1f2e] to-[#0F1419] overflow-hidden">
        {/* Legend */}
        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/10 z-10">
          <div className="text-xs text-white/90 mb-2">Protein Gap</div>
          <div className="space-y-2 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#E23E3E] rounded-full"></div>
              <span>🔴 Critical: -40% to -50%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#F6AD55] rounded-full"></div>
              <span>🟠 High: -28% to -39%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#F2C94C] rounded-full"></div>
              <span>🟡 Medium: -15% to -27%</span>
            </div>
          </div>
        </div>

        {/* Simulated Map with Markers */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#27AE60]/10 via-transparent to-[#2F80ED]/10"></div>
          {/* Grid lines for map effect */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px)'
          }}></div>
        </div>

        {/* Charity Markers */}
        {charities.map((charity, index) => {
          const color = getPriorityColor(charity.priority);
          return (
            <motion.div
              key={charity.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute cursor-pointer"
              style={{
                top: `${20 + index * 15}%`,
                left: `${30 + (index % 2) * 30}%`,
              }}
              onClick={() => setSelectedCharity(index)}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: charity.priority === "critical" 
                    ? ["0 0 0 0 rgba(226,62,62,0.4)", "0 0 0 20px rgba(226,62,62,0)", "0 0 0 0 rgba(226,62,62,0)"]
                    : "none"
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{
                  backgroundColor: color.bg,
                  borderColor: "white",
                  boxShadow: `0 0 20px ${color.bg}80`
                }}
              >
                <MapPin className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Sheet - Charity Cards */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-b from-[#0F1419] to-black/95 backdrop-blur-xl rounded-t-3xl border-t border-white/10 shadow-2xl max-h-[60vh] overflow-y-auto"
      >
        {/* Drag Handle */}
        <div className="flex justify-center py-3">
          <div className="w-12 h-1 bg-white/30 rounded-full"></div>
        </div>

        <div className="px-6 pb-6 space-y-3">
          {charities.map((charity, index) => {
            const color = getPriorityColor(charity.priority);
            return (
              <motion.div
                key={charity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-xl rounded-2xl p-5 border transition-all ${
                  selectedCharity === index ? "border-white/30" : "border-white/10"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{index + 1}️⃣</span>
                      <h3 className="text-white">{charity.name}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{formatDistance(charity.distance)} away</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingDown className="w-4 h-4 text-[#E23E3E]" />
                        <span>{charity.proteinGap}% protein</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-full text-xs border"
                    style={{
                      backgroundColor: `${color.bg}20`,
                      borderColor: `${color.border}40`,
                      color: "white",
                    }}
                  >
                    {color.text}
                  </div>
                </div>

                {/* Match Info */}
                <div className="bg-[#27AE60]/20 backdrop-blur-sm rounded-xl p-3 mb-4 border border-[#27AE60]/30">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#27AE60]" />
                    <span className="text-sm text-white">{charity.match}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-white/70" />
                      <span className="text-xs text-white/70">Capacity</span>
                    </div>
                    <div className="text-lg text-white">{charity.capacity}/wk</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-white/70" />
                      <span className="text-xs text-white/70">Waiting</span>
                    </div>
                    <div className="text-lg text-white">{charity.waiting} residents</div>
                  </div>
                </div>

                {/* Driver Info for long distance */}
                {charity.subsidy && (
                  <div className="bg-[#F6AD55]/20 backdrop-blur-sm rounded-lg p-3 mb-4 border border-[#F6AD55]/30 text-sm text-white">
                    <div className="flex items-center justify-between">
                      <span>🚚 Driver Dispatch: £{charity.subsidy} subsidy</span>
                      <span className="text-white/70">{charity.eta} ETA</span>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-[#27AE60] to-[#1EBC70] text-white py-3 rounded-xl hover:shadow-lg hover:shadow-[#27AE60]/20 transition-all">
                  <span className="flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span>Claim & Match</span>
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
