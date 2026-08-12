import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: 'How to Choose a House Cleaner: Reviews & Vetting (Boca Raton)',
  description:
    'Don’t hire blindly. Learn how to use customer reviews to vet house cleaning services in Boca Raton, FL. Spot red flags and verify insurance.',
  alternates: { canonical: 'https://cleaningbocaraton.com/guides/how-to-book-professional-house-cleaner-boca-raton-fl-customer-reviews' },
  openGraph: {
    title: 'How to Choose a House Cleaner: Reviews & Vetting (Boca Raton)',
    description:
      'A guide to reading between the lines of cleaning reviews. Learn how to spot fake 5-star reviews and find a truly reliable local service.',
    url: 'https://cleaningbocaraton.com/guides/how-to-book-professional-house-cleaner-boca-raton-fl-customer-reviews',
    siteName: 'Cleaning Boca Raton',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose a House Cleaner: Reviews & Vetting (Boca Raton)',
    description:
      'Don’t hire blindly. Learn how to use customer reviews to vet house cleaning services in Boca Raton, FL. Spot red flags and verify insurance.',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Choose a House Cleaner: Reviews & Vetting (Boca Raton)',
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
    description: 'Expert advice on vetting house cleaning services using customer reviews.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://cleaningbocaraton.com/guides/how-to-book-professional-house-cleaner-boca-raton-fl-customer-reviews',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are all cleaning reviews real?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not always. Look for reviews that mention specific details like team names (e.g., "Maria was great") or specific tasks ("cleaned the blinds"). Detailed reviews are usually authentic.',
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
          <span className="text-slate-800 font-medium">Vetting Guide</span>
        </nav>

        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            How to Choose a Professional House Cleaner (Using Reviews)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Stars aren't everything. Learn how to dig deeper into customer feedback to avoid "no-shows" and find a service you can trust.
          </p>
        </header>

        {/* Hook + Answer */}
        <section className="bg-background border border-border rounded-xl p-6 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-primary mb-2 flex items-center">
            <span className="bg-primary text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">✓</span>
            Quick Answer: What to look for
          </h2>
          <p className="text-slate-800 leading-relaxed">
            When vetting a Boca Raton cleaner, prioritize <strong>reliability</strong> over price. Look for reviews that confirm the company
            <strong> clearly communicates arrival times</strong> and <strong>responds to issues</strong>. A company with a 4.8 rating that handles
            issues is often safer than a 5.0 rating with only 3 reviews.
          </p>
        </section>

        {/* Checklist Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Red Flags in Reviews</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 font-bold">
                <tr>
                  <th className="px-6 py-4">Red Flag</th>
                  <th className="px-6 py-4">What it means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-medium text-red-600">"Never showed up"</td>
                  <td className="px-6 py-4">Serious reliability issue. Avoid.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">"Price changed"</td>
                  <td className="px-6 py-4">Bait-and-switch tactics. Look for flat-rate providers.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-900">"Different person every time"</td>
                  <td className="px-6 py-4">High turnover. Security risk for your home.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl font-bold text-slate-900">The "Cleaning Boca Raton" Promise</h2>
          <p>
            We built our reputation on trust. That's why we:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Review every cleaner's work</li>
            <li>Send email/text reminders so you never forget an appointment</li>
            <li>Guarantee your satisfaction—if it's not right, we fix it.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Hire with Confidence</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Choose the team Boca Raton trusts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Book Verified Pros
            </Link>
          </div>
        </section>

        <AuthorBio />
      </article>
    </main>
  );
}