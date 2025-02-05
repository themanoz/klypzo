import { Download, VideoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {videoGenerations.map(({ name, videoUrl }) => (
          <div key={name} className="border px-2 py-2 rounded-md w-[300px] md:w-[280px] lg:w-[250px]">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <VideoIcon className="w-4 h-4" />
                <span>{name}</span>
              </div>
              <Link href={videoUrl} download>
                <Download className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
