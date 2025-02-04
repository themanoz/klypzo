"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { ModeToggle } from "./mode-toggle";

export default function AppBar() {
  const [signedIn, setSignedIn] = useState(false);
  const router = useRouter();
  const menuItems = ["Home", "Features", "Pricing", "Login"];

  return (
    <div className="flex justify-between px-20 py-2">
      <Link
        href={"/"}
        className="flex items-center gap-0 text-2xl font-semibold"
      >
        klypzo{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      {signedIn ? (
        <div className="flex gap-2">
          {menuItems.map((item) => (
            <Link href={""} key={item}>
              <Button
                variant={item === "Login" ? "ghost" : "link"}
                className="text-black dark:text-white font-medium text-md"
              >
                {item}
              </Button>
            </Link>
          ))}
          {/* <ModeToggle /> */}
        </div>
      ) : (
        <Button
          variant={"link"}
          onClick={() => {
            setSignedIn(false), router.push("/");
          }}
        >
          Logout
        </Button>
      )}
    </div>
  );
}
