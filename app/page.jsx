import Link from 'next/link';
import { services } from './data/services';

const stats = [
  { label: 'Service areas', value: '5+' },
  { label: 'Client-focused delivery', value: '100%' },
  { label: 'Business support mindset', value: 'End-to-end' },
];

const strengths = [
  'Reliable multi-sector service delivery',
  'Professional and responsive client communication',
  'Practical solutions tailored to business and individual needs',
];

export default function Home() {
  return (
    <div className="space-y-20 pb-6">
      <section className="grid items-center gap-12 rounded-[2rem] bg-slate-950 px-6 py-14 text-white shadow-2xl lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Multi-sector business solutions
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building confidence across travel, property, infrastructure and trade.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Lord Mayor of Africa Nig Ltd delivers dependable services across key
            sectors with a focus on professionalism, responsiveness and long-term
            client value.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Explore our services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            About us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A business positioned to serve across multiple high-impact sectors.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            We support clients with practical solutions that align with their
            operational goals, whether they need travel coordination, property
            support, construction-related services, agricultural partnerships or
            automobile assistance.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:last:col-span-2">
              <div className="mb-4 h-11 w-11 rounded-full bg-amber-100" />
              <p className="text-base font-medium leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Our services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Sector-focused services built around client needs.
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-slate-900 hover:text-amber-600">
            View all services →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-12 w-12 rounded-full bg-slate-900/5 transition group-hover:bg-amber-100" />
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.summary}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-amber-600">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Why choose us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Professional delivery with a strong commitment to client satisfaction.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Responsive support</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We value timely communication and clear coordination across every engagement.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Practical execution</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Our approach is grounded in real business needs, measurable value and dependable delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-amber-500 px-6 py-12 text-slate-950 shadow-lg sm:px-10 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900/70">
            Start a conversation
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Looking for a trusted partner for your next project or business need?
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-900/80">
            Tell us what you need and we will be happy to discuss the right service path for you.
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Contact Lord Mayor
          </Link>
        </div>
      </section>
    </div>
  );
}
