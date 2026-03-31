import type { Metadata } from "next";
import { Award, Users, Heart, Globe, Zap, Shield } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "15 years of extraordinary event production in Mumbai. Meet the AVStar team — the people behind India's most memorable events.",
};

const values = [
  {
    icon: Zap,
    title: "Technical Excellence",
    desc: "We invest in the latest AV technology — because your audience deserves world-class sound and visuals, not yesterday's equipment.",
  },
  {
    icon: Shield,
    title: "Zero-Failure Mindset",
    desc: "Every event has redundant backups, pre-rigged contingencies, and on-call engineers. We don't do surprises.",
  },
  {
    icon: Heart,
    title: "Client Obsession",
    desc: "Your event is not a project to us. It's a milestone moment that people will remember for years. We treat it that way.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    desc: "Headquartered in Mumbai, operating across 12 cities. Local expertise, national scale.",
  },
];

const team = [
  { name: "Vikram Malhotra", role: "Founder & CEO", exp: "22 years", spec: "Event Architecture" },
  { name: "Priyanka Shah", role: "Creative Director", exp: "14 years", spec: "Stage & Lighting Design" },
  { name: "Rohit Nair", role: "Technical Director", exp: "18 years", spec: "AV Systems Engineering" },
  { name: "Ananya Krishnan", role: "Head of Operations", exp: "11 years", spec: "Production Management" },
  { name: "Kabir Singh", role: "Lead AV Engineer", exp: "9 years", spec: "Sound System Design" },
  { name: "Meera Pillai", role: "Client Relations", exp: "8 years", spec: "Corporate & Luxury Events" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[60vh] flex items-end pb-20 relative overflow-hidden bg-background hero-grid-bg"
        style={{ paddingTop: "calc(var(--nav-height) + 4rem)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-500/5 dark:bg-gold-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <p className="section-label mb-6">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
            The People Behind{" "}
            <span className="gold-shimmer-text italic">India&apos;s</span>{" "}
            Most Memorable Events
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                Born in Mumbai.{" "}
                <span className="gold-gradient-text italic">Built for Scale.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AVStar began in 2009 in a small warehouse in Andheri West with three passionate
                  audio-visual technicians, one truck of equipment, and one belief: that every event
                  deserves the best possible production, regardless of budget.
                </p>
                <p>
                  That philosophy attracted word-of-mouth referrals from corporate clients, then
                  wedding planners, then concert promoters. By 2013, we were handling the technical
                  production for Bollywood award shows. By 2017, we launched our hybrid event division.
                </p>
                <p>
                  Today, AVStar is a 50-person powerhouse with a fleet of premium AV equipment worth
                  ₹15+ crore — and a reputation as the most reliable production partner in western India.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "₹15 Cr+", label: "Equipment Fleet Value" },
                { value: "50+", label: "Full-time Professionals" },
                { value: "12", label: "Cities We Operate In" },
                { value: "2009", label: "Year Established" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="card-solid rounded-xl p-6 text-center hover:border-gold-500/40 transition-colors"
                >
                  <div className="font-display text-3xl font-bold gold-gradient-text mb-2">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-4">What Drives Us</p>
            <h2 className="font-display text-4xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card-solid rounded-xl p-7 flex gap-5 hover:border-gold-500/40 transition-all">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-4">The Team</p>
            <h2 className="font-display text-4xl font-bold">
              Faces Behind the{" "}
              <span className="gold-gradient-text italic">Magic</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="card-solid rounded-xl p-6 group hover:border-gold-500/40 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-700/10 border border-gold-500/30 flex items-center justify-center mb-4 group-hover:border-gold-500 transition-colors">
                  <span className="font-display text-2xl font-bold text-gold-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gold-500 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs mb-3">{member.spec}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <Award className="w-3 h-3 text-gold-500" />
                  {member.exp} experience
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
