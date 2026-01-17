"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu01, ShoppingCart01, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

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

    const isDark = variant === "dark";

    return (
        <>
            <header
                className={cx(
                    "z-50 w-full px-6 lg:px-12",
                    isDark ? "absolute top-0 left-0 right-0 py-4 lg:py-6" : "bg-white border-b-[3px] border-[#ff5a5f] py-2 lg:py-3",
                    className
                )}
            >
                <div className="mx-auto max-w-8xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex cursor-pointer items-center">
                        <img
                            src={isDark ? "/VJ STAYS HOTELS & LODGES-Photoroom.png" : "/logolight.webp"}
                            alt="VJStays"
                            className="h-14 w-auto"
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
                        {/* Saved Icon */}
                        <Link
                            href="/saved"
                            className={cx(
                                "hidden lg:flex cursor-pointer size-10 items-center justify-center rounded-lg transition-colors",
                                isDark ? "text-white/90 hover:bg-white/10 hover:text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            )}
                            aria-label="Saved items"
                        >
                            <Heart className="size-5" />
                        </Link>

                        {/* Cart Icon */}
                        <Link
                            href="/cart"
                            className={cx(
                                "hidden lg:flex cursor-pointer size-10 items-center justify-center rounded-lg transition-colors",
                                isDark ? "text-white/90 hover:bg-white/10 hover:text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            )}
                            aria-label="Cart"
                        >
                            <ShoppingCart01 className="size-5" />
                        </Link>

                        {/* CTA Button */}
                        <Button
                            size="sm"
                            className={cx(
                                "bg-[#ff5a5f] hover:bg-[#e04850] border-none shadow-none",
                                mobileMenuOpen && "hidden lg:inline-flex"
                            )}
                        >
                            Login / Signup
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
                    "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
                    mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
                )}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={cx(
                    "fixed inset-0 z-[70] h-full w-full bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <img
                            src="/VJ STAYS HOTELS & LODGES-Photoroom.png"
                            alt="VJStays"
                            className="h-12 w-auto"
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
                    {/* Saved Link */}
                    <Link
                        href="/saved"
                        className="flex items-center gap-3 border-b border-white/10 py-4 text-base font-medium text-white/90 transition-colors hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Heart className="size-5" />
                        Saved
                    </Link>
                    {/* Cart Link */}
                    <Link
                        href="/cart"
                        className="flex items-center gap-3 border-b border-white/10 py-4 text-base font-medium text-white/90 transition-colors hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <ShoppingCart01 className="size-5" />
                        Cart
                    </Link>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-6 py-6">
                    {/* CTA Button - Mobile */}
                    <Button size="lg" className="w-full bg-[#ff5a5f] hover:bg-[#e04850] border-none shadow-none">
                        Login / Signup
                    </Button>
                </div>
            </div>
        </>
    );
};
