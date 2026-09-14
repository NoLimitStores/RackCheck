import { processSteps } from "@/lib/content";

export default function ProcessSteps({
  steps = processSteps,
}: {
  steps?: { title: string; text: string }[];
}) {
  return (
    <ol className="relative space-y-6 border-l-2 border-navy-100 pl-8">
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <span
            aria-hidden
            className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white"
          >
            {i + 1}
          </span>
          <h3 className="text-lg font-bold text-navy-950">{step.title}</h3>
          <p className="mt-1 text-navy-700">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
