export const siteFacts = {
  phone: {
    display: '' as string,
    e164: '' as string,
    href: '' as string,
  },
  email: 'hello@cleaningbocaraton.com',
  legalName: 'Cleaning Boca Raton LLC',
  brandName: 'Cleaning Boca Raton',
  yearsCompany: 2,
  yearsTeamExperience: '5–7',
  experienceStatement:
    'Locally owned. Serving Boca Raton with residential and commercial cleaning; our team brings about 5–7 years of professional cleaning experience.',
  pricing: {
    entryStartingFrom: 95,
    typical3brStandard: '$160–$220',
    typicalDeep: '$280–$500',
    messages: {
      entryAndTypical:
        'Entry-level jobs from $95; typical 3-bedroom packages $160–$220.',
      full:
        'Entry-level jobs from $95; typical 3-bedroom standard packages are $160–$220, and typical deep cleanings are $280–$500.',
    },
  },
  sameAs: [] as string[],
  serviceAreaPolicy: {
    businessType: 'Mobile service-area business',
    publicStorefront: false,
    locality: 'Boca Raton',
    region: 'FL',
    postalCode: '33432',
    country: 'US',
    description:
      'Mobile service-area business serving Boca Raton, FL 33432 and surrounding Palm Beach County communities. No public storefront.',
  },
  serviceAreas: [
    'Boca Raton',
    'Mizner Park',
    'Boca West',
    'Boca Del Mar',
    'East Boca',
    'Royal Palm Yacht & Country Club',
    'Spanish River',
    'Woodfield',
    'Whisper Walk',
    'West Boca',
    'Deerfield Beach',
    'Palm Beach County',
  ],
  url: 'https://cleaningbocaraton.com',
} as const;

export const hasPhone = Boolean(
  siteFacts.phone.display && siteFacts.phone.e164 && siteFacts.phone.href,
);

export type SiteFacts = typeof siteFacts;
