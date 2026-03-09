export default function ServiceHero({ title, summary, highlights = [] }) {
  return (
    <section className="card-dark gradient-ring px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
      <div className="hero-grid-pointer absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Service focus</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{summary}</p>
        </div>
        <div className="glass-panel p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Service strengths</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
