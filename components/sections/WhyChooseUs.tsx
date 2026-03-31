"use client";
import { motion } from "framer-motion";
import { Shield, Users, Zap, Trophy, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "15+ Years Proven Excellence",
    description: "Combat-tested reliability across 500+ events of every scale and complexity.",
  },
  {
    icon: Users,
    title: "Expert Team of 50+",
    description: "Dedicated professionals — from creative directors to technical engineers — all in-house.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "Latest AV equipment, LED walls, projection mapping, and broadcast-quality streaming rigs.",
  },
  {
    icon: Trophy,
    title: "Flawless Execution",
    description: "Premium service standards that turn vision into reality — no compromises, zero excuses.",
  },
  {
    icon: Clock,
    title: "24/7 On-Ground Support",
    description: "Real-time problem-solving team ensures smooth sailing from setup through wrap-up.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description: "Single point of contact who knows your event inside-out. Always available, always proactive.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhyChooseUs() {
  return (
    <section className="section bg-background relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 hero-grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gold-500/4 dark:bg-gold-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">Our Competitive Edge</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Why <span className="gold-gradient-text italic">500+ events</span> trust AVStar
          </h2>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={i} variants={item}>
                <div className="group h-full p-6 rounded-xl border border-border bg-card/50 hover:border-gold-500/50 hover:bg-card hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4 inline-flex">
                    <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gold-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-gold-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
