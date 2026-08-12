"use client";
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteFacts } from '@/lib/siteFacts';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" className="block" data-cy="footer-logo-link">
              <span className="font-display text-2xl tracking-tight">Cleaning Boca Raton</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-secondary">Palm Beach County</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Residential and commercial cleaning for Boca Raton homes and workplaces.
              Explore{' '}
              <Link href="/house-cleaning" className="text-secondary underline-offset-2 hover:underline">House Cleaning</Link>
              {' '}and{' '}
              <Link href="/commercial-cleaning" className="text-secondary underline-offset-2 hover:underline">Commercial Cleaning</Link>.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-display text-lg">Services</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/house-cleaning" className="hover:text-secondary" data-cy="footer-house-cleaning-link">House Cleaning</Link></li>
              <li><Link href="/commercial-cleaning" className="hover:text-secondary" data-cy="footer-commercial-cleaning-link">Commercial Cleaning</Link></li>
              <li><Link href="/deep-cleaning" className="hover:text-secondary" data-cy="footer-deep-cleaning-link">Deep Cleaning</Link></li>
              <li><Link href="/office-cleaning" className="hover:text-secondary" data-cy="footer-office-cleaning-link">Office Cleaning</Link></li>
              <li><Link href="/move-in-move-out-cleaning" className="hover:text-secondary" data-cy="footer-move-in-move-out-cleaning-link">Move In/Out</Link></li>
              <li><Link href="/airbnb-cleaning" className="hover:text-secondary" data-cy="footer-airbnb-cleaning-link">Airbnb Cleaning</Link></li>
              <li><Link href="/window-cleaning" className="hover:text-secondary" data-cy="footer-window-cleaning-link">Window Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-lg">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/" className="hover:text-secondary" data-cy="footer-home-link">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary" data-cy="footer-about-link">About</Link></li>
              <li><button onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-secondary" data-cy="footer-services-button">Services</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-secondary" data-cy="footer-contact-button">Contact</button></li>
              <li><Link href="/faq" className="hover:text-secondary" data-cy="footer-faq-link">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-secondary" data-cy="footer-privacy-policy-link">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-lg">Contact</h3>
            <div className="space-y-4 text-sm text-white/70">
              <a href={siteFacts.phone.href} className="flex items-center gap-3 hover:text-secondary" data-cy="footer-phone-link">
                <Phone className="h-4 w-4 text-secondary" />
                {siteFacts.phone.display}
              </a>
              <a href={`mailto:${siteFacts.email}`} className="flex items-center gap-3 hover:text-secondary" data-cy="footer-email-link">
                <Mail className="h-4 w-4 text-secondary" />
                {siteFacts.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Serving Boca Raton, FL and Palm Beach County</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {currentYear} {siteFacts.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
