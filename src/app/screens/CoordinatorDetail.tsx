import { Link } from "react-router";
import { ArrowLeft, Users, AlertCircle, TrendingUp } from "lucide-react";

export function CoordinatorDetail() {
  const matches = [
    {
      surplusId: "#123",
      from: "Sunrise Bakery",
      to: "Downtown Food Bank",
      items: "3 sandwiches",
      urgency: 0.82,
      status: "Active",
      time: "2 min ago",
    },
    {
      surplusId: "#124",
      from: "Green Leaf Cafe",
      to: "Sarah M. (Individual)",
      items: "2 salads",
      urgency: 0.65,
      status: "Pending",
      time: "5 min ago",
    },
    {
      surplusId: "#125",
      from: "Corner Deli",
      to: "Community Kitchen",
      items: "5 sandwiches",
      urgency: 0.91,
      status: "Active",
      time: "8 min ago",
    },
    {
      surplusId: "#126",
      from: "Sunrise Bakery",
      to: "John D. (Individual)",
      items: "2 pastries",
      urgency: 0.52,
      status: "Completed",
      time: "15 min ago",
    },
  ];

  const getUrgencyColor = (urgency: number) => {
    if (urgency >= 0.8) return "bg-red-500";
    if (urgency >= 0.6) return "bg-orange-500";
    return "bg-yellow-500";
  };

  const getStatusColor = (status: string) => {
    if (status === "Active") return "bg-green-100 text-green-700";
    if (status === "Pending") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-yellow-50 to-orange-50 pb-4">
      {/* Header */}
      <div className="bg-yellow-500 text-white px-6 py-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/" className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6" />
            <h1 className="text-xl">Coordinator Agent</h1>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <p className="text-2xl">4</p>
            <p className="text-xs text-white/90">Active Matches</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <p className="text-2xl">0.78</p>
            <p className="text-xs text-white/90">Avg Urgency</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <p className="text-2xl">47</p>
            <p className="text-xs text-white/90">Today</p>
          </div>
        </div>
      </div>

      {/* Active Matches */}
      <div className="px-6 mt-6">
        <h2 className="text-lg text-gray-800 mb-4">Active Matches</h2>
        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.surplusId}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Match {match.surplusId}</p>
                    <p className="text-xs text-gray-400">{match.time}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(match.status)}`}>
                  {match.status}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">From:</span>
                  <span className="text-sm text-gray-800">{match.from}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">To:</span>
                  <span className="text-sm text-gray-800">{match.to}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Items:</span>
                  <span className="text-sm text-gray-800">{match.items}</span>
                </div>
              </div>

              {/* Urgency Bar */}
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Urgency Score</span>
                  <span className="text-xs text-gray-700">{match.urgency.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getUrgencyColor(match.urgency)}`}
                    style={{ width: `${match.urgency * 100}%` }}
                  ></div>
                </div>
              </div>

              {match.urgency >= 0.8 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-2 mt-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <p className="text-xs text-red-700">High urgency - Priority match</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Algorithm Info */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-yellow-600" />
            <h3 className="text-gray-800">Matching Algorithm</h3>
          </div>
          <p className="text-sm text-gray-600">
            The Coordinator uses urgency scores, location proximity, and dietary preferences to
            optimize food distribution and minimize waste.
          </p>
        </div>
      </div>
    </div>
  );
}
