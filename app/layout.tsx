import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "AVStar Events — Mumbai's Premier AV Production & Event Management",
    template: "%s | AVStar Events",
  },
  description:
    "AVStar Events is Mumbai's leading AV production and event management company. Corporate events, weddings, concerts, exhibitions — flawless execution since 2009.",
  keywords: [
    "event management Mumbai",
    "AV production Mumbai",
    "corporate events Mumbai",
    "wedding production Mumbai",
    "concert production India",
    "LED wall rental Mumbai",
    "stage lighting Mumbai",
    "hybrid events Mumbai",
    "AVStar Events",
  ],
  authors: [{ name: "AVStar Events", url: "https://avstarevents.com" }],
  creator: "AVStar Events",
  metadataBase: new URL("https://avstarevents.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://avstarevents.com",
    siteName: "AVStar Events",
    title: "AVStar Events — Mumbai's Premier AV Production & Event Management",
    description:
      "500+ events. 200+ brands. 15 years of extraordinary experiences in Mumbai.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AVStar Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVStar Events — Mumbai's Premier AV Production",
    description: "500+ events. 200+ brands. 15 years of extraordinary experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                const theme = localStorage.getItem('avstar-theme');
                if (theme === 'dark' || (!theme && !window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,400;1,9..40,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AVStar Events",
              description: "Mumbai's premier AV production and event management company.",
              url: "https://avstarevents.com",
              telephone: "+91-98XXX-XXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Andheri West",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400058",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 19.136, longitude: 72.826 },
              openingHours: "Mo-Sa 09:00-20:00",
              priceRange: "₹₹₹",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="avstar-theme"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
