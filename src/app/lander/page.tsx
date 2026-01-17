"use client";

import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/lander/about-section";
import { FeaturesSection } from "@/components/lander/features-section";
import { PopularDestinations } from "@/components/lander/popular-destinations";
import { TestimonialsSection } from "@/components/lander/testimonials-section";
import { BlogSection } from "@/components/lander/blog-section";
import { CTASection } from "@/components/lander/cta-section";
import { LanderFooter } from "@/components/lander/lander-footer";

export default function LanderPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <PopularDestinations />
            <TestimonialsSection />
            <BlogSection />
            <CTASection />
            <LanderFooter />
        </main>
    );
}
