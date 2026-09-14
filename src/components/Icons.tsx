/** Compacte, herbruikbare SVG-iconen (decoratief, aria-hidden). */
type P = { className?: string };

const base = (className = "h-5 w-5") => ({
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const CheckIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ArrowRightIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const PhoneIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const WhatsAppIcon = ({ className }: P) => (
  <svg
    className={className ?? "h-5 w-5"}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8c2.17 0 4.2.85 5.74 2.38a8.06 8.06 0 0 1 2.37 5.73c0 4.48-3.65 8.11-8.12 8.11-1.5 0-2.97-.4-4.25-1.17l-.3-.18-3.12.82.83-3.04-.2-.31a8.05 8.05 0 0 1-1.24-4.32c0-4.48 3.64-8.13 8.09-8.13zm-4.6 4.44c-.22 0-.57.08-.87.4-.3.33-1.14 1.12-1.14 2.72 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.51 5.66 4.92.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.63-.09 1.95-.8 2.23-1.56.28-.77.28-1.42.2-1.56-.08-.14-.3-.22-.63-.38-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.17-.22.33-.85 1.06-1.04 1.28-.19.22-.38.24-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.5.15-.67.15-.15.33-.38.5-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.72-1.78-1.02-2.44-.26-.58-.53-.5-.72-.51h-.62z" />
  </svg>
);

export const MailIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

export const ClockIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ShieldIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const WarningIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

export const DocumentIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 13h6M9 17h6" />
  </svg>
);

export const EuroIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M15 5a7 7 0 1 0 0 14M4 10h10M4 14h9" />
  </svg>
);

export const ScaleIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 3v18M5 21h14M6 8l-3 6h6zM18 8l-3 6h6zM6 8l6-2 6 2" />
  </svg>
);

export const WrenchIcon = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.9 2.9-2.3-2.3z" />
  </svg>
);
