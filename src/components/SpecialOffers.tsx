import Link from 'next/link';
import { Tag, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export default function SpecialOffers() {
  return (
    <section className="border-y border-border bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-highlight">
            Limited offers
          </p>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Save on your first clean—or lock in recurring rates
          </h2>
          <p className="mt-3 text-white/70">
            Straightforward promotions for new Boca Raton clients and weekly or biweekly plans.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">New customers</p>
                <h3 className="mt-2 font-display text-2xl text-white">First-time cleaning</h3>
                <p className="mt-2 font-display text-4xl text-accent">$20 OFF</p>
              </div>
              <Tag className="h-8 w-8 text-secondary" strokeWidth={1.5} />
            </div>
            <ul className="mb-8 flex-1 space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 shrink-0 text-secondary" /> Valid for Deep or Move-In/Out cleans</li>
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 shrink-0 text-secondary" /> Supplies &amp; equipment included</li>
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 shrink-0 text-secondary" /> 100% satisfaction guarantee</li>
            </ul>
            <div className="mb-4 flex items-center justify-between rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm">
              <span className="text-white/60">Promo code</span>
              <span className="font-mono font-bold tracking-wider text-highlight">WELCOME20</span>
            </div>
            <Link href="/booking" className="btn-coral w-full text-center">Claim $20 off</Link>
          </div>

          <div className="flex flex-col border border-secondary/40 bg-secondary/10 p-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Most popular</p>
                <h3 className="mt-2 font-display text-2xl text-white">Recurring service</h3>
                <p className="mt-2 font-display text-4xl text-highlight">30% OFF</p>
                <p className="text-sm text-white/60">first recurring visit</p>
              </div>
              <Clock className="h-8 w-8 text-highlight" strokeWidth={1.5} />
            </div>
            <ul className="mb-8 flex-1 space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 shrink-0 text-highlight" /> 30% off your first recurring visit</li>
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 shrink-0 text-highlight" /> 15–20% off future visits</li>
              <li className="flex gap-3"><CheckCircle className="h-5 w-5 shrink-0 text-highlight" /> No contracts—cancel anytime</li>
            </ul>
            <Link href="/booking?service=Maintenance%20Cleaning" className="btn-coral w-full text-center">
              Start recurring &amp; save
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/custom-quote" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
            Not sure yet? Get a custom quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
