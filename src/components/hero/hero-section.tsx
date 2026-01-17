"use client";

import { FeatureBadges } from "@/components/booking/feature-badges";
import { SearchBar } from "@/components/booking/search-bar";

export const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
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

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col items-center justify-center px-6 py-16 lg:px-12">
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
