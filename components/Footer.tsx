import Link from "next/link";
import { Zap, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG, SERVICES, NAV_ITEMS } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-onyx-950 dark:bg-onyx-950 light:bg-onyx-900 text-white border-t border-onyx-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-gold-400 to-gold-700 rounded flex items-center justify-center">
                <Zap className="w-5 h-5 text-onyx-950" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  AVStar
                </span>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-500">
                  Events
                </span>
              </div>
            </Link>
            <p className="text-onyx-400 text-sm leading-relaxed mb-6">
              Mumbai&apos;s premier AV production and event management company.
              Creating extraordinary experiences since 2009.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
                { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
                { icon: Youtube, href: SITE_CONFIG.social.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-onyx-700 flex items-center justify-center text-onyx-400 hover:border-gold-500 hover:text-gold-500 transition-all hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className="text-sm text-onyx-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-200" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.filter((n) => !n.children).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-onyx-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-onyx-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-gold-500 transition-all duration-200" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-sm text-onyx-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm text-onyx-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-onyx-400">
                  <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  {SITE_CONFIG.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-onyx-800 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-onyx-500 font-mono">
          <p>© {new Date().getFullYear()} AVStar Events. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gold-500 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
