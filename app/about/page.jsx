export const metadata = {
  title: 'About | Lord Mayor of Africa Nig Ltd',
  description: 'Learn more about Lord Mayor of Africa Nig Ltd and our multi-sector business focus.',
};

export default function About() {
  return (
    <div className="space-y-10 pb-6">
      <section className="rounded-[2rem] bg-slate-950 px-6 py-14 text-white shadow-xl sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">About us</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          A multi-sector company focused on practical value delivery.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Lord Mayor of Africa Nig Ltd serves clients across multiple business sectors with a strong focus on professionalism, responsiveness and long-term relationships.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Who we are</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We are positioned to support clients in travel, construction, real estate, agriculture and automobile services. Our approach is built on clear communication, practical coordination and dependable execution.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What we value</h2>
          <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
            <li>Professional service delivery</li>
            <li>Strong client relationships</li>
            <li>Operational reliability</li>
            <li>Growth through trusted partnerships</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
