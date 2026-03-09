export const services = [
  {
    slug: 'travel',
    title: 'Travel & Tours',
    summary:
      'End-to-end travel coordination for business, corporate and personal journeys across local and international destinations.',
    intro:
      'We support individuals, executives and organisations with dependable travel planning, itinerary coordination and logistics support designed to make every journey seamless.',
    highlights: ['Flight booking support', 'Visa and travel advisory', 'Corporate travel coordination'],
  },
  {
    slug: 'construction',
    title: 'Construction',
    summary:
      'Construction support focused on quality delivery, planning, execution oversight and dependable project coordination.',
    intro:
      'Our construction services are built around practical delivery, disciplined coordination and a commitment to safe, durable and efficient project outcomes.',
    highlights: ['Project planning', 'Site coordination', 'Quality-focused delivery'],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    summary:
      'Property-focused solutions covering development opportunities, advisory support and reliable real estate coordination.',
    intro:
      'We help clients navigate property opportunities with clarity, professionalism and a focus on long-term value creation.',
    highlights: ['Property sourcing', 'Advisory support', 'Investment opportunities'],
  },
  {
    slug: 'agriculture',
    title: 'Agriculture',
    summary:
      'Agricultural services and partnerships that support food production, agribusiness development and sustainable growth.',
    intro:
      'We are committed to practical agricultural solutions that strengthen food systems, enable partnerships and support productive agribusiness operations.',
    highlights: ['Agribusiness support', 'Supply coordination', 'Growth-oriented partnerships'],
  },
  {
    slug: 'automobile',
    title: 'Automobile',
    summary:
      'Automobile solutions covering sourcing, advisory and vehicle-related support with a focus on trust and quality.',
    intro:
      'Our automobile services are designed to help clients make informed decisions on vehicle sourcing and related solutions with confidence.',
    highlights: ['Vehicle sourcing support', 'Procurement guidance', 'Client-focused service'],
  },
];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
);
