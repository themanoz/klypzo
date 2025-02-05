"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

type Plan = "monthly" | "yearly";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("monthly");

  const pricingDetails = {
    monthly: {
      price: 29.99,
    },
    yearly: {
      price: 299.99,
    },
  };

  const features = [
    "100 videos/month",
    "AI generated background images",
    "5+ art styles",
    "Live chat support",
    "12+ AI voices",
  ];

  const handlePlanChange = (checked: boolean) => {
    setSelectedPlan(checked ? "yearly" : "monthly");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700">
        Choose Your Plan
      </h2>

      <div className="flex justify-center items-center gap-6 mb-8">
        <p className="text-lg text-gray-600">Monthly</p>
        <Switch onCheckedChange={handlePlanChange} />
        <p className="text-lg text-gray-600">Yearly</p>
      </div>

      <div className="grid grid-cols-1 gap-8 text-center">
        <div className="p-6 border-2 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-blue-600">
            ${pricingDetails[selectedPlan].price.toFixed(2)}{" "}
            {selectedPlan === "monthly" ? "/ month" : "/ year"}
          </h3>
          <h4 className="text-xl font-semibold text-gray-800 mb-4 mt-4">Features</h4>
          <ul className="space-y-3 text-gray-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-center space-x-2">
                <span className="text-green-500">✔️</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Pricing;
