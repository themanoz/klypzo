"use client";
import React, { useState } from "react";
import SelectTopic from "../../../components/SelectTopic";
import SelectStyle from "../../../components/SelectStyle";
import SelectDuration from "../../../components/SelectDuration";
import { Button } from "@/components/ui/button";
// import axios from "axios";
import VoiceList from "../../../components/VoiceList";
import Image from "next/image";

function Dashboard() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const onHandleInputChange = (fieldName: string, fieldValue: string) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const onClickCreate = () => {
    // getVideoScript();
  };
  return (
      <div className="grid grid-cols-2 gap-6 py-8 px-4">
        <div>
          <div className="flex items-center gap-4">
            <SelectTopic onUserSelect={onHandleInputChange} />
            <VoiceList onUserSelect={onHandleInputChange} />
          </div>
          <SelectStyle onUserSelect={onHandleInputChange} />
          <SelectDuration onUserSelect={onHandleInputChange} />
          <div className="pt-5">
            <Button className="w-full" onClick={onClickCreate}>
              Generate video
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/img.jpg"}
            width={300}
            height={360}
            alt="image"
            className="rounded-xl border-2 border-slate-800"
          />
        </div>
      </div>
  );
}

export default Dashboard;
