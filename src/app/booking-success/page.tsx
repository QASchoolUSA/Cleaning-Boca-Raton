import Link from "next/link";

export const metadata = {
  title: "Booking Confirmed | Cleaning Boca Raton",
  description: "Your cleaning appointment has been scheduled.",
  alternates: { canonical: "https://cleaningbocaraton.com/booking-success" },
  openGraph: {
    title: "Booking Confirmed | Cleaning Boca Raton",
    description: "Your cleaning appointment has been scheduled.",
    type: "website",
    url: "https://cleaningbocaraton.com/booking-success",
  },
  twitter: {
    card: "summary",
    title: "Booking Confirmed | Cleaning Boca Raton",
    description: "Your cleaning appointment has been scheduled.",
  },
  robots: { index: false, follow: false },
};

export default function BookingSuccessPage() {
  return (
    <div className="pt-20 bg-gray-50 flex-1">
      <section className="bg-mist py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mist mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Booking Scheduled</h1>
              <p className="text-lg text-gray-600">
                Thank you! Your appointment is scheduled. We&apos;ve sent a confirmation email with the details.
              </p>
              <div className="mt-6 rounded-xl bg-background border border-border px-5 py-4 text-left">
                <p className="text-sm font-semibold text-gray-900">Payment is expected upon completion of service</p>
                <p className="mt-1 text-sm text-gray-600">
                  No upfront payment is required. You pay after your cleaning is complete.
                </p>
              </div>
              <p className="text-gray-600 mt-6">
                Questions? Call{" "}
                <a href="tel:321-236-0618" className="text-primary underline hover:text-primary/80">(561) 000-0000</a>
                {" "}or email{" "}
                <a href="mailto:hello@cleaningbocaraton.com" className="text-primary underline hover:text-primary/80">hello@cleaningbocaraton.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700">
              Need to modify your booking or have questions? Call{" "}
              <a href="tel:321-236-0618" className="text-primary underline hover:text-primary/80">(561) 000-0000</a>
              {" "}or email{" "}
              <a href="mailto:hello@cleaningbocaraton.com" className="text-primary underline hover:text-primary/80">hello@cleaningbocaraton.com</a>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors">Book Another Service</Link>
              <Link href="/" className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-background transition-colors">Go to Homepage</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
