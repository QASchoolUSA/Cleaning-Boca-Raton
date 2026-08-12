import { Home, Building, Sparkles, Car, Wrench, Truck, Key, Calendar, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { siteFacts } from '@/lib/siteFacts';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'House Cleaning',
      description: 'Complete house cleaning and maid service including kitchens, bathrooms, bedrooms, and living areas.',
      price: siteFacts.pricing.messages.entryAndTypical,
      link: '/house-cleaning'
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning to maintain a pristine work environment.',
      price: 'Custom pricing',
      link: '/commercial-cleaning'
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning for hard-to-reach areas and seasonal resets.',
      price: `Typical ${siteFacts.pricing.typicalDeep}`,
      link: '/deep-cleaning'
    },
    {
      icon: Calendar,
      title: 'Maintenance Cleaning',
      description: 'Recurring weekly, bi-weekly, or monthly cleaning to keep your space consistently spotless.',
      price: 'Flexible plans',
      link: '/maintenance-cleaning'
    },
    {
      icon: Key,
      title: 'Airbnb Cleaning',
      description: 'Fast short-term rental turnover for Airbnb and vacation hosts in Boca Raton.',
      price: 'Custom pricing',
      link: '/airbnb-cleaning'
    },
    {
      icon: Car,
      title: 'Carpet Cleaning',
      description: 'Hot-water extraction, pet stains, and odor treatment for carpets and rugs.',
      price: 'Custom pricing',
      link: '/carpet-cleaning'
    },
    {
      icon: Truck,
      title: 'Pressure Washing',
      description: 'Exterior washing for siding, driveways, patios, gutters, and more.',
      price: 'Custom pricing',
      link: '/pressure-washing'
    },
    {
      icon: Sparkles,
      title: 'Window Cleaning',
      description: 'Interior and exterior glass, tracks, sills, and screens for home or office.',
      price: 'Custom pricing',
      link: '/window-cleaning'
    },
    {
      icon: Truck,
      title: 'Move In/Move Out',
      description: 'Deposit-ready deep cleans for tenants, landlords, and property managers.',
      price: 'Starting at $120',
      link: '/move-in-move-out-cleaning'
    },
    {
      icon: Wrench,
      title: 'Post-Construction',
      description: 'Debris and dust removal after renovations so spaces are move-in ready.',
      price: 'Custom pricing',
      link: '/post-construction-cleaning'
    },
  ];

  return (
    <section id="services" className="bg-[hsl(var(--background))] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">What we clean</p>
          <h2 data-cy="services-title" className="font-display text-3xl text-primary md:text-4xl">
            Residential &amp; commercial cleaning across Boca Raton
          </h2>
          <p className="mt-4 text-muted-foreground">
            Bonded, insured crews for homes, condos, offices, and retail—from Mizner Park to West Boca.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group flex flex-col bg-[hsl(var(--background))] p-7 transition-colors duration-200 hover:bg-mist cursor-pointer"
              data-cy={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}-card`}
            >
              <div className="mb-5 flex items-start justify-between">
                <service.icon className="h-7 w-7 text-secondary" strokeWidth={1.5} />
                <ArrowUpRight className="h-5 w-5 text-primary/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>
              <h3 className="font-display text-xl text-primary">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-secondary">{service.price}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <p className="text-muted-foreground">Need something more specific?</p>
          <Link href="/custom-quote" className="btn-coral" data-cy="services-custom-quote-button">
            Request custom quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
