import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import CaseStudy from "@/components/sections/CaseStudy";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTAQuote from "@/components/sections/CTAQuote";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "AVStar Events — India's Premier AV Production & Event Management",
  description: "Transform your events with cutting-edge AV production. 500+ events delivered. 98% client satisfaction. Trusted by 200+ premium brands.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Clients /> */}
      <Services />
      <WhyChooseUs />
      <Gallery />
      <CaseStudy />
      <Process />
      <About />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTAQuote />
      <BlogPreview />
      <CTA />
    </>
  );
}

