"use client";

import { useMemo, useState } from "react";
import { ArtikelCard } from "@/components/Cards";
import { categories, type Artikel } from "@/lib/kennisbank";

export default function KennisbankList({ artikelen }: { artikelen: Artikel[] }) {
  const [actief, setActief] = useState<string>("Alle");
  const [query, setQuery] = useState("");

  const filters = ["Alle", ...categories];

  const zichtbaar = useMemo(() => {
    return artikelen.filter((a) => {
      const catOk = actief === "Alle" || a.category === actief;
      const q = query.trim().toLowerCase();
      const qOk =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.answer.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [artikelen, actief, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorieën">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={actief === f}
              onClick={() => setActief(f)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                actief === f
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-navy-200 bg-white text-navy-700 hover:border-brand-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <label className="relative block sm:w-64">
          <span className="sr-only">Zoek in de kennisbank</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek een onderwerp"
            className="min-h-11 w-full rounded border border-navy-200 bg-white px-3.5 py-2.5 text-base outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 sm:text-sm"
          />
        </label>
      </div>

      {zichtbaar.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {zichtbaar.map((a) => (
            <ArtikelCard key={a.slug} artikel={a} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-navy-600">
          Geen artikelen gevonden. Pas uw zoekopdracht of filter aan.
        </p>
      )}
    </div>
  );
}
