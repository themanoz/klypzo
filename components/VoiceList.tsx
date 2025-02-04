"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CirclePause, CirclePlay } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Voice {
  voice_id: string;
  name: string;
  labels: {
    gender: string;
    use_case: string;
  };
  preview_url: string;
}

interface ProjectProps {
  onUserSelect: (key: string, value: string) => void;
}

export default function VoiceList({ onUserSelect }: ProjectProps) {
  const [voices, setVoices] = useState<Voice[]>([]);
  const [playing, setPlaying] = useState<string | null>(null);
  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement | null>(
    null
  );
  // const [selectedVoice, setSelectedVoice] = useState("");

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    async function fetchVoices() {
      try {
        const response = await axios.get("/api/text-speech/voices");
        setVoices(response.data.voices || []);
      } catch (error) {
        console.error("Error fetching voices:", error);
      }
    }
    fetchVoices();
  }, []);

  const playVoice = (url: string, voiceId: string) => {
    if (playing === voiceId) {
      audioInstance?.pause();
      setPlaying(null);
      setAudioInstance(null)
      return;
    }

    if (audioInstance) {
      audioInstance.pause();
    }

    const audio = new Audio(url);
    audio.play();
    setPlaying(voiceId);
    setAudioInstance(audio);

    audio.onended = () => setPlaying(null);
  };

  return (
    <div className="pt-5">
      <div className="space-y-2">
        <h2>Select Voice</h2>
        <p className="text-muted-foreground text-sm">
          Select the voice for your video
        </p>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="w-full mt-2">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between"
          >
            {value
              ? voices.find((voice) => voice.name === value)?.name
              : "Select voice..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search voice..." />
            <CommandList>
              <CommandEmpty>No voice found.</CommandEmpty>
              <CommandGroup>
                {voices.map((voice) => (
                  <CommandItem
                    key={voice.voice_id}
                    value={voice.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      // setSelectedVoice(currentValue);
                      onUserSelect("voiceId", voice.voice_id)
                      setOpen(false);
                    }}
                  >
                    <span
                      onClick={() =>
                        playVoice(voice.preview_url, voice.voice_id)
                      }
                    >
                      {playing === voice.voice_id ? (
                        <CirclePause className="w-5 h-5" />
                      ) : (
                        <CirclePlay className="w-5 h-5" />
                      )}
                    </span>
                    <div className="flex justify-between gap-10">
                      <span className="text-md font-medium">{voice.name}</span>
                      <Badge variant={"secondary"}>{voice.labels.gender}</Badge>
                    </div>

                    <Check
                      className={cn(
                        "ml-auto",
                        value === voice.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 cursor-pointer">
        {voices.map((voice) => (
          <div
            key={voice.voice_id}
            className={`p-2 border rounded-lg shadow-sm flex justify-between items-center ${
              selectedVoice === voice.voice_id &&
              "border-2 border-primary rounded-md"
            }`}
            onClick={() => {
              setSelectedVoice(voice.voice_id);
              onUserSelect("voice", voice.name);
            }}
          >
            
          </div>
        ))}
      </div> */}
    </div>
  );
}
