export function ArrowRightIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 12.5 9.5 17 19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactIcon({ type, className = 'h-5 w-5' }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' };

  const paths = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" {...common} />
        <path d="m5 8 7 5 7-5" {...common} />
      </>
    ),
    phone: (
      <>
        <path d="M8.5 4.5h2l1 3.5-1.5 1.5a14 14 0 0 0 4 4l1.5-1.5 3.5 1v2a1.5 1.5 0 0 1-1.6 1.5A14.9 14.9 0 0 1 6.5 6.1 1.5 1.5 0 0 1 8.5 4.5Z" {...common} />
      </>
    ),
    location: (
      <>
        <path d="M12 20s6-4.8 6-10a6 6 0 1 0-12 0c0 5.2 6 10 6 10Z" {...common} />
        <circle cx="12" cy="10" r="2.5" {...common} />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="M12 8v4l3 2" {...common} />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[type] || paths.email}
    </svg>
  );
}

export function ServiceIcon({ slug, className = 'h-6 w-6' }) {
  const icons = {
    travel: (
      <path d="M3 14.5 21 12 3 9.5l5 2.5v3l3 1.5v-4l7 3V8.5l-7 3v-4L8 9v3L3 14.5Z" />
    ),
    construction: (
      <>
        <path d="M4 19h16" />
        <path d="M7 19v-7l5-4 5 4v7" />
        <path d="M10 19v-4h4v4" />
      </>
    ),
    'real-estate': (
      <>
        <path d="M4 11.5 12 5l8 6.5" />
        <path d="M6 10.5V19h12v-8.5" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
    agriculture: (
      <>
        <path d="M12 20V9" />
        <path d="M12 13c0-4 2.5-6.5 6-7-0.3 4.1-2.7 6.5-6 7Z" />
        <path d="M12 16c0-3.4-2.2-5.7-5.5-6 0.1 3.4 2.1 5.8 5.5 6Z" />
      </>
    ),
    automobile: (
      <>
        <path d="M5 15l1.6-4.2A2 2 0 0 1 8.45 9.5h7.1a2 2 0 0 1 1.85 1.3L19 15" />
        <path d="M4 15h16v3a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V17h-9v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Z" />
        <circle cx="7.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {icons[slug] || icons.travel}
    </svg>
  );
}
