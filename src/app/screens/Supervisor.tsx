import { CheckCircle, XCircle, Edit3, AlertCircle, Clock, Camera, Award } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function Supervisor() {
  const navigate = useNavigate();
  const [expandedTask, setExpandedTask] = useState<number | null>(null);

  const pendingTasks = [
    {
      id: 1747,
      type: "clarify",
      title: "Clarify Sunrise Bakery listing",
      business: "Sunrise Bakery",
      description: "3 sandwiches detected",
      confidence: 92.4,
      timeRemaining: "2:41",
      allergies: [
        { name: "Ham & cheese", residents: 12, checked: true },
        { name: "Nuts/peanuts", residents: 0, checked: false },
        { name: "Gluten-free needed", residents: 3, checked: false },
      ],
      hasCamera: true,
    },
    {
      id: 1748,
      type: "approve",
      title: "Approve nutrition match",
      description: "Surplus #123 → St Mungo's",
      urgency: 0.78,
      timeRemaining: "4:15",
      confidence: 94,
      nutritionGap: -43,
      perfectMatch: true,
    },
    {
      id: 1749,
      type: "verify",
      title: "Verify driver dispatch",
      description: "Corner Pizza → Trussell Trust",
      distance: "262km",
      timeRemaining: "8:30",
      confidence: 82,
      subsidy: 28,
    },
  ];

  const handleAccept = (taskId: number) => {
    console.log("Accepted task:", taskId);
    // Add accept logic
  };

  const handleReject = (taskId: number) => {
    console.log("Rejected task:", taskId);
    // Add reject logic
  };

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
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <p className="text-2xl">95%</p>
            <p className="text-xs text-white/90">Accuracy</p>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {pendingTasks.map((task) => {
          const isExpanded = expandedTask === task.id;
          
          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border-l-4 border-[#8B5CF6]"
            >
              {/* Header */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-0.5 rounded">
                          #{task.id}
                        </span>
                        {task.type === "clarify" && (
                          <span className="text-xs text-[#E23E3E] bg-[#E23E3E]/10 px-2 py-0.5 rounded">
                            HIGH
                          </span>
                        )}
                      </div>
                      <h3 className="text-[#0F1724] mb-1">{task.title}</h3>
                      {task.business && (
                        <p className="text-sm text-[#5B6470] mb-1">{task.business}</p>
                      )}
                      <p className="text-sm text-[#5B6470]">{task.description}</p>
                      {task.perfectMatch && (
                        <div className="flex items-center gap-1 text-xs text-[#27AE60] mt-1">
                          <Award className="w-3 h-3" />
                          <span>Nutrition-perfect match!</span>
                        </div>
                      )}
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
                    <span>AI Confidence</span>
                    <span>{task.confidence}%</span>
                  </div>
                  <div className="w-full bg-[#DDE6EE] rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${task.confidence}%` }}
                      transition={{ duration: 0.8 }}
                      className={`h-2 rounded-full ${
                        task.confidence >= 90 ? "bg-[#1EBC70]" : 
                        task.confidence >= 80 ? "bg-[#27AE60]" :
                        task.confidence >= 60 ? "bg-[#F2C94C]" : "bg-[#E23E3E]"
                      }`}
                    >
                      <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Camera Feed for Clarify tasks */}
                {task.hasCamera && isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mb-4 bg-black/5 rounded-xl p-3 border border-[#DDE6EE]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4 text-[#2F80ED]" />
                      <span className="text-xs text-[#5B6470]">Live Camera Feed</span>
                    </div>
                    <div className="relative h-32 bg-gradient-to-br from-[#DDE6EE] to-[#F6F8FA] rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-xs text-[#5B6470]">YOLOv9: 3 sandwiches detected</div>
                      </div>
                      {/* Simulated bounding boxes */}
                      <motion.div
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-2 left-3 w-16 h-12 border-2 border-[#27AE60] rounded"
                      >
                        <div className="absolute -top-5 left-0 text-xs text-[#27AE60] bg-white px-1 rounded">
                          92.4%
                        </div>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.7, 0.4, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        className="absolute top-3 right-4 w-14 h-14 border-2 border-[#27AE60] rounded"
                      >
                        <div className="absolute -top-5 left-0 text-xs text-[#27AE60] bg-white px-1 rounded">
                          89.1%
                        </div>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        className="absolute bottom-2 left-1/3 w-12 h-10 border-2 border-[#27AE60] rounded"
                      >
                        <div className="absolute -top-5 left-0 text-xs text-[#27AE60] bg-white px-1 rounded">
                          91.2%
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Allergy Checklist */}
                {task.allergies && isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mb-4 space-y-2"
                  >
                    <div className="text-sm text-[#5B6470] mb-2">Allergy Confirmation</div>
                    {task.allergies.map((allergy, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg border ${
                          allergy.checked 
                            ? "bg-[#27AE60]/10 border-[#27AE60]/30" 
                            : "bg-[#F6F8FA] border-[#DDE6EE]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={allergy.checked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded accent-[#27AE60]"
                        />
                        <div className="flex-1">
                          <div className="text-sm text-[#0F1724]">{allergy.name}</div>
                          <div className="text-xs text-[#5B6470]">
                            {allergy.residents} {allergy.residents === 1 ? "resident" : "residents"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Additional Info */}
                {isExpanded && task.subsidy && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mb-4 bg-[#F6AD55]/10 rounded-lg p-3 border border-[#F6AD55]/30"
                  >
                    <div className="text-sm text-[#0F1724] mb-1">Driver Subsidy</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#5B6470]">Distance: {task.distance}</span>
                      <span className="text-lg text-[#F6AD55]">£{task.subsidy}</span>
                    </div>
                  </motion.div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAccept(task.id)}
                    className="flex-1 bg-[#1EBC70] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#17a662] transition-colors"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>{task.allergies && isExpanded ? "HAM OK FOR ALL" : "Accept"}</span>
                  </button>
                  <button
                    onClick={() => setExpandedTask(isExpanded ? null : task.id)}
                    className="px-4 py-3 border border-[#DDE6EE] text-[#5B6470] rounded-xl hover:bg-[#F6F8FA] transition-colors"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleReject(task.id)}
                    className="px-4 py-3 border border-[#DDE6EE] text-[#5B6470] rounded-xl hover:bg-[#F6F8FA] transition-colors"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
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

      {/* Quick Stats Footer */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/10 rounded-xl p-4 border border-[#8B5CF6]/20">
          <div className="flex items-center justify-between text-sm">
            <div className="text-center">
              <div className="text-lg text-[#0F1724]">847</div>
              <div className="text-xs text-[#5B6470]">Tasks reviewed</div>
            </div>
            <div className="w-px h-8 bg-[#DDE6EE]"></div>
            <div className="text-center">
              <div className="text-lg text-[#0F1724]">18ms</div>
              <div className="text-xs text-[#5B6470]">Avg response</div>
            </div>
            <div className="w-px h-8 bg-[#DDE6EE]"></div>
            <div className="text-center">
              <div className="text-lg text-[#27AE60]">95%</div>
              <div className="text-xs text-[#5B6470]">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
