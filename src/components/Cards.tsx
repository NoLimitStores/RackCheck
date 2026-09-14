import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/Icons";
import type { Artikel } from "@/lib/kennisbank";

export function ArtikelCard({ artikel }: { artikel: Artikel }) {
  return (
    <Link
      href={`/kennisbank/${artikel.slug}/`}
      className="group flex flex-col rounded-lg border border-navy-200 bg-white p-5 transition-colors hover:border-brand-400"
    >
      <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
        {artikel.category}
      </span>
      <h3 className="mt-2 text-lg font-bold leading-snug text-navy-950 group-hover:text-brand-700">
        {artikel.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-navy-600">{artikel.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
        Lees artikel
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function StellingTypeCard({
  slug,
  naam,
  image,
  imageAlt,
  intro,
}: {
  slug: string;
  naam: string;
  image: string;
  imageAlt: string;
  intro: string;
}) {
  return (
    <Link
      href={`/inspecties/${slug}/`}
      className="group flex flex-col overflow-hidden rounded-lg border border-navy-200 bg-white transition-colors hover:border-brand-400"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy-950 group-hover:text-brand-700">{naam}</h3>
        <p className="mt-2 flex-1 text-sm text-navy-600">{intro}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
          Meer over deze inspectie
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function PijnpuntCard({
  title,
  text,
  href,
  cta,
}: {
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-navy-200 bg-white p-5 transition-all hover:border-brand-400 hover:shadow-sm"
    >
      <h3 className="text-base font-bold text-navy-950 group-hover:text-brand-700">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-navy-600">{text}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
        {cta}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
