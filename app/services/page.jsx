import Link from 'next/link';
import { services } from '../data/services';

export const metadata = {
  title: 'Services | Lord Mayor of Africa Nig Ltd',
  description: 'Explore the services offered by Lord Mayor of Africa Nig Ltd.',
};

export default function Services() {
  return (
    <div className="space-y-10 pb-6">
      <section className="rounded-[2rem] bg-slate-950 px-6 py-14 text-white shadow-xl sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Our services</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Solutions across key sectors with a client-first approach.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          We provide service support across multiple sectors, helping clients access practical solutions with confidence and clarity.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{service.summary}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-amber-600">View service</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
