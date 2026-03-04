import { useParams, useNavigate } from "react-router";
import { ArrowLeft, MapPin, Clock, Share2, Search, Users, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const listing = {
    id: 1,
    business: "Sunrise Bakery",
    items: "3 sandwiches",
    image: "https://images.unsplash.com/photo-1632142334511-8f24c3d3ae79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc2FuZHdpY2glMjBtZWFsJTIwYm94fGVufDF8fHx8MTc3MjY0MTgyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    distance: "0.3 mi",
    address: "123 Main Street, Downtown",
    timeWindow: "7–8 PM today",
    bestBefore: "8:00 PM",
    urgency: 0.92,
    description: "Fresh sandwiches from today's batch. Includes turkey, ham, and veggie options.",
    dietary: ["🌾 Bread", "🥩 Meat", "🥬 Vegetables"],
  };

  const timeline = [
    {
      agent: "Scout",
      time: "5:42 PM",
      message: "Detected surplus listing",
      icon: Search,
      color: "bg-[#2F80ED]",
    },
    {
      agent: "Coordinator",
      time: "5:43 PM",
      message: "Matched with priority score 0.92",
      icon: Users,
      color: "bg-[#F2C94C]",
    },
    {
      agent: "Logistics",
      time: "5:44 PM",
      message: "Notified 3 nearby recipients",
      icon: MessageCircle,
      color: "bg-[#27AE60]",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header with Image */}
      <div className="relative">
        <ImageWithFallback
          src={listing.image}
          alt={listing.business}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Header Controls */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-[#0F1724]" />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Share2 className="w-5 h-5 text-[#0F1724]" />
          </button>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-2xl mb-1">{listing.business}</h1>
          <p className="text-white/90">{listing.items}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Key Info */}
        <div className="flex items-center gap-4 text-[#5B6470]">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{listing.distance}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{listing.timeWindow}</span>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-[#0F1724] mb-2">Pickup Location</h3>
          <p className="text-[#5B6470]">{listing.address}</p>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-[#0F1724] mb-2">Description</h3>
          <p className="text-[#5B6470]">{listing.description}</p>
        </div>

        {/* Dietary Info */}
        <div>
          <h3 className="text-[#0F1724] mb-2">Dietary Information</h3>
          <div className="flex flex-wrap gap-2">
            {listing.dietary.map((tag, index) => (
              <span key={index} className="text-sm bg-[#F6F8FA] text-[#5B6470] px-3 py-2 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Urgency Meter */}
        <div className="bg-[#F6F8FA] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[#0F1724]">Urgency Score</h3>
            <span className="text-2xl text-[#0F1724]">{listing.urgency.toFixed(2)}</span>
          </div>
          <div className="w-full bg-white rounded-full h-3">
            <div
              className="h-3 rounded-full bg-[#E23E3E]"
              style={{ width: `${listing.urgency * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-[#5B6470] mt-2">
            High urgency - Best before {listing.bestBefore}
          </p>
        </div>

        {/* Agent Timeline */}
        <div>
          <h3 className="text-[#0F1724] mb-4">Agent Activity</h3>
          <div className="space-y-4">
            {timeline.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="flex gap-3">
                  <div className={`w-10 h-10 ${event.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#0F1724]">{event.agent}</span>
                      <span className="text-xs text-[#5B6470]">{event.time}</span>
                    </div>
                    <p className="text-sm text-[#5B6470]">{event.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-6 py-4 border-t border-[#DDE6EE]">
        <button className="w-full bg-[#27AE60] text-white py-4 rounded-xl hover:bg-[#229954] transition-colors">
          Confirm Pickup
        </button>
        <p className="text-center text-xs text-[#5B6470] mt-3">
          Reply YES to confirm pickup within 20 minutes
        </p>
      </div>
    </div>
  );
}
