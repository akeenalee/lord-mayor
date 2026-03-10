export default function ServiceHero({ title, summary, highlights = [] }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
      <div>
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
          Our Service
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {summary}
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
          Key Highlights
        </p>

        <div className="mt-6 space-y-4">
          {highlights.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-sm font-bold text-amber-300">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <p className="text-sm leading-7 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}