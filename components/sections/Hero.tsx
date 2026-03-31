"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATS } from "@/data";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-grid-bg"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gold-500/5 dark:bg-gold-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gold-700/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[500px] bg-gold-500/4 rounded-full blur-[100px]" />
      </div>

      {/* Video Background */}
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-1/2 left-1/2 w-[300.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2">
    <iframe
      src="https://www.youtube.com/embed/tOma-dkY5r4?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=tOma-dkY5r4"
      className="w-full h-full"
      allow="autoplay; fullscreen"
      style={{ border: "none" }}
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-r from-onyx-950/50 via-onyx-950/50 to-onyx-950/50" />
</div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.0] tracking-tight mb-4"
          >
            Events That{" "}
            <span className="gold-shimmer-text italic">Matter</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Premium AV production for events that leave lasting impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="gold" size="xl" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/gallery" className="flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                View Work
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4 text-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
