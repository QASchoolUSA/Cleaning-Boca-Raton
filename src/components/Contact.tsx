"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const apiUrl = '/api/emails/quote-request';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        alert('✅ Thank you for your message! We\'ll get back to you within 24 hours with a custom quote.');
      } else {
        const errorData = await response.json();
        console.error('Server error response:', errorData);
        alert(`❌ Error: ${errorData.error || 'Failed to send message. Please try again or call us at (561) 000-0000.'}`);
      }
    } catch (error) {
      console.error('Network error submitting form:', error);
      if (error instanceof Error && error.name === 'TypeError' && error.message.includes('fetch')) {
        alert('❌ Connection error. Please check your internet connection and try again, or call us at (561) 000-0000.');
      } else {
        alert('❌ Failed to send message. Please try again or call us directly at (561) 000-0000.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-[hsl(var(--background))] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Contact</p>
          <h2 data-cy="contact-title" className="font-display text-3xl text-primary md:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ready for a cleaner home or office? Request a quote—we typically respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mist">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <p>
                    <a href="tel:+15610000000" className="text-muted-foreground transition-colors hover:text-secondary" data-cy="contact-phone-link">(561) 000-0000</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mist">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <p>
                    <a href="mailto:hello@cleaningbocaraton.com" className="text-muted-foreground transition-colors hover:text-secondary" data-cy="contact-email-link">hello@cleaningbocaraton.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mist">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Service area</h4>
                  <p className="text-muted-foreground">Boca Raton, FL and Palm Beach County</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mist">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Hours</h4>
                  <p className="text-muted-foreground">Mon–Fri 8:00 AM – 6:00 PM</p>
                  <p className="text-muted-foreground">Sat 9:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-2xl text-primary mb-6">Request a quote</h3>
            <form onSubmit={handleSubmit} className="space-y-5" data-cy="contact-form">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">Full name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full rounded-md border border-border px-4 py-3 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Your full name" data-cy="contact-form-name-input" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full rounded-md border border-border px-4 py-3 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="your@email.com" data-cy="contact-form-email-input" />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-primary">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full rounded-md border border-border px-4 py-3 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="(561) 000-0000" data-cy="contact-form-phone-input" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-primary">Service type</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}
                    className="w-full rounded-md border border-border px-4 py-3 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    data-cy="contact-form-service-select">
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="carpet">Carpet Cleaning</option>
                    <option value="construction">Post-Construction</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                  className="w-full rounded-md border border-border px-4 py-3 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Tell us about your cleaning needs..." data-cy="contact-form-message-textarea" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-coral w-full ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                data-cy="contact-form-submit-button"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending…' : 'Send message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;