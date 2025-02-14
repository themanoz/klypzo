import FAQComponent from "@/components/FAQComponent";
import Plan from "@/components/PlanComponent";
import React from "react";

function Pricing() {
  return (
    <section className="px-4 place-items-center sm:px-8 lg:px-20 xl:px-44 lg:py-12 space-y-8">
      <Plan />
      <p className="text-3xl lg:text-4xl font-semibold mt-8">
        Frequently Asked Questions
      </p>
      {/* <FAQ /> */}
      <FAQComponent />
    </section>
  );
}

export default Pricing;
