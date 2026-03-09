export default function ServiceSection({ intro, highlights }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">What we offer</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">{intro}</p>
      </div>

      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Service highlights</h2>
        <ul className="mt-6 space-y-4">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-slate-700">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
