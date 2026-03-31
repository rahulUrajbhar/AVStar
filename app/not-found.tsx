import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center hero-grid-bg bg-background relative overflow-hidden"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 container-custom py-24">
        <p className="font-mono text-gold-500 text-sm tracking-widest uppercase mb-4">404 — Page Not Found</p>
        <h1 className="font-display text-7xl md:text-9xl font-bold gold-gradient-text mb-6">404</h1>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          This page seems to have left the building. Let&apos;s get you back on stage.
        </p>
        <Button variant="gold" size="lg" asChild>
          <Link href="/">Back to Home →</Link>
        </Button>
      </div>
    </div>
  );
}
