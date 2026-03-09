import Link from 'next/link';
import ServiceHero from '../../components/ServiceHero';
import ServiceSection from '../../components/ServiceSection';
import { serviceMap } from '../../data/services';

const service = serviceMap['travel'];

export const metadata = {
  title: 'Travel & Tours | Lord Mayor of Africa Nig Ltd',
  description: service.summary,
};

export default function Page() {
  return (
    <div className="space-y-10 pb-6">
      <ServiceHero title={service.title} summary={service.summary} />
      <ServiceSection intro={service.intro} highlights={service.highlights} />
      <section className="rounded-[1.75rem] bg-amber-500 px-8 py-10 text-slate-950 shadow-lg">
        <h2 className="text-2xl font-bold">Need support in travel and tours?</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-900/80">
          Contact our team to discuss your requirements and the best way we can support your goals.
        </p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          Talk to us
        </Link>
      </section>
    </div>
  );
}
