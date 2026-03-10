'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label, onClick }) {
  const pathname = usePathname();
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? 'bg-slate-900 text-white shadow-md'
          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-slate-200 bg-white/95 shadow-md backdrop-blur'
          : 'border-b border-slate-200/70 bg-white/90 backdrop-blur'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
              <Image src="/logo.png" alt="Lord Mayor logo" width={40} height={40} priority />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
                Lord Mayor
              </p>
              <p className="text-base font-semibold text-slate-950">
                of Africa Nig Ltd
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}

            <Link
              href="/contact"
              className="ml-2 inline-flex rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Start a project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-lg">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Start a project
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}