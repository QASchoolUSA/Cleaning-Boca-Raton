import Link from "next/link";
import Image from "next/image";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServiceAreas from "@/components/ServiceAreas";
import AuthorBio from "@/components/AuthorBio";
import SpecialOffers from "@/components/SpecialOffers";
import { Sparkles, Clock, Shield, CheckCircle, Star, ArrowRight, Zap, ListChecks, DollarSign, Calendar } from "lucide-react";

export const metadata = {
  title: "Deep Cleaning in Boca Raton, FL | Cleaning Boca Raton",
  description:
    "Expert deep cleaning services near me in Boca Raton, FL. Thorough house and apartment deep cleaning for spring cleaning, move-outs, and more. Get a free quote!",
  alternates: { canonical: "https://cleaningbocaraton.com/deep-cleaning" },
  openGraph: {
    title: "Deep Cleaning in Boca Raton, FL | Cleaning Boca Raton",
    description:
      "Need deep cleaning near me? Our top-rated team handles spring cleaning, move-outs, and detailed house cleaning in Boca Raton, FL. Book online!",
    type: "website",
    url: "https://cleaningbocaraton.com/deep-cleaning",
    images: ["https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Cleaning in Boca Raton, FL | Cleaning Boca Raton",
    description:
      "Need deep cleaning near me? Our top-rated team handles spring cleaning, move-outs, and detailed house cleaning in Boca Raton, FL. Book online!",
    images: ["https://cleaningbocaraton.com/boca-raton-cleaning-homepage.webp"],
  },
};

export default function DeepCleaningPage() {
  const jsonLdBreadcrumb = `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cleaningbocaraton.com" },
      { "@type": "ListItem", "position": 2, "name": "Deep Cleaning", "item": "https://cleaningbocaraton.com/deep-cleaning" }
    ]
  }`;

  const serviceSchema = `{
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Deep Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cleaning Boca Raton",
      "image": "https://cleaningbocaraton.com/boca-raton-cleaning-cleaning-fridge.png",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": "Boca Raton, FL"
    },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Deep Cleaning Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Standard Deep Clean"
                },
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "150.00",
                  "priceCurrency": "USD",
                  "unitText": "service"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "First Deep Clean Discount"
                },
                "description": "$20 off your first deep cleaning service in Boca Raton."
              }
            ]
          }
  }`;

  const jsonLdFaq = `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What’s included in a deep cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deep cleaning targets kitchens, bathrooms, baseboards, light fixtures, cabinet fronts, and high‑touch areas with detailed scrubbing and sanitization beyond routine service."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer move‑in/move‑out and seasonal deep cleans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide deep cleans for move‑in/move‑out, spring cleaning, special events, and post‑illness recovery. Packages can be tailored to your needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a deep cleaning take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Duration depends on home size, scope, and condition. Typical visits range from 4–8 hours. Larger or add‑on tasks may extend the timeframe."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get pricing and book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get an instant, transparent quote and book online, or email hello@cleaningbocaraton.com. Pricing reflects square footage, room count, and requested extras."
        }
      }
    ]
  }`;
  const packages = [
    {
      name: "Standard Deep Clean",
      description: "Comprehensive deep cleaning for regular maintenance",
      price: "Starting at $150",
      duration: "4-6 hours",
      includes: [
        "All surfaces deep cleaned and disinfected",
        "Kitchen appliances inside and out",
        "Bathroom deep scrub and sanitization",
        "Baseboards and window sills",
        "Light fixtures and ceiling fans",
        "Cabinet fronts and hardware",
      ],
    },
    {
      name: "Premium Deep Clean",
      description: "Our most thorough cleaning service",
      price: "Starting at $250",
      duration: "6-8 hours",
      includes: [
        "Everything in Standard package",
        "Inside cabinets and drawers",
        "Oven and refrigerator deep clean",
        "Wall washing and spot cleaning",
        "Detailed bathroom tile and grout",
        "Carpet deep cleaning (up to 3 rooms)",
      ],
    },
    {
      name: "Seasonal Deep Clean",
      description: "Perfect for spring cleaning or special occasions",
      price: "Starting at $200",
      duration: "5-7 hours",
      includes: [
        "Complete home deep cleaning",
        "Window cleaning (interior)",
        "Garage and basement cleaning",
        "Patio and outdoor area cleaning",
        "Organizing and decluttering assistance",
        "Final walkthrough and inspection",
      ],
    },
  ];

  const deepCleanAreas = [
    {
      area: "Kitchen",
      tasks: [
        "Deep clean inside and outside of all appliances",
        "Scrub and sanitize countertops and backsplash",
        "Clean inside cabinets and drawers",
        "Degrease range hood and filters",
        "Deep clean sink and faucet",
        "Sanitize handles and switches",
      ],
    },
    {
      area: "Bathrooms",
      tasks: [
        "Deep scrub tile and grout",
        "Remove soap scum and mineral deposits",
        "Sanitize all surfaces and fixtures",
        "Clean exhaust fans and vents",
        "Polish mirrors and glass",
        "Deep clean behind toilet and fixtures",
      ],
    },
    {
      area: "Living Areas",
      tasks: [
        "Dust and clean all surfaces thoroughly",
        "Clean baseboards and trim",
        "Vacuum and clean under furniture",
        "Clean light fixtures and ceiling fans",
        "Wipe down walls and switch plates",
        "Deep clean carpets and upholstery",
      ],
    },
    {
      area: "Bedrooms",
      tasks: [
        "Deep dust all furniture and surfaces",
        "Clean inside and outside of closets",
        "Vacuum under beds and furniture",
        "Clean mirrors and glass surfaces",
        "Sanitize frequently touched areas",
        "Organize and tidy personal items",
      ],
    },
  ];

  const whenToBook = [
    { icon: Sparkles, title: "Spring Cleaning", description: "Annual deep clean to refresh your home after winter" },
    { icon: Zap, title: "Before Special Events", description: "Prepare your home for holidays, parties, or guests" },
    { icon: Shield, title: "Post-Illness Recovery", description: "Thorough sanitization after illness in the household" },
    { icon: Clock, title: "Moving In/Out", description: "Complete deep clean for moving transitions" },
  ];

  return (
    <div className="pt-20">
      <script id="deep-cleaning-jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }} />
      <script id="deep-cleaning-jsonld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script id="deep-cleaning-jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdFaq }} />
      <LocalBusinessSchema id="https://cleaningbocaraton.com/deep-cleaning#localbusiness" name="Cleaning Boca Raton - Deep Cleaning" url="https://cleaningbocaraton.com/deep-cleaning" />

      {/* Hero Section */}
      <section className="bg-mist py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-primary" />
                <span className="text-primary font-semibold">Deep Cleaning</span>
              </div>
              <h1 data-cy="deep-cleaning-title" className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Deep Cleaning Services in Boca Raton, FL
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Go beyond surface cleaning with our thorough deep cleaning services. Perfect for spring cleaning, special occasions, or when your home needs that extra level of care and attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center justify-center">
                  Get Free Quote and Book
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="mailto:hello@cleaningbocaraton.com" className="bg-white text-primary border border-border px-8 py-4 rounded-lg text-lg font-semibold hover:bg-background transition-colors inline-flex items-center justify-center">
                  Email hello@cleaningbocaraton.com
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <Shield className="w-4 h-4" /> Fully Insured
                <Clock className="w-4 h-4" /> On-time
                <Star className="w-4 h-4" /> 5-Star Rated
              </div>
            </div>
            <div className="relative">
              <Image
                src="/boca-raton-cleaning-cleaning-fridge.png"
                alt="Deep cleaning inside a refrigerator in Boca Raton, FL"
                width={800}
                height={500}
                priority
                className="w-full h-80 md:h-96 object-cover object-top rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AIO 'Direct Answer' Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a deep house cleaning cost in Boca Raton, FL?</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Cleaning Boca Raton</strong> provides professional <strong>deep cleaning in Boca Raton, FL</strong> starting at <strong>$150</strong>. Our 4–6 hour intensive service targets Florida-specific issues like humidity-trapped potential mold in grout, red clay dust on baseboards, and AC vent buildup. We serve the <strong>Historic District</strong> and all Seminole County zip codes.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 list-none pl-0">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> <strong>Standard Deep Clean:</strong> Starting at $150</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> <strong>Premium Detail:</strong> Starting at $250</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> <strong>Includes:</strong> Baseboards, Grout, Vents</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> <strong>Availability:</strong> Book within 48 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Field Notes Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Expert Field Notes: Boca Raton Deep Cleaning</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Red Clay Dust</h3>
                <p className="text-sm text-gray-600">Local soil often tracks in reddish dust appearing on baseboards; we use damp microfiber to capture it without staining paint.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">AC Intake Vents</h3>
                <p className="text-sm text-gray-600">To improve air quality, we vacuum intake vents first to prevent recirculating dust during the cleaning process.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Grout Lines</h3>
                <p className="text-sm text-gray-600">Boca Raton&apos;s sandy soil embeds in grout. We use a targeted peroxide scrub to lift discoloration from tile floors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Section (AEO Hook) */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-background rounded-xl border border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Duration</div>
              <div className="font-bold text-gray-900">4 - 6 Hours</div>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Starting Price</div>
              <div className="font-bold text-gray-900">$150 (Package)</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-center">
              <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Frequency</div>
              <div className="font-bold text-gray-900">One-Time / Annual</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
              <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Focus</div>
              <div className="font-bold text-gray-900">Build-Up Removal</div>
            </div>
          </div>
        </div>
      </section>

      <SpecialOffers />

      {/* Comparison Table: Deep vs Regular */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Deep Cleaning vs. Regular Cleaning</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 font-bold">
                  <tr>
                    <th className="px-6 py-4">Checklist Item</th>
                    <th className="px-6 py-4 text-center">Regular Clean</th>
                    <th className="px-6 py-4 text-center text-primary bg-background">Deep Clean</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">General Dusting</td>
                    <td className="px-6 py-4 text-center text-green-600">✓</td>
                    <td className="px-6 py-4 text-center text-green-600 bg-background/30">✓ (Detailed)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Baseboards</td>
                    <td className="px-6 py-4 text-center text-gray-400">Light Dust</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold bg-background/30">Hand-Wash / Scrub</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Ceiling Fans</td>
                    <td className="px-6 py-4 text-center text-gray-400">Dust Only</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold bg-background/30">Blade Washing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Light Switches / Door Frames</td>
                    <td className="px-6 py-4 text-center text-gray-400">Sanitize</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold bg-background/30">Deep Scrub</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Cabinet Exteriors</td>
                    <td className="px-6 py-4 text-center text-gray-400">Spot Clean</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold bg-background/30">Full Wash</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Vents & Intakes</td>
                    <td className="px-6 py-4 text-center text-gray-400">-</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold bg-background/30">Vacuum/Wash</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Cleaning Packages</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="bg-gray-50 rounded-lg p-5 border">
                    <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                    <p className="text-primary font-semibold text-sm">{pkg.price}</p>
                    <p className="text-gray-500 text-xs mb-3">{pkg.duration}</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">When Do You Need Deep Cleaning?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {whenToBook.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-6 border text-center shadow-sm">
                    <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Spring Cleaning and Move-Out Deep Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {deepCleanAreas.map((area) => (
                <div key={area.area} className="bg-gray-50 rounded-xl p-6 border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.area}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {area.tasks.map((task) => (
                      <li key={task} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Deep Cleaning Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border text-center">
                <ListChecks className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Assessment</h4>
                <p className="text-gray-600 text-sm">We walk through your home and identify areas needing extra attention.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border text-center">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Detailed Cleaning</h4>
                <p className="text-gray-600 text-sm">We deep clean kitchens, bathrooms, living areas, and bedrooms with a thorough checklist.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border text-center">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Final Touches</h4>
                <p className="text-gray-600 text-sm">Final inspection and finishing touches to ensure everything looks brand new.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guide Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Deep Cleaning Guide</h2>
            <p className="text-gray-700 mb-4">
              Looking for <strong>deep cleaning near me</strong>? Our professional team provides thorough <strong>deep cleaning</strong> for houses and apartments in Boca Raton and surrounding areas. We focus on high‑touch surfaces, kitchens, bathrooms, baseboards, vents, and under‑furniture areas to remove built‑up grime and hidden dust.
            </p>
            <p className="text-gray-700 mb-4">
              We offer flexible <strong>deep cleaning services near me</strong>—from routine refreshes to move‑out projects and seasonal resets. Whether it’s <strong>deep cleaning house</strong> or <strong>apartment deep cleaning</strong>, we tailor the checklist to your home’s materials and specific needs, ensuring a spotless, healthy environment.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Cleaning in Boca Raton, FL</h3>
              <p className="text-gray-700 mb-3">
                Our <strong>deep cleaning boca-raton, fl</strong> program provides comprehensive detailing across kitchens, bathrooms, living spaces, and bedrooms. For local residents searching <strong>deep cleaning boca-raton</strong>, we deliver consistent results with clear checklists, reliable scheduling, and a final walkthrough.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/custom-quote" className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary transition-colors">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/booking" className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-secondary hover:text-primary transition-colors">
                  Book Deep Cleaning
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Searches Near You</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>deep cleaning near me</strong> – thorough cleaning for houses and apartments.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>deep cleaning services near me</strong> – flexible scheduling and detailed checklists.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>deep cleaning house</strong> – kitchens, bathrooms, floors, and hard‑to‑reach areas.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> <span><strong>apartment deep cleaning</strong> – studio to multi‑bedroom units, tailored to your layout.</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Cleaning Boca Raton</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Insured team and reliable scheduling</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Detailed checklists and final inspection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Material‑appropriate methods for stone, tile, and wood</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> Clear communication and transparent estimates</li>
                </ul>
              </div>
            </div>

            {/* Hyper-Local Neighborhood Section */}
            <div className="mt-16 pt-12 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Deep Cleaning Across Boca Raton</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Historic Renovations & Estates</h3>
                  <p className="text-gray-600 mb-4">
                    Owners of historic homes in the <strong>Old Floresta</strong> trust us for careful deep cleaning of original features. We also handle large estate deep cleans in <strong>Boca Del Mar</strong> and <strong>Spanish River</strong>, ensuring every corner is dust-free.
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Historic District</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Boca Del Mar Estates</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Spanish River</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Apartments & Condos</h3>
                  <p className="text-gray-600 mb-4">
                    From lofts in <strong>Downtown Boca Raton</strong> to apartments near <strong>Seminole State College</strong>, our team is equipped for efficient deep cleaning in any layout. We focus on high-traffic areas and compact spaces to refresh your home.
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Downtown Lofts</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> College Park Area</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Gateway at Riverwalk</li>
                  </ul>
                </div>
              </div>
            </div>

            <AuthorBio />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready for a Deep Clean?</h2>
            <p className="text-gray-600 mb-6">Get a free quote and book your deep cleaning in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary inline-flex items-center justify-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="mailto:hello@cleaningbocaraton.com" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background inline-flex items-center justify-center">
                  Email hello@cleaningbocaraton.com
                </a>
            </div>
          </div>
        </div>
      </section>
      <ServiceAreas />
    </div>
  );
}
