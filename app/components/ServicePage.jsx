import CTASection from "./CTASection";
import SectionHeading from "./SectionHeading";
import ServiceHero from "./ServiceHero";
import ServiceSection from "./ServiceSection";

const promiseItems = [
  "Clear communication from enquiry to delivery",
  "Professional coordination tailored to your needs",
  "Reliable follow-through and practical next steps",
];

export default function ServicePage({ service, ctaTitle }) {
  return (
    <>
      {/* Hero */}
      <section className="section pt-24 md:pt-28">
        <div className="rounded-[2rem] bg-slate-950 px-6 py-14 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.75)] md:px-10 lg:px-12">
          <ServiceHero
            title={service.title}
            summary={service.summary}
            highlights={service.highlights}
          />
        </div>
      </section>

      {/* Service overview */}
      <section className="section">
        <ServiceSection
          intro={service.intro}
          highlights={service.highlights}
        />
      </section>

      {/* Why choose this service */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why clients choose this service"
            title={`A practical and dependable approach to ${service.title.toLowerCase()}`}
            subtitle="Every engagement is handled with attention to detail, clear communication, and a focus on commercially sensible outcomes."
          />

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {promiseItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 font-bold">
                  ✓
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting points */}
      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          {service.supportingPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                {item.title}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={ctaTitle}
        description="Contact our team to discuss your requirements and how we can support your goals with a clear and responsive service process."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}