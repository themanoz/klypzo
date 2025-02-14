"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, LogOut, Menu, Settings, User, X, Zap } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export default function AppBar() {
  const [user, setUser] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["/", "features", "pricing", "signin"];

  return (
    <header className="py-4 px-4 md:px-10 lg:px-36 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-semibold"
        >
          klypzo{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Mobile menu toggle */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center gap-4">
          {user ? (
            <div className="flex gap-2 items-center">
              {menuItems.map((item) => (
                <Link href={item} key={item}>
                  <Button
                    variant={item === "signin" ? "ghost" : "link"}
                    className="text-black dark:text-white font-medium text-md"
                  >
                    {item === "/" ? "home" : item}
                  </Button>
                </Link>
              ))}
              <ModeToggle />
            </div>
          ) : (
            <>
              <Button variant="secondary" size="sm">
                <Zap /> Credits: 0/10000
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={""} alt="User avatar" />
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="text-center">
                    {user || "Kumar"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/dashboard/settings">
                    <DropdownMenuItem>
                      <User className="mr-2" /> Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/billing">
                    <DropdownMenuItem>
                      <CreditCard className="mr-2" /> Billing
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/settings">
                    <DropdownMenuItem>
                      <Settings className="mr-2" /> Settings
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden z-50">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex flex-col gap-4 p-4">
              {user ? (
                <div className="flex flex-col text-center gap-2">
                  {menuItems.map((item) => (
                    <Link href={item} key={item}>
                      <Button
                        variant="link"
                        className="text-black dark:text-white font-medium text-md"
                      >
                        {item === "/" ? "home" : item}
                      </Button>
                    </Link>
                  ))}
                  {/* <ModeToggle /> */}
                </div>
              ) : (
                <>
                  <Button variant="secondary" size="sm">
                    Credits: 0/10000
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={""} alt="User avatar" />
                        <AvatarFallback>K</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel className="text-center">
                        {user || "Kumar"}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Link href="/dashboard/settings">
                        <DropdownMenuItem>
                          <User className="mr-2" /> Profile
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/dashboard/billing">
                        <DropdownMenuItem>
                          <CreditCard className="mr-2" /> Billing
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/dashboard/settings">
                        <DropdownMenuItem>
                          <Settings className="mr-2" /> Settings
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2" /> Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
