export const services = [
  {
    slug: 'travel',
    shortLabel: 'TR',
    title: 'Travel & Tours',
    summary:
      'End-to-end travel coordination for business, corporate and personal journeys across local and international destinations.',
    intro:
      'We support individuals, executives and organisations with dependable travel planning, itinerary coordination and logistics support designed to make every journey seamless.',
    highlights: ['Flight booking support', 'Visa and travel advisory', 'Corporate travel coordination'],
    supportingPoints: [
      {
        title: 'Planning',
        description: 'Structured travel coordination for individuals, executives and teams with clear communication at every stage.',
      },
      {
        title: 'Advisory',
        description: 'Guidance on travel readiness, movement planning and practical considerations for smoother journeys.',
      },
      {
        title: 'Coordination',
        description: 'Reliable support designed to reduce delays, confusion and administrative friction during travel preparation.',
      },
    ],
  },
  {
    slug: 'construction',
    shortLabel: 'CN',
    title: 'Construction',
    summary:
      'Construction support focused on quality delivery, planning, execution oversight and dependable project coordination.',
    intro:
      'Our construction services are built around practical delivery, disciplined coordination and a commitment to safe, durable and efficient project outcomes.',
    highlights: ['Project planning', 'Site coordination', 'Quality-focused delivery'],
    supportingPoints: [
      {
        title: 'Execution',
        description: 'Practical coordination that helps projects move forward with structure, visibility and delivery discipline.',
      },
      {
        title: 'Quality',
        description: 'A focus on dependable standards, responsible oversight and clear service expectations across engagements.',
      },
      {
        title: 'Support',
        description: 'Ongoing collaboration that keeps communication aligned between requirements, timelines and delivery activities.',
      },
    ],
  },
  {
    slug: 'real-estate',
    shortLabel: 'RE',
    title: 'Real Estate',
    summary:
      'Property-focused solutions covering development opportunities, advisory support and reliable real estate coordination.',
    intro:
      'We help clients navigate property opportunities with clarity, professionalism and a focus on long-term value creation.',
    highlights: ['Property sourcing', 'Advisory support', 'Investment opportunities'],
    supportingPoints: [
      {
        title: 'Opportunities',
        description: 'Support in identifying viable property paths that align with personal, commercial or investment goals.',
      },
      {
        title: 'Guidance',
        description: 'Professional communication and advisory support that helps clients make well-informed property decisions.',
      },
      {
        title: 'Value',
        description: 'A practical approach focused on long-term relevance, trust and commercially sensible real estate outcomes.',
      },
    ],
  },
  {
    slug: 'agriculture',
    shortLabel: 'AG',
    title: 'Agriculture',
    summary:
      'Agricultural services and partnerships that support food production, agribusiness development and sustainable growth.',
    intro:
      'We are committed to practical agricultural solutions that strengthen food systems, enable partnerships and support productive agribusiness operations.',
    highlights: ['Agribusiness support', 'Supply coordination', 'Growth-oriented partnerships'],
    supportingPoints: [
      {
        title: 'Partnerships',
        description: 'Support for productive collaborations that strengthen agribusiness opportunities and sector participation.',
      },
      {
        title: 'Coordination',
        description: 'Practical service support for agricultural operations, supply relationships and value-chain engagement.',
      },
      {
        title: 'Growth',
        description: 'A forward-looking mindset focused on sustainable progress, operational clarity and long-term agricultural value.',
      },
    ],
  },
  {
    slug: 'automobile',
    shortLabel: 'AU',
    title: 'Automobile',
    summary:
      'Automobile solutions covering sourcing, advisory and vehicle-related support with a focus on trust and quality.',
    intro:
      'Our automobile services are designed to help clients make informed decisions on vehicle sourcing and related solutions with confidence.',
    highlights: ['Vehicle sourcing support', 'Procurement guidance', 'Client-focused service'],
    supportingPoints: [
      {
        title: 'Sourcing',
        description: 'Support in identifying vehicle options that align with client requirements, budgets and intended use.',
      },
      {
        title: 'Guidance',
        description: 'Professional advisory support that helps clients navigate choices with greater clarity and confidence.',
      },
      {
        title: 'Assurance',
        description: 'A service approach built on trust, responsiveness and quality-focused client engagement.',
      },
    ],
  },
];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
);
