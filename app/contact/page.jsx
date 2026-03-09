import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { ContactIcon } from '../components/Icons';

const contactItems = [
  {
    title: 'Email',
    value: 'olasunkanmi.abass78@gmail.com',
    href: 'mailto:olasunkanmi.abass78@gmail.com',
    icon: 'email',
  },
  {
    title: 'Phone',
    value: '+234 803 429 7634',
    href: 'tel:+2348034297634',
    icon: 'phone',
  },
  {
    title: 'Address',
    value: 'No 3 Kolda Street, Wuse 2, Abuja',
    icon: 'location',
  },
  {
    title: 'Business hours',
    value: 'Monday – Friday, 9:00 AM – 5:00 PM',
    icon: 'clock',
  },
];

const supportPoints = [
  'Fast response to enquiries',
  'Professional service discussions',
  'Practical guidance on next steps',
  'Support across multiple sectors',
];

export const metadata = {
  title: 'Contact',
  description: 'Contact Lord Mayor of Africa Nig Ltd for service enquiries and business discussions.',
};

export default function Contact() {
  return (
    <div className="space-y-16 pb-8">
      <section className="card-dark gradient-ring animate-fade-in px-6 py-14 sm:px-10 lg:px-12">
        <div className="hero-grid-pointer absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Contact us</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let’s discuss your business needs.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Reach out for service enquiries, partnerships or business discussions across any of our operating sectors.
            </p>
          </div>
          <div className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Quick response promise</p>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Use the enquiry form below or contact us directly. We aim to respond clearly and professionally, with practical next steps for your request.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Get in touch"
            title="Talk to us about your next requirement."
            description="Whether you need support in travel, property, construction, agriculture or automobile services, our team is available to discuss your needs and next steps."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item) => (
              <div key={item.title} className="card-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <ContactIcon type={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">{item.title}</p>
                    <p className="mt-3 text-base leading-7 text-slate-700">
                      {item.href ? (
                        <a href={item.href} className="font-medium text-slate-900 transition hover:text-amber-700 break-all">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Why contact us</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">Clear communication from first enquiry.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We keep conversations straightforward and professional, helping you understand the right service path, expected next steps and how we can support your goals.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {supportPoints.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-slate-50 p-5 text-sm font-medium leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need support on a project or service request?"
        description="Send us an email or call directly and we will be happy to start the conversation."
        primaryLabel="Email us"
        primaryHref="mailto:olasunkanmi.abass78@gmail.com"
        secondaryLabel="Call us"
        secondaryHref="tel:+2348034297634"
      />
    </div>
  );
}
