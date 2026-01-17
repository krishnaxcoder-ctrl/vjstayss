"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe01, Menu01, XClose } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { FeatureBadges } from "@/components/booking/feature-badges";
import { SearchBar } from "@/components/booking/search-bar";
import { cx } from "@/utils/cx";

const languages = [
    { id: "en", label: "English", short: "EN" },
    { id: "hi", label: "हिंदी", short: "HI" },
];

const navLinks = [
    { label: "Destinations", href: "/destinations" },
    { label: "Hotels", href: "/hotels" },
    { label: "Deals", href: "/deals" },
    { label: "Experiences", href: "/experiences" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const HeroSection = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

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
            <header className="relative z-10 mx-auto max-w-8xl px-6 py-4 lg:px-12 lg:py-6">
                <div className="flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="/VJ STAYS HOTELS & LODGES-Photoroom.png"
                        alt="Stayza"
                        className="h-10 w-auto"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cx(
                                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right side actions */}
                <div className="flex items-center gap-3">
                    {/* Language Switcher - Desktop */}
                    <div className="hidden lg:block">
                        <Dropdown.Root>
                            <AriaButton className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/90 outline-none transition-colors hover:bg-white/10 hover:text-white">
                                <Globe01 className="size-4" />
                                <span>{selectedLanguage.short}</span>
                                <ChevronDown className="size-4 opacity-70" />
                            </AriaButton>
                            <Dropdown.Popover className="w-40 bg-white">
                                <Dropdown.Menu
                                    className="bg-white"
                                    selectedKeys={[selectedLanguage.id]}
                                    onSelectionChange={(keys) => {
                                        const key = Array.from(keys)[0] as string;
                                        const lang = languages.find((l) => l.id === key);
                                        if (lang) setSelectedLanguage(lang);
                                    }}
                                >
                                    {languages.map((lang) => (
                                        <Dropdown.Item key={lang.id} id={lang.id} className="text-gray-900 hover:bg-gray-100">
                                            {lang.label}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown.Root>
                    </div>

                    {/* CTA Button - Hidden on mobile when menu is open */}
                    <Button
                        size="sm"
                        className={cx("bg-[#ff5a5f] hover:bg-[#e04850] border-none shadow-none", mobileMenuOpen && "hidden lg:inline-flex")}
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
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src="/VJ STAYS HOTELS & LODGES-Photoroom.png"
                            alt="Stayza"
                            className="h-8 w-auto"
                        />
                    </a>
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
                        <Link
                            key={link.label}
                            href={link.href}
                            className="flex items-center justify-between border-b border-white/10 py-4 text-base font-medium text-white/90 transition-colors hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-6 py-6">
                    {/* Language Switcher - Mobile */}
                    <div className="mb-4">
                        <Dropdown.Root>
                            <AriaButton className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-white/90 outline-none transition-colors hover:bg-white/10 hover:text-white">
                                <Globe01 className="size-5" />
                                <span>{selectedLanguage.label}</span>
                                <ChevronDown className="size-5 opacity-70" />
                            </AriaButton>
                            <Dropdown.Popover className="w-44 bg-white">
                                <Dropdown.Menu
                                    className="bg-white"
                                    selectedKeys={[selectedLanguage.id]}
                                    onSelectionChange={(keys) => {
                                        const key = Array.from(keys)[0] as string;
                                        const lang = languages.find((l) => l.id === key);
                                        if (lang) setSelectedLanguage(lang);
                                    }}
                                >
                                    {languages.map((lang) => (
                                        <Dropdown.Item key={lang.id} id={lang.id} className="text-gray-900 hover:bg-gray-100">
                                            {lang.label}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown.Root>
                    </div>

                    {/* CTA Button - Mobile */}
                    <Button
                        size="lg"
                        className="w-full bg-[#ff5a5f] hover:bg-[#e04850] border-none shadow-none"
                    >
                        Sign In
                    </Button>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-8xl flex-col items-center justify-center px-6 py-16 lg:px-12">
                {/* Headline */}
                <div className="mb-10 text-center">
                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                        <span className="block md:inline">Find your </span>
                        <span className="block md:inline">
                            perfect{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-[#ff5a5f]">stay</span>
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
                                        stroke="#ff5a5f"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                </svg>
                            </span>
                        </span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70 md:text-xl">
                        Discover amazing hotels, resorts, and unique accommodations at the best prices. Your dream vacation starts here.
                    </p>
                </div>

                {/* Search Bar */}
                <SearchBar variant="hero" />

                {/* Feature Badges */}
                <div className="mt-8">
                    <FeatureBadges variant="dark" />
                </div>
            </div>
        </section>
    );
};
