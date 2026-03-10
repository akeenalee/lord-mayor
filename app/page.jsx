import Link from "next/link";
import CTASection from "./components/CTASection";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";
import { ArrowRightIcon, CheckIcon } from "./components/Icons";
import { services } from "./data/services";

const trustPillars = [
  {
    title: "Cross-sector capability",
    description:
      "A single business partner that can support multiple operational needs across key sectors.",
  },
  {
    title: "Clear communication",
    description:
      "We keep clients informed, aligned and confident at every stage of engagement.",
  },
  {
    title: "Practical delivery",
    description:
      "Our focus is on realistic execution, responsive service and outcomes that move projects forward.",
  },
];

const stats = [
  { value: "5", label: "Core service sectors" },
  { value: "1", label: "Unified business partner" },
  { value: "100%", label: "Commitment to responsive service" },
];

const process = [
  "Understand your requirement and desired outcome",
  "Recommend the right service path with clear next steps",
  "Coordinate delivery professionally and maintain communication",
];

export default function Home() {
  return (
    <div className="space-y-28 pb-8">

      {/* Hero */}
      <section className="section pt-24 md:pt-28">
        <div className="rounded-[2rem] bg-slate-950 px-6 py-16 md:px-10 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
                Multi-sector business solutions
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Helping clients move ideas, projects and opportunities forward with confidence.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Lord Mayor of Africa Nig Ltd provides professional support across
                travel, construction, real estate, agriculture and automobile
                services with a strong focus on dependability, coordination and
                long-term value.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400"
                >
                  Explore our services
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Request a consultation
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {trustPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                >
                  <h2 className="text-lg font-semibold text-white">
                    {pillar.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* About summary */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          <SectionHeading
            eyebrow="About us"
            title="A business platform built around trust, responsiveness and practical delivery."
            subtitle="We support individuals and organisations who need dependable coordination across multiple sectors."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <SectionHeading
            eyebrow="Our services"
            title="Sector-specific solutions designed for practical results."
            subtitle="We provide clear, professional coordination across multiple service sectors."
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-amber-600"
          >
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

      {/* Process */}
      <section className="section">
        <SectionHeading
          eyebrow="How we work"
          title="A straightforward process that keeps projects clear and focused."
          subtitle="Our approach keeps communication open and delivery structured."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {process.map((step, index) => (
            <div
              key={step}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {index + 1}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        eyebrow="Let’s work together"
        title="Need a responsive partner across multiple service sectors?"
        description="Reach out to discuss your requirements and we will guide you toward the right service path."
      />

    </div>
  );
}