import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight, SquarePlay } from "lucide-react";

function CTA() {
  return (
    <section className="place-items-center w-full mb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Start Creating Today!
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Create endless short videos simultaneously with automatic
              captions,effects and backgrounds.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button>
              Try now <MoveRight className="w-3 h-3" />
            </Button>
            <Button variant={"secondary"} >
              <SquarePlay /> Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
