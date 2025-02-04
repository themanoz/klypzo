import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQComponent() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full sm:w-[450px] md:w-[400px] lg:w-[700px] mt-10"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What happens if I run out of credits?
        </AccordionTrigger>
        <AccordionContent>
          You can upgrade to a higher plan for better value or purchase
          additional credits anytime within the app.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
        <AccordionContent>
          We don&apos;t offer free trials as each video incurs a cost. However,
          our platform provides a fast and cost-effective alternative to manual
          video creation or hiring freelancers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you offer supprt?</AccordionTrigger>
        <AccordionContent>
          Yes, contact us at support@klypzo.site. We typically respond within 12
          hours on weekdays, with priority and live chat support for paying
          customers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Are my payments secure?</AccordionTrigger>
        <AccordionContent>
          All transactions are processed through Stripe, ensuring top-tier
          security. We do not store payment details.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I get a refund?</AccordionTrigger>
        <AccordionContent>
          If requested within 30 days, we&apos;ll refund any unused credits—no
          questions asked. Send an email to support@klypzo.site, and we&apos;ll handle it.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
