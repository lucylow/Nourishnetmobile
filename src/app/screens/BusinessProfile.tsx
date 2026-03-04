import { Link } from "react-router";
import { ArrowLeft, Crown, Star, CheckCircle, TrendingUp } from "lucide-react";

export function BusinessProfile() {
  const businessMetrics = [
    { label: "Meals Donated", value: "47" },
    { label: "CO₂ Saved", value: "123 kg" },
    { label: "People Fed", value: "35" },
  ];

  const sponsoredListings = [
    {
      id: 1,
      items: "3 sandwiches, 2 pastries",
      date: "Today, 5:30 PM",
      views: 47,
      clicks: 12,
      status: "Active",
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-amber-50 to-yellow-50 pb-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/profile" className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl">Business Profile</h1>
        </div>
      </div>

      {/* Business Info */}
      <div className="px-6 -mt-4">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center text-white text-2xl">
                SB
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl text-gray-800">Sunrise Bakery</h2>
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-sm text-gray-500">123 Main Street, Downtown</p>
              </div>
            </div>
          </div>

          {/* Subscription Status */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-4 border-2 border-amber-300">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg text-gray-800">Premium Member</h3>
            </div>
            <p className="text-sm text-gray-600">Unlimited sponsored listings & priority support</p>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="px-6 mt-6">
        <h2 className="text-lg text-gray-800 mb-4">Your Impact</h2>
        <div className="grid grid-cols-3 gap-3">
          {businessMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-4 text-center">
              <p className="text-2xl text-gray-800 mb-1">{metric.value}</p>
              <p className="text-xs text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsored Listings */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-800">Sponsored Listings</h2>
          <button className="text-sm text-amber-600 hover:underline">View All</button>
        </div>
        <div className="space-y-3">
          {sponsoredListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl shadow-md p-4 border-l-4 border-amber-500"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
                  </div>
                  <div>
                    <p className="text-gray-800">{listing.items}</p>
                    <p className="text-sm text-gray-500 mt-1">{listing.date}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  {listing.status}
                </span>
              </div>

              {/* Performance Metrics */}
              <div className="flex gap-4 mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{listing.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-600">{listing.clicks} clicks</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manage Subscription */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg text-gray-800 mb-3">Subscription Details</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Plan</span>
              <span className="text-gray-800">Premium</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Billing</span>
              <span className="text-gray-800">$49.99/month</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Next billing</span>
              <span className="text-gray-800">April 4, 2026</span>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-xl hover:opacity-90 transition-opacity">
            Manage Subscription
          </button>
          <p className="text-xs text-center text-gray-500 mt-3">
            Powered by Stripe • Secure payment processing
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg text-gray-800 mb-3">Premium Benefits</h3>
          <div className="space-y-3">
            {[
              "Unlimited sponsored surplus listings",
              "Priority matching with recipients",
              "Advanced analytics & insights",
              "Dedicated support team",
              "Custom branding options",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
