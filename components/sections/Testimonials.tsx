"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  return (
    <section className="section bg-muted/30 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">Client Stories</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Trusted by <span className="gold-gradient-text italic">India's Best</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            See what premium brands and event professionals say about working with AVStar
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="card-solid rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              {/* Decorative quote */}
              <div className="absolute top-6 left-8 opacity-10">
                <Quote className="w-20 h-20 text-gold-500 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-medium italic text-foreground mb-8 leading-relaxed relative z-10">
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-500/5 border-2 border-gold-500/40 flex items-center justify-center mb-3">
                  <span className="font-display text-2xl font-bold text-gold-500">
                    {TESTIMONIALS[active].name.charAt(0)}
                  </span>
                </div>
                <p className="font-display font-bold text-foreground text-lg">{TESTIMONIALS[active].name}</p>
                <p className="text-sm text-muted-foreground text-center">{TESTIMONIALS[active].title}</p>
                <div className="mt-3 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full">
                  <span className="font-mono text-[9px] tracking-widest text-gold-500 uppercase">
                    {TESTIMONIALS[active].event}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-gold-500 flex items-center justify-center text-muted-foreground hover:text-gold-500 transition-all hover:-translate-x-0.5"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-6 h-2 bg-gold-500"
                      : "w-2 h-2 bg-border hover:bg-gold-500/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-gold-500 flex items-center justify-center text-muted-foreground hover:text-gold-500 transition-all hover:translate-x-0.5"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
