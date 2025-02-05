"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

interface PasswordProps {
  label: string;
  //   inputType: string;
}

function PasswordChange({ label }: PasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <div className="relative w-2/5">
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder={`${label}`}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-gray-500" />
          ) : (
            <Eye className="h-4 w-4 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordChange;
