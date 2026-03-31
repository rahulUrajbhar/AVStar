"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/data";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Gold glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gold-500/8 dark:bg-gold-500/10 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 hero-grid-bg pointer-events-none opacity-60" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gold-500/60" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold-500">
              Let&apos;s Create Something Extraordinary
            </span>
            <div className="w-12 h-px bg-gold-500/60" />
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Event.{" "}
            <span className="gold-shimmer-text italic">Legendary.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Whether it&apos;s a 50-person product launch or a 10,000-seat concert — 
            AVStar delivers flawless AV production that makes your audience feel everything.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="gold" size="xl" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Request a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {[
              "✓ Response within 2 hours",
              "✓ No hidden costs",
              "✓ Dedicated project manager",
              "✓ 500+ events delivered",
            ].map((item) => (
              <span key={item} className="font-mono text-xs tracking-wide">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </section>
  );
}
