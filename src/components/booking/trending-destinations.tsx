"use client";

import { ArrowUpRight, Heart, MarkerPin01, Star01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

const destinations = [
    {
        name: "Paris",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        properties: "2,456",
        rating: 4.9,
        price: "From $120",
        featured: true,
    },
    {
        name: "Tokyo",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
        properties: "1,892",
        rating: 4.8,
        price: "From $95",
        featured: false,
    },
    {
        name: "New York",
        country: "USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
        properties: "3,124",
        rating: 4.7,
        price: "From $150",
        featured: false,
    },
    {
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
        properties: "1,567",
        rating: 4.9,
        price: "From $180",
        featured: true,
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        properties: "987",
        rating: 4.8,
        price: "From $65",
        featured: false,
    },
    {
        name: "London",
        country: "United Kingdom",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
        properties: "2,891",
        rating: 4.6,
        price: "From $130",
        featured: false,
    },
];

export const TrendingDestinations = () => {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
                        Popular Destinations
                    </span>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Trending Destinations
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Explore our most loved destinations, handpicked based on traveler reviews and booking trends
                    </p>
                </div>

                {/* Destinations Grid - Modern Bento */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                    {destinations.map((destination, index) => (
                        <a
                            key={destination.name}
                            href="#"
                            className={cx(
                                "group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-500 hover:shadow-xl hover:ring-amber-300",
                                // First card - large featured
                                index === 0 && "lg:col-span-2 lg:row-span-2",
                                // Fourth card - wide
                                index === 3 && "md:col-span-2 lg:col-span-2"
                            )}
                        >
                            {/* Image Container */}
                            <div className={cx(
                                "relative overflow-hidden",
                                index === 0 ? "h-full min-h-[400px] lg:min-h-full" : "h-48",
                                index === 3 && "h-48"
                            )}>
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className={cx(
                                    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
                                    index === 0 && "via-black/40"
                                )} />

                                {/* Wishlist Button */}
                                <button
                                    className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-red-500 hover:scale-110"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Heart className="size-5" />
                                </button>

                                {/* Featured Badge */}
                                {destination.featured && (
                                    <div className="absolute left-4 top-4">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                                            <Star01 className="size-3 fill-white" />
                                            Featured
                                        </span>
                                    </div>
                                )}

                                {/* Content Overlay */}
                                <div className={cx(
                                    "absolute inset-x-0 bottom-0 p-5",
                                    index === 0 && "p-8"
                                )}>
                                    {/* Location */}
                                    <div className="mb-2 flex items-center gap-1.5">
                                        <MarkerPin01 className="size-4 text-amber-400" />
                                        <span className="text-sm font-medium text-white/80">{destination.country}</span>
                                    </div>

                                    {/* Name */}
                                    <h3 className={cx(
                                        "font-bold text-white transition-colors group-hover:text-amber-300",
                                        index === 0 ? "text-3xl lg:text-4xl" : "text-xl"
                                    )}>
                                        {destination.name}
                                    </h3>

                                    {/* Stats Row */}
                                    <div className={cx(
                                        "mt-3 flex items-center gap-4",
                                        index === 0 && "mt-4"
                                    )}>
                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            <Star01 className="size-4 fill-amber-400 text-amber-400" />
                                            <span className="text-sm font-semibold text-white">{destination.rating}</span>
                                        </div>

                                        <div className="h-4 w-px bg-white/30" />

                                        {/* Properties */}
                                        <span className="text-sm text-white/70">{destination.properties} stays</span>

                                        <div className="h-4 w-px bg-white/30" />

                                        {/* Price */}
                                        <span className="text-sm font-semibold text-amber-400">{destination.price}</span>
                                    </div>

                                    {/* Explore Button - Only on featured */}
                                    {index === 0 && (
                                        <div className="mt-6">
                                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-all group-hover:bg-amber-500 group-hover:text-white">
                                                Explore Now
                                                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Hover Arrow - For non-featured cards */}
                                {index !== 0 && (
                                    <div className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-amber-500">
                                        <ArrowUpRight className="size-5" />
                                    </div>
                                )}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="xl" className="bg-amber-500 hover:bg-amber-600 border-none">
                        View All Destinations
                    </Button>
                    <Button size="xl" color="secondary">
                        Get Inspired
                    </Button>
                </div>
            </div>
        </section>
    );
};
