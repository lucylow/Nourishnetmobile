import { useNavigate } from "react-router";
import { ArrowLeft, ExternalLink, Plus, Copy, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function NFTGallery() {
  const navigate = useNavigate();
  const [copiedTx, setCopiedTx] = useState<string | null>(null);

  const nfts = [
    {
      id: 1747,
      title: "Sunrise Sandwiches EC1Y",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400",
      protein: 24,
      calories: 847,
      expiry: "17:00",
      status: "Claimed",
      charity: "St Mungo's",
      tx: "0x847a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
      subsidy: {
        driver: 1.47,
        donor: 2.18,
        dao: 0.87,
        protocol: 0.28,
      },
    },
    {
      id: 1748,
      title: "Green Leaf Salads SE1",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
      protein: 8,
      calories: 342,
      expiry: "18:30",
      status: "Minted",
      tx: "0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b",
      subsidy: {
        driver: 0.98,
        donor: 1.76,
        dao: 0.54,
        protocol: 0.22,
      },
    },
    {
      id: 1749,
      title: "Corner Pizza Slices M1",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
      protein: 32,
      calories: 1240,
      expiry: "19:00",
      status: "Claimed",
      charity: "Trussell Trust",
      tx: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
      subsidy: {
        driver: 2.34,
        donor: 3.12,
        dao: 1.23,
        protocol: 0.45,
      },
    },
  ];

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedTx(`tx-${id}`);
    setTimeout(() => setCopiedTx(null), 2000);
  };

  const getStatusColor = (status: string) => {
    if (status === "Claimed") return { bg: "#27AE60", border: "#27AE60" };
    if (status === "Minted") return { bg: "#F6AD55", border: "#F6AD55" };
    return { bg: "#00D4FF", border: "#00D4FF" };
  };

  const getTotalSubsidy = (subsidy: any) => {
    return (subsidy.driver + subsidy.donor + subsidy.dao + subsidy.protocol).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1419] via-[#1a1f2e] to-[#0F1419]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#A78BFA]/20 backdrop-blur-xl px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-white">NFT Food Donations</h1>
            <p className="text-sm text-white/70">Blockchain verified</p>
          </div>
          <div className="bg-[#8B5CF6]/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-white border border-[#8B5CF6]/30">
            L2 CashScript
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Mint New NFT Button */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white py-4 rounded-2xl border border-[#8B5CF6]/30 hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="">Post Bakery Surplus → Auto-Mint NFT</div>
              <div className="text-xs text-white/80">Gas-free L2 minting</div>
            </div>
          </div>
        </motion.button>

        {/* NFT Gallery */}
        <div className="space-y-4">
          {nfts.map((nft, index) => {
            const statusColor = getStatusColor(nft.status);
            return (
              <motion.div
                key={nft.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
              >
                {/* NFT Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* ID Badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm border border-white/20">
                    #{nft.id}
                  </div>

                  {/* Status Badge */}
                  <div
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-white text-sm border backdrop-blur-sm"
                    style={{
                      backgroundColor: `${statusColor.bg}40`,
                      borderColor: `${statusColor.border}60`,
                    }}
                  >
                    {nft.status} ✓
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-lg mb-1">{nft.title}</h3>
                    {nft.charity && (
                      <p className="text-sm text-white/70">→ {nft.charity}</p>
                    )}
                  </div>
                </div>

                {/* NFT Metadata */}
                <div className="p-5 space-y-4">
                  {/* Nutrition Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                      <div className="text-xs text-white/70 mb-1">Protein</div>
                      <div className="text-white">{nft.protein}g</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                      <div className="text-xs text-white/70 mb-1">Calories</div>
                      <div className="text-white">{nft.calories}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                      <div className="text-xs text-white/70 mb-1">Expiry</div>
                      <div className="text-white">{nft.expiry}</div>
                    </div>
                  </div>

                  {/* Subsidy Breakdown */}
                  <div className="bg-gradient-to-br from-[#F6AD55]/10 to-[#F6AD55]/5 backdrop-blur-sm rounded-xl p-4 border border-[#F6AD55]/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-white/70">Subsidy Breakdown</span>
                      <span className="text-lg text-white">£{getTotalSubsidy(nft.subsidy)}</span>
                    </div>
                    
                    {/* Pie visualization with bars */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(nft.subsidy.donor / parseFloat(getTotalSubsidy(nft.subsidy))) * 100}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="h-full bg-[#27AE60]"
                          ></motion.div>
                        </div>
                        <span className="text-xs text-white/70 w-32">Donor: £{nft.subsidy.donor.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(nft.subsidy.driver / parseFloat(getTotalSubsidy(nft.subsidy))) * 100}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
                            className="h-full bg-[#2F80ED]"
                          ></motion.div>
                        </div>
                        <span className="text-xs text-white/70 w-32">Driver: £{nft.subsidy.driver.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(nft.subsidy.dao / parseFloat(getTotalSubsidy(nft.subsidy))) * 100}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                            className="h-full bg-[#F6AD55]"
                          ></motion.div>
                        </div>
                        <span className="text-xs text-white/70 w-32">DAO: £{nft.subsidy.dao.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(nft.subsidy.protocol / parseFloat(getTotalSubsidy(nft.subsidy))) * 100}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                            className="h-full bg-[#8B5CF6]"
                          ></motion.div>
                        </div>
                        <span className="text-xs text-white/70 w-32">Protocol: £{nft.subsidy.protocol.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Transaction Hash */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-white/70 mb-1">Transaction</div>
                        <div className="text-sm text-white font-mono truncate">
                          {nft.tx.slice(0, 10)}...{nft.tx.slice(-8)}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(nft.tx, nft.id)}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                        >
                          {copiedTx === `tx-${nft.id}` ? (
                            <Check className="w-4 h-4 text-[#27AE60]" />
                          ) : (
                            <Copy className="w-4 h-4 text-white/70" />
                          )}
                        </button>
                        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                          <ExternalLink className="w-4 h-4 text-white/70" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Wallet Info */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
          <h3 className="text-white mb-3">Wallet Connected</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-white/70">Network</span>
              <span className="text-white">CashScript L2</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-white/70">Total NFTs</span>
              <span className="text-white">{nfts.length}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white/70">Total Value</span>
              <span className="text-white">
                £{nfts.reduce((sum, nft) => sum + parseFloat(getTotalSubsidy(nft.subsidy)), 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
