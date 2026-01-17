"use client";

import { Mail01, MarkerPin01, Phone01, Send01 } from "@untitledui/icons";
import { Facebook, Instagram, LinkedIn, Twitter } from "@/components/foundations/social-icons";
import { Button } from "@/components/base/buttons/button";

const footerLinks = {
    company: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Investors", href: "#" },
    ],
    support: [
        { label: "Help Center", href: "#" },
        { label: "Safety Information", href: "#" },
        { label: "Cancellation Options", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "FAQs", href: "#" },
    ],
    partners: [
        { label: "List Your Property", href: "#" },
        { label: "Partner Hub", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Travel Agents", href: "#" },
    ],
    destinations: [
        { label: "Paris", href: "#" },
        { label: "Tokyo", href: "#" },
        { label: "New York", href: "#" },
        { label: "Dubai", href: "#" },
        { label: "London", href: "#" },
        { label: "Bali", href: "#" },
    ],
};

export const Footer = () => {
    return (
        <footer className="bg-gray-50">
            {/* Main Footer */}
            <div className="mx-auto max-w-8xl px-6 pt-16 pb-8 lg:px-12">
                {/* Top Section - Logo & Newsletter */}
                <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/25">
                                <svg viewBox="0 0 24 24" className="size-6 text-white" fill="currentColor">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5zm0 4a3 3 0 110 6 3 3 0 010-6zm0 14c-2.67 0-8-1.34-8-4v-.8c0-1.33 5.33-2.4 8-2.4s8 1.07 8 2.4v.8c0 2.66-5.33 4-8 4z"/>
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">Stayza</span>
                        </div>
                        <p className="mt-4 max-w-md text-base text-gray-600">
                            Your trusted partner for discovering and booking the perfect stay. From luxury resorts to cozy apartments, we've got you covered.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-6 space-y-3">
                            <a href="mailto:hello@stayza.com" className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-amber-600">
                                <Mail01 className="size-4" />
                                hello@stayza.com
                            </a>
                            <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-amber-600">
                                <Phone01 className="size-4" />
                                +1 (234) 567-890
                            </a>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <MarkerPin01 className="size-4" />
                                San Francisco, CA
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 lg:p-8">
                        <h3 className="text-lg font-semibold text-gray-900">Subscribe to our newsletter</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Get exclusive deals, travel tips, and destination inspiration delivered to your inbox.
                        </p>
                        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                            <div className="relative flex-1">
                                <Mail01 className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border-0 bg-gray-100 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 outline-none ring-1 ring-gray-200 transition-all focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 border-none" iconLeading={Send01}>
                                Subscribe
                            </Button>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">
                            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                        </p>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-12 md:grid-cols-4 lg:grid-cols-5">
                    {/* Company */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-600">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900 hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-600">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900 hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Partners */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-600">Partners</h4>
                        <ul className="space-y-3">
                            {footerLinks.partners.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900 hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-600">Top Destinations</h4>
                        <ul className="space-y-3">
                            {footerLinks.destinations.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900 hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* App Download & Social */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-600">Get the App</h4>
                        <div className="flex flex-col gap-3">
                            {/* App Store Button */}
                            <a href="#" className="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-3 transition-all hover:bg-gray-800">
                                <svg className="size-8" viewBox="0 0 24 24" fill="white">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-400">Download on the</p>
                                    <p className="text-sm font-semibold text-white">App Store</p>
                                </div>
                            </a>

                            {/* Google Play Button */}
                            <a href="#" className="flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-3 transition-all hover:bg-gray-800">
                                <svg className="size-8" viewBox="0 0 24 24" fill="white">
                                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.71.64 1.19s-.3.92-.64 1.19l-2.28 1.14-2.5-2.5 2.5-2.5 2.28 1.48zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-400">Get it on</p>
                                    <p className="text-sm font-semibold text-white">Google Play</p>
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6">
                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-600">Follow Us</h4>
                            <div className="flex gap-2">
                                {[
                                    { icon: Facebook, label: "Facebook" },
                                    { icon: Twitter, label: "Twitter" },
                                    { icon: Instagram, label: "Instagram" },
                                    { icon: LinkedIn, label: "LinkedIn" },
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href="#"
                                        aria-label={social.label}
                                        className="flex size-10 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-amber-500 hover:text-white hover:ring-amber-500"
                                    >
                                        <social.icon className="size-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 md:flex-row">
                    {/* Copyright */}
                    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Stayza. All rights reserved.
                        </p>
                        <div className="hidden h-4 w-px bg-gray-300 md:block" />
                        <div className="flex gap-4">
                            <a href="#" className="text-sm text-gray-500 transition-colors hover:text-amber-600">
                                Terms
                            </a>
                            <a href="#" className="text-sm text-gray-500 transition-colors hover:text-amber-600">
                                Privacy
                            </a>
                            <a href="#" className="text-sm text-gray-500 transition-colors hover:text-amber-600">
                                Cookies
                            </a>
                            <a href="#" className="text-sm text-gray-500 transition-colors hover:text-amber-600">
                                Sitemap
                            </a>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">We accept:</span>
                        <div className="flex gap-2">
                            {["Visa", "Mastercard", "Amex", "PayPal"].map((method) => (
                                <div
                                    key={method}
                                    className="flex h-8 w-12 items-center justify-center rounded-md bg-white text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200"
                                >
                                    {method.slice(0, 4)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
