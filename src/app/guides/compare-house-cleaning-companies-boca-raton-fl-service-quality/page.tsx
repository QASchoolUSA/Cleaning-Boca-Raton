import type { Metadata } from 'next';
import Link from 'next/link';
import ExpandedBocaGuide from '@/components/ExpandedBocaGuide';

export const metadata: Metadata = {
  title: 'Compare House Cleaning Companies in Boca Raton, FL',
  description:
    'A comparison guide for house cleaning companies in Boca Raton FL. Learn quality markers, checklists, and how Cleaning Boca Raton stacks up.',
  alternates: { canonical: 'https://cleaningbocaraton.com/guides/compare-house-cleaning-companies-boca-raton-fl-service-quality' },
  openGraph: {
    title: 'Compare House Cleaning Companies in Boca Raton FL',
    description:
      'Use this quality checklist to compare house cleaning companies in Boca Raton FL and choose the best fit.',
    url: 'https://cleaningbocaraton.com/guides/compare-house-cleaning-companies-boca-raton-fl-service-quality',
    siteName: 'Cleaning Boca Raton',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare House Cleaning Companies in Boca Raton, FL',
    description:
      'A comparison guide for house cleaning companies in Boca Raton FL. Learn quality markers, checklists, and how Cleaning Boca Raton stacks up.',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cleaningbocaraton.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://cleaningbocaraton.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Compare House Cleaning Companies in Boca Raton FL', item: 'https://cleaningbocaraton.com/guides/compare-house-cleaning-companies-boca-raton-fl-service-quality' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Compare House Cleaning Companies in Boca Raton, FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Use this side-by-side quality checklist to evaluate house cleaning companies in Boca Raton, FL. We outline
            standards, training, eco options, and communication practices—so you can select the right partner. Boca Raton
            Cleaning is local, responsive, and focused on consistent results.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary">Explore Services</Link>
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <ExpandedBocaGuide guideKey="compare" />
        <h2 className="text-2xl font-semibold">Quality Comparison Checklist</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Trained teams following a room-by-room checklist</li>
          <li>Eco-friendly supplies and pet-safe practices</li>
          <li>Transparent pricing and clear add-ons</li>
          <li>Flexible schedules: weekly, biweekly, and one-time</li>
          <li>Responsive communication and service notes</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Keywords to Search</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>compare house cleaning companies Boca Raton FL</li>
          <li>best house cleaning services near me</li>
          <li>Boca Raton FL house cleaners quality</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Why Cleaning Boca Raton Meets the Mark</h3>
          <p className="mt-2 text-slate-700">
            We blend reliable scheduling, thorough checklists, and friendly communication. If quality is your priority,
            compare us against your options and see why local homeowners choose Cleaning Boca Raton.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary">Book Now</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}