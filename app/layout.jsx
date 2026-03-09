import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Lord Mayor of Africa Nig Ltd',
  description:
    'Professional multi-sector solutions across travel, construction, real estate, agriculture and automobile services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        <main className="mx-auto min-h-[60vh] w-full max-w-7xl px-6 py-8 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
