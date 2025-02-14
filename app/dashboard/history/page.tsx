import { Download, VideoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function History() {
  const videoGenerations = [
    "Fun facts",
    "Random facts",
    "Scary story",
    "Motivational story",
    "Science facts",
    "Life hacks",
    "Comedy",
    "Jokes",
  ].map((name) => ({ name, videoUrl: "/videos/video.mp4" }));

  return (
    <div className="px-6 md:px-12 lg:px-28">
      <h2 className="mb-4 text-lg font-medium">Generations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2">
        {videoGenerations.map(({ name, videoUrl }) => (
          <div
            key={name}
            className="border px-2 py-2 rounded-xl w-[300px] md:w-[280px] lg:w-[170px]"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src={"/img.jpg"}
                  width={280}
                  height={440}
                  alt="image"
                  className="rounded-xl border-2 border-slate-800 w-[300px] lg:w-[170px] h-[250px]"
                />

                <div className="flex items-center gap-2">
                  <VideoIcon className="w-4 h-4" />
                  <span className="text-sm">{name}</span>
                </div>
                <Button className="w-full">Download</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
