"use client";

import { DealsSection } from "@/components/booking/deals-section";
import { Footer } from "@/components/booking/footer";
import { NewsletterSection } from "@/components/booking/newsletter-section";
import { PropertyTypes } from "@/components/booking/property-types";
import { TrendingDestinations } from "@/components/booking/trending-destinations";
import { HeroSection } from "@/components/hero/hero-section";

export const HomeScreen = () => {
    return (
        <main className="bg-white">
            <HeroSection />
            <TrendingDestinations />
            <PropertyTypes />
            <DealsSection />
            <NewsletterSection />
            <Footer />
        </main>
    );
};
