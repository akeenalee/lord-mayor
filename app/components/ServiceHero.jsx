export default function ServiceHero({ title, summary }) {
  return (
    <section className="rounded-[2rem] bg-slate-950 px-6 py-14 text-white shadow-xl sm:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Our Service
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{summary}</p>
    </section>
  );
}
