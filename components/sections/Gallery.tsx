"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const gallery = [
  {
    id: 1,
    type: "image",
    src: "https://prolitee.com/static/website-img/MDM04518.webp",
    alt: "Corporate Event Production",
    title: "Corporate",
  },
  {
    id: 2,
    type: "image",
    src: "https://prolitee.com/static/website-img/_MGL7023.webp",
    alt: "Team Building Event",
    title: "Engagement",
  },
  {
    id: 3,
    type: "image",
    src: "https://prolitee.com/static/website-img/_MGL7208.webp",
    alt: "Offsite Production",
    title: "Offsites",
  },
  {
    id: 4,
    type: "image",
    src: "https://prolitee.com/media/case_study_home_page/MDM02670.webp",
    alt: "Premium Event Showcase",
    title: "Premium",
  },
  {
    id: 5,
    type: "image",
    src: "https://prolitee.com/static/website-img/089A0039.webp",
    alt: "Production Excellence",
    title: "Production",
  },
  {
    id: 6,
    type: "image",
    src: "https://prolitee.com/static/website-img/MDM04488.webp",
    alt: "Event Experience",
    title: "Experience",
  },
  {
    id: 7,
    type: "image",
    src: "https://prolitee.com/media/services/Offsites__RnR.webp",
    alt: "Offsite Productions",
    title: "Offsites",
  },
  {
    id: 8,
    type: "image",
    src: "https://prolitee.com/media/services/Corporate_Event.webp",
    alt: "Corporate Excellence",
    title: "Corporate",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Our <span className="gold-gradient-text italic">Work</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {gallery.map((galleryItem) => (
            <motion.div key={galleryItem.id} variants={itemVariant} className="group relative overflow-hidden rounded-2xl">
              {galleryItem.type === "image" ? (
                <div className="relative aspect-video bg-muted overflow-hidden rounded-2xl border border-border hover:border-gold-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedId(galleryItem.id)}>
                  <Image
                    src={galleryItem.src}
                    alt={galleryItem.alt}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-display font-bold text-sm">{galleryItem.title}</p>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video bg-muted rounded-2xl border border-border hover:border-gold-500/50 transition-all duration-300 overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={galleryItem.src}
                    title={galleryItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                    <Play className="w-12 h-12 text-white fill-white" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <div className="text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold-500/50 hover:border-gold-500 hover:bg-gold-500/10 rounded-lg font-semibold text-gold-500 transition-all duration-300"
          >
            View Full Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
