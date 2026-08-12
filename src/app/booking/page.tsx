import { Suspense } from 'react';
import { Calculator, X } from 'lucide-react';
import PriceCalculatorServer from '@/components/PriceCalculatorServer';
import Link from 'next/link';

export const metadata = {
  title: 'Book Cleaning Service Online | Instant Price & Booking',
  description:
    'Book house cleaning or maid service online in Boca Raton, FL. Get instant quotes, choose services, and schedule your appointment in 60 seconds.',
  alternates: { canonical: 'https://cleaningbocaraton.com/booking' },
  openGraph: {
    title: 'Book Cleaning Service Online',
    description:
      'Book your cleaning service online in Boca Raton, FL. Get instant quotes and schedule your appointment.',
    type: 'website',
    url: 'https://cleaningbocaraton.com/booking',
  },
  twitter: {
    card: 'summary',
    title: 'Book Cleaning Service Online',
    description:
      'Book your cleaning service online in Boca Raton, FL. Get instant quotes and schedule your appointment.',
  },
};

export default function BookingPage() {
  return (
    <div className="fixed inset-0 z-[100] bg-gray-50 flex flex-col h-[100dvh] md:relative md:z-auto md:h-auto md:bg-transparent md:block pt-0 md:pt-20">

      {/* --- Desktop Hero Header --- */}
      <section className="hidden md:block bg-primary py-12 border-b shrink-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Book cleaning online</h1>
            <p className="text-lg text-white/75">Get instant pricing and schedule your appointment in minutes.</p>
          </div>
        </div>
      </section>

      {/* --- Calculator Section --- */}
      <section className="flex-1 flex flex-col bg-gray-50 md:bg-white md:py-12 overflow-hidden">
        <div className="container mx-auto px-0 md:px-4 flex-1 flex flex-col h-full">
          <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col h-full">

            <div className="flex-1 flex flex-col bg-transparent md:bg-white md:rounded-2xl md:shadow-2xl md:border md:border-gray-100 overflow-hidden">
              {/* Desktop Calculator Header */}
              <div className="hidden md:block bg-primary px-6 lg:px-8 py-6 shrink-0">
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h2 className="font-display text-2xl lg:text-3xl text-white">Get your instant quote</h2>
                    <p className="text-white/80 text-lg">Professional pricing in 3 easy steps</p>
                  </div>
                </div>
              </div>

              {/* Calculator Content */}
              <div id="price-calculator" className="flex-1 flex flex-col min-h-0 w-full p-0 lg:p-8">
                <Suspense fallback={<div className="py-12 text-center text-gray-500">Loading booking options...</div>}>
                  <PriceCalculatorServer />
                </Suspense>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}