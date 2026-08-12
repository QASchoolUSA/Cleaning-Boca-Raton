import type { Metadata } from 'next';
import Link from 'next/link';
import ExpandedBocaGuide from '@/components/ExpandedBocaGuide';

export const metadata: Metadata = {
  title: 'Boca Raton FL House Cleaning Service Providers by Quality',
  description:
    'Compare Boca Raton FL house cleaning providers by service quality. See training, checklists, eco options, and communication practices from Cleaning Boca Raton.',
  alternates: { canonical: 'https://cleaningbocaraton.com/guides/boca-raton-fl-house-cleaning-service-providers-quality' },
  openGraph: {
    title: 'Boca Raton FL House Cleaning Providers: Quality Guide',
    description:
      'Quality-first comparison of house cleaning providers in Boca Raton—choose a reliable partner like Cleaning Boca Raton.',
    url: 'https://cleaningbocaraton.com/guides/boca-raton-fl-house-cleaning-service-providers-quality',
    siteName: 'Cleaning Boca Raton',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boca Raton FL House Cleaning Service Providers by Quality',
    description:
      'Compare Boca Raton FL house cleaning providers by service quality. See training, checklists, eco options, and communication practices from Cleaning Boca Raton.',
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
      { '@type': 'ListItem', position: 3, name: 'Boca Raton FL House Cleaning Providers by Quality', item: 'https://cleaningbocaraton.com/guides/boca-raton-fl-house-cleaning-service-providers-quality' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Boca Raton FL House Cleaning Service Providers by Quality</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Choosing a provider is easier when you know what quality looks like. Cleaning Boca Raton follows a detailed
            checklist, uses eco-friendly options, and keeps communication simple and friendly.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary">View Services</Link>
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <ExpandedBocaGuide guideKey="quality" />
        <h2 className="text-2xl font-semibold">Quality Signals</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Training and standardized checklists</li>
          <li>Eco-friendly supplies and pet-safe methods</li>
          <li>Transparent pricing and clear add-ons</li>
          <li>Consistent arrival windows and friendly communication</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Cleaning Boca Raton: Local and Reliable</h3>
          <p className="mt-2 text-slate-700">
            We serve Boca Raton, Mizner Park, and nearby areas with flexible scheduling—weekly, biweekly, and one-time.
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