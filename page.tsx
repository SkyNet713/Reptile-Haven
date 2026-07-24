import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { reptiles } from "@/data/reptiles";

export const metadata: Metadata = {
  title: "Species Guides",
  description:
    "Browse reptile care guides for bearded dragons, snakes, geckos, monitor lizards, and chameleons.",
};

export default function ReptilesPage() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Species library</p>
        <h1 className="page-title">Choose a reptile guide</h1>
        <p className="page-intro">
          Open a dedicated page for each group. Panels cover diet, disease
          risks, habitat minimums, lighting, humidity, substrate, and temporary
          substitutes.
        </p>
      </div>

      <div className="species-grid">
        {reptiles.map((r) => (
          <Link key={r.slug} href={`/reptiles/${r.slug}`} className="species-tile">
            <Image
              src={r.image}
              alt={r.imageAlt}
              fill
              sizes="(max-width: 700px) 100vw, 33vw"
            />
            <div className="species-tile-veil" />
            <div className="species-tile-copy">
              <h3>{r.name}</h3>
              <p>{r.scientificHint}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
