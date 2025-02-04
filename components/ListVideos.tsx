import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const videos = [
  {
    url: "/videos/video.mp4",
  },
  {
    url: "/videos/video.mp4",
  },
  {
    url: "/videos/video.mp4",
  },
];

const firstRow = videos.slice(0, videos.length / 2);
const secondRow = videos.slice(videos.length / 2);

const VideoCard = ({ url }: { url: string }) => {
  return (
    <figure
      className={cn("relative cursor-pointer overflow-hidden rounded-xl p-4")}
    >
      <div className="flex flex-col items-center gap-0">
      <video
          className="rounded-xl"
          src={url}
          width="200"
          height="360"
          autoPlay
          muted
          loop
        />
      </div>
    </figure>
  );
};

export default function ListVideos() {
  return (
    <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((video) => (
          <VideoCard key={video.url} {...video} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((video) => (
          <VideoCard key={video.url} {...video} />
        ))}
      </Marquee>
    </div>
  );
}
