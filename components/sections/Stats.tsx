"use client";
import { motion } from "framer-motion";

const stats = [
  {
    value: "500+",
    label: "Events Delivered",
    sublabel: "Across India & Globally",
  },
  {
    value: "1M+",
    label: "Audience Engaged",
    sublabel: "People experienced our AV magic",
  },
  {
    value: "200+",
    label: "Premium Brands",
    sublabel: "From Fortune 500 to startups",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    sublabel: "Consistently exceeding expectations",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Stats() {
  return (
    <section className="section bg-muted/30 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-4">Our Impact</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            By the Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={item}>
              <div className="relative overflow-hidden group">
                {/* Card background */}
                <div className="card-solid rounded-xl p-8 text-center relative z-10 hover:border-gold-500/50 hover:shadow-[0_8px_40px_rgba(212,175,55,0.12)] transition-all duration-300">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-gold-500 to-transparent transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="font-display text-5xl md:text-6xl font-bold gold-gradient-text mb-2">
                      {stat.value}
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
