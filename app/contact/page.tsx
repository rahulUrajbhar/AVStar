"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/data";

const eventTypes = [
  "Corporate Conference / Summit",
  "Product Launch",
  "Wedding / Sangeet",
  "Concert / Live Show",
  "Exhibition / Expo",
  "Award Ceremony",
  "Virtual / Hybrid Event",
  "Other",
];

const budgetRanges = [
  "Under ₹5 Lakhs",
  "₹5–15 Lakhs",
  "₹15–50 Lakhs",
  "₹50 Lakhs–1 Crore",
  "Above ₹1 Crore",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    eventType: "", eventDate: "", budget: "", guests: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: integrate with API / email service
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all";
  const labelClass = "block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2";

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[45vh] flex items-end pb-16 relative overflow-hidden hero-grid-bg bg-background"
        style={{ paddingTop: "calc(var(--nav-height) + 4rem)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <p className="section-label mb-6">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
            Let&apos;s Build Something{" "}
            <span className="gold-shimmer-text italic">Extraordinary</span>
          </h1>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold mb-3">Talk to Our Team</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We respond to all inquiries within 2 hours during business hours.
                  For urgent requirements, call us directly.
                </p>
              </div>

              {[
                { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: MapPin, label: "Location", value: SITE_CONFIG.address, href: "#" },
                { icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 8:00 PM", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-4 card-solid rounded-xl hover:border-gold-500/40 transition-all group"
                >
                  <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-gold-500" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-solid rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-3">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We&apos;ve received your inquiry and will get back to you within 2 hours.
                    Our team is excited to learn more about your event!
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <div className="card-solid rounded-2xl p-8">
                  <h3 className="font-display text-2xl font-bold mb-6">
                    Event Inquiry Form
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Name + Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          type="text"
                          required
                          className={inputClass}
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Company / Organisation</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Company name"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 2: Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <input
                          type="email"
                          required
                          className={inputClass}
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number *</label>
                        <input
                          type="tel"
                          required
                          className={inputClass}
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 3: Event Type + Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Event Type *</label>
                        <select
                          required
                          className={inputClass}
                          value={form.eventType}
                          onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Event Date</label>
                        <input
                          type="date"
                          className={inputClass}
                          value={form.eventDate}
                          onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Row 4: Budget + Guest Count */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Budget Range</label>
                        <select
                          className={inputClass}
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Expected Guests</label>
                        <input
                          type="number"
                          className={inputClass}
                          placeholder="e.g. 500"
                          value={form.guests}
                          onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass}>Tell Us About Your Event</label>
                      <textarea
                        rows={4}
                        className={inputClass}
                        placeholder="Venue, vision, requirements, any special requests..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      <span className="flex items-center gap-2 justify-center">
                        <Send className="w-4 h-4" />
                        Send Inquiry
                      </span>
                    </Button>

                    <p className="text-center font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                      We respond within 2 hours · No spam · Confidential
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
