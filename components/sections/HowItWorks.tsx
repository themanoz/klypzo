import React from "react";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section className="mt-36 text-center place-items-center space-y-10">
      <Button variant={"secondary"} className="rounded-md">
        How it works
      </Button>
      <div className="place-items-center space-y-3">
        <p className="text-5xl w-3/5 text-center font-medium">
          Turn ideas into short videos in seconds
        </p>
        <p className="text-sm text-muted-foreground">
          Produce endless videos instantly. Automatically generate
          captions,effects and backgrounds.
        </p>
      </div>

      <div className="flex justify-evenly gap-4">
        <div className="bg-black border border-slate-900 w-[300px] h-[300px] rounded-xl">
            {/* <Image 
            src={"/topic.png"}
            width={100}
            height={100}
            alt="topic_component"
            className="object-cover w-[200px]"
            /> */}
        </div>
        <div className="bg-black border border-slate-900 w-[300px] h-[300px] rounded-xl"></div>
        <div className="bg-black border border-slate-900 w-[300px] h-[300px] rounded-xl"></div>
      </div>
    </section>
  );
}
