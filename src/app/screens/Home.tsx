import { Link } from "react-router";
import { Eye, Users, MessageSquare, Leaf, TrendingUp, Clock } from "lucide-react";

export function Home() {
  const agentCards = [
    {
      name: "Scout Agent",
      description: "Last scan: 2 min ago",
      metric: "3 items found",
      color: "bg-blue-500",
      icon: Eye,
      link: "/scout",
    },
    {
      name: "Coordinator Agent",
      description: "Active matches: 4",
      metric: "Avg urgency: 0.78",
      color: "bg-yellow-500",
      icon: Users,
      link: "/coordinator",
    },
    {
      name: "Logistics Agent",
      description: "Active chats: 3",
      metric: "Msgs today: 47",
      color: "bg-green-600",
      icon: MessageSquare,
      link: "/logistics",
    },
  ];

  const recentActivity = [
    {
      agent: "Scout",
      message: "Found 3 sandwiches at Sunrise Bakery",
      time: "2 min ago",
      color: "bg-blue-500",
    },
    {
      agent: "Coordinator",
      message: "Matched surplus #47 with Downtown Food Bank",
      time: "5 min ago",
      color: "bg-yellow-500",
    },
    {
      agent: "Logistics",
      message: "Sent pickup code to recipient Sarah M.",
      time: "8 min ago",
      color: "bg-green-600",
    },
    {
      agent: "Scout",
      message: "Scanning Green Leaf Cafe feed",
      time: "12 min ago",
      color: "bg-blue-500",
    },
    {
      agent: "Coordinator",
      message: "Priority match needed - high urgency",
      time: "15 min ago",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="min-h-full pb-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2A9D8F] to-[#2B6E4F] text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-[#2A9D8F]" />
            </div>
            <h1 className="text-2xl">NourishNet</h1>
          </div>
          <Link
            to="/impact"
            className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1"
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Impact</span>
          </Link>
        </div>
        <p className="text-white/90 mt-2">Good afternoon, Sarah</p>
      </div>

      {/* Agent Cards */}
      <div className="px-6 -mt-6 space-y-4">
        {agentCards.map((agent) => {
          const Icon = agent.icon;
          return (
            <Link
              key={agent.name}
              to={agent.link}
              className="block bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`${agent.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-800">{agent.name}</h3>
                    <p className="text-sm text-gray-500">{agent.description}</p>
                    <p className="text-sm text-gray-700 mt-1">{agent.metric}</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#2A9D8F] to-[#2B6E4F] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                  View
                </button>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="px-6 mt-8">
        <h2 className="text-xl text-gray-800 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`${activity.color} w-2 h-2 rounded-full mt-2`}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-800">{activity.agent}:</span> {activity.message}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 ml-2">
                    <Clock className="w-3 h-3" />
                    <span className="whitespace-nowrap">{activity.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
