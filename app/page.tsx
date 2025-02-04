// import AppBar from "@/components/sections/AppBar";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <div className="">
      {/* <AppBar /> */}
      <Hero />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
