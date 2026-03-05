import { useNavigate } from "react-router";
import { ArrowLeft, TrendingUp, CloudRain, Snowflake, GraduationCap, Truck, Zap } from "lucide-react";
import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

export function ProphetForecast() {
  const navigate = useNavigate();

  const forecastData = [
    { day: "Mon", historical: 623, forecast: null, lower: null, upper: null },
    { day: "Tue", historical: 687, forecast: null, lower: null, upper: null },
    { day: "Wed", historical: 702, forecast: null, lower: null, upper: null },
    { day: "Thu", historical: 654, forecast: null, lower: null, upper: null },
    { day: "Fri", historical: 723, forecast: null, lower: null, upper: null },
    { day: "Sat", historical: 698, forecast: null, lower: null, upper: null },
    { day: "Today", historical: 712, forecast: 712, lower: 698, upper: 726 },
    { day: "Tomorrow", historical: null, forecast: 847, lower: 784, upper: 912 },
    { day: "Day+2", historical: null, forecast: 892, lower: 823, upper: 965 },
    { day: "Day+3", historical: null, forecast: 871, lower: 801, upper: 943 },
    { day: "Day+4", historical: null, forecast: 823, lower: 756, upper: 891 },
    { day: "Day+5", historical: null, forecast: 798, lower: 732, upper: 867 },
    { day: "Day+6", historical: null, forecast: 834, lower: 768, upper: 902 },
  ];

  const weatherImpacts = [
    {
      icon: CloudRain,
      color: "#00D4FF",
      title: "Rain London",
      impact: "+43%",
      description: "Surplus probability",
      emoji: "🌧️",
    },
    {
      icon: Snowflake,
      color: "#60A5FA",
      title: "Cold Snap Manchester",
      impact: "+28%",
      description: "Bakery leftovers",
      emoji: "❄️",
    },
    {
      icon: GraduationCap,
      color: "#F2C94C",
      title: "School Half-Term",
      impact: "-15%",
      description: "Demand (more surplus)",
      emoji: "🎓",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1a1f2e] to-[#0F1419]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F6AD55]/20 to-[#00D4FF]/20 backdrop-blur-xl px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-white">Prophet Forecasting</h1>
            <p className="text-sm text-white/70">7-day AI prediction</p>
          </div>
          <div className="bg-[#27AE60]/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-white border border-[#27AE60]/30">
            95% confidence
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Forecast Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#27AE60]/20 to-[#1EBC70]/20 backdrop-blur-xl rounded-2xl p-6 border border-[#27AE60]/30 shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-[#27AE60]" />
            <span className="text-sm text-white/70">Tomorrow's Prediction</span>
          </div>
          
          <div className="flex items-baseline gap-2 mb-3">
            <motion.span
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl text-white"
            >
              847
            </motion.span>
            <span className="text-xl text-white/70">meals</span>
            <div className="ml-auto flex items-center gap-1 text-[#27AE60]">
              <TrendingUp className="w-4 h-4" />
              <span className="text-lg">+19%</span>
            </div>
          </div>

          <div className="text-sm text-white/70">
            Confidence interval: 784-912 meals (95%)
          </div>
        </motion.div>

        {/* Chart */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <h3 className="text-white mb-4">7-Day Forecast</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={forecastData}>
              <defs>
                <linearGradient id="confidenceBand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#27AE60" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#27AE60" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="day" 
                stroke="rgba(255,255,255,0.5)" 
                tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 11 }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.5)" 
                tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 11 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(15, 20, 25, 0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "white",
                }}
              />
              {/* Confidence band */}
              <Area
                type="monotone"
                dataKey="upper"
                stroke="none"
                fill="url(#confidenceBand)"
              />
              <Area
                type="monotone"
                dataKey="lower"
                stroke="none"
                fill="url(#confidenceBand)"
              />
              {/* Historical line */}
              <Line
                type="monotone"
                dataKey="historical"
                stroke="#60A5FA"
                strokeWidth={2}
                dot={{ fill: "#60A5FA", r: 3 }}
                connectNulls={false}
              />
              {/* Forecast line */}
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#27AE60"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: "#27AE60", r: 4 }}
                connectNulls={false}
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-[#60A5FA]"></div>
              <span className="text-white/70">Historical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-[#27AE60]" style={{ borderTop: "2px dashed #27AE60", height: 0 }}></div>
              <span className="text-white/70">Forecast</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#27AE60]/20 border border-[#27AE60]/50"></div>
              <span className="text-white/70">95% Confidence</span>
            </div>
          </div>
        </div>

        {/* Weather Impact Cards */}
        <div className="space-y-3">
          <h3 className="text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#F6AD55]" />
            Impact Factors
          </h3>
          
          {weatherImpacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${impact.color}20` }}
                  >
                    <span className="text-2xl">{impact.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-1">{impact.title}</h4>
                    <p className="text-sm text-white/70">{impact.description}</p>
                  </div>
                  <div
                    className="text-2xl px-4 py-2 rounded-lg border"
                    style={{
                      color: impact.color,
                      backgroundColor: `${impact.color}20`,
                      borderColor: `${impact.color}40`,
                    }}
                  >
                    {impact.impact}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <button className="w-full bg-gradient-to-r from-[#F6AD55] to-[#F6AD55]/80 text-white py-4 rounded-xl hover:shadow-lg hover:shadow-[#F6AD55]/20 transition-all">
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5" />
              <div className="text-left">
                <div className="">Pre-dispatch Drivers</div>
                <div className="text-xs text-white/80">Alert 87 charities</div>
              </div>
            </div>
          </button>

          <button className="w-full bg-gradient-to-r from-[#00D4FF]/20 to-[#00D4FF]/10 backdrop-blur-sm text-white py-4 rounded-xl border border-[#00D4FF]/30 hover:border-[#00D4FF]/50 transition-all">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              <div className="text-left">
                <div className="">Boost Scanning EC1Y/SE1</div>
                <div className="text-xs text-white/70">15min intervals</div>
              </div>
            </div>
          </button>
        </div>

        {/* Model Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="text-xs text-white/50 space-y-1">
            <div>Model: Facebook Prophet v1.1</div>
            <div>Training data: 12 months historical</div>
            <div>Updated: Every 6 hours</div>
            <div>Next update: 2hr 14min</div>
          </div>
        </div>
      </div>
    </div>
  );
}
