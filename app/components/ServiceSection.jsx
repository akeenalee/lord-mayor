export default function ServiceSection({ intro, highlights }) {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div>
          <span className="chip">What we offer</span>
          <p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p>
        </div>
        <div className="grid gap-4">
          {highlights.map((highlight, index) => (
            <div key={highlight} className="rounded-[1.4rem] border border-slate-200 bg-slate-50/80 px-5 py-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <p className="pt-1 text-sm leading-7 text-slate-700">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
