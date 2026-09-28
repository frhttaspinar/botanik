import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Botanik Taksi", short_name: "Botanik Taksi", description: "Amasya Merkez 7/24 Taksi", start_url: "/", display: "browser", lang: "tr", background_color: "#f8f8f2", theme_color: "#173e32", icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }] };
}
