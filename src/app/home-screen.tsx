"use client";

import { DealsSection } from "@/components/booking/deals-section";
import { Footer } from "@/components/booking/footer";
import { PropertyTypes } from "@/components/booking/property-types";
import { TrendingDestinations } from "@/components/booking/trending-destinations";
import { HeroSection } from "@/components/hero/hero-section";
import { LanderHero } from "@/components/lander/lander-hero";

export const HomeScreen = () => {
    return (
        <main className="bg-white">
            <HeroSection />
            <TrendingDestinations />
            <PropertyTypes />
            <DealsSection />
            <LanderHero />
            <Footer />
        </main>
    );
};
