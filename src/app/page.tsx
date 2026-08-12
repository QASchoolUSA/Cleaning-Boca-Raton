import Hero from '@/components/Hero';
import InstantPricing from '@/components/InstantPricing';
import EntityGraphSchema from '@/components/seo/EntityGraphSchema';
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('@/components/Services'));
const About = dynamic(() => import('@/components/About'));
const Gallery = dynamic(() => import('@/components/Gallery'));
const ServiceAreas = dynamic(() => import('@/components/ServiceAreas'));
const Contact = dynamic(() => import('@/components/Contact'));

export const metadata = {
  title: 'House Cleaning in Boca Raton, FL',
  description:
    "Professional home cleaners in Boca Raton, FL offering housekeeping, deep cleaning, and move-out services. Request a quote online today.",
  alternates: {
    canonical: 'https://cleaningbocaraton.com',
  },
  openGraph: {
    title:
      'Cleaning Boca Raton | House & Commercial Cleaning',
    description:
      "Get a sparkling clean house or office with Cleaning Boca Raton. We offer reliable housekeeping, commercial, and deep cleaning in Boca Raton, FL.",
    type: 'website',
    url: 'https://cleaningbocaraton.com',
    siteName: 'Cleaning Boca Raton',
    images: [
      {
        url: 'https://cleaningbocaraton.com/boca-raton-hero.png',
        width: 1200,
        height: 630,
        alt: 'Cleaning Boca Raton homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Boca Raton | Local Cleaning in Boca Raton, FL',
    description:
      "Professional house and office cleaning in Boca Raton, FL. Get a free quote online.",
    images: ['https://cleaningbocaraton.com/boca-raton-hero.png'],
  },
};

export default function HomePage() {
  return (
    <>
      <EntityGraphSchema />
      <Hero />
      <InstantPricing />
      <Services />
      <About />
      <Gallery />
      <ServiceAreas />
      <Contact />
    </>
  );
}
