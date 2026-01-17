"use client";

import { DealsSection } from "@/components/booking/deals-section";
import { PropertyTypes } from "@/components/booking/property-types";
import { TrendingDestinations } from "@/components/booking/trending-destinations";
import { HeroSection } from "@/components/hero/hero-section";
import { LanderHero } from "@/components/lander/lander-hero";
import { SiteHeader } from "@/components/layout/site-header";

export const HomeScreen = () => {
    return (
        <div className="bg-white">
            <SiteHeader variant="dark" />
            <HeroSection />
            <TrendingDestinations />
            <PropertyTypes />
            <DealsSection />
            <LanderHero />
        </div>
    );
};
