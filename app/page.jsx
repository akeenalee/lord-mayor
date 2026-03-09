import Link from 'next/link';
import CTASection from './components/CTASection';
import SectionHeading from './components/SectionHeading';
import ServiceCard from './components/ServiceCard';
import { ArrowRightIcon, CheckIcon } from './components/Icons';
import { services } from './data/services';

const trustPillars = [
  {
    title: 'Cross-sector capability',
    description: 'A single business partner that can support multiple operational needs across key sectors.',
  },
  {
    title: 'Clear communication',
    description: 'We keep clients informed, aligned and confident at every stage of engagement.',
  },
  {
    title: 'Practical delivery',
    description: 'Our focus is on realistic execution, responsive service and outcomes that move projects forward.',
  },
];

const stats = [
  { value: '5', label: 'Core service sectors' },
  { value: '1', label: 'Unified business partner' },
  { value: '100%', label: 'Commitment to responsive service' },
];

const process = [
  'Understand your requirement, priorities and desired outcome',
  'Recommend the right service path with clear next steps',
  'Coordinate delivery professionally and keep communication open',
];

const advantages = [
  'Business-minded service coordination',
  'Reliable support across multiple sectors',
  'Professional engagement with individuals and organisations',
  'A brand built on responsiveness, trust and practical delivery',
];

const serviceHighlights = [
  'Travel and logistics support',
  'Construction and project coordination',
  'Property and real-estate guidance',
  'Agricultural partnerships and support',
  'Automobile sourcing and advisory',
];

const featuredNeeds = [
  {
    title: 'Business enquiries',
    description: 'Speak with us if you need a responsive partner that can coordinate across different service lines with clarity and professionalism.',
  },
  {
    title: 'Projects and partnerships',
    description: 'We support organisations and individuals who need practical delivery, trusted communication and dependable follow-through.',
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-8">
      <section className="card-dark gradient-ring animate-fade-in px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
        <div className="hero-grid-pointer absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Multi-sector business solutions</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Helping clients move ideas, projects and opportunities forward with confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Lord Mayor of Africa Nig Ltd provides professional support across travel, construction, real estate,
              agriculture and automobile services with a strong focus on dependability, coordination and long-term value.
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
                Request a consultation
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceHighlights.slice(0, 4).map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Why organisations choose us</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {trustPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5">
                    <h2 className="text-lg font-semibold text-white">{pillar.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="glass-panel p-5 text-center">
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="About us"
          title="A business platform built around trust, responsiveness and practical delivery."
          description="We work with individuals, organisations and partners who need reliable support across different sectors. Our role is to simplify coordination, guide decision-making and help clients move forward with confidence."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card-white animate-fade-in-delay p-6 sm:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">What sets us apart</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Rather than a one-size-fits-all approach, we take time to understand each client requirement,
              recommend the right path and maintain clear communication from enquiry to delivery.
            </p>
          </div>
          {advantages.map((item) => (
            <div key={item} className="card-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <CheckIcon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-base font-medium leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What we support"
              title="Solutions tailored to the kind of business needs that require trust and follow-through."
              description="We serve individuals and organisations looking for a practical partner across key sectors, from first enquiry through delivery and support."
            />
          </div>
          <div className="grid gap-4">
            {featuredNeeds.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 shadow-soft">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our services"
            title="Sector-specific solutions designed for practical results."
            description="Whether you need travel support, project coordination, property guidance, agricultural partnership support or vehicle-related services, we provide a clear and professional route forward."
          />
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-amber-600">
            View all services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div className="section-shell">
          <SectionHeading
            eyebrow="How we work"
            title="A straightforward process that keeps projects clear and focused."
            description="Our approach is centered on clarity, responsiveness and practical execution, so clients always understand the next step."
          />
          <div className="mt-8 grid gap-4">
            {process.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] bg-slate-50 px-5 py-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-slate-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-dark gradient-ring px-8 py-9">
          <div className="hero-grid-pointer absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative">
            <SectionHeading
              eyebrow="Client enquiries"
              title="Ready to discuss your next request?"
              description="Tell us what you need and we will help you identify the right service path and practical next steps."
              light
            />
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p>We welcome direct enquiries from businesses, organisations and individuals seeking reliable support across our service areas.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Contact our team
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Let’s work together"
        title="Need a responsive business partner across key service sectors?"
        description="Reach out to discuss your needs and we will help you identify the most suitable path forward with clarity and professionalism."
      />
    </div>
  );
}
