"use client";

import { ArrowRight, Plane } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

const destinations = [
    {
        name: "Paris",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        properties: "2,456",
        tag: "Most Popular",
    },
    {
        name: "Tokyo",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
        properties: "1,892",
        tag: "Trending",
    },
    {
        name: "New York",
        country: "USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
        properties: "3,124",
        tag: "Top Rated",
    },
    {
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
        properties: "1,567",
        tag: "Luxury",
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        properties: "987",
        tag: "Best Value",
    },
    {
        name: "London",
        country: "United Kingdom",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
        properties: "2,891",
        tag: "Historic",
    },
];

export const TrendingDestinations = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <div className="flex size-10 items-center justify-center rounded-full bg-amber-100">
                                <Plane className="size-5 text-amber-600" />
                            </div>
                            <Badge color="orange" size="md">
                                Explore the World
                            </Badge>
                        </div>
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                            Trending Destinations
                        </h2>
                        <p className="mt-3 max-w-xl text-lg text-gray-500">
                            Discover the most popular destinations loved by travelers worldwide
                        </p>
                    </div>
                    <Button color="secondary" size="lg" iconTrailing={ArrowRight} className="hidden md:inline-flex">
                        View All Destinations
                    </Button>
                </div>

                {/* Destinations Grid - Bento Style */}
                <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((destination, index) => (
                        <a
                            key={destination.name}
                            href="#"
                            className={cx(
                                "group relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl hover:ring-amber-400",
                                index === 0 && "lg:col-span-2 lg:row-span-1",
                                index === 5 && "lg:col-span-2 lg:row-span-1"
                            )}
                        >
                            {/* Background Image */}
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 transition-opacity group-hover:opacity-70" />

                            {/* Tag Badge */}
                            <div className="absolute left-4 top-4">
                                <span className="inline-flex items-center rounded-full bg-amber-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                                    {destination.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-amber-400">
                                            {destination.name}
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-white/70">
                                            {destination.country}
                                        </p>
                                        <div className="mt-3 flex items-center gap-2">
                                            <div className="h-1 w-8 rounded-full bg-amber-500" />
                                            <span className="text-sm text-white/80">
                                                {destination.properties} properties
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow Button */}
                                    <div className="flex size-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-amber-500 group-hover:scale-110">
                                        <ArrowRight className="size-5 text-white transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 flex justify-center md:hidden">
                    <Button color="secondary" size="lg" iconTrailing={ArrowRight}>
                        View All Destinations
                    </Button>
                </div>
            </div>
        </section>
    );
};
