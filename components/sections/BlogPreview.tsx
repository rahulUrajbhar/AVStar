"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Portfolio image dominant display - minimal text overlay
const blogImages = [
  "https://prolitee.com/static/website-img/MDM04518.webp",
  "https://prolitee.com/static/website-img/_MGL7023.webp",
  "https://prolitee.com/static/website-img/_MGL7208.webp",
];

export default function BlogPreview() {
  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-4">Insights</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              From Our{" "}
              <span className="gold-gradient-text italic">Studio</span>
            </h2>
          </div>
          <Button variant="outline" size="default" asChild>
            <Link href="/blog">All Articles →</Link>
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link href={post.href} className="group block h-full">
                <div className="card-solid rounded-xl overflow-hidden h-full flex flex-col hover:border-gold-500/40 transition-all duration-300">
                  {/* Prolite Portfolio Image */}
                  <div className="h-48 relative overflow-hidden bg-muted flex items-end p-5">
                    <Image
                      src={blogImages[i] || post.image}
                      alt={post.title}
                      width={400}
                      height={192}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/60 via-onyx-950/20 to-transparent" />
                    <div className="relative z-10">
                      <Badge variant="gold">{post.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-mono">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold-500 transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-gold-500 text-sm font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
