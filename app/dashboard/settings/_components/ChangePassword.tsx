"use client";

import InputComponent from "@/components/InputComponent";
import { Button } from "@/components/ui/button";
import React from "react";

function ChangePassword() {
  return (
    <div>
      <h2 className="lg:text-lg font-medium px-2">Change password</h2>
      <div className="flex flex-col w-full h-auto mt-4 rounded-md px-2 space-y-4">
        <InputComponent label="Enter current password"  inputType="password"/>
        <InputComponent label="Enter new password"  inputType="password"/>
        <InputComponent label="Confirm password"  inputType="password"/>
        <Button className="w-full lg:w-2/5">Change Password</Button>
      </div>
    </div>
  );
}

export default ChangePassword;
