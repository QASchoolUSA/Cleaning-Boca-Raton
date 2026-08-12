import type { Metadata } from 'next';
import Link from 'next/link';
import ExpandedBocaGuide from '@/components/ExpandedBocaGuide';

export const metadata: Metadata = {
  title: 'Best House Cleaning Deals and Discounts in Boca Raton FL',
  description:
    'Find the best house cleaning deals and discounts in Boca Raton FL. Learn savings strategies and how recurring service reduces costs.',
  alternates: { canonical: 'https://cleaningbocaraton.com/guides/best-house-cleaning-deals-discounts-boca-raton-fl' },
  openGraph: {
    title: 'Best House Cleaning Deals and Discounts in Boca Raton FL',
    description:
      'Savings guide for Boca Raton homeowners: recurring cleaning discounts, bundled add-ons, and seasonal promotions from Cleaning Boca Raton.',
    url: 'https://cleaningbocaraton.com/guides/best-house-cleaning-deals-discounts-boca-raton-fl',
    siteName: 'Cleaning Boca Raton',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best House Cleaning Deals and Discounts in Boca Raton FL',
    description:
      'Find the best house cleaning deals and discounts in Boca Raton FL. Learn savings strategies and how recurring service reduces costs.',
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
      { '@type': 'ListItem', position: 3, name: 'Best House Cleaning Deals and Discounts in Boca Raton FL', item: 'https://cleaningbocaraton.com/guides/best-house-cleaning-deals-discounts-boca-raton-fl' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Best House Cleaning Deals and Discounts in Boca Raton FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Looking for the best cleaning deals? Cleaning Boca Raton offers savings through recurring plans, mid-week slots,
            and bundled add-ons. Use this guide to plan a cost-efficient service without sacrificing quality.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary">View Availability</Link>
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <ExpandedBocaGuide guideKey="deals" />
        <h2 className="text-2xl font-semibold">Savings Strategies</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Weekly or biweekly plans reduce per-visit pricing</li>
          <li>Bundle add-ons like oven, fridge, and windows in one visit</li>
          <li>Book mid-week for broader availability</li>
          <li>Start with a deep clean, then switch to maintenance</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Keywords and Searches</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>best house cleaning deals Boca Raton FL</li>
          <li>house cleaning discounts near me</li>
          <li>Boca Raton FL cleaning promotions</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Cleaning Boca Raton: Value Without Compromise</h3>
          <p className="mt-2 text-slate-700">
            We combine quality checklists, trained teams, and friendly communication—then layer in ways to save. Ask
            about seasonal promotions and recurring discounts.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary">Book & Save</Link>
            <Link href="/house-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">House Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}