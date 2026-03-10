import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/travel", label: "Travel & Tours" },
  { href: "/services/construction", label: "Construction" },
  { href: "/services/real-estate", label: "Real Estate" },
  { href: "/services/agriculture", label: "Agriculture" },
  { href: "/services/automobile", label: "Automobile" },
];

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.25fr_0.7fr_0.95fr_0.95fr] lg:px-8">

        {/* Company intro */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image src="/logo.png" alt="Lord Mayor logo" width={38} height={38} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                Lord Mayor
              </p>
              <p className="text-base font-semibold text-white">
                of Africa Nig Ltd
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Professional multi-sector support across travel, construction,
            real estate, agriculture and automobile services for individuals,
            businesses and institutions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="rounded-full border border-white/10 px-3 py-1">
              Trusted coordination
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Responsive support
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Multi-sector delivery
            </span>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Company
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-amber-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Services
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-amber-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <p>No 3 Kolda Street, Wuse 2, Abuja</p>

            <p>
              <a
                href="tel:+2348034297634"
                className="transition hover:text-amber-300"
              >
                +234 803 429 7634
              </a>
            </p>

            <p>
              <a
                href="mailto:olasunkanmi.abass78@gmail.com"
                className="transition hover:text-amber-300 break-all"
              >
                olasunkanmi.abass78@gmail.com
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} Lord Mayor of Africa Nig Ltd.
          </p>

          <p className="text-xs text-slate-500">
            Built for professional multi-sector service delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}