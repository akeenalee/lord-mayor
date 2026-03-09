import Link from 'next/link';

export default function CTASection({
  eyebrow = 'Start a conversation',
  title,
  description,
  primaryLabel = 'Contact us',
  primaryHref = '/contact',
  secondaryLabel = 'Explore services',
  secondaryHref = '/services',
}) {
  return (
    <section className="card-dark gradient-ring px-6 py-12 text-white sm:px-10 lg:px-12">
      <div className="hero-grid-pointer absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
