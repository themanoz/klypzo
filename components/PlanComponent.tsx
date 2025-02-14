"use client";
// import { useState } from "react";
// import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// type Plan = "monthly" | "yearly";

const Plan = () => {
  // const [selectedPlan, setSelectedPlan] = useState<Plan>("monthly");

  const pricingDetails = {
    monthly: {
      price: 29,
    },
    yearly: {
      price: 85,
    },
  };

  const features = [
    "100 videos/month",
    "AI generated background images",
    "5+ art styles",
    "Live chat support",
    "12+ AI voices",
  ];

  // const handlePlanChange = (checked: boolean) => {
  //   setSelectedPlan(checked ? "yearly" : "monthly");
  // };

  return (
    <div className="p-8 max-w-4xl place-items-center mx-2 lg:mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white text-black">
        Choose Your Plan
      </h2>

      {/* <div className="flex justify-center items-center gap-6 mb-8">
        <p className="text-lg text-white">Monthly</p>
        <Switch onCheckedChange={handlePlanChange} />
        <p className="text-lg text-white">Yearly</p>
      </div> */}

      <div className="grid grid-cols-1 gap-8 text-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 px-4 py-4 border-2 rounded-lg shadow-lg w-fit">
          <div className="flex gap-4">
            <div className="flex flex-col space-y-4">
              <span className="text-4xl font-semibold">
                $ {pricingDetails.monthly.price}{" "}
              </span>{" "}
              / per month
              <Button>Subscribe</Button>
            </div>
            {/* <Separator orientation="vertical" className="bg-slate-100" /> */}
            <div className="flex flex-col space-y-4">
              <span className="text-4xl font-semibold">
                $ {pricingDetails.yearly.price}{" "}
              </span>{" "}
              / per year
              <Button>Subscribe</Button>
            </div>
          </div>
          {/* <h3 className="text-3xl font-semibold text-white">
            ${pricingDetails[selectedPlan].price}{" "}
            {selectedPlan === "monthly" ? "/ month" : "/ year"}
          </h3> */}
          {/* <h4 className="text-xl font-semibold text-white mb-4 mt-4">Features</h4> */}
          <ul className="space-y-3 text-gray-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-center space-x-2">
                <span className="text-white">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plan;
