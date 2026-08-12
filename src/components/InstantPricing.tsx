import { Suspense } from 'react';
import { Calculator } from 'lucide-react';
import PriceCalculatorServer from './PriceCalculatorServer';

const InstantPricing = () => {
  return (
    <section id="instant-pricing" className="section-mist border-y border-border/60 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center reveal">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Instant pricing
          </p>
          <h2 className="font-display text-3xl text-primary md:text-4xl">
            Get your quote and book in under a minute
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tell us about your home or office—see live pricing, pick a time, and confirm online.
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/80 bg-white shadow-xl shadow-primary/5">
          <div className="flex items-center justify-center gap-3 bg-primary px-6 py-5 text-white">
            <div className="rounded-lg bg-white/15 p-2.5">
              <Calculator className="h-6 w-6" />
            </div>
            <div className="text-center">
              <p className="font-display text-xl">Price &amp; book</p>
              <p className="text-sm text-white/75">Live rates for Boca Raton service areas</p>
            </div>
          </div>
          <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading pricing…</div>}>
            <PriceCalculatorServer />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default InstantPricing;
