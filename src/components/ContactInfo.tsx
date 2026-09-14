import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { hasPhone, siteFacts } from '@/lib/siteFacts';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-6">
          {hasPhone && (
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-mist rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">
                  <a href={siteFacts.phone.href} className="hover:text-primary transition-colors">{siteFacts.phone.display}</a>
                </p>
                <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
              </div>
            </div>
          )}

          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-mist rounded-lg">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600">
                <a href={`mailto:${siteFacts.email}`} className="hover:text-primary transition-colors">{siteFacts.email}</a>
              </p>
              <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-mist rounded-lg">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Service Area</h4>
              <p className="text-gray-600">Boca Raton, FL and surrounding areas</p>
              <p className="text-sm text-gray-500">Up to 30 miles radius</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-mist rounded-lg">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Business Hours</h4>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background p-6 rounded-xl">
        <h4 className="font-bold text-gray-900 mb-3">Free Estimates</h4>
        <p className="text-gray-700 mb-4">
          We provide free, no-obligation estimates for all our services. Contact us today to schedule your consultation.
        </p>
        <div className="flex items-center space-x-2 text-sm text-primary">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>No hidden fees</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-primary">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Competitive pricing</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
