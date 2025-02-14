"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Enter inputs",
    description:
      "You should select the topic, voice and style of the video.",
    image: "/input-dark.png",
  },
  {
    id: 2,
    title: "Generate video",
    description: "After selecting the inputs, click on the generate button.",
    image: "/generate.png",
  },
  {
    id: 3,
    title: "Export & Share",
    description:
      "Finally, download the video and share on platforms.",
    image: "/download.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-36 text-center place-items-center space-y-10 px-4 md:px-8 lg:px-16">
      <Button variant={"secondary"} className="rounded-md">
        How it works
      </Button>
      <div className="place-items-center space-y-3">
        <p className="text-2xl md:text-3xl lg:text-4xl w-full md:w-3/5 font-semibold mt-8 mx-auto">
          Turn ideas into short videos in seconds
        </p>
        <p className="text-sm text-muted-foreground w-full md:w-3/5 mx-auto">
          Produce endless videos instantly. Automatically generate
          captions, effects, and backgrounds.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-6 flex-wrap">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="dark:bg-black dark:border dark:border-slate-600 w-full max-w-[280px] h-[270px] rounded-xl px-2 pt-2 shadow-lg">
              <Image
                src={step.image}
                width={360}
                height={200}
                alt="input"
                className="rounded-xl p-2 dark:border w-[300px] h-[150px]"
              />
              <div className="text-black dark:text-white text-left py-3 px-1">
                <p className="font-semibold"> {step.title}</p>
                <p className="text-muted-foreground text-slate-400">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center justify-center">
                <div className="md:hidden">
                  <ArrowDown size={28} className="text-black dark:text-white" />
                </div>
                <div className="hidden md:flex">
                  <ArrowRight size={28} className="text-black dark:text-white" />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}


// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "motion/react";

// export default function HowItWorks() {
//   const [selectedStep, setSelectedStep] = useState(1);
//   const [expandedStep, setExpandedStep] = useState<number | null>(1);

//   return (
//     <section className="mt-36 text-center place-items-center space-y-10">
//       <Button variant={"secondary"} className="rounded-md">
//         How it works
//       </Button>
//       <div className="place-items-center space-y-3">
//         <p className="text-3xl lg:text-4xl w-4/5 md:w-3/5 font-semibold mt-8">
//           Turn ideas into short videos in seconds
//         </p>
//         <p className="text-sm text-muted-foreground w-5/6 md:w-3/5 ">
//           Produce endless videos instantly. Automatically generate
//           captions,effects and backgrounds.
//         </p>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-20">
//         <motion.div
//           className="flex flex-col justify-between w-full lg:w-[300px]"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {steps.map((step) => (
//             <div key={step.id} className={`${selectedStep === step.id ? "border border-slate-200 shadow-md rounded-md":""}`}>
//               <motion.button
//                 onClick={() => {
//                   setSelectedStep(step.id);
//                   setExpandedStep(step.id);
//                 }}
//                 className={`p-3 w-full transition-colors duration-200 text-left ${
//                   selectedStep === step.id
//                     ? "text-black font-semibold"
//                     : "text-muted-foreground"
//                 }`}
//               >
//                 {step.title}
//               </motion.button>
//               {expandedStep === step.id && (
//                 <motion.div className="p-3 text-left">{step.description}</motion.div>
//               )}
//             </div>
//           ))}
//         </motion.div>
//         <motion.div
//           key={selectedStep}
//           initial={{ opacity: 0, x: 0 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center items-center w-[300px] h-[300px] rounded-md text-lg font-semibold bg-black text-white"
//         >
//           {steps.find((step) => step.id === selectedStep)?.title || ""}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
