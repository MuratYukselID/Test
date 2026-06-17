import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sakarya Mimarlık",
    short_name: "Sakarya Mim.",
    description:
      "Mimari proje, tasarım ve danışmanlık hizmetleri sunan modern mimarlık firması.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#1B6B3A",
    orientation: "portrait-primary",
    categories: ["business", "architecture"],
    lang: "tr",
    icons: [
      {
        src: "/images/logo.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
