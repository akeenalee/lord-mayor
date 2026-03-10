import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";

const values = [
  "Professional communication and follow-through",
  "Operational reliability across engagements",
  "Client-focused service delivery",
  "Growth through trusted relationships and partnerships",
];

const foundations = [
  {
    title: "Our Mission",
    description:
      "To deliver reliable services and business support that help clients move forward with confidence.",
  },
  {
    title: "Our Approach",
    description:
      "We prioritize clarity, responsiveness, and practical coordination across every engagement.",
  },
  {
    title: "Our Focus",
    description:
      "Long-term client relationships, trusted partnerships, and value-driven service delivery.",
  },
];

export const metadata = {
  title: "About | Lord Mayor Group",
  description:
    "Learn more about Lord Mayor Group and our multi-sector business focus across travel, construction, real estate, agriculture, and automobile services.",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="section pt-24 md:pt-28">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.75)] md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="eyebrow">About Us</span>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                A multi-sector company focused on practical value delivery
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Lord Mayor of Africa Nig Ltd supports clients across several
                sectors with a dependable, business-minded, and
                relationship-driven approach to service delivery.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">
                Our Promise
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                We aim to make every client interaction clear, professional,
                and outcome-focused so the path from enquiry to delivery feels
                structured, dependable, and client-centered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Who We Are"
            title="Built to serve across business sectors where trust and coordination matter."
            subtitle="We work across travel, construction, real estate, agriculture, and automobile services, helping clients access practical solutions with confidence, clarity, and professionalism."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-lg font-semibold text-amber-700">
                  ✓
                </div>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Cards */}
      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          {foundations.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">
                {item.title}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Overview */}
      <section className="section">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-sm md:px-10">
          <SectionHeading
            eyebrow="Business Overview"
            title="A dependable business partner across multiple service sectors"
            subtitle="Our strength lies in combining service discipline, responsiveness, and relationship-driven execution to support clients across different industries."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.25rem] bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Multi-sector expertise
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We operate across several service areas, allowing us to support
                varied client needs with a broader business perspective.
              </p>
            </div>

            <div className="rounded-[1.25rem] bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Structured delivery
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We approach engagements with professionalism, clear
                coordination, and a strong commitment to service quality.
              </p>
            </div>

            <div className="rounded-[1.25rem] bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Long-term value
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We focus on trusted relationships, repeat value, and sustainable
                growth for both clients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to work with a dependable multi-sector business partner?"
        description="We are available to discuss your needs and recommend the right service route for your next project, engagement, or business requirement."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}