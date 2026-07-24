import Image from "next/image";
import Link from "next/link";
import SpeciesCarousel from "@/components/SpeciesCarousel";
import { reptiles } from "@/data/reptiles";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/reptiles/rainforest.jpg"
            alt="Dense rainforest canopy"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <h1 className="hero-brand">
            Rainforest
            <em>Reptile Haven</em>
          </h1>
          <p className="hero-lead">
            Species care sheets for bearded dragons, snakes, geckos, monitors,
            and chameleons — with habitat, lighting, humidity, diet, and a
            personal schedule for your own reptiles.
          </p>
          <div className="hero-actions">
            <Link href="/reptiles" className="btn primary">
              Browse species
            </Link>
            <Link href="/login" className="btn secondary">
              Keeper login
            </Link>
          </div>
        </div>
      </section>

      <SpeciesCarousel reptiles={reptiles} />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Why split pages</p>
          <h2>Care depth without one endless scroll</h2>
          <p>
            Each reptile lives on its own guide page so you can load only what
            you need — diet, disease signs, enclosure minimums, lighting,
            humidity, substrate, and short-term substitutes.
          </p>
        </div>
        <div className="species-grid">
          {reptiles.map((r) => (
            <Link
              key={r.slug}
              href={`/reptiles/${r.slug}`}
              className="species-tile"
            >
              <Image
                src={r.image}
                alt={r.imageAlt}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <div className="species-tile-veil" />
              <div className="species-tile-copy">
                <h3>{r.name}</h3>
                <p>{r.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
