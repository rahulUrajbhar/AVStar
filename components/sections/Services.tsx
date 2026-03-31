"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const displayServices = SERVICES.slice(0, 5);

  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Our Services</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Event <span className="gold-gradient-text italic">Production</span> Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {displayServices.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Link href={service.href} className="block h-full group">
                <div className="card-solid rounded-2xl overflow-hidden h-full flex flex-col hover:border-gold-500/50 hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)] transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-gold-500 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 flex-1">
                      {service.description.split(". ")[0]}.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-gold-500 font-semibold text-sm group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for?
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              Tell us about your event
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
