"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/sections/CTA";

const categories = ["All", "Corporate", "Wedding", "Concert", "Exhibition", "Award Show"];

// Mock gallery items with Prolite portfolio images
const galleryItems = [
  { id: 1, category: "Corporate", title: "Reliance Annual Conclave", details: "5,000 pax · BKC Mumbai", image: "https://prolitee.com/static/website-img/MDM04518.webp" },
  { id: 2, category: "Wedding", title: "Mehta-Shah Wedding", details: "JW Marriott · 800 guests", image: "https://prolitee.com/static/website-img/_MGL7023.webp" },
  { id: 3, category: "Concert", title: "Sunburn Mumbai Stage", details: "15,000 pax · LED Wall 60m", image: "https://prolitee.com/static/website-img/_MGL7208.webp" },
  { id: 4, category: "Exhibition", title: "AutoExpo 2024 Stall", details: "Tata Motors · 3 levels", image: "https://prolitee.com/media/case_study_home_page/MDM02670.webp" },
  { id: 5, category: "Corporate", title: "HDFC Annual Summit", details: "2,500 delegates · Hybrid", image: "https://prolitee.com/static/website-img/089A0039.webp" },
  { id: 6, category: "Award Show", title: "Filmfare Awards Gala", details: "Full Stage Production", image: "https://prolitee.com/static/website-img/MDM04488.webp" },
  { id: 7, category: "Wedding", title: "Kapoor Wedding Sangeet", details: "Sahara Star · 1,200 guests", image: "https://prolitee.com/media/services/Offsites__RnR.webp" },
  { id: 8, category: "Corporate", title: "Amazon Prime Day Launch", details: "Mumbai · 500 media", image: "https://prolitee.com/media/services/Corporate_Event.webp" },
  { id: 9, category: "Concert", title: "Diljit Dosanjh Tour", details: "3 city stops · Full rig", image: "https://prolitee.com/static/website-img/MDM04518.webp" },
  { id: 10, category: "Exhibition", title: "India Mobile Congress", details: "Pragati Maidan", image: "https://prolitee.com/static/website-img/_MGL7023.webp" },
  { id: 11, category: "Award Show", title: "CII Leadership Awards", details: "ITC Grand Central", image: "https://prolitee.com/static/website-img/_MGL7208.webp" },
  { id: 12, category: "Corporate", title: "Bajaj EV Launch", details: "5,000 pax · Projection Map", image: "https://prolitee.com/media/case_study_home_page/MDM02670.webp" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === active);

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[45vh] flex items-end pb-16 relative overflow-hidden hero-grid-bg bg-background"
        style={{ paddingTop: "calc(var(--nav-height) + 4rem)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <p className="section-label mb-6">Our Portfolio</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
            500+ Events.{" "}
            <span className="gold-shimmer-text italic">One Standard.</span>
          </h1>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-custom">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-mono tracking-wide transition-all ${
                  active === cat
                    ? "bg-gold-500 text-onyx-950 font-bold"
                    : "bg-card border border-border text-muted-foreground hover:border-gold-500/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group cursor-pointer"
                >
                  <div className="card-solid rounded-xl overflow-hidden hover:border-gold-500/40 transition-all h-full">
                  <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-onyx-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-mono text-xs tracking-widest text-gold-500 uppercase">
                        View Project
                      </span>
                    </div>
                  </div>
                    <div className="p-4">
                      <div className="font-mono text-[9px] tracking-widest uppercase text-gold-500 mb-1">
                        {item.category}
                      </div>
                      <h3 className="font-display text-base font-bold text-foreground group-hover:text-gold-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
