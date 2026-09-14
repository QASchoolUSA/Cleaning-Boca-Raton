import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { hasPhone, siteFacts } from '@/lib/siteFacts';

const Hero = () => {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-primary">
      <Image
        src="/boca-raton-hero.png"
        alt="Bright coastal Boca Raton Mediterranean home with palms"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_42%]"
      />

      {/* Top scrim — keeps fixed nav readable on bright sky */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-gradient-to-b from-primary/80 via-primary/35 to-transparent md:h-44"
        aria-hidden
      />

      {/* Left + bottom scrim — copy sits over palms/driveway, not washed-out white walls */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-primary/85 via-primary/45 to-primary/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-primary via-primary/55 to-transparent"
        aria-hidden
      />

      <div className="relative z-[2] container mx-auto flex min-h-[100svh] flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:pb-24 md:pt-28">
        <div className="max-w-xl">
          <h1 className="hero-animate font-display text-[clamp(2.5rem,7.5vw,5rem)] leading-[0.95] tracking-tight text-white drop-shadow-sm">
            Cleaning Boca Raton
          </h1>

          <p className="hero-animate-delay mt-5 max-w-md text-lg leading-relaxed text-white/90 md:text-xl">
            Residential and commercial cleaning for Boca homes and workplaces—bonded, insured, bookable in minutes.
          </p>

          <div className="hero-animate-delay-2 mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/booking" className="btn-coral">
              Book online
            </Link>
            {hasPhone ? (
              <a href={siteFacts.phone.href} className="btn-ghost-light">
                <Phone className="h-5 w-5" />
                Call {siteFacts.phone.display}
              </a>
            ) : (
              <a href={`mailto:${siteFacts.email}`} className="btn-ghost-light">
                <Mail className="h-5 w-5" />
                Email us
              </a>
            )}
            <a
              href="#instant-pricing"
              className="w-full text-sm font-medium text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline sm:w-auto sm:ml-1"
            >
              Or get instant pricing ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
