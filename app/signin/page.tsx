"use client";

import React, { useState } from "react";
// import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff } from "lucide-react";
// import { ClerkAPIError } from '@clerk/types'
// import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

export default function Signin() {
  // const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
// const [errors, setErrors] = React.useState<ClerkAPIError[]>();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // if (!isLoaded) {
  //   return null;
  // }

  // async function submit(e: React.FormEvent) {
  //   e.preventDefault();
  //   if (!isLoaded) {
  //     return;
  //   }

  //   try {
  //     const result = await signIn.create({
  //       identifier: emailAddress,
  //       password,
  //     });

  //     if (result.status === "complete") {
  //       await setActive({
  //         session: result.createdSessionId,
  //       });
  //       router.push("/dashboard");
  //     } else {
  //       console.error(JSON.stringify(result, null, 2));
  //     }
  //   } catch (err) {
  //     // if (isClerkAPIResponseError(err)) setErrors(err.errors)
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // }

  return (
    <div className="flex items-center justify-center mt-32 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            SignIn for klypzo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            {/* {errors && (
              <Alert variant="destructive">
                <AlertDescription>{errors.map((error) => error.message)}</AlertDescription>
              </Alert>
            )} */}
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
