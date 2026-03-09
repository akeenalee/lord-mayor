export default function SectionHeading({ eyebrow, title, description, center = false, light = false }) {
  const containerClass = center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';
  const eyebrowClass = light ? 'text-amber-300' : 'text-amber-600';
  const titleClass = light ? 'text-white' : 'text-slate-950';
  const descriptionClass = light ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={containerClass}>
      {eyebrow ? <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}>{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-8 ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
