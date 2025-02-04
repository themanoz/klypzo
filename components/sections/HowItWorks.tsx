import React from "react";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section className="mt-36 text-center place-items-center space-y-10">
      <Button variant={"secondary"} className="rounded-md">
        How it works
      </Button>
      <div className="place-items-center space-y-3">
        <p className="text-3xl lg:text-4xl w-4/5 md:w-3/5 font-semibold mt-8">
          Turn ideas into short videos in seconds
        </p>
        <p className="text-sm text-muted-foreground w-5/6 md:w-3/5 ">
          Produce endless videos instantly. Automatically generate
          captions,effects and backgrounds.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-4 ">
        <div className="bg-black border border-slate-900 w-[300px] h-[300px] rounded-xl"></div>
        <div className="bg-black border border-slate-900 w-[300px] h-[300px] rounded-xl"></div>
        <div className="bg-black border border-slate-900 w-[300px] h-[300px] rounded-xl"></div>
      </div>
    </section>
  );
}
