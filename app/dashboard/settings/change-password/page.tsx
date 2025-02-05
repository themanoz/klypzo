"use client";

import PasswordChange from "@/components/PasswordChange";
import { Button } from "@/components/ui/button";
import React from "react";

function Page() {
  return (
    <div>
      <h2 className="lg:text-lg font-medium px-2">Change password</h2>
      <div className="flex flex-col w-full h-auto mt-4 rounded-md px-2 space-y-4">
        <PasswordChange label="Enter current password" />
        <PasswordChange label="Enter new password" />
        <PasswordChange label="Confirm password" />
        <Button className="w-full lg:w-2/5">Change Password</Button>
      </div>
    </div>
  );
}

export default Page;
