"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { hasPhone, siteFacts } from '@/lib/siteFacts';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  if (pathname === '/booking-success') return null;

  const overHero = isHome && !isScrolled && !isMenuOpen;
  const navText = overHero ? 'text-white/90 hover:text-white' : 'text-primary/80 hover:text-primary';
  const solid = !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-[hsl(var(--background))]/95 shadow-sm backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="group flex flex-col" data-cy="header-logo-link">
            <span
              className={`font-display text-xl leading-none tracking-tight transition-colors md:text-2xl ${
                overHero ? 'text-white' : 'text-primary'
              }`}
            >
              Cleaning Boca Raton
            </span>
            <span
              className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] ${
                overHero ? 'text-white/70' : 'text-secondary'
              }`}
            >
              Palm Beach County
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <div className="group relative">
              <button className={`cursor-pointer text-sm font-medium transition-colors ${navText}`} data-cy="desktop-services-dropdown-button">
                Services
              </button>
              <div className="invisible absolute left-0 top-full mt-2 w-64 rounded-lg border border-border bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                <Link href="/house-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-house-cleaning-link">House Cleaning</Link>
                <Link href="/apartment-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-apartment-cleaning-link">Apartment Cleaning</Link>
                <Link href="/maintenance-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-maintenance-cleaning-link">Maintenance Cleaning</Link>
                <Link href="/commercial-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-commercial-cleaning-link">Commercial Cleaning</Link>
                <Link href="/office-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-office-cleaning-link">Office Cleaning</Link>
                <Link href="/deep-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-deep-cleaning-link">Deep Cleaning</Link>
                <Link href="/carpet-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-carpet-cleaning-link">Carpet Cleaning</Link>
                <Link href="/pressure-washing" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-pressure-washing-link">Pressure Washing</Link>
                <Link href="/window-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-window-cleaning-link">Window Cleaning</Link>
                <Link href="/move-in-move-out-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-move-in-move-out-cleaning-link">Move In/Out</Link>
                <Link href="/post-construction-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-post-construction-cleaning-link">Post-Construction</Link>
                <Link href="/airbnb-cleaning" className="block px-4 py-2 text-sm text-primary hover:bg-mist hover:text-secondary" data-cy="desktop-airbnb-cleaning-link">Airbnb Cleaning</Link>
              </div>
            </div>

            <div className="group relative">
              <button className={`cursor-pointer text-sm font-medium transition-colors ${navText}`} data-cy="desktop-guides-dropdown-button">
                Guides
              </button>
              <div className="invisible absolute left-0 top-full mt-2 w-[26rem] rounded-lg border border-border bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                <div className="max-h-80 overflow-y-auto">
                  <Link href="/guides" className="block px-4 py-2 text-sm text-primary hover:bg-mist" data-cy="desktop-guides-link-index">All Guides</Link>
                  <Link href="/guides/how-much-does-house-cleaning-cost-boca-raton-fl" className="block px-4 py-2 text-sm text-primary hover:bg-mist">Cleaning Costs in Boca Raton</Link>
                  <Link href="/guides/best-house-cleaning-services-boca-raton-fl" className="block px-4 py-2 text-sm text-primary hover:bg-mist">Best House Cleaning Services</Link>
                  <Link href="/guides/boca-raton-fl-move-out-cleaning-services-costs" className="block px-4 py-2 text-sm text-primary hover:bg-mist">Move-Out Cleaning Costs</Link>
                  <Link href="/guides/airbnb-turnover-sla-boca-raton-fl" className="block px-4 py-2 text-sm text-primary hover:bg-mist">Airbnb Turnover SLA</Link>
                </div>
              </div>
            </div>

            <Link href="/about" className={`text-sm font-medium transition-colors ${navText}`}>About</Link>
            <Link href="/custom-quote" className={`text-sm font-medium transition-colors ${navText}`} data-cy="desktop-custom-quote-link">Quote</Link>
            <Link href="/get-hired" className={`text-sm font-medium transition-colors ${navText}`} data-cy="desktop-get-hired-link">Get Hired</Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            {hasPhone ? (
              <a
                href={siteFacts.phone.href}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${navText}`}
                data-cy="desktop-phone-link"
              >
                <Phone className="h-4 w-4" />
                {siteFacts.phone.display}
              </a>
            ) : (
              <a
                href={`mailto:${siteFacts.email}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${navText}`}
                data-cy="desktop-email-link"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            )}
            <Link href="/booking" className="btn-coral !px-4 !py-2 !text-sm" data-cy="desktop-book-now-button">
              Book
            </Link>
          </div>

          <button
            className={`cursor-pointer p-2 md:hidden ${overHero ? 'text-white' : 'text-primary'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-cy="mobile-menu-toggle-button"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div ref={menuRef} className="border-t border-border bg-[hsl(var(--background))] md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</p>
                <Link href="/house-cleaning" onClick={() => setIsMenuOpen(false)} className="block py-1 text-primary" data-cy="mobile-house-cleaning-link">House Cleaning</Link>
                <Link href="/commercial-cleaning" onClick={() => setIsMenuOpen(false)} className="block py-1 text-primary" data-cy="mobile-commercial-cleaning-link">Commercial Cleaning</Link>
                <Link href="/deep-cleaning" onClick={() => setIsMenuOpen(false)} className="block py-1 text-primary" data-cy="mobile-deep-cleaning-link">Deep Cleaning</Link>
                <Link href="/office-cleaning" onClick={() => setIsMenuOpen(false)} className="block py-1 text-primary" data-cy="mobile-office-cleaning-link">Office Cleaning</Link>
                <Link href="/move-in-move-out-cleaning" onClick={() => setIsMenuOpen(false)} className="block py-1 text-primary" data-cy="mobile-move-in-move-out-cleaning-link">Move In/Out</Link>
                <Link href="/airbnb-cleaning" onClick={() => setIsMenuOpen(false)} className="block py-1 text-primary" data-cy="mobile-airbnb-cleaning-link">Airbnb Cleaning</Link>
              </div>

              <div>
                <button
                  onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                  className="flex w-full cursor-pointer items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  data-cy="mobile-guides-toggle"
                >
                  Guides
                  <ChevronDown className={`h-4 w-4 transition-transform ${isGuidesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isGuidesOpen && (
                  <div className="mt-2 space-y-2 border-l-2 border-mist pl-3">
                    <Link href="/guides" onClick={() => setIsMenuOpen(false)} className="block text-primary" data-cy="mobile-guides-link-index">All Guides</Link>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button onClick={() => scrollToSection('about')} className="cursor-pointer py-2 text-primary" data-cy="mobile-about-button">About</button>
                <button onClick={() => scrollToSection('contact')} className="cursor-pointer py-2 text-primary" data-cy="mobile-contact-button">Contact</button>
              </div>

              {hasPhone ? (
                <a href={siteFacts.phone.href} className="btn-ink w-full" data-cy="mobile-call-now-button">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              ) : (
                <a href={`mailto:${siteFacts.email}`} className="btn-ink w-full" data-cy="mobile-email-button">
                  <Mail className="h-5 w-5" /> Email Us
                </a>
              )}
              <Link href="/booking" onClick={() => setIsMenuOpen(false)} className="btn-coral w-full" data-cy="mobile-book-now-button">
                <Calendar className="h-5 w-5" /> Book Now
              </Link>
              <Link href="/custom-quote" onClick={() => setIsMenuOpen(false)} className="w-full rounded-md border border-border py-3 text-center font-medium text-primary" data-cy="mobile-custom-quote-button">
                Custom Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
