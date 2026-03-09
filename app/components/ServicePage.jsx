import CTASection from './CTASection';
import SectionHeading from './SectionHeading';
import ServiceHero from './ServiceHero';
import ServiceSection from './ServiceSection';

const promiseItems = [
  'Clear communication from enquiry to delivery',
  'Professional coordination tailored to your needs',
  'Reliable follow-through and practical next steps',
];

export default function ServicePage({ service, ctaTitle }) {
  return (
    <div className="space-y-12 pb-8">
      <ServiceHero title={service.title} summary={service.summary} highlights={service.highlights} />
      <ServiceSection intro={service.intro} highlights={service.highlights} />

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Why clients choose this service"
          title={`A practical and dependable approach to ${service.title.toLowerCase()}.`}
          description="Every engagement is handled with attention to detail, clear communication and a focus on commercially sensible outcomes."
        />
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {promiseItems.map((item) => (
            <div key={item} className="card-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-base font-semibold text-amber-700">✓</div>
              <p className="mt-4 text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {service.supportingPoints.map((item) => (
          <div key={item.title} className="card-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      <CTASection
        eyebrow="Let’s talk"
        title={ctaTitle}
        description="Contact our team to discuss your requirements and the best way we can support your goals with a clear, responsive process."
        primaryLabel="Talk to us"
      />
    </div>
  );
}
