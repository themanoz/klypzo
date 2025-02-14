"use client";
import React from "react";
import { Zap, Layout, Share, Cloud, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesBentoGrid() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-56">
      <div className="max-w-7xl mx-auto place-items-center">
        <Button variant={"secondary"} className="rounded-md mb-10">
          Features
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Featured Item */}
          <div className="border md:col-span-2 dark:bg-black text-white px-8 py-6 rounded-lg shadow-lg flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-4">
              <Zap className="text-blue-500" size={32} />
              <h3 className="text-xl font-bold">Fast Video Generation</h3>
            </div>
            <p className="text-gray-600">
              Generate videos in seconds with our AI-powered engine.
            </p>
          </div>
          {/* Secondary Feature Items */}
          <div className="border dark:bg-black text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-3">
              <Layout className="text-green-500" size={28} />
              <h4 className="text-lg font-semibold">Customizable styles</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Choose from a variety of styles and customize easily.
            </p>
          </div>
          <div className="border dark:bg-black text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-3">
              <Share className="text-red-500" size={28} />
              <h4 className="text-lg font-semibold">Easy Sharing</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Share your videos seamlessly on social platforms.
            </p>
          </div>
          <div className="border dark:bg-black text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-3">
              <Cloud className="text-purple-500" size={28} />
              <h4 className="text-lg font-semibold">Storage</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Store your videos securely in our storage.
            </p>
          </div>
          <div className="border dark:bg-black text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-3">
              <BarChart className="text-yellow-500" size={28} />
              <h4 className="text-lg font-semibold">Analytics</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Track your video performance with detailed analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
