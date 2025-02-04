import React, { useState } from "react";
import Image from "next/image";

interface ProjectProps {
  onUserSelect: (key: string, value: string) => void;
}

export default function SelectStyle({ onUserSelect }: ProjectProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const styleOptions = [
    {
      name: "Realistic",
      image: "/real.jpeg",
    },
    {
      name: "Cartoon",
      image: "/cartoon.jpeg",
    },
    {
      name: "Comic",
      image: "/comic.jpeg",
    },
    {
      name: "Water Color",
      image: "/water_color.jpeg",
    },
    {
      name: "GTA",
      image: "/GTA.jpeg",
    },
    {
      name: "Cinematic",
      image: "/cinematic.jpeg",
    },
    // {
    //   name: "Anime",
    //   image: "/anime.jpeg",
    // },
  ];

  return (
    <>
      <div className="pt-6 space-y-2 px-20">
        <h2>Select style</h2>
        <p className="text-muted-foreground text-sm">Select your video style</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-2 md:gap-14 lg:gap-6">
          {styleOptions.map((style) => (
            <div
              key={style.name}
              className="relative hover:scale-105 transition-all cursor-pointer"
            >
              <Image
                src={style.image}
                width={120}
                height={120}
                alt="image"
                className={`h-40 md:h-30 lg:h-20 w-40 md:w-30 lg:w-20 object-cover rounded-md ${
                  selectedOption === style.name &&
                  "border-4 border-red-400 rounded-md"
                }`}
                onClick={() => {
                  setSelectedOption(style.name);
                  onUserSelect("imageStyle", style.name);
                }}
              />
              <h2 className="absolute p-1 bg-gray-900 text-white bottom-0 w-full md:w-[160px] lg:w-full text-xs text-center rounded-t-none rounded-b-md">
                {style.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
