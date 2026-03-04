import { Link } from "react-router";
import { ArrowLeft, Share2, TrendingUp, Users, Leaf } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function Impact() {
  const chartData = [
    { day: "Mon", meals: 142 },
    { day: "Tue", meals: 189 },
    { day: "Wed", meals: 165 },
    { day: "Thu", meals: 201 },
    { day: "Fri", meals: 178 },
    { day: "Sat", meals: 223 },
    { day: "Sun", meals: 149 },
  ];

  const stats = [
    {
      value: "1,247",
      label: "Meals Rescued",
      color: "from-green-400 to-green-600",
      icon: TrendingUp,
    },
    {
      value: "3.2t",
      label: "CO₂ Avoided",
      color: "from-blue-400 to-blue-600",
      icon: Leaf,
    },
    {
      value: "89",
      label: "People Reached",
      color: "from-orange-400 to-orange-600",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-teal-900 via-green-800 to-teal-900 pb-4">
      {/* Header */}
      <div className="text-white px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl">Your Impact</h1>
          </div>
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        {/* Glassmorphism Cards */}
        <div className="space-y-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-5xl mb-2">{stat.value}</p>
                    <p className="text-white/90 text-lg">{stat.label}</p>
                  </div>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chart Section */}
      <div className="px-6 mt-6">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
          <h2 className="text-white text-lg mb-4">Meals Rescued (Last 7 Days)</h2>
          <div className="bg-white/5 rounded-2xl p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="meals"
                  stroke="#4ade80"
                  strokeWidth={3}
                  dot={{ fill: "#4ade80", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="px-6 mt-6">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-green-300" />
            <h2 className="text-white text-lg">Environmental Impact</h2>
          </div>
          <div className="space-y-3 text-white/90">
            <p className="text-sm">
              🌍 Equivalent to taking <span className="text-white">2.4 cars</span> off the road for a year
            </p>
            <p className="text-sm">
              💧 Water saved: <span className="text-white">15,000 liters</span>
            </p>
            <p className="text-sm">
              🌳 Trees planted equivalent: <span className="text-white">47 trees</span>
            </p>
          </div>
        </div>
      </div>

      {/* See Full Report Button */}
      <div className="px-6 mt-6">
        <button className="w-full bg-white text-teal-800 py-4 rounded-2xl text-lg hover:bg-white/90 transition-colors shadow-lg">
          See Full Report
        </button>
      </div>
    </div>
  );
}
