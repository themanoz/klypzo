"use client";

import React from "react";
import FAQComponent from "@/components/FAQComponent";
import { Button } from "../ui/button";

export default function FAQ() {
  return (
    <section className="px-4 place-items-center sm:px-8 lg:px-20 xl:px-44 py-10 sm:py-16 lg:py-32 space-y-8">
      <div className="text-center">
        <Button variant={"secondary"} className="rounded-md">
          FAQs
        </Button>
        <p className="text-3xl lg:text-4xl font-semibold mt-8">
          Frequently Asked Questions
        </p>
      </div>
      <FAQComponent />
    </section>
  );
}
