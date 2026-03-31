"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudy() {
  return (
    <section className="section bg-muted/30 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Video Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src="https://prolitee.com/media/case_study_home_page/MDM02670.webp"
                alt="Case Study: Corporate Summit with 1000+ Employees"
                className="w-full h-auto object-cover aspect-square"
              />
              {/* Play button overlay */}
              <a
                href="https://www.youtube.com/embed/dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                </div>
              </a>
            </div>

            {/* Accent decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-gold-500 uppercase">Featured Project</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Transforming Corporate Culture at <span className="gold-gradient-text italic">Scale</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Our largest project: A 1,000+ employee summit across 9 cities. From concept to execution, 
              we orchestrated a seamless hybrid experience with cutting-edge AV, live streaming, and 
              interactive engagement. Every attendee felt connected. Every message landed with impact.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="font-display text-3xl font-bold gold-gradient-text">1000+</div>
                <p className="text-sm text-muted-foreground">Attendees Engaged</p>
              </div>
              <div>
                <div className="font-display text-3xl font-bold gold-gradient-text">9</div>
                <p className="text-sm text-muted-foreground">Cities Connected</p>
              </div>
              <div>
                <div className="font-display text-3xl font-bold gold-gradient-text">4.9/5</div>
                <p className="text-sm text-muted-foreground">Client Rating</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {[
                "Hybrid technical orchestration with zero latency",
                "Custom interactive engagement platform built in-house",
                "24/7 on-ground coordination across all locations",
                "Delivered 150% above client expectations",
              ].map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  <p className="text-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-3"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
