import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'Boca Raton FL Move-Out Cleaning Services & Costs (2026)',
  description:
    'Moving out? Get a clear breakdown of move-out cleaning costs in Boca Raton, FL for 2026. See pricing by home size and what is included.',
  alternates: { canonical: 'https://cleaningbocaraton.com/guides/boca-raton-fl-move-out-cleaning-services-costs' },
  openGraph: {
    title: 'Boca Raton FL Move-Out Cleaning Services & Costs (2026)',
    description:
      'The #1 requested guide for movers in Boca Raton. We reveal the true cost of professional move-out cleaning.',
    url: 'https://cleaningbocaraton.com/guides/boca-raton-fl-move-out-cleaning-services-costs',
    siteName: 'Cleaning Boca Raton',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boca Raton FL Move-Out Cleaning Services & Costs (2026)',
    description:
      'Moving out? Get a clear breakdown of move-out cleaning costs in Boca Raton, FL for 2026. See pricing by home size and what is included.',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Boca Raton FL Move-Out Cleaning Services & Costs (2026)',
    image: 'https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp',
    author: {
      '@type': 'Person',
      name: 'Cleaning Boca Raton Team',
      url: 'https://cleaningbocaraton.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cleaning Boca Raton',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cleaningbocaraton.com/boca-raton-cleaning-logo.png',
      },
    },
    datePublished: '2026-02-10',
    dateModified: '2026-02-10',
    description: 'A cost guide for move-out cleaning services in Boca Raton, FL.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://cleaningbocaraton.com/guides/boca-raton-fl-move-out-cleaning-services-costs',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a move-out clean cost in Boca Raton?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The average cost for a move-out clean in Boca Raton ranges from $280 for an apartment to $450+ for a standard 3-bedroom home.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to be there?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Since the home is usually empty, you can leave a key or code. We will lock up when we finish.',
        },
      },
    ],
  };

  return (
    <main className="pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-primary transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">Move-Out Costs</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Boca Raton FL Move-Out Cleaning Costs (2026)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Budgeting for your move? Here is a transparent look at what you should expect to pay for a professional move-out clean.
          </p>
        </header>

        {/* Hook + Answer */}
        <section className="bg-background border border-border rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-primary mb-2 flex items-center">
            <span className="bg-primary text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: Average Costs
          </h2>
          <p className="text-slate-800 leading-relaxed">
            In 2026, the average cost for a full move-out clean in Boca Raton is <strong>$350</strong>.
            Prices generally range from <strong>$0.15 to $0.25 per square foot</strong> depending on the condition of the home.
            Homes requiring heavy trash removal or wall cleaning will be on the higher end.
          </p>
        </section>

        {/* Cost Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Estimated Move-Out Pricing by Home Size</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Home Size</th>
                  <th className="px-6 py-4">Price Range</th>
                  <th className="px-6 py-4">Est. Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Studio / 1 Bed Apt</td>
                  <td className="px-6 py-4">$220 - $300</td>
                  <td className="px-6 py-4">3-4 Hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">2 Bed / 2 Bath</td>
                  <td className="px-6 py-4">$280 - $380</td>
                  <td className="px-6 py-4">4-5 Hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">3 Bed / 2 Bath House</td>
                  <td className="px-6 py-4">$350 - $480</td>
                  <td className="px-6 py-4">5-7 Hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">Large Home (2500+ sq ft)</td>
                  <td className="px-6 py-4">$450 - $700+</td>
                  <td className="px-6 py-4">6-9+ Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Is it worth it?</h2>
          <p>
            Moving is stressful enough without having to scrub a toilet at midnight. Hiring a professional move-out cleaner ensures:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Guaranteed Deposit Return:</strong> We clean to inspection standards.</li>
            <li><strong>Time Savings:</strong> Focus on unpacking your new home, not cleaning the old one.</li>
            <li><strong>Positive References:</strong> Leave on good terms with your landlord or buyer.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Book Your Move-Out</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Take the stress out of moving. Lock in your move-out clean today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Schedule Now
            </Link>
            <Link href="/free-custom-quote" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors">
              Get Quote
            </Link>
          </div>
        </section>

        <AuthorBio />
      </article>
    </main>
  );
}