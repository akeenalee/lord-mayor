import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.lordmayorofafrica.com'),
  title: {
    default: 'Lord Mayor of Africa Nig Ltd',
    template: '%s | Lord Mayor of Africa Nig Ltd',
  },
  description:
    'Professional multi-sector solutions across travel, construction, real estate, agriculture and automobile services.',
  applicationName: 'Lord Mayor of Africa Nig Ltd',
  keywords: [
    'Lord Mayor of Africa',
    'travel services',
    'construction services',
    'real estate',
    'agriculture',
    'automobile services',
    'Abuja business',
  ],
  openGraph: {
    title: 'Lord Mayor of Africa Nig Ltd',
    description:
      'Professional multi-sector solutions across travel, construction, real estate, agriculture and automobile services.',
    url: 'https://www.lordmayorofafrica.com',
    siteName: 'Lord Mayor of Africa Nig Ltd',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lord Mayor of Africa Nig Ltd',
    description:
      'Professional multi-sector solutions across travel, construction, real estate, agriculture and automobile services.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lord Mayor of Africa Nig Ltd',
  url: 'https://www.lordmayorofafrica.com',
  logo: 'https://www.lordmayorofafrica.com/logo.png',
  email: 'olasunkanmi.abass78@gmail.com',
  telephone: '+2348034297634',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 3 Kolda Street, Wuse 2',
    addressLocality: 'Abuja',
    addressCountry: 'NG',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="mx-auto min-h-[60vh] w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
