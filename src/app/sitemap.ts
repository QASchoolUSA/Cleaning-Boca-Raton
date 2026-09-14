import { MetadataRoute } from 'next';

/** Static guide slugs — no fs (Cloudflare Workers cannot readdir at runtime). */
const GUIDE_SLUGS = [
    'affordable-deep-cleaning-companies-boca-raton-fl',
    'airbnb-turnover-sla-boca-raton-fl',
    'apartment-deep-cleaning-boca-raton-fl',
    'best-house-cleaning-deals-discounts-boca-raton-fl',
    'best-house-cleaning-services-boca-raton-fl',
    'boca-raton-fl-house-cleaning-prices-packages',
    'boca-raton-fl-house-cleaning-service-providers-quality',
    'boca-raton-fl-move-out-cleaning-services-costs',
    'boca-raton-fl-weekly-biweekly-house-cleaning-providers',
    'compare-house-cleaning-companies-boca-raton-fl-service-quality',
    'eco-friendly-house-cleaning-options-boca-raton-fl',
    'florida-humidity-deep-cleaning-boca-raton-waterfront-homes',
    'how-much-does-house-cleaning-cost-boca-raton-fl',
    'how-to-book-house-cleaner-boca-raton-fl',
    'how-to-book-professional-house-cleaner-boca-raton-fl',
    'how-to-book-professional-house-cleaner-boca-raton-fl-customer-reviews',
    'rough-vs-final-post-construction-cleaning-boca-raton-fl',
    'top-rated-house-cleaning-companies-boca-raton-fl-reviews',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cleaningbocaraton.com';

    const routes = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/house-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/commercial-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/deep-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/move-in-move-out-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/apartment-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/maintenance-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/carpet-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/window-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/pressure-washing', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/post-construction-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/airbnb-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/office-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/booking', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/custom-quote', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
        { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
        { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
        { url: '/get-hired', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/guides', priority: 0.8, changeFrequency: 'monthly' as const },
        ...GUIDE_SLUGS.map((slug) => ({
            url: `/guides/${slug}`,
            priority: 0.7,
            changeFrequency: 'monthly' as const,
        })),
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
