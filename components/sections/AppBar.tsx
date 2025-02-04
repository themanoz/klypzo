"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";
import { useClerk, useUser } from "@clerk/nextjs";

export default function AppBar() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["home", "features", "pricing", "signin"];

  if (!isLoaded) {
    return null;
  }

  return (
    <header className="flex justify-between items-center py-4 px-4 md:px-10 lg:px-20 border-b">
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
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="hidden sm:flex items-center gap-4">
        {user ? (
          // <ul className="flex gap-3">
          //   <li>
          //     <Link href={"/pricing"}>
          //       <Button
          //         variant={"ghost"}
          //         size={"sm"}
          //         className="text-sm md:text-md"
          //       >
          //         Pricing
          //       </Button>
          //     </Link>
          //   </li>
          //   <li>
          //     <Link href={"/courses"}>
          //       <Button
          //         variant={"ghost"}
          //         size={"sm"}
          //         className="text-sm md:text-md"
          //       >
          //         Courses
          //       </Button>
          //     </Link>
          //   </li>
          // </ul>
          <div className="flex gap-2">
            {" "}
            {menuItems.map((item) => (
              <Link href={`${item}`} key={item}>
                <Button
                  variant={item === "Login" ? "ghost" : "link"}
                  className="text-black dark:text-white font-medium text-md"
                >
                  {item}
                </Button>
              </Link>
            ))}
          </div>
        ) : (
          <Button variant={"ghost"} onClick={() => {
            signOut();
          }}>Logout</Button>
        )}

        {/* <div className="flex items-center gap-4">
          {!user ? (
            <Link href={"/signin"}>
              <Button
                variant={"ghost"}
                size={"sm"}
                className="text-sm md:text-md gap-1"
              >
                Signin
              </Button>
            </Link>
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.imageUrl} alt="User avatar" />
                    <AvatarFallback>
                      {user.firstName?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    {user.emailAddresses[0].emailAddress.split("@")[0] ||
                      "Username"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href={"/dashboard/profile"}>
                    <DropdownMenuItem>
                      <User /> Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/dashboard/billing"}>
                    <DropdownMenuItem>
                      <CreditCard />
                      Billing
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/dashboard/settings"}>
                    <DropdownMenuItem>
                      <Settings />
                      Settings
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <LogOut /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div> */}
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {!user && (
              <div className="flex flex-col text-center gap-2">
                {menuItems.map((item) => (
                  <Link href={`/${item}`} key={item}>
                    <Button
                      variant={item === "Login" ? "ghost" : "link"}
                      className="text-black dark:text-white font-medium text-md"
                    >
                      {item}
                    </Button>
                  </Link>
                ))}
              </div>
            )}

            {/* {!user ? (
              <li>
                <Link href={"/signin"}>
                  <Button
                    variant={"ghost"}
                    size={"sm"}
                    className="w-full text-left text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    Signin
                  </Button>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link href={"/profile"}>
                    <Button
                      variant={"ghost"}
                      size={"sm"}
                      className="w-full text-left text-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/billing"}>
                    <Button
                      variant={"ghost"}
                      size={"sm"}
                      className="w-full text-left text-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      Billing
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/settings"}>
                    <Button
                      variant={"ghost"}
                      size={"sm"}
                      className="w-full text-left text-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      Settings
                    </Button>
                  </Link>
                </li>
                <li>
                  <Button
                    variant={"ghost"}
                    size={"sm"}
                    className="w-full text-left text-sm"
                    onClick={() => {
                      signOut();
                      setMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </li>
              </>
            )} */}
          </ul>
        </div>
      )}
    </header>
  );
}

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import React from "react";
// // import { useRouter } from "next/navigation";
// // import { ModeToggle } from "./mode-toggle";

// export default function AppBar() {
//   // const [signedIn, setSignedIn] = useState(false);
//   // const router = useRouter();
//   const menuItems = ["home", "features", "pricing", "signin"];

//   return (
//     <div className="flex justify-between px-20 py-4">
//
//       {/* {signedIn ? ( */}
//         <div className="flex gap-2">
//           {menuItems.map((item) => (
//             <Link href={`/${item}`} key={item}>
//               <Button
//                 variant={item === "Login" ? "ghost" : "link"}
//                 className="text-black dark:text-white font-medium text-md"
//               >
//                 {item}
//               </Button>
//             </Link>
//           ))}
//           {/* <ModeToggle /> */}
//         </div>
//       {/* ) : ( */}
//         {/* <Button
//           variant={"link"}
//           onClick={() => {
//             setSignedIn(false), router.push("/");
//           }}
//         >
//           Logout
//         </Button> */}
//       {/* )} */}
//     </div>
//   );
// }
