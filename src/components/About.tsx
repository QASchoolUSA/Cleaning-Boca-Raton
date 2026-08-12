import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Leaf, Clock, Award } from 'lucide-react';
import { siteFacts } from '@/lib/siteFacts';

type AboutProps = {
  asPage?: boolean;
};

const About = ({ asPage = false }: AboutProps) => {
  const TitleTag = asPage ? 'h1' : 'h2';
  const values = [
    { icon: Shield, title: 'Trusted & Insured', description: 'Fully licensed, bonded, and insured for your peace of mind.' },
    { icon: Leaf, title: 'Eco-Friendly', description: 'We use environmentally safe cleaning products and methods.' },
    { icon: Clock, title: 'Reliable Service', description: 'Consistent, punctual service you can count on every time.' },
    { icon: Award, title: 'Quality Guaranteed', description: '100% satisfaction guarantee on all our cleaning services.' },
  ];

  const processSteps = [
    {
      title: 'Request a quote or book online',
      text: 'Share the service type and property details. Typical 3-bedroom packages and deep-clean ranges are published on this site so expectations stay grounded.',
    },
    {
      title: 'Confirm access and priorities',
      text: 'Entry instructions, pets, and rooms that need extra attention go on the job notes before the crew arrives.',
    },
    {
      title: 'We clean to the checklist',
      text: 'Trained professionals use modern techniques and eco-friendly products tailored to homes, apartments, offices, and specialty jobs.',
    },
    {
      title: 'You review the result',
      text: 'If something needs a touch-up, tell us. Our satisfaction guarantee means we stand behind the work.',
    },
  ];

  return (
    <section id="about" className="section-mist py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              About {siteFacts.brandName}
            </p>
            <TitleTag data-cy="about-title" className="font-display text-3xl text-primary md:text-4xl">
              Local crews for Boca Raton homes and workplaces
            </TitleTag>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {siteFacts.experienceStatement} We&apos;re your partners in healthier, more comfortable living and working spaces.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Legally operating as {siteFacts.legalName}, we provide residential and commercial cleaning across Boca Raton.
              {' '}{siteFacts.pricing.messages.full} Call{' '}
              <a href={siteFacts.phone.href} className="font-medium text-secondary hover:underline">{siteFacts.phone.display}</a>
              {' '}or email{' '}
              <a href={`mailto:${siteFacts.email}`} className="font-medium text-secondary hover:underline">{siteFacts.email}</a>.
            </p>
            {!asPage && (
              <Link href="/about" className="inline-flex items-center font-semibold text-accent transition-colors hover:text-accent/80">
                Learn more about our story →
              </Link>
            )}
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-secondary/15" aria-hidden />
            <Image
              src="/boca-raton-cleaning-about-us.webp"
              alt="Cleaning Boca Raton professional cleaning team"
              width={800}
              height={800}
              className="relative mx-auto aspect-[4/5] w-full max-w-md object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="font-display text-2xl text-primary md:text-3xl">How we work</h2>
          <ol className="mt-8 space-y-6">
            {processSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title}>
              <value.icon className="mb-3 h-7 w-7 text-secondary" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-primary">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/booking" className="btn-coral">Book a cleaning</Link>
          <Link href="/faq" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white">
            Read FAQ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
