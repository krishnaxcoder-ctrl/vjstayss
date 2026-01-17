import { SiteHeader } from "@/components/layout/site-header";
import Link from "next/link";
import { Map01, Home01, Building07, Users01, Phone01, Shield01, File01, HelpCircle, Clock } from "@untitledui/icons";

const sitemapData = {
    main: {
        title: "Main Pages",
        icon: Home01,
        links: [
            { label: "Home", href: "/", description: "Browse featured properties and destinations" },
            { label: "Search", href: "/search", description: "Search for hotels and accommodations" },
            { label: "About Us", href: "/about", description: "Learn about VJStays and our mission" },
            { label: "Contact", href: "/contact", description: "Get in touch with our team" },
        ],
    },
    destinations: {
        title: "Destinations",
        icon: Building07,
        links: [
            { label: "Destinations", href: "/destinations", description: "Explore all destinations" },
            { label: "Hotels", href: "/hotels", description: "Browse all hotels" },
            { label: "Deals", href: "/deals", description: "Special offers and discounts" },
            { label: "Experiences", href: "/experiences", description: "Unique travel experiences" },
        ],
    },
    support: {
        title: "Support",
        icon: HelpCircle,
        links: [
            { label: "Help Center", href: "/help", description: "Find answers to common questions" },
            { label: "Safety Information", href: "/safety", description: "Travel safety guidelines" },
            { label: "Cancellation Options", href: "/cancellation", description: "Cancellation and refund policies" },
            { label: "FAQs", href: "/faqs", description: "Frequently asked questions" },
            { label: "Accessibility", href: "/accessibility", description: "Accessibility features and support" },
        ],
    },
    legal: {
        title: "Legal",
        icon: Shield01,
        links: [
            { label: "Terms of Service", href: "/terms", description: "Terms and conditions of use" },
            { label: "Privacy Policy", href: "/privacy", description: "How we handle your data" },
            { label: "Cookie Policy", href: "/cookies", description: "Information about cookies" },
            { label: "Refund Policy", href: "/refund", description: "Refund terms and conditions" },
            { label: "Sitemap", href: "/sitemap", description: "Website structure overview" },
        ],
    },
};

export default function SitemapPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#ff5a5f]/5 py-16 lg:py-24">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 size-[600px] rounded-full bg-[#ff5a5f]/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-[#ff5a5f]/5 blur-3xl" />

                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #ff5a5f 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

                <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                        <Map01 className="size-4 text-[#ff5a5f]" />
                        <span className="text-sm font-semibold text-[#ff5a5f]">Navigation</span>
                    </div>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                        Site<span className="text-[#ff5a5f]">map</span>
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        Find your way around VJStays. Browse all our pages organized by category to quickly find what you're looking for.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Clock className="size-4" />
                        <span>Last updated: January 2025</span>
                    </div>
                </div>
            </section>

            {/* Sitemap Content */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-6xl px-6 lg:px-12">
                    {/* Quick Stats */}
                    <div className="mb-12 grid gap-4 sm:grid-cols-4">
                        {Object.entries(sitemapData).map(([key, section]) => (
                            <div key={key} className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-[#ff5a5f]/10">
                                    <section.icon className="size-5 text-[#ff5a5f]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{section.links.length}</p>
                                    <p className="text-sm text-gray-500">{section.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sitemap Grid */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {Object.entries(sitemapData).map(([key, section]) => (
                            <div key={key} className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                        <section.icon className="size-6 text-[#ff5a5f]" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                                        <p className="text-sm text-gray-500">{section.links.length} pages</p>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                                            >
                                                <div className="mt-0.5 size-2 flex-shrink-0 rounded-full bg-[#ff5a5f]/50 transition-colors group-hover:bg-[#ff5a5f]" />
                                                <div>
                                                    <span className="font-medium text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                                        {link.label}
                                                    </span>
                                                    <p className="mt-0.5 text-sm text-gray-500">{link.description}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#ff5a5f]/10 to-[#ff5a5f]/5 p-8">
                        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Can't find what you're looking for?</h2>
                                <p className="mt-2 text-gray-600">
                                    Our support team is here to help you navigate and find the information you need.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5a5f] px-6 py-3 font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:bg-[#e04850] hover:shadow-xl"
                            >
                                <Phone01 className="size-5" />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
