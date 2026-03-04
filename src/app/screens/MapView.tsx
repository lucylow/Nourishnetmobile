import { useState } from "react";
import { Search, Filter, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function MapView() {
  const [selectedPin, setSelectedPin] = useState<number | null>(1);

  const locations = [
    {
      id: 1,
      business: "Sunrise Bakery",
      items: "3 sandwiches",
      distance: "0.3 mi",
      timeWindow: "7–8 PM",
      urgency: "High",
      lat: 37.7749,
      lng: -122.4194,
      image: "https://images.unsplash.com/photo-1632142334511-8f24c3d3ae79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc2FuZHdpY2glMjBtZWFsJTIwYm94fGVufDF8fHx8MTc3MjY0MTgyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      business: "Green Leaf Cafe",
      items: "2 salads, 1 soup",
      distance: "0.8 mi",
      timeWindow: "Ready now",
      urgency: "Medium",
      lat: 37.7849,
      lng: -122.4094,
      image: "https://images.unsplash.com/photo-1692780941266-96892bb6c9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBmb29kfGVufDF8fHx8MTc3MjYzMjg5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const selected = locations.find((loc) => loc.id === selectedPin);

  return (
    <div className="h-full flex flex-col bg-white relative">
      {/* Search Bar */}
      <div className="absolute top-4 left-4 right-4 z-10 flex gap-2">
        <div className="flex-1 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
          <Search className="w-5 h-5 text-[#5B6470]" />
          <input
            type="text"
            placeholder="Search locations..."
            className="flex-1 bg-transparent border-none focus:outline-none text-[#0F1724]"
          />
        </div>
        <button className="bg-white w-12 h-12 rounded-xl shadow-lg flex items-center justify-center hover:bg-[#F6F8FA] transition-colors">
          <Filter className="w-5 h-5 text-[#5B6470]" />
        </button>
      </div>

      {/* Map Placeholder */}
      <div className="flex-1 bg-gradient-to-br from-[#E8F5E9] via-[#F6F8FA] to-[#E3F2FD] relative">
        {/* Simulated Map Pins */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-md">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setSelectedPin(location.id)}
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  selectedPin === location.id
                    ? "bg-[#2F80ED] scale-110 shadow-lg"
                    : "bg-[#27AE60] hover:scale-105"
                }`}
                style={{
                  top: `${30 + index * 20}%`,
                  left: `${40 + index * 15}%`,
                }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </button>
            ))}
            
            {/* User Location Pin */}
            <div className="absolute w-4 h-4 bg-[#2F80ED] border-4 border-white rounded-full shadow-lg" style={{ top: "50%", left: "50%" }}>
              <div className="absolute inset-0 bg-[#2F80ED] rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-24 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-[#F6F8FA] transition-colors">
            <span className="text-xl text-[#0F1724]">+</span>
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-[#F6F8FA] transition-colors">
            <span className="text-xl text-[#0F1724]">−</span>
          </button>
        </div>
      </div>

      {/* Bottom Sheet */}
      {selected && (
        <div className="absolute bottom-16 left-0 right-0 bg-white rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 mx-auto max-w-md">
          <div className="w-12 h-1 bg-[#DDE6EE] rounded-full mx-auto mt-3 mb-4"></div>
          
          <div className="px-6 pb-6">
            <div className="flex gap-4">
              <ImageWithFallback
                src={selected.image}
                alt={selected.business}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg text-[#0F1724] mb-1">{selected.business}</h3>
                <p className="text-[#5B6470] mb-2">{selected.items}</p>
                <div className="flex items-center gap-3 text-sm text-[#5B6470]">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selected.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selected.timeWindow}</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 bg-[#27AE60] text-white py-3 rounded-xl hover:bg-[#229954] transition-colors">
              Request Pickup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
