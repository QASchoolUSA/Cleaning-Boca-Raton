import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Boca Raton FL Cleaning Guides | House Cleaning Tips & Local Pricing',
  description:
    'Local cleaning guides for Boca Raton, FL homeowners and renters. Learn house cleaning prices, how to book a maid service, deep cleaning tips, and move-out costs.',
  alternates: { canonical: 'https://cleaningbocaraton.com/guides' },
  openGraph: {
    title: 'Boca Raton FL Cleaning Guides | House Cleaning Tips & Local Pricing',
    description:
      'Practical cleaning guides for Boca Raton, FL. Pricing, booking, deep cleaning, move-out costs, and how to choose a local cleaning company.',
    url: 'https://cleaningbocaraton.com/guides',
    siteName: 'Cleaning Boca Raton',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boca Raton FL Cleaning Guides | House Cleaning Tips & Local Pricing',
    description:
      'Practical cleaning guides for Boca Raton, FL homeowners and renters.',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
};

const guides = [
  { href: '/guides/how-much-does-house-cleaning-cost-boca-raton-fl', title: 'How Much Does House Cleaning Cost in Boca Raton, FL? (2026)' },
  { href: '/guides/boca-raton-fl-house-cleaning-prices-packages', title: 'House Cleaning Packages in Boca Raton, FL (Weekly & Biweekly)' },
  { href: '/guides/airbnb-turnover-sla-boca-raton-fl', title: 'Airbnb Turnover SLA in Boca Raton, FL' },
  { href: '/guides/rough-vs-final-post-construction-cleaning-boca-raton-fl', title: 'Rough vs Final Post-Construction Cleaning in Boca Raton, FL' },
  { href: '/guides/best-house-cleaning-services-boca-raton-fl', title: 'Best House Cleaning Services in Boca Raton FL' },
  { href: '/guides/affordable-deep-cleaning-companies-boca-raton-fl', title: 'Affordable Deep Cleaning Companies Near Boca Raton FL' },
  { href: '/guides/how-to-book-professional-house-cleaner-boca-raton-fl', title: 'How to Book a Professional House Cleaner in Boca Raton FL' },
  { href: '/guides/how-to-book-house-cleaner-boca-raton-fl', title: 'How to Book a House Cleaner in Boca Raton FL' },
  { href: '/guides/how-to-book-professional-house-cleaner-boca-raton-fl-customer-reviews', title: 'How to Book a House Cleaner Using Customer Reviews' },
  { href: '/guides/top-rated-house-cleaning-companies-boca-raton-fl-reviews', title: 'Top-Rated House Cleaning Companies in Boca Raton FL with Customer Reviews' },
  { href: '/guides/eco-friendly-house-cleaning-options-boca-raton-fl', title: 'Eco-Friendly House Cleaning Options Available in Boca Raton FL' },
  { href: '/guides/compare-house-cleaning-companies-boca-raton-fl-service-quality', title: 'Compare House Cleaning Companies in Boca Raton FL by Service Quality' },
  { href: '/guides/boca-raton-fl-house-cleaning-service-providers-quality', title: 'Boca Raton FL House Cleaning Service Providers by Quality' },
  { href: '/guides/boca-raton-fl-move-out-cleaning-services-costs', title: 'Boca Raton FL Move-Out Cleaning Services and Costs' },
  { href: '/guides/boca-raton-fl-weekly-biweekly-house-cleaning-providers', title: 'Weekly & Biweekly House Cleaning in Boca Raton FL' },
  { href: '/guides/best-house-cleaning-deals-discounts-boca-raton-fl', title: 'Best House Cleaning Deals and Discounts in Boca Raton FL' },
  { href: '/guides/apartment-deep-cleaning-boca-raton-fl', title: 'Apartment Deep Cleaning in Boca Raton FL' },
  { href: '/guides/florida-humidity-deep-cleaning-boca-raton-waterfront-homes', title: 'Florida Humidity & Deep Cleaning for Boca Raton Waterfront Homes' },
];

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cleaningbocaraton.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://cleaningbocaraton.com/guides' },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Boca Raton FL Cleaning Guides',
    itemListElement: guides.map((g, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: g.title,
      url: `https://cleaningbocaraton.com${g.href}`,
    })),
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Cleaning Guides for Boca Raton FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Explore practical, local guides from Cleaning Boca Raton. Learn how to book a maid service, compare cleaning
            companies, estimate house cleaning pricing, and keep your home fresh with weekly or biweekly care.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link key={g.href} href={g.href} className="rounded-lg border p-5 hover:bg-slate-50">
              <h2 className="text-lg font-semibold">{g.title}</h2>
              <p className="mt-2 text-slate-700">Read the full guide →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
