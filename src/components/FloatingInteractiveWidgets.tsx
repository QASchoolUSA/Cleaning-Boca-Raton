"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { hasPhone, siteFacts } from '@/lib/siteFacts';

export default function FloatingInteractiveWidgets() {
    const pathname = usePathname();
    const [showWidgets, setShowWidgets] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Only show after a slight scroll so it doesn't immediately block hero components
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowWidgets(true);
            } else {
                setShowWidgets(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hooks cannot be placed below a conditional return
    // Hide on booking page to prevent collision with fixed checkout footer
    if (pathname === '/booking') return null;

    const mailtoHref = `mailto:${siteFacts.email}?subject=${encodeURIComponent('Quick quote request')}`;
    const smsHref = hasPhone
      ? `sms:${siteFacts.phone.e164.replace('+', '')}&body=${encodeURIComponent("Hi Cleaning Boca Raton, I'd like to get a quick quote!")}`
      : mailtoHref;

    return (
        <>
            {/* --- DESKTOP FLOATING CONTACT WIDGET --- */}
            {/* Hidden on mobile, shows on md+ screens */}
            <div
                className={`hidden md:flex fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${showWidgets ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative flex items-center">
                    {/* Expanded text tab */}
                    <div className={`absolute right-full mr-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 transition-all duration-300 origin-right whitespace-nowrap flex flex-col items-end ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`}>
                        <p className="font-semibold text-gray-900 mb-1">
                          {hasPhone ? 'Text us for a quick quote!' : 'Email us for a quick quote!'}
                        </p>
                        <a href={smsHref} className="text-primary font-bold hover:underline flex items-center">
                            {hasPhone ? siteFacts.phone.display : siteFacts.email}
                        </a>
                        {/* Tailwind Triangle */}
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-y-8 border-y-transparent border-l-8 border-l-white"></div>
                    </div>

                    {/* Main FAB Button */}
                    <a
                        href={smsHref}
                        className="w-14 h-14 bg-primary rounded-full text-white shadow-2xl flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 border-2 border-white cursor-pointer group animate-bounce-slow"
                        aria-label={hasPhone ? 'Send SMS' : 'Send email'}
                    >
                        {hasPhone ? (
                          <>
                            <MessageCircle className="w-6 h-6 group-hover:hidden" />
                            <MessageCircle className="w-6 h-6 hidden group-hover:block" fill="currentColor" />
                          </>
                        ) : (
                          <Mail className="w-6 h-6" />
                        )}
                    </a>
                </div>
            </div>

            {/* --- MOBILE STICKY CTA BAR --- */}
            {/* Shows only on mobile (below md break) with native app feel */}
            <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200/50 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 ${showWidgets ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="flex px-4 py-3 gap-3">
                    {hasPhone ? (
                      <a
                          href={siteFacts.phone.href}
                          className="flex-1 bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,0.39)] active:bg-primary active:scale-[0.98] transition-all text-sm"
                      >
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now
                      </a>
                    ) : (
                      <a
                          href={mailtoHref}
                          className="flex-1 bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,0.39)] active:bg-primary active:scale-[0.98] transition-all text-sm"
                      >
                          <Mail className="w-5 h-5 mr-2" />
                          Email Us
                      </a>
                    )}
                    <Link
                        href="/booking"
                        className="flex-1 border-2 border-primary text-primary font-bold py-3.5 rounded-xl flex items-center justify-center active:scale-[0.98] transition-all text-sm"
                    >
                        Book Online
                    </Link>
                </div>
                {/* iOS Safe Area Padding */}
                <div className="h-safe pb-2" />
            </div>
        </>
    );
}
