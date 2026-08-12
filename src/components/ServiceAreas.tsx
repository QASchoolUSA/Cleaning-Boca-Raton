"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { siteFacts } from '@/lib/siteFacts';

const ServiceMap = dynamic(() => import('./ServiceMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-full items-center justify-center rounded-2xl border border-border bg-mist md:h-[500px]">
      <div className="animate-pulse text-sm font-medium text-muted-foreground">Loading map…</div>
    </div>
  ),
});

const ServiceAreas = () => {
  const areas = siteFacts.serviceAreas.map((name) =>
    name.includes('County') ? name : `${name}, FL`
  );

  return (
    <section className="border-t border-border bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Service area</p>
          <h2 className="font-display text-3xl text-primary md:text-4xl">
            Proudly serving Boca Raton &amp; nearby Palm Beach County
          </h2>
          <p className="mt-4 text-muted-foreground">
            From gated communities and waterfront estates to Mizner Park offices and East Boca condos—
            bonded, insured crews across South Florida.
          </p>
        </div>

        <div className="mb-10 max-w-5xl">
          <ServiceMap />
        </div>

        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-border bg-mist/60 px-4 py-2 text-sm font-medium text-primary"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
