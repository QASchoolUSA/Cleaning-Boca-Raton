import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { Shield, Leaf, Clock, Award, Mail, ArrowRight } from 'lucide-react';
import { hasPhone, siteFacts } from '@/lib/siteFacts';

export const metadata: Metadata = {
  title: 'About Us — Licensed House Cleaners in Boca Raton, FL',
  description:
    'Meet Cleaning Boca Raton — bonded, insured house cleaners serving Boca Raton, Mizner Park, Boca West & Seminole County. 10+ years of trusted maid service and commercial cleaning.',
  alternates: { canonical: 'https://cleaningbocaraton.com/about' },
  openGraph: {
    title: 'About Cleaning Boca Raton | Licensed House Cleaners in Boca Raton, FL',
    description:
      'Local cleaning company in Boca Raton, FL. Insured professionals delivering house cleaning, maid service, and office cleaning across Palm Beach County.',
    type: 'website',
    url: 'https://cleaningbocaraton.com/about',
    siteName: 'Cleaning Boca Raton',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-about-us.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Cleaning Boca Raton | Licensed House Cleaners in Boca Raton, FL',
    description:
      'Bonded, insured house cleaners in Boca Raton, FL. Trusted maid service and commercial cleaning for Seminole County.',
    images: ['https://cleaningbocaraton.com/boca-raton-cleaning-about-us.webp'],
  },
};

const values = [
  {
    icon: Shield,
    title: 'Trusted & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We use environmentally safe cleaning products and methods.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'Consistent, punctual service you can count on every time.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: '100% satisfaction guarantee on all our cleaning services.',
  },
];

export default function AboutPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://cleaningbocaraton.com/#organization',
    name: 'Cleaning Boca Raton',
    alternateName: 'Cleaning Boca Raton LLC',
    url: 'https://cleaningbocaraton.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cleaningbocaraton.com/boca-raton-cleaning-logo.png',
      width: 300,
      height: 300,
    },
    description:
      'Professional house cleaning, maid service, and commercial cleaning company serving Boca Raton, FL and surrounding communities.',
    ...(hasPhone ? { telephone: siteFacts.phone.display } : {}),
    email: siteFacts.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boca Raton',
      addressRegion: 'FL',
      postalCode: '33432',
      addressCountry: 'US',
    },
    sameAs: [
      'https://cleaningbocaraton.com',
      'https://www.facebook.com/profile.php?id=61579618588193',
      'https://www.instagram.com/cleaningbocaraton',
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cleaningbocaraton.com/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://cleaningbocaraton.com/about' },
    ],
  };

  return (
    <main className="pt-20">
      <LocalBusinessSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-mist py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Cleaning Boca Raton — Trusted House &amp; Office Cleaners in Boca Raton, FL
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your local cleaning company for house cleaning, maid service, and commercial cleaning across Boca Raton,
              Mizner Park, Boca West, and Seminole County.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Cleaning Boca Raton is a professional cleaning company operated by <strong>{siteFacts.legalName}</strong>, serving
                homeowners, renters, property managers, and businesses throughout Boca Raton, FL and the greater Central
                Florida area. {siteFacts.experienceStatement} Our team has built a reputation for reliability, attention
                to detail, and honest communication.
              </p>
              <p>
                We are not a faceless national franchise. We are local house cleaners who understand Seminole County —
                from historic homes near the Boca Raton Riverwalk to newer builds in Mizner Park and Boca West. Whether you
                need recurring maid service, a one-time deep clean, move-out cleaning before a lease ends, or dependable
                office cleaning for your business, we tailor every visit to your space, schedule, and budget.
              </p>
              <p>
                Every member of our team is trained in professional cleaning techniques and uses eco-friendly products
                that are tough on grime but safe for families, pets, and employees. We are fully bonded and insured, so
                you can welcome us into your home or workplace with confidence.
              </p>
              <p>
                Our service philosophy is simple: show up on time, follow a detailed checklist, communicate clearly, and
                leave your space noticeably cleaner than you expected. That is how we have earned repeat clients across
                Boca Raton, Boca Del Mar, East Boca, Spanish River, Whisper Walk, West Boca, Woodfield, Deerfield Beach, and Winter
                Park.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/boca-raton-cleaning-about-us.webp"
                alt="Cleaning Boca Raton professional house cleaning team in Boca Raton FL"
                width={800}
                height={800}
                className="w-full max-w-md mx-auto aspect-square object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Boca Raton Families Choose Us</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Searching for &quot;house cleaning Boca Raton FL&quot; or &quot;maid service near me&quot; brings up dozens of
              options. Here is what sets Cleaning Boca Raton apart from other cleaning companies in the area:
            </p>
            <ul>
              <li>
                <strong>Transparent pricing</strong> — get an instant quote online or request a custom quote for larger
                jobs. No surprise fees after the job is done.
              </li>
              <li>
                <strong>Flexible scheduling</strong> — book one-time, weekly, bi-weekly, or monthly cleaning. Same-day
                and next-day appointments may be available depending on our calendar.
              </li>
              <li>
                <strong>Full-service options</strong> — from{' '}
                <Link href="/house-cleaning" className="text-primary hover:text-primary/80">
                  house cleaning
                </Link>{' '}
                and{' '}
                <Link href="/deep-cleaning" className="text-primary hover:text-primary/80">
                  deep cleaning
                </Link>{' '}
                to{' '}
                <Link href="/move-in-move-out-cleaning" className="text-primary hover:text-primary/80">
                  move-out cleaning
                </Link>
                ,{' '}
                <Link href="/airbnb-cleaning" className="text-primary hover:text-primary/80">
                  Airbnb turnover
                </Link>
                , and{' '}
                <Link href="/commercial-cleaning" className="text-primary hover:text-primary/80">
                  commercial cleaning
                </Link>
                .
              </li>
              <li>
                <strong>Local commitment</strong> — we live and work in this community. When you email us,
                you reach a real team — not a call center across the country.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-mist rounded-lg mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Book your house cleaning or maid service online in under 60 seconds, or request a free custom quote for
            commercial and specialty jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background transition-colors"
            >
              Book Online <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/custom-quote"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors"
            >
              Get a Custom Quote
            </Link>
            <a
              href={`mailto:${siteFacts.email}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors"
            >
              <Mail className="w-5 h-5" /> {siteFacts.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
