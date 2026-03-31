"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTAQuote() {
  return (
    <section className="section bg-muted/50 overflow-hidden">
      <div className="container-custom">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-br from-card to-card/50 p-12 md:p-16">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="font-mono text-xs tracking-widest text-gold-500 uppercase">
                    Ready to Transform Your Event?
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Let's Create Something <span className="gold-gradient-text italic">Unforgettable</span>
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Connect with our creative strategists to discuss your unique event vision. We specialize in crafting custom, high-impact solutions that elevate your brand.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a
                  href="tel:+919820147596"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-0.5">
                      Call Now
                    </div>
                    <div className="font-semibold text-foreground">+91 98201 47596</div>
                  </div>
                </a>

                <a
                  href="mailto:info@avstarevents.com"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-0.5">
                      Email
                    </div>
                    <div className="font-semibold text-foreground">info@avstarevents.com</div>
                  </div>
                </a>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild className="flex-1">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Get Your Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/gallery" className="flex items-center justify-center gap-2">
                    View Our Work
                  </Link>
                </Button>
              </div>

              {/* Trust indicator */}
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Trusted by 200+ premium brands • 24/7 response time • Zero-pressure consultation
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
