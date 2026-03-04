import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Camera, Plus, Clock, Users } from "lucide-react";

export function CreateListing() {
  const navigate = useNavigate();
  const [items, setItems] = useState<string[]>([]);
  const [currentItem, setCurrentItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [bestBefore, setBestBefore] = useState("");
  const [pickupWindow, setPickupWindow] = useState("");
  const [recipientType, setRecipientType] = useState<string[]>([]);

  const recipientOptions = [
    { value: "charity", label: "Charity" },
    { value: "public", label: "Public" },
    { value: "volunteers", label: "Volunteers" },
  ];

  const handleAddItem = () => {
    if (currentItem.trim()) {
      setItems([...items, currentItem.trim()]);
      setCurrentItem("");
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const toggleRecipientType = (value: string) => {
    if (recipientType.includes(value)) {
      setRecipientType(recipientType.filter((t) => t !== value));
    } else {
      setRecipientType([...recipientType, value]);
    }
  };

  const handleSubmit = () => {
    // Simulate submission
    navigate("/");
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#DDE6EE] flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-[#F6F8FA] rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-[#0F1724]" />
        </button>
        <h1 className="text-xl text-[#0F1724]">Create Listing</h1>
        <div className="w-10"></div>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Photo Upload */}
        <div>
          <label className="block text-[#0F1724] mb-2">Photos</label>
          <div className="flex gap-3">
            <button className="w-24 h-24 bg-[#F6F8FA] border-2 border-dashed border-[#DDE6EE] rounded-xl flex flex-col items-center justify-center hover:bg-[#DDE6EE] transition-colors">
              <Camera className="w-6 h-6 text-[#5B6470] mb-1" />
              <span className="text-xs text-[#5B6470]">Add photo</span>
            </button>
          </div>
          <p className="text-xs text-[#5B6470] mt-2">
            Optional: Upload photos for better matching
          </p>
        </div>

        {/* Items */}
        <div>
          <label className="block text-[#0F1724] mb-2">Food Items</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={currentItem}
              onChange={(e) => setCurrentItem(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddItem()}
              placeholder="e.g., sandwiches, salads..."
              className="flex-1 bg-[#F6F8FA] border-none rounded-xl px-4 py-3 text-[#0F1724] placeholder:text-[#5B6470] focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
            />
            <button
              onClick={handleAddItem}
              className="w-12 h-12 bg-[#27AE60] text-white rounded-xl flex items-center justify-center hover:bg-[#229954] transition-colors"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#2F80ED]/10 text-[#2F80ED] px-3 py-2 rounded-lg flex items-center gap-2"
              >
                <span>{item}</span>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="hover:bg-[#2F80ED]/20 rounded-full p-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-[#0F1724] mb-2">Quantity</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g., 3 servings, 5 items..."
            className="w-full bg-[#F6F8FA] border-none rounded-xl px-4 py-3 text-[#0F1724] placeholder:text-[#5B6470] focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
          />
        </div>

        {/* Best Before */}
        <div>
          <label className="block text-[#0F1724] mb-2">Best Before</label>
          <div className="relative">
            <input
              type="datetime-local"
              value={bestBefore}
              onChange={(e) => setBestBefore(e.target.value)}
              className="w-full bg-[#F6F8FA] border-none rounded-xl px-4 py-3 text-[#0F1724] focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
            />
            <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5B6470] pointer-events-none" />
          </div>
        </div>

        {/* Pickup Window */}
        <div>
          <label className="block text-[#0F1724] mb-2">Pickup Window</label>
          <input
            type="text"
            value={pickupWindow}
            onChange={(e) => setPickupWindow(e.target.value)}
            placeholder="e.g., 7-8 PM today"
            className="w-full bg-[#F6F8FA] border-none rounded-xl px-4 py-3 text-[#0F1724] placeholder:text-[#5B6470] focus:outline-none focus:ring-2 focus:ring-[#2F80ED]"
          />
        </div>

        {/* Preferred Recipients */}
        <div>
          <label className="block text-[#0F1724] mb-2">Preferred Recipients</label>
          <div className="flex gap-2">
            {recipientOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => toggleRecipientType(option.value)}
                className={`flex-1 px-4 py-3 rounded-xl border-2 transition-colors ${
                  recipientType.includes(option.value)
                    ? "bg-[#27AE60] border-[#27AE60] text-white"
                    : "bg-white border-[#DDE6EE] text-[#5B6470] hover:border-[#27AE60]"
                }`}
              >
                <Users className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Preview */}
        <div className="bg-gradient-to-br from-[#2F80ED]/5 to-[#27AE60]/5 rounded-xl p-4 border border-[#2F80ED]/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#2F80ED] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">AI</span>
            </div>
            <div>
              <h4 className="text-[#0F1724] mb-1">Coordinator Agent Preview</h4>
              <p className="text-sm text-[#5B6470]">
                Estimated {items.length > 0 ? "3-5" : "0"} potential matches nearby. 
                {items.length > 0 && " Priority recipients will be notified immediately."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="px-6 py-4 border-t border-[#DDE6EE]">
        <button
          onClick={handleSubmit}
          disabled={items.length === 0 || !quantity}
          className="w-full bg-[#27AE60] text-white py-4 rounded-xl hover:bg-[#229954] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Publish Surplus
        </button>
      </div>
    </div>
  );
}
