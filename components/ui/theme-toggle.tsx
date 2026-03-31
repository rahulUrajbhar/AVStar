"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-16 h-8 rounded-full bg-muted animate-pulse" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex items-center gap-2 group",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {/* Track */}
      <div
        className={cn(
          "relative w-14 h-7 rounded-full transition-all duration-500 border",
          isDark
            ? "bg-onyx-800 border-gold-500/40"
            : "bg-amber-50 border-gold-500/60"
        )}
      >
        {/* Thumb */}
        <div
          className={cn(
            "absolute top-0.5 w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center shadow-md",
            isDark
              ? "translate-x-[1.75rem] bg-gradient-to-br from-gold-400 to-gold-600"
              : "translate-x-0.5 bg-gradient-to-br from-amber-300 to-gold-500"
          )}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-onyx-900" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-onyx-900" />
          )}
        </div>
      </div>
      {showLabel && (
        <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}
