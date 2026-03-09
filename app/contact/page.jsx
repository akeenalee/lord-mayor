export const metadata = {
  title: 'Contact | Lord Mayor of Africa Nig Ltd',
  description: 'Contact Lord Mayor of Africa Nig Ltd for service enquiries and business discussions.',
};

export default function Contact() {
  return (
    <div className="space-y-10 pb-6">
      <section className="rounded-[2rem] bg-slate-950 px-6 py-14 text-white shadow-xl sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Contact us</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Let’s discuss your business needs.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Reach out to us for service enquiries, partnerships or business discussions across any of our operating sectors.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Email</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            <a href="mailto:olasunkanmi.abass78@gmail.com" className="text-amber-700 hover:text-amber-800">
              olasunkanmi.abass78@gmail.com
            </a>
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Phone</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            <a href="tel:+2348034297634" className="text-amber-700 hover:text-amber-800">
              +234 803 429 7634
            </a>
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Address</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">No 3 Kolda Street, Wuse 2, Abuja</p>
        </div>
      </section>
    </div>
  );
}
