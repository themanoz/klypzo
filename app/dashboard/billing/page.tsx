import { Button } from "@/components/ui/button";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

function Billing() {
  const billingOptions = [
    {
      name: "Credits",
      count: 100,
      credits: 10000,
    },
    {
      name: "Generations",
      count: 13,
      generations: 100,
    },
  ];
  return (
    <div className=" md:px-10 lg:px-28 space-y-10">
      <div className="flex flex-col lg:flex-row justify-between px-3">
        <div>
          <h2 className="font-semibold text-lg">Plan & Billing</h2>
          <p>Manage your plan and payments</p>
        </div>
        <div className="pt-3 flex md:flex-col lg:flex-row gap-2">
          <Button variant={"outline"}>Cancel Subscription</Button>
          <Button variant={"outline"}>
            Manage Payments
          </Button>
        </div>
      </div>
      <div>
        <h2 className="px-2">Current Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:pl-2 pt-6">
          <div className="border md:w-[300px] lg:w-[360px] h-[200px] rounded-lg relative p-4">
            <Badge
              className="absolute right-2 top-2 text-green-700 hover:bg-green-100 bg-green-100 text-xs px-2 rounded-lg"
            >
              Active
            </Badge>

            <h2 className="font-medium mt-24">Monthly Plan</h2>
            <p className="text-3xl font-medium">
              $40 <span className="text-sm">/ month</span>
            </p>
          </div>

          {billingOptions.map((option) => (
            <div
              className="border md:w-[300px] lg:w-[360px] h-[200px] rounded-lg"
              key={option.name}
            >
              <div className="mt-28 px-4">
                <div className="space-y-1">
                  <h2 className="font-medium">{option.name}</h2>
                  <p>
                    {option.count} /{" "}
                    {option.name === "Credits"
                      ? option.credits
                      : option.generations}
                  </p>
                </div>
                <Progress
                  value={option.name === "Credits" ? 10 : 2}
                  className="w-[60%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Billing;
