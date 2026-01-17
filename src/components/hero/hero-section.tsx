"use client";

import { useState } from "react";
import { ChevronDown, Globe01, Menu01, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeatureBadges } from "@/components/booking/feature-badges";
import { SearchBar } from "@/components/booking/search-bar";
import { cx } from "@/utils/cx";

const navLinks = [
    { label: "Destinations", hasDropdown: true },
    { label: "Hotels", hasDropdown: true },
    { label: "Deals", href: "#" },
    { label: "Experiences", hasDropdown: true },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
];

export const HeroSection = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop"
                    alt="Luxury hotel pool at sunset"
                    className="h-full w-full object-cover"
                />
                {/* Warm overlay for the golden tone */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 via-orange-800/40 to-amber-700/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
            </div>

            {/* Navigation */}
            <header className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12 lg:py-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-white/90">
                        <svg viewBox="0 0 24 24" className="size-5 text-amber-600" fill="currentColor">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5zm0 4a3 3 0 110 6 3 3 0 010-6zm0 14c-2.67 0-8-1.34-8-4v-.8c0-1.33 5.33-2.4 8-2.4s8 1.07 8 2.4v.8c0 2.66-5.33 4-8 4z"/>
                        </svg>
                    </div>
                    <span className="text-xl font-semibold text-white">Stayza</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href || "#"}
                            className={cx(
                                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {link.label}
                            {link.hasDropdown && <ChevronDown className="size-4 opacity-70" />}
                        </a>
                    ))}
                </nav>

                {/* Right side actions */}
                <div className="flex items-center gap-3">
                    {/* Language Switcher - Desktop */}
                    <div className="hidden items-center gap-2 lg:flex">
                        <Globe01 className="size-4 text-white/80" />
                        <select className="cursor-pointer appearance-none bg-transparent text-sm font-medium text-white/90 outline-none">
                            <option value="en" className="text-gray-900">EN</option>
                            <option value="es" className="text-gray-900">ES</option>
                            <option value="fr" className="text-gray-900">FR</option>
                        </select>
                    </div>

                    {/* CTA Button - Hidden on mobile when menu is open */}
                    <Button
                        size="sm"
                        className={cx("bg-amber-600 hover:bg-amber-700 border-none shadow-none", mobileMenuOpen && "hidden lg:inline-flex")}
                    >
                        Sign In
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <XClose className="size-6" /> : <Menu01 className="size-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cx(
                    "fixed inset-0 z-20 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
                    mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
                )}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={cx(
                    "fixed inset-y-0 right-0 z-30 w-full max-w-sm bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-white/90">
                            <svg viewBox="0 0 24 24" className="size-5 text-amber-600" fill="currentColor">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5zm0 4a3 3 0 110 6 3 3 0 010-6zm0 14c-2.67 0-8-1.34-8-4v-.8c0-1.33 5.33-2.4 8-2.4s8 1.07 8 2.4v.8c0 2.66-5.33 4-8 4z"/>
                            </svg>
                        </div>
                        <span className="text-xl font-semibold text-white">Stayza</span>
                    </div>
                    <button
                        type="button"
                        className="flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <XClose className="size-6" />
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex flex-col px-6 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href || "#"}
                            className="flex items-center justify-between border-b border-white/10 py-4 text-base font-medium text-white/90 transition-colors hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                            {link.hasDropdown && <ChevronDown className="size-5 opacity-70" />}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-6 py-6">
                    {/* Language Switcher - Mobile */}
                    <div className="mb-4 flex items-center gap-2">
                        <Globe01 className="size-5 text-white/80" />
                        <select className="cursor-pointer appearance-none bg-transparent text-base font-medium text-white/90 outline-none">
                            <option value="en" className="text-gray-900">English</option>
                            <option value="es" className="text-gray-900">Español</option>
                            <option value="fr" className="text-gray-900">Français</option>
                        </select>
                    </div>

                    {/* CTA Button - Mobile */}
                    <Button
                        size="lg"
                        className="w-full bg-amber-600 hover:bg-amber-700 border-none shadow-none"
                    >
                        Sign In
                    </Button>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 py-16 lg:px-12">
                {/* Headline */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                        Find your perfect
                        <span className="relative mx-3 inline-block">
                            <span className="relative z-10">stay</span>
                            {/* Squiggly underline */}
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 100 12"
                                preserveAspectRatio="none"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 6 Q 12.5 0, 25 6 T 50 6 T 75 6 T 100 6"
                                    stroke="#f59e0b"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
                        Discover amazing hotels, resorts, and unique accommodations at the best prices. Your dream vacation starts here.
                    </p>
                </div>

                {/* Search Bar */}
                <SearchBar variant="hero" />

                {/* Feature Badges */}
                <div className="mt-12 w-full max-w-4xl">
                    <FeatureBadges variant="dark" />
                </div>
            </div>
        </section>
    );
};
