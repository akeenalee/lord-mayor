export default function ServiceSection({ intro, highlights = [] }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-sm md:px-10 md:py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">
            Service Overview
          </span>

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Professional service delivery built around clarity and reliability
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">{intro}</p>
        </div>

        <div className="grid gap-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4"
            >
              <p className="text-sm font-medium leading-7 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}