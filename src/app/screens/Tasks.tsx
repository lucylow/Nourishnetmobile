import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";

export function Tasks() {
  const pendingTasks = [
    {
      id: 1,
      title: "Clarify food listing",
      business: "Sunrise Bakery",
      description: "3 unsold sandwiches, best before today",
      timeRemaining: "15 min",
      type: "verification",
    },
    {
      id: 2,
      title: "Approve match",
      description: "Surplus #123 → Downtown Food Bank",
      urgency: 0.52,
      timeRemaining: "30 min",
      type: "approval",
    },
  ];

  const completedTasks = [
    {
      id: 3,
      title: "Verified surplus listing",
      business: "Green Leaf Cafe",
      status: "approved",
      completedAt: "1 hr ago",
    },
    {
      id: 4,
      title: "Match approval",
      description: "Surplus #119 → Community Kitchen",
      status: "approved",
      completedAt: "2 hrs ago",
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-purple-50 to-pink-50 pb-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl mb-2">Supervisor Tasks</h1>
        <p className="text-white/90">Human-in-the-loop verification</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
            <p className="text-2xl">{pendingTasks.length}</p>
            <p className="text-xs text-white/90">Pending</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
            <p className="text-2xl">{completedTasks.length}</p>
            <p className="text-xs text-white/90">Completed</p>
          </div>
        </div>
      </div>

      {/* Pending Tasks */}
      <div className="px-6 mt-6">
        <h2 className="text-lg text-gray-800 mb-4">Pending Tasks</h2>
        {pendingTasks.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
            <p className="text-gray-600">No pending tasks</p>
            <p className="text-sm text-gray-400 mt-1">All caught up!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pendingTasks.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-2xl shadow-md p-4 border-l-4 border-purple-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                      <AlertCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-800">{task.title}</h3>
                      {task.business && (
                        <p className="text-sm text-gray-600 mt-1">{task.business}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                      {task.urgency && (
                        <div className="mt-2">
                          <span className="text-xs text-gray-500">Urgency: </span>
                          <span className="text-xs text-gray-700">{task.urgency}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full whitespace-nowrap">
                    <Clock className="w-3 h-3" />
                    <span>{task.timeRemaining}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <CheckCircle className="w-5 h-5" />
                    <span>Accept</span>
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                    <XCircle className="w-5 h-5" />
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Completed Tasks */}
      <div className="px-6 mt-8">
        <h2 className="text-lg text-gray-800 mb-4">Recently Completed</h2>
        <div className="space-y-3">
          {completedTasks.map((task) => (
            <div key={task.id} className="bg-white rounded-2xl shadow-md p-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-800">{task.title}</h3>
                    <span className="text-xs text-gray-400">{task.completedAt}</span>
                  </div>
                  {task.business && (
                    <p className="text-sm text-gray-600 mt-1">{task.business}</p>
                  )}
                  {task.description && (
                    <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                  )}
                  <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    ✓ Approved
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 text-purple-600 py-3 text-sm hover:underline">
          View history
        </button>
      </div>
    </div>
  );
}
