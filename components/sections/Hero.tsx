import React from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import { Button } from "@/components/ui/button";
// import ListVideos from "@/components/ListVideos";
import ModalVideo from "@/components/modal-video";
import dark from "@/public/dark.png";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="place-items-center">
      <div className="flex items-center pt-10 justify-center">
        <div className="flex flex-col items-center gap-2 px-4 py-8 md:px-8 lg:px-16 space-y-4">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap items-center justify-center gap-2 text-center">
            Generate{" "}
            <WordRotate
              className="text-3xl md:text-3xl lg:text-4xl text-black dark:text-white font-semibold"
              words={["Instagram Reels", "Youtube Shorts", "Tiktok Content"]}
              duration={1000}
            />{" "}
            <span className="w-full">effortlessly for social media</span>
          </div>
          <p className="w-3/5 text-center text-muted-foreground pt-3 font-medium">
            Transform ideas into captivating AI-powered short videos with Klypzo
            perfect for creators and marketers.
          </p>
          <Link href={"/signup"}>
            <Button variant={"default"} className="rounded-full">
              Get started
            </Button>
          </Link>
          {/* </div> */}
        </div>

        {/* <ListVideos /> */}
      </div>
      <ModalVideo
        thumb={dark}
        thumbWidth={1920}
        thumbHeight={1080}
        thumbAlt="Modal video thumbnail"
        video="/videos/demo.mov"
        videoWidth={1920}
        videoHeight={900}
      />
    </div>
  );
}
