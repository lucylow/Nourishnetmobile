import { Link } from "react-router";
import { ArrowLeft, Eye, Search, Coffee, Cookie } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ScoutDetail() {
  const detections = [
    {
      business: "Sunrise Bakery",
      items: "3 sandwiches, 2 pastries",
      quantity: "5 items",
      confidence: 95,
      icon: Cookie,
      time: "2 min ago",
      needsHelp: false,
      image: "https://images.unsplash.com/photo-1698288280603-22997a335234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJha2VyeSUyMGJyZWFkJTIwcGFzdHJpZXN8ZW58MXx8fHwxNzcyNjQwNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      business: "Green Leaf Cafe",
      items: "2 salads, 1 soup",
      quantity: "3 items",
      confidence: 88,
      icon: Coffee,
      time: "8 min ago",
      needsHelp: false,
      image: "https://images.unsplash.com/photo-1678068427578-a4f8eac02ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwY29mZmVlJTIwc2hvcCUyMGZvb2R8ZW58MXx8fHwxNzcyNjQxNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      business: "Corner Deli",
      items: "Mystery items (unclear)",
      quantity: "Unknown",
      confidence: 42,
      icon: Coffee,
      time: "15 min ago",
      needsHelp: true,
      image: "",
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-blue-50 to-blue-100 pb-4">
      {/* Header */}
      <div className="bg-blue-500 text-white px-6 py-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/" className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-2">
            <Eye className="w-6 h-6" />
            <h1 className="text-xl">Scout Agent</h1>
          </div>
        </div>
        
        {/* Thought Bubble */}
        <div className="bg-white text-gray-700 rounded-2xl p-4 relative mt-4">
          <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
          <p className="text-sm italic">Currently scanning Sunrise Bakery feed...</p>
        </div>
      </div>

      {/* Recent Detections */}
      <div className="px-6 mt-6">
        <h2 className="text-lg text-gray-800 mb-4">Recent Surplus Detections</h2>
        <div className="space-y-4">
          {detections.map((detection, index) => {
            const Icon = detection.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {detection.image && (
                  <ImageWithFallback
                    src={detection.image}
                    alt={detection.business}
                    className="w-full h-32 object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-gray-800">{detection.business}</h3>
                        <p className="text-sm text-gray-500">{detection.time}</p>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs ${
                        detection.confidence >= 80
                          ? "bg-green-100 text-green-700"
                          : detection.confidence >= 60
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {detection.confidence}%
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="text-gray-500">Items:</span> {detection.items}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="text-gray-500">Quantity:</span> {detection.quantity}
                  </p>
                  {detection.needsHelp && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 mt-2">
                      <p className="text-xs text-purple-700">⚠️ Human help needed - Low confidence</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
        <Search className="w-6 h-6" />
      </button>
    </div>
  );
}
