"use client";
import { motion } from "framer-motion";
import { Sparkles, Target, Users } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "We don't follow trends—we create them. Always pushing the boundaries of what's technically possible and creatively imaginable.",
  },
  {
    icon: Target,
    title: "Excellence Every Detail",
    description:
      "From the first pixel to the final note, we obsess over perfection. No shortcuts, no excuses, just flawless execution.",
  },
  {
    icon: Users,
    title: "People-Centric",
    description:
      "Your success is our success. We're not vendors—we're partners invested in your event's triumph and your team's satisfaction.",
  },
];

export default function About() {
  return (
    <section className="section bg-background overflow-hidden relative">
      {/* BG decoration */}
      <div className="absolute inset-0 opacity-40 hero-grid-bg pointer-events-none" />
      <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-gold-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              The AVStar <span className="gold-gradient-text italic">Difference</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                15 Years of Crafting Excellence
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2009, AVStar started with a simple belief: great events demand 
                world-class AV and fearless creativity. What began as a scrappy Mumbai-based 
                outfit has evolved into an industry-leading creative powerhouse.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we've delivered 500+ transformational events, touched 1M+ lives, and earned 
                the trust of 200+ premium brands. But we haven't lost our startup DNA—we still 
                approach every project like it's our first, bringing fresh energy, bold ideas, 
                and relentless attention to detail.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every event is an opportunity to exceed expectations. Every client is a partner. 
                Every moment matters.
              </p>
            </motion.div>

            {/* Right: Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-border bg-card/50 hover:border-gold-500/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
                          <Icon className="h-5 w-5 text-gold-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground mb-1 group-hover:text-gold-500 transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Mission Statement Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 via-card to-card p-12 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              To transform how organizations connect, celebrate, and grow—one unforgettable 
              event at a time. We believe events are more than logistics. They're moments of 
              belonging, innovation, and collective triumph.
            </p>
            <p className="text-muted-foreground">
              Every AV system we build, every stage we design, every idea we pitch—is in service 
              of creating experiences that people remember. Forever.
            </p>
          </motion.div>

          {/* Timeline/Journey */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="font-display text-2xl font-bold text-center text-foreground mb-12">
              Our Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { year: "2009", milestone: "Founded in Mumbai" },
                { year: "2015", milestone: "Expanded to 10+ cities" },
                { year: "2019", milestone: "500+ Events Delivered" },
                { year: "2026", milestone: "1M+ Lives Touched" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gold-gradient-text mb-2">{item.year}</div>
                  <p className="text-muted-foreground text-sm">{item.milestone}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/3 left-full w-8 h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 pt-12 border-t border-border">
            <p className="text-muted-foreground mb-6">
              Want to be part of our story? Let's create something legendary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Start Your Event Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
