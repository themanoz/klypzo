"use client";
import React, { useState } from "react";
import SelectTopic from "@/components/SelectTopic";
import SelectStyle from "@/components/SelectStyle";
import SelectDuration from "@/components/SelectDuration";
import { Button } from "@/components/ui/button";
import VoiceList from "@/components/VoiceList";
import Image from "next/image";

function Dashboard() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const onHandleInputChange = (fieldName: string, fieldValue: string) => {
    // console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const onClickCreate = () => {
    // getVideoScript();
    // console.log("FormData: ", formData);
  };
  
  return (
    <div className="h-fit flex flex-col lg:flex-row items-center justify-center gap-32">
      <div>
        <h2 className="px-20 font-medium text-lg">Welcome, Manoj</h2>
        <SelectTopic onUserSelect={onHandleInputChange} />
        <VoiceList onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <div className="pt-2 px-20">
          <Button className="w-[300px] md:w-[600px] lg:w-full" onClick={onClickCreate}>
            Generate video
          </Button>
        </div>
      </div>

      <div className="flex flex-col text-center justify-center space-y-2 px-6">
      <Image
          src={"/img.jpg"}
          width={280}
          height={440}
          alt="image"
          className="rounded-xl border-2 border-slate-800 w-[300px] lg:w-[320px] h-[550px]"
        />
        <Button className="w-[300px] lg:w-[320px]">Download</Button>
        <p className="text-xs text-muted-foreground">
          Note: This is a placeholder, final video will be rendered here.{" "}
        </p>
        
      </div>
    </div>
  );
}

export default Dashboard;
