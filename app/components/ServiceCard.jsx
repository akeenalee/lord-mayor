import Link from "next/link";
import { ArrowRightIcon, ServiceIcon } from "./Icons";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.35)]"
    >
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-transparent opacity-0 transition group-hover:opacity-100" />

      {/* icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white transition group-hover:bg-amber-500 group-hover:text-slate-900">
        <ServiceIcon slug={service.slug} className="h-6 w-6" />
      </div>

      {/* title */}
      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {service.title}
      </h3>

      {/* summary */}
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {service.summary}
      </p>

      {/* highlights */}
      <ul className="mt-5 space-y-2 text-sm text-slate-500">
        {service.highlights.slice(0, 2).map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-amber-700">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}