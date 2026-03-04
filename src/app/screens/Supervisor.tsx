import { CheckCircle, XCircle, Edit3, AlertCircle, Clock } from "lucide-react";

export function Supervisor() {
  const pendingTasks = [
    {
      id: 1,
      type: "clarify",
      title: "Clarify food listing",
      business: "Sunrise Bakery",
      description: "3 unsold items?",
      confidence: 62,
      timeRemaining: "15 min",
    },
    {
      id: 2,
      type: "approve",
      title: "Approve match",
      description: "Surplus #123 → Downtown Food Bank",
      urgency: 0.52,
      timeRemaining: "30 min",
      confidence: 78,
    },
  ];

  return (
    <div className="h-full flex flex-col bg-[#F6F8FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl mb-2">Supervisor Queue</h1>
        <p className="text-white/90 mb-4">Human-in-the-loop verification</p>
        
        <div className="flex gap-3">
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <p className="text-2xl">{pendingTasks.length}</p>
            <p className="text-xs text-white/90">Pending</p>
          </div>
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <p className="text-2xl">12</p>
            <p className="text-xs text-white/90">Reviewed</p>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {pendingTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-[#8B5CF6]"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0F1724] mb-1">{task.title}</h3>
                  {task.business && (
                    <p className="text-sm text-[#5B6470] mb-1">{task.business}</p>
                  )}
                  <p className="text-sm text-[#5B6470]">{task.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#E23E3E] bg-[#E23E3E]/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                <Clock className="w-3 h-3" />
                <span>{task.timeRemaining}</span>
              </div>
            </div>

            {/* Confidence Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-[#5B6470] mb-1">
                <span>Confidence</span>
                <span>{task.confidence}%</span>
              </div>
              <div className="w-full bg-[#DDE6EE] rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    task.confidence >= 80 ? "bg-[#1EBC70]" : 
                    task.confidence >= 60 ? "bg-[#F2C94C]" : "bg-[#E23E3E]"
                  }`}
                  style={{ width: `${task.confidence}%` }}
                ></div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 bg-[#1EBC70] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#17a662] transition-colors">
                <CheckCircle className="w-5 h-5" />
                <span>Accept</span>
              </button>
              <button className="px-4 py-3 border border-[#DDE6EE] text-[#5B6470] rounded-xl hover:bg-[#F6F8FA] transition-colors">
                <Edit3 className="w-5 h-5" />
              </button>
              <button className="px-4 py-3 border border-[#DDE6EE] text-[#5B6470] rounded-xl hover:bg-[#F6F8FA] transition-colors">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {pendingTasks.length === 0 && (
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-[#1EBC70] mx-auto mb-4" />
            <h3 className="text-lg text-[#0F1724] mb-2">All caught up!</h3>
            <p className="text-[#5B6470]">
              No tasks requiring human verification at this time
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
