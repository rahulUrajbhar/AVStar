import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SERVICES } from "@/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-spectrum event production services: AV production, corporate events, weddings, concerts, exhibitions, virtual & hybrid events. Mumbai's most trusted event company.",
};

const equipmentHighlights = [
  "d&b audiotechnik Line Array Systems",
  "Robe Lighting Intelligent Fixtures",
  "ROE LED Video Walls (P2.6 & P3.9)",
  "Christie & Barco Projection Systems",
  "Blackmagic ATEM Live Switchers",
  "Chamsys MagicQ Lighting Consoles",
  "Allen & Heath dLive Mixing Systems",
  "NewTek TriCaster Live Production",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[50vh] flex items-end pb-20 relative overflow-hidden hero-grid-bg bg-background"
        style={{ paddingTop: "calc(var(--nav-height) + 4rem)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <p className="section-label mb-6">What We Deliver</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight">
            <span className="gold-shimmer-text italic">Full-Spectrum</span>{" "}
            Event Production
          </h1>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section bg-background">
        <div className="container-custom space-y-24">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="rounded-xl object-cover border border-gold-500/20"
                    loading="lazy"
                  />
                  <Badge variant="gold">{service.subtitle}</Badge>
                </div>
                <h2 className="font-display text-4xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="gold" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Visual - Service Image */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-onyx-800 to-onyx-900 border border-border relative overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={i === 0 ? "eager" : "lazy"}
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-4">Our Arsenal</p>
            <h2 className="font-display text-4xl font-bold mb-4">
              World-Class Equipment
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We invest in premium global brands — because your audience deserves
              the same equipment used at international concerts and Fortune 500 events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {equipmentHighlights.map((item, i) => (
              <div
                key={i}
                className="card-solid rounded-lg p-4 flex items-center gap-3 hover:border-gold-500/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
