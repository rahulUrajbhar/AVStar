"use client";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data";

export default function Process() {
  return (
    <section className="section bg-background relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 hero-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/4 dark:bg-gold-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">How We Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            From Idea to{" "}
            <span className="gold-gradient-text italic">Standing Ovation</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our battle-tested 4-phase process ensures zero surprises and 100%
            delivery — every time, at any scale.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full border border-gold-500/30 bg-card flex items-center justify-center group-hover:border-gold-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-500">
                    <span className="font-display text-4xl font-bold gold-gradient-text">
                      {step.number}
                    </span>
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-gold-500/10 scale-110 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector arrow (mobile/tablet) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden mt-6 w-px h-8 bg-gradient-to-b from-gold-500/40 to-transparent mx-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
