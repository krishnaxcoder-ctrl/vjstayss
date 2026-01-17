"use client";

import Link from "next/link";
import { Mail01, MarkerPin01, Phone01 } from "@untitledui/icons";
import { Facebook, Instagram, LinkedIn, Twitter } from "@/components/foundations/social-icons";

const footerLinks = {
    pages: [
        { label: "Home", href: "/" },
        { label: "Destinations", href: "/destinations" },
        { label: "Hotels", href: "/hotels" },
        { label: "Deals", href: "/deals" },
        { label: "Experiences", href: "/experiences" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],
    support: [
        { label: "Help Center", href: "/help" },
        { label: "Safety Information", href: "/safety" },
        { label: "Cancellation Options", href: "/cancellation" },
        { label: "FAQs", href: "/faqs" },
        { label: "Accessibility", href: "/accessibility" },
    ],
    legal: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Refund Policy", href: "/refund" },
    ],
};

export const Footer = () => {
    return (
        <footer className="border-t-[3px] border-[#ff5a5f] bg-gray-50">
            {/* Main Footer */}
            <div className="mx-auto max-w-8xl px-6 pt-16 pb-4 lg:px-12">
                {/* Links Section - 6 Columns */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/logolight.webp"
                                alt="VJStays"
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="mt-4 text-sm text-gray-600">
                            Your trusted partner for discovering and booking the perfect stay. Explore thousands of properties across India and beyond. Experience comfort, value, and unforgettable memories with every booking.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-4 flex flex-col gap-2">
                            <a href="mailto:hello@vjstays.com" className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#ff5a5f]">
                                <Mail01 className="size-4" />
                                hello@vjstays.com
                            </a>
                            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#ff5a5f]">
                                <Phone01 className="size-4" />
                                +91 98765 43210
                            </a>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MarkerPin01 className="size-4" />
                                Mumbai, India
                            </div>
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ff5a5f]">Pages</h4>
                        <ul className="space-y-3">
                            {footerLinks.pages.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900 hover:underline">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ff5a5f]">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900 hover:underline">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ff5a5f]">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900 hover:underline">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* App Download & Social */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ff5a5f]">Get the App</h4>
                        <div className="flex flex-col gap-2">
                            {/* App Store Button */}
                            <a href="#" className="flex items-center gap-3 rounded-lg bg-white px-4 py-4 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-[#ff5a5f]/30 sm:gap-2 sm:px-3 sm:py-2">
                                <svg className="size-8 sm:size-6" viewBox="0 0 24 24" fill="#1a1a1a">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500 sm:text-[10px]">Download on the</p>
                                    <p className="text-sm font-semibold text-gray-900 sm:text-xs">App Store</p>
                                </div>
                            </a>

                            {/* Google Play Button */}
                            <a href="#" className="flex items-center gap-3 rounded-lg bg-white px-4 py-4 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-[#ff5a5f]/30 sm:gap-2 sm:px-3 sm:py-2">
                                <svg className="size-8 sm:size-6" viewBox="0 0 24 24" fill="#1a1a1a">
                                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.71.64 1.19s-.3.92-.64 1.19l-2.28 1.14-2.5-2.5 2.5-2.5 2.28 1.48zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500 sm:text-[10px]">Get it on</p>
                                    <p className="text-sm font-semibold text-gray-900 sm:text-xs">Google Play</p>
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="mt-5">
                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#ff5a5f]">Follow Us</h4>
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
                                        className="flex size-9 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-[#ff5a5f] hover:text-white hover:ring-[#ff5a5f] hover:shadow-lg"
                                    >
                                        <social.icon className="size-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t-2 border-[#ff5a5f] pt-4 md:flex-row">
                    {/* Copyright */}
                    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} VJStays. All rights reserved.
                        </p>
                        <div className="hidden h-4 w-px bg-gray-300 md:block" />
                        <div className="flex gap-4">
                            <Link href="/terms" className="text-sm text-gray-500 transition-colors hover:text-[#ff5a5f]">
                                Terms
                            </Link>
                            <Link href="/privacy" className="text-sm text-gray-500 transition-colors hover:text-[#ff5a5f]">
                                Privacy
                            </Link>
                            <Link href="/cookies" className="text-sm text-gray-500 transition-colors hover:text-[#ff5a5f]">
                                Cookies
                            </Link>
                            <Link href="/sitemap" className="text-sm text-gray-500 transition-colors hover:text-[#ff5a5f]">
                                Sitemap
                            </Link>
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
