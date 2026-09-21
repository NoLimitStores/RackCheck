"use client";

import { useState } from "react";
import JsonLd from "@/components/JsonLd";

export type QA = { q: string; a: string; link?: { href: string; label: string } };

export default function FAQ({
  items,
  title = "Veelgestelde vragen",
  schema = true,
}: {
  items: QA[];
  title?: string;
  schema?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div>
      {schema && <JsonLd data={faqSchema} />}
      {title && (
        <h2 className="display text-2xl text-navy-950 sm:text-3xl">{title}</h2>
      )}
      <div className="mt-6 divide-y divide-navy-100 border-y border-navy-100">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-base font-semibold text-navy-950">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-navy-200 text-navy-600 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
              </h3>
              {isOpen && (
                <p className="pb-5 pr-10 text-[0.975rem] leading-relaxed text-navy-700">
                  {item.a}
                  {item.link && (
                    <>
                      {" "}
                      <a href={item.link.href} className="font-semibold text-navy-950 underline underline-offset-2 hover:text-navy-700">
                        {item.link.label}
                      </a>
                    </>
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
