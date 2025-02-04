"use client";

// import Link from "next/link";
import NavLinks from "../NavLinks";

export default function SideBar() {
  return (
    <div className="flex h-[670px] flex-col place-items-center p-4 w-4/5">
      {/* <div className="flex items-center text-white">
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
        </div> */}
      <div className="flex grow flex-col space-y-2">
        <NavLinks />
        <div className="hidden h-[400px] w-full md:block"></div>
      </div>
    </div>
  );
}
