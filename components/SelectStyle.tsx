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
  ];
  
  return (
    <>
      <div className="pt-5 space-y-2">
        <h2>Select style</h2>
        <p className="text-muted-foreground text-sm">Select your video style</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-4">
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
                className={`h-40 w-30 object-cover rounded-md ${
                  selectedOption === style.name &&
                  "border-4 border-primary rounded-md"
                }`}
                onClick={() => {
                  setSelectedOption(style.name);
                  onUserSelect("imageStyle", style.name);
                }}
              />
              <h2 className="absolute p-1 bg-gray-900 text-white bottom-0 w-fit text-sm">
                {style.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
