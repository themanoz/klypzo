"use client";

import PasswordChange from "@/components/PasswordChange";
import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <div>
      <h2 className="text-lg font-medium px-2">Change passowrd</h2>
      <div className="w-full h-[400px] mt-4 rounded-md px-2 space-y-4">
        <PasswordChange label="Enter current password" />
        <PasswordChange label="Enter new password" />
        <PasswordChange label="Confirm password" />
        <Button>Change Password</Button> 
      </div>
    </div>
  );
}

export default page;
