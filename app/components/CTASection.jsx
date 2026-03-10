import Link from "next/link";

export default function CTASection({
  eyebrow = "Start a Conversation",
  title,
  description,
  primaryText = "Contact Us",
  primaryHref = "/contact",
  secondaryText = "Explore Services",
  secondaryHref = "/services",
}) {
  return (
    <section className="section">
      <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.75)] md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              {eyebrow}
            </span>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {title}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              {primaryText}
            </Link>

            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:bg-white/10"
            >
              {secondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}