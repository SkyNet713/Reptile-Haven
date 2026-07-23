"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Reptile } from "@/data/reptiles";

type Props = {
  reptiles: Reptile[];
};

export default function SpeciesCarousel({ reptiles }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % reptiles.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [reptiles.length]);

  const active = reptiles[index];

  return (
    <section className="carousel-section" aria-label="Featured reptiles">
      <div className="section-heading">
        <p className="eyebrow">Canopy guides</p>
        <h2>Meet the reptiles</h2>
        <p>Swipe through dense-forest care panels — each species has its own page.</p>
      </div>

      <div className="carousel">
        {reptiles.map((r, i) => (
          <article
            key={r.slug}
            className={`carousel-panel ${i === index ? "active" : ""}`}
            style={{ ["--accent" as string]: r.accent }}
            aria-hidden={i !== index}
          >
            <div className="carousel-media">
              <Image
                src={r.image}
                alt={r.imageAlt}
                fill
                priority={i === 0}
                sizes="(max-width: 900px) 100vw, 55vw"
              />
              <div className="carousel-veil" />
            </div>
            <div className="carousel-copy">
              <p className="species-latin">{r.scientificHint}</p>
              <h3>{r.name}</h3>
              <p>{r.tagline}</p>
              <ul className="quick-stats">
                <li>
                  <span>Humidity</span>
                  <strong>{r.humidity}</strong>
                </li>
                <li>
                  <span>Temps</span>
                  <strong>{r.tempRange}</strong>
                </li>
              </ul>
              <Link href={`/reptiles/${r.slug}`} className="btn primary">
                Open full care guide
              </Link>
            </div>
          </article>
        ))}

        <div className="carousel-controls">
          <button
            type="button"
            aria-label="Previous reptile"
            onClick={() =>
              setIndex((i) => (i - 1 + reptiles.length) % reptiles.length)
            }
          >
            ‹
          </button>
          <div className="dots">
            {reptiles.map((r, i) => (
              <button
                key={r.slug}
                type="button"
                aria-label={`Show ${r.name}`}
                className={i === index ? "on" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next reptile"
            onClick={() => setIndex((i) => (i + 1) % reptiles.length)}
          >
            ›
          </button>
        </div>
        <p className="carousel-caption">{active.name}</p>
      </div>
    </section>
  );
}
