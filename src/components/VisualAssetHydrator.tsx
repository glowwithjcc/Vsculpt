"use client";

import { useEffect } from "react";

async function hydrate(selector: string, parts: string[], mime: string) {
  try {
    const chunks = await Promise.all(parts.map(async (path) => {
      const res = await fetch(path, { cache: "force-cache" });
      if (!res.ok) throw new Error(`Failed ${path}`);
      return (await res.text()).trim();
    }));
    const node = document.querySelector<HTMLImageElement>(selector);
    if (node) node.src = `data:${mime};base64,${chunks.join("")}`;
  } catch (err) {
    console.warn("VSculpt visual asset hydration failed", selector, err);
  }
}

export default function VisualAssetHydrator() {
  useEffect(() => {
    hydrate(".hero-foil-img", [
      "/assets/vsculpt/bin/foil_s_0.txt",
      "/assets/vsculpt/bin/foil_s_1.txt",
    ], "image/webp");

    hydrate(".hero-photo-image", [
      "/assets/vsculpt/hero-dr-charan-reference.webp.b64.txt",
    ], "image/webp");
  }, []);

  return null;
}
