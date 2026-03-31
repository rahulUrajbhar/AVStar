import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data";
import { Badge } from "@/components/ui/badge";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Blog — AV & Event Insights",
  description:
    "Expert insights on AV technology, event production trends, and behind-the-scenes from India's leading event production company.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[45vh] flex items-end pb-16 relative overflow-hidden hero-grid-bg bg-background"
        style={{ paddingTop: "calc(var(--nav-height) + 4rem)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <p className="section-label mb-6">From the Studio</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
            Event Production{" "}
            <span className="gold-shimmer-text italic">Insights</span>
          </h1>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <article key={post.id}>
                <Link href={post.href} className="group block h-full">
                  <div className="card-solid rounded-xl overflow-hidden h-full flex flex-col hover:border-gold-500/40 transition-all">
                  <div className="h-52 relative overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={208}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="gold">{post.category}</Badge>
                    </div>
                  </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-mono">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display text-xl font-bold mb-3 group-hover:text-gold-500 transition-colors flex-1">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-gold-500 text-sm font-semibold group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
