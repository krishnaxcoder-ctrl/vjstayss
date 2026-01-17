"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe01, Menu01, XClose } from "@untitledui/icons";
import { Button as AriaButton } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
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

interface SiteHeaderProps {
    variant?: "light" | "dark";
    className?: string;
}

export const SiteHeader = ({ variant = "dark", className }: SiteHeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const isDark = variant === "dark";

    return (
        <>
            <header
                className={cx(
                    "z-50 w-full px-6 py-4 lg:px-12 lg:py-6",
                    isDark ? "absolute top-0 left-0 right-0" : "bg-white border-b-[3px] border-[#ff5a5f]",
                    className
                )}
            >
                <div className="mx-auto max-w-8xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex cursor-pointer items-center">
                        <img
                            src="/VJ STAYS HOTELS & LODGES-Photoroom.png"
                            alt="VJStays"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cx(
                                    "flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    isDark
                                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
                                <AriaButton
                                    className={cx(
                                        "flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium outline-none transition-colors",
                                        isDark
                                            ? "text-white/90 hover:bg-white/10 hover:text-white"
                                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    )}
                                >
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

                        {/* CTA Button */}
                        <Button
                            size="sm"
                            className={cx(
                                "bg-[#ff5a5f] hover:bg-[#e04850] border-none shadow-none",
                                mobileMenuOpen && "hidden lg:inline-flex"
                            )}
                        >
                            Sign In
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className={cx(
                                "flex cursor-pointer size-10 items-center justify-center rounded-lg transition-colors lg:hidden",
                                isDark ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
                            )}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? <XClose className="size-6" /> : <Menu01 className="size-6" />}
                        </button>
                    </div>
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
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <img
                            src="/VJ STAYS HOTELS & LODGES-Photoroom.png"
                            alt="VJStays"
                            className="h-8 w-auto"
                        />
                    </Link>
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
                    <Button size="lg" className="w-full bg-[#ff5a5f] hover:bg-[#e04850] border-none shadow-none">
                        Sign In
                    </Button>
                </div>
            </div>
        </>
    );
};
