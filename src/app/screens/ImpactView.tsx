import { useNavigate } from "react-router";
import { ArrowLeft, TrendingUp, Users, Leaf, Share2, Download } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function ImpactView() {
  const navigate = useNavigate();

  const chartData = [
    { day: "Mon", meals: 5 },
    { day: "Tue", meals: 8 },
    { day: "Wed", meals: 6 },
    { day: "Thu", meals: 10 },
    { day: "Fri", meals: 7 },
    { day: "Sat", meals: 9 },
    { day: "Sun", meals: 2 },
  ];

  const metrics = [
    {
      value: "47",
      label: "Meals Rescued",
      icon: TrendingUp,
      color: "from-[#27AE60] to-[#1EBC70]",
    },
    {
      value: "35",
      label: "People Reached",
      icon: Users,
      color: "from-[#2F80ED] to-[#60A5FA]",
    },
    {
      value: "28kg",
      label: "CO₂ Avoided",
      icon: Leaf,
      color: "from-[#F2C94C] to-[#FCD34D]",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#27AE60]/10 via-[#F6F8FA] to-[#2F80ED]/10">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-[#DDE6EE] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-[#F6F8FA] rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#0F1724]" />
          </button>
          <h1 className="text-xl text-[#0F1724]">Your Impact</h1>
        </div>
        <button className="p-2 hover:bg-[#F6F8FA] rounded-lg transition-colors">
          <Share2 className="w-6 h-6 text-[#0F1724]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Main Metrics */}
        <div className="space-y-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${metric.color} rounded-2xl p-6 text-white shadow-lg`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-4xl mb-2">{metric.value}</p>
                    <p className="text-white/90">{metric.label}</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-[#0F1724] mb-4">Meals Rescued (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DDE6EE" />
              <XAxis dataKey="day" stroke="#5B6470" />
              <YAxis stroke="#5B6470" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #DDE6EE",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="meals"
                stroke="#27AE60"
                strokeWidth={3}
                dot={{ fill: "#27AE60", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Environmental Impact */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-[#27AE60]" />
            <h3 className="text-[#0F1724]">Environmental Impact</h3>
          </div>
          <div className="space-y-3 text-[#5B6470]">
            <div className="flex items-center justify-between py-2 border-b border-[#DDE6EE]">
              <span className="text-sm">🚗 Cars off road (equivalent)</span>
              <span className="text-[#0F1724]">0.2 cars</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#DDE6EE]">
              <span className="text-sm">💧 Water saved</span>
              <span className="text-[#0F1724]">850 liters</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm">🌳 Trees planted (equivalent)</span>
              <span className="text-[#0F1724]">3 trees</span>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-2xl p-6 text-white shadow-lg">
          <h3 className="mb-4">Milestones</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                ✓
              </div>
              <div>
                <p className="text-sm">First Rescue</p>
                <p className="text-xs text-white/70">Completed Jan 15, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                🎯
              </div>
              <div>
                <p className="text-sm">Next: 50 Meals Milestone</p>
                <p className="text-xs text-white/70">3 meals to go!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Export Button */}
        <button className="w-full bg-white text-[#0F1724] py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#F6F8FA] transition-colors shadow-md">
          <Download className="w-5 h-5" />
          <span>Download Full Report</span>
        </button>
      </div>
    </div>
  );
}
