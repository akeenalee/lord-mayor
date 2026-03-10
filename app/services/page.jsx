import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export const metadata = {
  title: "Services | Lord Mayor Group",
  description:
    "Explore the service portfolio of Lord Mayor of Africa Nig Ltd across travel, construction, real estate, agriculture, and automobile sectors.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="section pt-24 md:pt-28">
        <div className="rounded-[2rem] bg-slate-950 px-6 py-14 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.75)] md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <span className="eyebrow">Our Services</span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional support across key business sectors
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We provide practical, client-focused support across multiple
              service areas, helping clients move from need to execution with
              clarity, reliability, and professional coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Service intro */}
      <section className="section">
        <SectionHeading
          eyebrow="Service Portfolio"
          title="Explore our core sectors"
          subtitle="Each service line is structured to deliver dependable support, transparent communication, and practical business value."
        />
      </section>

      {/* Services grid */}
      <section className="section pt-0">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need help identifying the right service for your requirement?"
        description="Contact our team and we will guide you toward the most appropriate service option based on your needs."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Learn About Us"
        secondaryHref="/about"
      />
    </>
  );
}