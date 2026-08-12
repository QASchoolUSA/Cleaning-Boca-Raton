import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(isDev ? ["'unsafe-eval'"] : []),
  "https://www.clarity.ms",
  "https://scripts.clarity.ms",
  "https://*.clarity.ms",
  "https://www.googletagmanager.com",
  "https://*.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://*.google-analytics.com",
  "https://connect.facebook.net",
].join(" ");

const connectSrc = [
  "'self'",
  "https://www.clarity.ms",
  "https://*.clarity.ms",
  "https://www.googletagmanager.com",
  "https://*.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://*.google-analytics.com",
  "https://connect.facebook.net",
  "https://*.basemaps.cartocdn.com",
  "https://*.openstreetmap.org",
  ...(isDev ? ["ws:", "wss:", "http://localhost:*", "http://127.0.0.1:*"] : []),
].join(" ");

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "base-uri 'self'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data:",
          `script-src ${scriptSrc}`,
          "style-src 'self' 'unsafe-inline'",
          `connect-src ${connectSrc}`,
          "frame-ancestors 'self'",
          "form-action 'self'",
          "object-src 'none'",
          ...(isDev ? [] : ['upgrade-insecure-requests']),
        ].join('; '),
      },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Immutable static caching breaks Turbopack CSS/JS in `next dev` — production only.
      ...(!isDev
        ? [
            {
              source: '/_next/static/(.*)',
              headers: [
                {
                  key: 'Cache-Control',
                  value: 'public, max-age=31536000, immutable',
                },
              ],
            },
          ]
        : []),
      {
        source: '/(.*)\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(.*)\\.(woff|woff2|ttf|otf|eot)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/residential-cleaning',
        destination: '/house-cleaning',
        permanent: true,
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
