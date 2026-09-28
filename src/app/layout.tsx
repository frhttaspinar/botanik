import type { Metadata, Viewport } from "next";
import { business } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "Botanik Taksi | Amasya Merkez 7/24 Taksi",
  description: "Botanik Taksi, Amasya Merkez 55 Evler'de 7/24 hizmet veren yerel taksi durağıdır. Taksi çağırmak için 0538 323 30 75'i arayın veya WhatsApp'tan ulaşın.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "tr_TR", url: "/", siteName: business.name, title: "Botanik Taksi | Amasya Merkez Taksi", description: "Amasya Merkez'de 7/24 Botanik Taksi. Tek dokunuşla arayın veya WhatsApp'tan ulaşın.", images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Botanik Taksi Amasya Merkez — 7/24 Taksi" }] },
  twitter: { card: "summary_large_image", title: "Botanik Taksi | Amasya Merkez Taksi", description: "Amasya Merkez'de 7/24 Botanik Taksi. Tek dokunuşla arayın veya WhatsApp'tan ulaşın.", images: ["/images/og.png"] },
  category: "Taxi Service",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#173e32", viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
