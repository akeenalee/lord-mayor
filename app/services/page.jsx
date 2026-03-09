import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export const metadata = {
  title: 'Services',
  description: 'Explore the services offered by Lord Mayor of Africa Nig Ltd.',
};

export default function Services() {
  return (
    <div className="space-y-16 pb-8">
      <section className="card-dark animate-fade-in px-6 py-14 sm:px-10 lg:px-12">
        <div className="hero-grid-pointer absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Our services</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional support across key business sectors.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            We provide practical, client-focused support across multiple service areas, helping clients move from need to execution with clarity.
          </p>
        </div>
      </section>

      <SectionHeading
        eyebrow="Service portfolio"
        title="Explore our core sectors."
        description="Each service line is designed to deliver dependable support, clear communication and practical business value."
      />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </section>

      <CTASection
        title="Need help identifying the right service for your requirement?"
        description="Contact our team and we will guide you toward the best-fit service path based on your needs."
        primaryLabel="Get in touch"
      />
    </div>
  );
}
