"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of events do you handle?",
    answer: "We handle everything from intimate corporate boardroom setups (50 people) to full-scale concerts (10,000+ attendees). Our expertise spans AV production, corporate events, weddings, concerts, exhibitions, product launches, hybrid events, and more.",
  },
  {
    question: "How far in advance should we book AVStar?",
    answer: "For small corporate events, 4-6 weeks is ideal. For major events (weddings, product launches, large conferences), we recommend 2-3 months. This ensures optimal planning, equipment availability, and team coordination.",
  },
  {
    question: "Do you provide on-ground technical support during the event?",
    answer: "Absolutely. We deploy a dedicated technical team on the ground with 24/7 availability from setup to wrap-up. Our on-ground supervisor coordinates all logistics and ensures real-time problem-solving.",
  },
  {
    question: "Can you handle hybrid or virtual events?",
    answer: "Yes, we specialize in hybrid events with professional live streaming, multi-camera broadcast-quality production, interactive virtual platforms, and global audience engagement features.",
  },
  {
    question: "What's your refund or modification policy?",
    answer: "We offer flexible modifications up to 30 days before the event. For cancellations, we follow a tiered refund policy based on notice period. Contact our team for specific details.",
  },
  {
    question: "How do you ensure quality and prevent technical glitches?",
    answer: "We conduct pre-event site surveys, full rehearsals, redundant equipment backup systems, and continuous monitoring during the event. With 15+ years of experience, we've refined our processes to near-zero failure rates.",
  },
  {
    question: "Do you work with international events or locations outside Mumbai?",
    answer: "Yes, we have experience with pan-India events across major cities and international events in UAE, Southeast Asia, and beyond. Current location doesn't limit us.",
  },
  {
    question: "How can we request a quote or get started?",
    answer: "Simply click 'Get a Free Quote' button, fill out a brief form with your event details, and our team will reach out within 24 hours with a customized proposal and timeline.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">Common Questions</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Frequently Asked <span className="gold-gradient-text italic">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={false}
              className="mb-4 border border-border rounded-lg overflow-hidden bg-card/50 hover:border-gold-500/30 transition-colors"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 hover:bg-gold-500/5 transition-colors text-left"
              >
                <span className="font-display font-bold text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: active === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gold-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 md:px-8 md:py-6 bg-gold-500/5 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Didn't find your answer?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 font-semibold transition-colors"
          >
            Contact us directly →
          </a>
        </div>
      </div>
    </section>
  );
}
