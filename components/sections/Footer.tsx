import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 sm:py-4 px-4 sm:px-8 lg:px-20 xl:px-56 text-slate-500 font-base">
        <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-0">
          &copy; 2025 klypzo. All rights reserved.
        </p>

        <ul className="flex gap-4 sm:gap-5 text-xs sm:text-sm">
          <li> </li>
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">Terms of Service</li>
        </ul>
      </div>
    </>
  );
}
