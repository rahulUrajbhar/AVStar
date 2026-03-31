"use client";
import { motion } from "framer-motion";
import { CLIENTS } from "@/data";

export default function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container-custom mb-10 text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Trusted by 200+ brands across India
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-center gap-12">
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-4 flex-shrink-0 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-500 transition-colors" />
                <span className="font-display text-xl font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
