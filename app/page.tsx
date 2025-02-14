"use client";
// import AppBar from "@/components/sections/AppBar";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import { motion } from "motion/react";
import Features from "./features/page";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {/* <AppBar /> */}
      <Hero />
      <HowItWorks />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </motion.div>
  );
}
