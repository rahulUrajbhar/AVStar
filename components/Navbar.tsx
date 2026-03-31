"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)] light:bg-white"
            : "bg-background/40 backdrop-blur-sm light:bg-white/80"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-10">
            <div className="w-9 h-9 bg-gradient-to-br from-gold-400 to-gold-700 rounded flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Zap className="w-5 h-5 text-onyx-950" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-gold-500 transition-colors">
                AVStar
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-500">
                Events
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 font-body font-medium text-sm tracking-wide transition-colors",
                      pathname.startsWith(item.href)
                        ? "text-gold-500"
                        : "text-foreground/80 hover:text-gold-500"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-gold-500 hover:bg-gold-500/5 transition-all border-b border-border/50 last:border-0"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 font-body font-medium text-sm tracking-wide transition-colors",
                    pathname === item.href
                      ? "text-gold-500"
                      : "text-foreground/80 hover:text-gold-500"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: Theme Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="gold" size="sm" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile: Theme + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center text-foreground hover:text-gold-500 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background backdrop-blur-xl"
            style={{ paddingTop: "var(--nav-height)" }}
          >
            <div className="container-custom py-8 flex flex-col gap-2 h-full overflow-y-auto">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-4 font-display text-3xl font-medium border-b border-border/50 transition-colors",
                      pathname === item.href ? "text-gold-500" : "text-foreground hover:text-gold-500"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 py-2 grid grid-cols-2 gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="text-sm text-muted-foreground hover:text-gold-500 py-1.5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="mt-8">
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <Link href="/contact">Get a Quote →</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
