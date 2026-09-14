import { ShieldIcon, ClockIcon, EuroIcon, ScaleIcon } from "@/components/Icons";

const items = [
  { icon: ScaleIcon, label: "Onafhankelijke beoordeling" },
  { icon: ClockIcon, label: "Rapport binnen 24 uur" },
  { icon: EuroIcon, label: "Inspectie vanaf €395 per jaar" },
  { icon: ShieldIcon, label: "Voor verschillende merken en typen" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-navy-100 bg-navy-50">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-4 sm:px-6 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-navy-800">
            <Icon className="h-5 w-5 shrink-0 text-brand-600" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
