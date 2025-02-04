import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectProps {
  onUserSelect: (key: string, value: string) => void;
}

export default function SelectDuration({ onUserSelect }: ProjectProps) {
  return (
    <>
      <div className="pt-5 space-y-2">
        <h2>Duration</h2>
        <p className="text-muted-foreground text-sm">
          Select the duration of your video
        </p>
        <Select
          onValueChange={(value) => {
            value != "Custom Prompt" && onUserSelect("duration", value);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30 Seconds">30 Seconds</SelectItem>
            <SelectItem value="60 Seconds">60 Seconds</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
