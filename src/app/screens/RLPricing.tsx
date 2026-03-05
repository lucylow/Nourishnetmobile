import { useNavigate } from "react-router";
import { ArrowLeft, TrendingDown, Users, Leaf, Zap, Target, Award } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function RLPricing() {
  const navigate = useNavigate();
  const [isDeploying, setIsDeploying] = useState(false);

  const currentListing = {
    business: "Sunrise Bakery",
    location: "EC1Y 8LE",
    item: "Sandwich",
    currentPrice: 2.47,
    optimalPrice: 2.18,
    savings: 12,
  };

  const agentCoordination = {
    nourishnetAgents: 7,
    competitors: 3,
    coordinationScore: 0.847,
    socialWelfareBoost: 23,
  };

  const impact = {
    currentMeals: 18,
    optimizedMeals: 29,
    proteinGapBefore: -43,
    proteinGapAfter: -19,
    co2Saved: 1.2,
    charity: "St Mungo's",
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      // Show success state
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1a1f2e] to-[#0F1419]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F6AD55]/20 to-[#8B5CF6]/20 backdrop-blur-xl px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-white">RL Pricing Optimization</h1>
            <p className="text-sm text-white/70">QMIX MARL AI</p>
          </div>
          <div className="bg-[#F6AD55]/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-white border border-[#F6AD55]/30">
            Real-time
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Current Listing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-[#F6AD55]" />
            <span className="text-sm text-white/70">Current Surplus</span>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl text-white mb-1">{currentListing.business}</h3>
            <p className="text-white/70">{currentListing.location}</p>
          </div>

          <div className="bg-black/30 rounded-xl p-4 border border-white/10">
            <div className="text-sm text-white/70 mb-2">{currentListing.item}</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-white/50 mb-1">Current Price</div>
                <div className="text-2xl text-white/70 line-through">£{currentListing.currentPrice.toFixed(2)}</div>
              </div>
              <TrendingDown className="w-8 h-8 text-[#27AE60]" />
              <div>
                <div className="text-sm text-white/50 mb-1">RL Optimal</div>
                <div className="text-3xl text-[#F6AD55]">£{currentListing.optimalPrice.toFixed(2)}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#27AE60]">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm">-{currentListing.savings}% optimized pricing</span>
            </div>
          </div>
        </motion.div>

        {/* Agent Coordination */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-[#00D4FF]" />
            <h3 className="text-white">Agent Coordination Status</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[#27AE60]/20 backdrop-blur-sm rounded-xl p-4 border border-[#27AE60]/30">
              <div className="text-3xl text-white mb-1">{agentCoordination.nourishnetAgents}</div>
              <div className="text-sm text-white/70">NourishNet Agents</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-3xl text-white/70 mb-1">{agentCoordination.competitors}</div>
              <div className="text-sm text-white/70">Competitors</div>
            </div>
          </div>

          {/* Coordination Score */}
          <div className="bg-gradient-to-r from-[#00D4FF]/20 to-[#2F80ED]/20 backdrop-blur-sm rounded-xl p-4 border border-[#00D4FF]/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white/70">Coordination Score</span>
              <span className="text-2xl text-white">{agentCoordination.coordinationScore}</span>
            </div>
            
            {/* Radial Progress */}
            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${agentCoordination.coordinationScore * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#00D4FF] to-[#2F80ED] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </motion.div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-[#27AE60]">
              <Award className="w-4 h-4" />
              <span className="text-sm">+{agentCoordination.socialWelfareBoost}% Social Welfare</span>
            </div>
          </div>
        </div>

        {/* Impact Preview */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#F6AD55]" />
            <h3 className="text-white">Pricing Impact Preview</h3>
          </div>

          {/* Meals Comparison */}
          <div className="bg-gradient-to-br from-[#27AE60]/20 to-[#1EBC70]/20 backdrop-blur-sm rounded-xl p-5 mb-4 border border-[#27AE60]/30">
            <div className="flex items-end justify-center gap-6 mb-3">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">Current £{currentListing.currentPrice}</div>
                <div className="bg-white/10 rounded-lg" style={{ height: `${impact.currentMeals * 3}px`, width: "60px" }}>
                  <div className="h-full bg-gradient-to-t from-white/30 to-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-white">{impact.currentMeals}</span>
                  </div>
                </div>
                <div className="text-xs text-white/50 mt-2">meals</div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">Optimized £{currentListing.optimalPrice}</div>
                <div className="bg-[#27AE60]/30 rounded-lg border-2 border-[#27AE60]" style={{ height: `${impact.optimizedMeals * 3}px`, width: "60px" }}>
                  <div className="h-full bg-gradient-to-t from-[#27AE60] to-[#1EBC70] rounded-lg flex items-center justify-center">
                    <span className="text-3xl text-white font-semibold">{impact.optimizedMeals}</span>
                  </div>
                </div>
                <div className="text-xs text-white/50 mt-2">meals</div>
              </div>
            </div>

            <div className="text-center text-sm text-[#27AE60]">
              +{impact.optimizedMeals - impact.currentMeals} more meals matched!
            </div>
          </div>

          {/* Protein Gap Impact */}
          <div className="space-y-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/70">{impact.charity} Protein Gap</span>
                <Users className="w-4 h-4 text-white/70" />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-xs text-white/50 mb-1">Before</div>
                  <div className="text-xl text-[#E23E3E]">{impact.proteinGapBefore}%</div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="flex-1 h-1 bg-gradient-to-r from-[#E23E3E] to-[#27AE60] rounded-full"></div>
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-1">After</div>
                  <div className="text-xl text-[#27AE60]">{impact.proteinGapAfter}%</div>
                </div>
              </div>
              <div className="mt-2 text-xs text-center text-white/70">
                Fills {Math.abs(impact.proteinGapBefore - impact.proteinGapAfter)}% protein gap
              </div>
            </div>

            {/* CO2 Saved */}
            <div className="bg-gradient-to-br from-[#27AE60]/20 to-[#27AE60]/10 backdrop-blur-sm rounded-xl p-4 border border-[#27AE60]/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#27AE60]/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-[#27AE60]" />
                  </div>
                  <div>
                    <div className="text-2xl text-white mb-1">{impact.co2Saved}kg</div>
                    <div className="text-sm text-white/70">CO₂ Saved</div>
                  </div>
                </div>
                <div className="text-sm text-[#27AE60]">✓ Blockchain Recorded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Deploy Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleDeploy}
          disabled={isDeploying}
          className="w-full bg-gradient-to-r from-[#F6AD55] to-[#F6AD55]/80 text-white py-5 rounded-2xl hover:shadow-lg hover:shadow-[#F6AD55]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
        >
          {isDeploying && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            ></motion.div>
          )}
          <div className="flex items-center justify-center gap-3">
            <Zap className="w-6 h-6" />
            <div className="text-left">
              <div className="text-lg">
                {isDeploying ? "Deploying to Network..." : "Apply to 87 Charities"}
              </div>
              <div className="text-xs text-white/80">
                {isDeploying ? "Propagating optimal pricing" : "Deploy RL optimal pricing"}
              </div>
            </div>
          </div>
        </motion.button>

        {/* Model Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="text-xs text-white/50 space-y-1">
            <div>Algorithm: QMIX Multi-Agent RL</div>
            <div>Training: 87 UK charity network</div>
            <div>Objective: Maximize social welfare + matches</div>
            <div>Update frequency: Real-time (every 15 min)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
