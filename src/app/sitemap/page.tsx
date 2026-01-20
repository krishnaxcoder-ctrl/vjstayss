import { SiteHeader } from "@/components/layout/site-header";
import Link from "next/link";
import { Map01, ArrowUpRight } from "@untitledui/icons";

const sitemapData = [
    {
        title: "Main Pages",
        links: [
            { label: "Home", href: "/" },
            { label: "Search", href: "/search" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Discover",
        links: [
            { label: "Destinations", href: "/destinations" },
            { label: "Hotels", href: "/hotels" },
            { label: "Deals & Offers", href: "/deals" },
            { label: "Experiences", href: "/experiences" },
        ],
    },
    {
        title: "Account",
        links: [
            { label: "My Bookings", href: "/bookings" },
            { label: "Saved Properties", href: "/saved" },
            { label: "Shopping Cart", href: "/cart" },
            { label: "My Profile", href: "/profile" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help Center", href: "/help" },
            { label: "FAQs", href: "/faqs" },
            { label: "Cancellation Policy", href: "/cancellation" },
            { label: "Safety Information", href: "/safety" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Refund Policy", href: "/refund" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About VJStays", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Press & Media", href: "/press" },
            { label: "Partners", href: "/partners" },
        ],
    },
];

export default function SitemapPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            {/* Hero Section */}
            <section className="border-b border-gray-200 bg-gray-50 py-16 lg:py-16">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="flex items-center gap-3 text-[#ff5a5f]">
                        <Map01 className="size-6" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Navigation</span>
                    </div>
                    <h1 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Sitemap
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-600">
                        Find your way around VJStays. Browse all our pages organized by category.
                    </p>
                </div>
            </section>

            {/* Sitemap Content */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        {sitemapData.map((section) => (
                            <div key={section.title}>
                                <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-900">
                                    {section.title}
                                </h2>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="group inline-flex items-center gap-1 text-gray-600 transition-colors hover:text-[#ff5a5f]"
                                            >
                                                <span>{link.label}</span>
                                                <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom */}
            <section className="border-t border-gray-200 py-8">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} VJStays. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-500">
                            Last updated: January 2025
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
