"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ProjectProps {
  onUserSelect: (key: string, value: string) => void;
}

export default function SelectTopic({ onUserSelect }: ProjectProps) {
  const [selectedTopic, setSelectedTopic] = useState("");

  const topics = [
    "Motivational Story",
    "Life Hacks",
    "Random Facts",
    "Scary Story",
    "Fun Fact",
    "Custom Prompt",
  ];

  return (
    <>
      <div className="pt-5 space-y-2">
        <h2>Select topic</h2>
        <p className="text-muted-foreground text-sm">
          What is the topic of your video?
        </p>
        <Select
          onValueChange={(topic) => {
            setSelectedTopic(topic);
            if (topic !== "Custom Prompt") {
              onUserSelect("topic", topic);
            }
          }}
        >
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select topic" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((topic) => (
              <SelectItem value={topic} key={topic}>
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedTopic === "Custom Prompt" && (
          <Textarea
            placeholder="Enter your custom prompt here..."
            className="w-[300px]"
            onChange={(e) => onUserSelect("topic", e.target.value)}
          />
        )}
      </div>
    </>
  );
}
