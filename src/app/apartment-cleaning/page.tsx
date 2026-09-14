import Link from "next/link";
import Image from "next/image";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceAreas from "@/components/ServiceAreas";
import AuthorBio from "@/components/AuthorBio";
import SpecialOffers from "@/components/SpecialOffers";
import ConversationalFAQ from "@/components/ConversationalFAQ";
import { CheckCircle, Clock, Shield, ArrowRight, Building, Key, Layout } from "lucide-react";
import { siteFacts } from "@/lib/siteFacts";

export const metadata = {
    title: "Apartment Cleaning Boca Raton, FL | Cleaning Boca Raton",
    description:
        "Professional apartment and condo cleaning near you in Boca Raton, FL. We specialize in small spaces, deep cleaning, and move-outs. Free quotes available!",
    alternates: { canonical: "https://cleaningbocaraton.com/apartment-cleaning" },
    openGraph: {
        title: "Apartment Cleaning Boca Raton, FL | Cleaning Boca Raton",
        description:
            "Professional apartment and condo cleaning near you in Boca Raton, FL. We specialize in small spaces, deep cleaning, and move-outs. Free quotes available!",
        type: "website",
        url: "https://cleaningbocaraton.com/apartment-cleaning",
        images: [{ url: "https://cleaningbocaraton.com/boca-raton-residential-cleaning.webp", width: 1200, height: 630 }],
    },
};

export default function ApartmentCleaningPage() {
    const faqItems = [
        {
            question: "How much does apartment cleaning cost in Boca Raton?",
            answer: `${siteFacts.pricing.messages.full} Final pricing depends on the unit's size, condition, scope, and add-ons.`
        },
        {
            question: "Do you bring your own supplies?",
            answer: "Yes, we bring all professional supplies and equipment, including vacuums and mops suitable for apartment floor plans."
        },
        {
            question: "Can you clean while I'm at work?",
            answer: "Absolutely. We can arrange key pickup or lockbox access. All our cleaners are background-checked and insured for your peace of mind."
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <LocalBusinessSchema id="https://cleaningbocaraton.com/apartment-cleaning#localbusiness" name="Cleaning Boca Raton - Apartment Services" url="https://cleaningbocaraton.com/apartment-cleaning" />
            <ServiceSchema
                name="Apartment Cleaning Services"
                serviceType="Apartment Cleaning"
                description="Professional apartment and condo cleaning in Boca Raton, FL. Specialized service for small spaces, walk-ups, and complexes."
                url="https://cleaningbocaraton.com/apartment-cleaning"
                offers={[
                    {
                        name: "Entry-Level Apartment Cleaning",
                        price: `${siteFacts.pricing.entryStartingFrom}.00`,
                        description: siteFacts.pricing.messages.entryAndTypical,
                    },
                    {
                        name: "Typical 3-Bedroom Standard Package",
                        description: siteFacts.pricing.typical3brStandard,
                    }
                ]}
            />

            {/* Hero */}
            <section className="bg-mist py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <Building className="w-8 h-8 text-primary" />
                                <span className="text-primary font-semibold">Apartment & Condo Cleaning</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Reliable Apartment Cleaning in Boca Raton, FL
                            </h1>
                            <p className="text-lg text-gray-600">
                                From studio apartments to luxury condos, our local team specializes in small-space cleaning. Searching for apartment cleaning services near me? We handle the unique needs of apartment living, including elevator access and move-in/out checklists.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/booking" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center justify-center">
                                    Get Free Quote
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <a href="mailto:hello@cleaningbocaraton.com" className="bg-white text-primary border border-border px-8 py-4 rounded-lg text-lg font-semibold hover:bg-background transition-colors inline-flex items-center justify-center">
                  Email hello@cleaningbocaraton.com
                </a>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/boca-raton-residential-cleaning.webp"
                                alt="Apartment cleaning in Boca Raton"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* AIO 'Direct Answer' Section */}
            <section className="bg-white py-8 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does apartment cleaning cost in Boca Raton, FL?</h2>
                        <div className="prose max-w-none text-gray-700">
                            <p className="text-lg leading-relaxed mb-4">
                                <strong>{siteFacts.brandName}</strong> offers specialized <strong>apartment cleaning in Boca Raton, FL</strong>. <strong>{siteFacts.pricing.messages.entryAndTypical}</strong> Final pricing depends on size, condition, scope, and add-ons. Need a total reset? We also perform comprehensive <Link href="/deep-cleaning" className="text-primary underline hover:text-primary/80">apartment deep cleaning in Boca Raton, FL</Link>.
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-2 list-none pl-0">
                                <li className="flex items-center sm:col-span-2"><CheckCircle className="w-5 h-5 text-primary mr-2" /> <strong>Pricing:</strong>&nbsp;{siteFacts.pricing.messages.entryAndTypical}</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> <strong>Move-Out:</strong> Deposit Guarantee</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> <strong>Pets:</strong> Hair Removal Included</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <SpecialOffers />

            {/* Expert Field Notes Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-6">
                            <Shield className="w-8 h-8 text-primary mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">Expert Field Notes: Apartment Living</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Trash Valet Rules</h3>
                                <p className="text-sm text-gray-600">We know the strict trash chute and valet hours for Boca Raton complexes and ensure all waste is handled correctly to avoid fines.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Compact Dusting</h3>
                                <p className="text-sm text-gray-600">Apartments accumulate dust faster due to HVAC density. We focus on vent covers and ceiling fan blades in tight spaces.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2">Elevator Logistics</h3>
                                <p className="text-sm text-gray-600">Our teams travel light with compact equipment, making us efficient for third-floor walk-ups or elevator buildings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apartment Cleaning Checklist</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Layout className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Living Areas</h3>
                            <p className="text-gray-600 text-sm">Dusting blinds, ceiling fans, baseboards, and vacuuming upholstery.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Clock className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Efficient Service</h3>
                            <p className="text-gray-600 text-sm">Typical 1-2 hour cleanings for smaller units to respect your schedule.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Key className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Deep Cleaning Options</h3>
                            <p className="text-gray-600 text-sm">Targeting baseboards, inside appliances, and neglected areas for a true deep clean.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hyper-Local Neighborhood Section */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Boca Raton Complexes</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown & Waterfront</h3>
                                <p className="text-gray-600 mb-4">
                                    We service many residents at <strong>Gateway at Riverwalk</strong> and <strong>The Lofts at 1st Street</strong>. We understand downtown parking and access codes.
                                </p>
                                <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Gateway at Riverwalk</li>
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Downtown Lofts</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mizner Park & Suburban</h3>
                                <p className="text-gray-600 mb-4">
                                    From <strong>Vintage Mizner Park</strong> to garden-style apartments off <strong>Airport Blvd</strong>, we provide regular service for busy professionals and families.
                                </p>
                                <ul className="space-y-1 text-gray-700">
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Vintage Mizner Park</li>
                                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-1" /> Ballantrae</li>
                                </ul>
                            </div>
                        </div>

                        <ConversationalFAQ
                            title="Frequently Asked Questions: Apartment Cleaning"
                            items={faqItems}
                            className="mt-12 bg-transparent border-t border-gray-100"
                        />

                        <div className="mt-12">
                            <AuthorBio />
                        </div>
                    </div>
                </div>
            </section>

            <ServiceAreas />
        </div>
    );
}
