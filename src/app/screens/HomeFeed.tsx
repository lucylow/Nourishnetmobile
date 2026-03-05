import { Link } from "react-router";
import { Menu, User, Clock, MapPin, Flame, Bookmark, Brain, Zap, TrendingUp, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomeFeed() {
  const surplusItems = [
    {
      id: 1,
      business: "Sunrise Bakery",
      items: "3 sandwiches",
      image: "https://images.unsplash.com/photo-1632142334511-8f24c3d3ae79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc2FuZHdpY2glMjBtZWFsJTIwYm94fGVufDF8fHx8MTc3MjY0MTgyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      distance: "0.3 mi",
      timeWindow: "7–8 PM",
      urgency: "High",
      urgencyScore: 0.92,
      dietary: ["🌾 Bread"],
      status: "available",
    },
    {
      id: 2,
      business: "Green Leaf Cafe",
      items: "2 salads, 1 soup",
      image: "https://images.unsplash.com/photo-1692780941266-96892bb6c9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBmb29kfGVufDF8fHx8MTc3MjYzMjg5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      distance: "0.8 mi",
      timeWindow: "Ready now",
      urgency: "Medium",
      urgencyScore: 0.65,
      dietary: ["🥗 Vegan"],
      status: "available",
    },
    {
      id: 3,
      business: "Corner Pizza",
      items: "4 slices pizza",
      image: "https://images.unsplash.com/photo-1663858835211-3883764dcd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjByZXN0YXVyYW50fGVufDF8fHx8MTc3MjYzMDc3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      distance: "1.2 mi",
      timeWindow: "6–9 PM",
      urgency: "Low",
      urgencyScore: 0.38,
      dietary: ["🧀 Vegetarian"],
      status: "available",
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    if (urgency === "High") return "bg-[#E23E3E] text-white";
    if (urgency === "Medium") return "bg-[#F2C94C] text-[#0F1724]";
    return "bg-[#DDE6EE] text-[#5B6470]";
  };

  return (
    <div className="min-h-full bg-[#F6F8FA] pb-4">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-[#DDE6EE]">
        <div className="flex items-center justify-between">
          <button className="p-2 hover:bg-[#F6F8FA] rounded-lg transition-colors">
            <Menu className="w-6 h-6 text-[#0F1724]" />
          </button>
          
          <h1 className="text-xl text-[#0F1724]">NourishNet</h1>
          
          <Link to="/profile" className="p-2 hover:bg-[#F6F8FA] rounded-lg transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2F80ED] to-[#27AE60] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </Link>
        </div>

        {/* Agent Status Indicator */}
        <div className="mt-4 flex items-center gap-2 bg-[#F6F8FA] rounded-xl p-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-[#2F80ED] rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm text-[#5B6470]">Scout detecting • Coordinator matching</span>
          </div>
        </div>
      </div>

      {/* AI Features Quick Access */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg text-[#0F1724]">AI Features</h2>
          <Link to="/ai-dashboard" className="flex items-center gap-1 text-sm text-[#2F80ED] hover:text-[#1E5FC2]">
            <span>View All</span>
            <Sparkles className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Link
            to="/ai-analytics"
            className="bg-gradient-to-br from-[#27AE60] to-[#1EBC70] rounded-xl p-4 text-white hover:shadow-lg transition-shadow"
          >
            <Brain className="w-8 h-8 mb-2" />
            <div className="text-sm mb-1">Analytics</div>
            <div className="text-xs text-white/80">Live insights</div>
          </Link>
          <Link
            to="/mcp-agents"
            className="bg-gradient-to-br from-[#00D4FF] to-[#2F80ED] rounded-xl p-4 text-white hover:shadow-lg transition-shadow"
          >
            <Zap className="w-8 h-8 mb-2" />
            <div className="text-sm mb-1">MCP Agents</div>
            <div className="text-xs text-white/80">Coordination</div>
          </Link>
          <Link
            to="/nutrition-heatmap"
            className="bg-gradient-to-br from-[#E23E3E] to-[#F6AD55] rounded-xl p-4 text-white hover:shadow-lg transition-shadow"
          >
            <MapPin className="w-8 h-8 mb-2" />
            <div className="text-sm mb-1">Heatmap</div>
            <div className="text-xs text-white/80">Nutrition gaps</div>
          </Link>
          <Link
            to="/prophet-forecast"
            className="bg-gradient-to-br from-[#F6AD55] to-[#F2C94C] rounded-xl p-4 text-white hover:shadow-lg transition-shadow"
          >
            <TrendingUp className="w-8 h-8 mb-2" />
            <div className="text-sm mb-1">Forecast</div>
            <div className="text-xs text-white/80">7-day Prophet</div>
          </Link>
        </div>
      </div>

      {/* Feed */}
      <div className="px-4 pt-2 space-y-4">
        {surplusItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative">
              <ImageWithFallback
                src={item.image}
                alt={item.business}
                className="w-full h-40 object-cover"
              />
              <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Bookmark className="w-5 h-5 text-[#5B6470]" />
              </button>
              {/* Urgency Badge */}
              <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs flex items-center gap-1 ${getUrgencyColor(item.urgency)}`}>
                <Flame className="w-3 h-3" />
                {item.urgency}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg text-[#0F1724] mb-1">{item.business}</h3>
                  <p className="text-[#5B6470]">{item.items}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-3 text-sm text-[#5B6470]">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{item.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.timeWindow}</span>
                </div>
              </div>

              {/* Dietary Tags */}
              <div className="flex gap-2 mb-4">
                {item.dietary.map((tag, index) => (
                  <span key={index} className="text-xs bg-[#F6F8FA] text-[#5B6470] px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Urgency Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-[#5B6470] mb-1">
                  <span>Urgency Score</span>
                  <span>{item.urgencyScore.toFixed(2)}</span>
                </div>
                <div className="w-full bg-[#DDE6EE] rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${
                      item.urgencyScore >= 0.8 ? "bg-[#E23E3E]" : 
                      item.urgencyScore >= 0.6 ? "bg-[#F2C94C]" : "bg-[#27AE60]"
                    }`}
                    style={{ width: `${item.urgencyScore * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                  to={`/listing/${item.id}`}
                  className="flex-1 bg-[#27AE60] text-white py-3 rounded-xl text-center hover:bg-[#229954] transition-colors"
                >
                  Request Pickup
                </Link>
                <button className="px-4 py-3 border border-[#DDE6EE] text-[#5B6470] rounded-xl hover:bg-[#F6F8FA] transition-colors">
                  Later
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State for No Items */}
      {surplusItems.length === 0 && (
        <div className="px-4 pt-20 text-center">
          <div className="w-24 h-24 bg-[#F6F8FA] rounded-full flex items-center justify-center mx-auto mb-4">
            <Flame className="w-12 h-12 text-[#DDE6EE]" />
          </div>
          <h3 className="text-xl text-[#0F1724] mb-2">No surplus available</h3>
          <p className="text-[#5B6470]">Check back soon for new food listings</p>
        </div>
      )}
    </div>
  );
}
