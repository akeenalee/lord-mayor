import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';

const values = [
  'Professional communication and follow-through',
  'Operational reliability across engagements',
  'Client-focused service delivery',
  'Growth through trusted relationships and partnerships',
];

const foundations = [
  {
    title: 'Our mission',
    description: 'To deliver reliable services and business support that help clients move forward with confidence.',
  },
  {
    title: 'Our approach',
    description: 'We prioritize clarity, responsiveness and practical coordination across every engagement.',
  },
  {
    title: 'Our focus',
    description: 'Long-term client relationships, trusted partnerships and value-driven service delivery.',
  },
];

export const metadata = {
  title: 'About',
  description: 'Learn more about Lord Mayor of Africa Nig Ltd and our multi-sector business focus.',
};

export default function About() {
  return (
    <div className="space-y-16 pb-8">
      <section className="card-dark gradient-ring animate-fade-in px-6 py-14 sm:px-10 lg:px-12">
        <div className="hero-grid-pointer absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">About us</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A multi-sector company focused on practical value delivery.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Lord Mayor of Africa Nig Ltd supports clients across several sectors with a dependable,
              business-minded and relationship-driven approach to service delivery.
            </p>
          </div>
          <div className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Our promise</p>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              We aim to make each client interaction clear, professional and outcome-focused, so the path from enquiry to delivery feels structured and dependable.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="Who we are"
          title="Built to serve across business sectors where trust and coordination matter."
          description="We work across travel, construction, real estate, agriculture and automobile services, helping clients access practical solutions with confidence, clarity and professionalism."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value} className="card-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-lg font-semibold text-amber-700">✓</div>
              <p className="mt-4 text-base leading-7 text-slate-700">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-3">
          {foundations.map((item) => (
            <div key={item.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{item.title}</p>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to work with a dependable multi-sector business partner?"
        description="We are available to discuss your needs and recommend the right service route for your next project, engagement or business requirement."
      />
    </div>
  );
}
