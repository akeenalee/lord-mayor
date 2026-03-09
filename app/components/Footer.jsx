import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Lord Mayor of Africa Nig Ltd
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Delivering practical multi-sector solutions across travel, construction,
            real estate, agriculture and automobile services.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Quick links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <p>No 3 Kolda Street, Wuse 2, Abuja</p>
            <p>
              <a href="tel:+2348034297634" className="transition hover:text-white">
                +234 803 429 7634
              </a>
            </p>
            <p>
              <a href="mailto:olasunkanmi.abass78@gmail.com" className="transition hover:text-white">
                olasunkanmi.abass78@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-6 py-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Lord Mayor of Africa Nig Ltd. All rights reserved.
      </div>
    </footer>
  );
}
