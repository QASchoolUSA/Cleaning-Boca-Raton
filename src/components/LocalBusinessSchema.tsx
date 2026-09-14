import { hasPhone, siteFacts } from '@/lib/siteFacts';

type Props = {
  id?: string;
  name?: string;
  url?: string;
  telephone?: string;
  image?: string;
  priceRange?: string;
};

const SERVICE_AREAS = [
  { '@type': 'City', name: 'Boca Raton', sameAs: 'https://en.wikipedia.org/wiki/Boca Raton,_Florida' },
  { '@type': 'City', name: 'Mizner Park' },
  { '@type': 'City', name: 'Boca Del Mar' },
  { '@type': 'City', name: 'Boca West' },
  { '@type': 'City', name: 'East Boca' },
  { '@type': 'City', name: 'Spanish River' },
  { '@type': 'City', name: 'Woodfield' },
  { '@type': 'City', name: 'Deerfield Beach' },
  { '@type': 'City', name: 'Whisper Walk' },
  { '@type': 'City', name: 'West Boca' },
  { '@type': 'City', name: 'Royal Palm Yacht & Country Club' },
];


export default function LocalBusinessSchema({
  id = `${siteFacts.url}/#localbusiness`,
  name = siteFacts.brandName,
  url = siteFacts.url,
  telephone,
  image = 'https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp',
  priceRange = '$$',
}: Props) {
  const resolvedTelephone = telephone ?? (hasPhone ? siteFacts.phone.e164 : undefined);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': id,
    name,
    legalName: siteFacts.legalName,
    url,
    image,
    ...(resolvedTelephone ? { telephone: resolvedTelephone } : {}),
    email: siteFacts.email,
    priceRange,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.3683,
      longitude: -80.1289,
    },
    hasMap: 'https://www.google.com/maps/place/Boca Raton,+FL+33432',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteFacts.serviceAreaPolicy.locality,
      addressRegion: siteFacts.serviceAreaPolicy.region,
      postalCode: siteFacts.serviceAreaPolicy.postalCode,
      addressCountry: siteFacts.serviceAreaPolicy.country,
    },
    areaServed: SERVICE_AREAS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services in Boca Raton, FL',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maid Service' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Move-In/Move-Out Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Apartment Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airbnb Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-Construction Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Turnover Cleaning' } },
      ],
    },
    description: `${siteFacts.brandName} provides professional move-out, apartment, office, and deep cleaning services. ${siteFacts.serviceAreaPolicy.description}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
    sameAs: siteFacts.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
