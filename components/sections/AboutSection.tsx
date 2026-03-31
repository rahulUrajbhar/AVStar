"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Users, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const milestones = [
  { year: "2009", event: "Founded in Andheri, Mumbai with 3 employees" },
  { year: "2013", event: "First major Bollywood concert production (10,000+ attendance)" },
  { year: "2017", event: "Expanded into full hybrid event production & streaming" },
  { year: "2020", event: "Launched virtual event division during pandemic, 0 events missed" },
  { year: "2024", event: "200+ brand partners, India's fastest-growing AV company" },
];

const floatingStats = [
  { icon: Award, value: "15+", label: "Industry Awards" },
  { icon: Users, value: "50+", label: "Core Team Members" },
  { icon: Zap, value: "500+", label: "Events Annually" },
  { icon: Globe, value: "12", label: "Cities Covered" },
];

export default function AboutSection() {
  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-6">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              15 Years of{" "}
              <span className="gold-gradient-text italic">Extraordinary</span>{" "}
              Experiences
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Born in Mumbai&apos;s electrifying event scene, AVStar began as a three-person
              AV rental company in 2009. Today, we are a 50-strong production powerhouse
              — trusted by India&apos;s biggest corporations, Bollywood productions, and
              luxury wedding families alike.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our philosophy is simple: technology should be invisible. The audience
              shouldn&apos;t notice the speakers, lights, or screens. They should only feel
              the emotion. That obsession with seamless execution is what makes AVStar different.
            </p>

            {/* Timeline */}
            <div className="space-y-4 mb-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="font-mono text-gold-500 text-xs tracking-widest pt-0.5 flex-shrink-0 w-10">
                    {m.year}
                  </span>
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-px h-full min-h-[1.5rem] bg-gold-500/30 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link href="/about">Meet the Team →</Link>
            </Button>
          </motion.div>

          {/* Right: Floating Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main large card */}
            <div className="card-solid rounded-2xl p-8 border-gold-500/20 border mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Live Availability
                </span>
              </div>
              <p className="font-display text-3xl font-bold mb-2 text-foreground">
                We&apos;re booking{" "}
                <span className="gold-gradient-text italic">2025–2026</span>
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                Limited slots available for premium events. Early booking ensures
                priority equipment allocation and preferred crew.
              </p>
              <div className="h-px bg-border mb-6" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Typical response time</span>
                <span className="font-semibold text-gold-500">&lt; 2 hours</span>
              </div>
            </div>

            {/* 4 stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {floatingStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="card-solid rounded-xl p-5 text-center hover:border-gold-500/40 transition-colors"
                >
                  <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div className="font-display text-2xl font-bold gold-gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
