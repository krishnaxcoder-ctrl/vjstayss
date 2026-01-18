"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Star01, ArrowUpRight } from "@untitledui/icons";

const destinations = [
    {
        name: "Hawaii Island",
        duration: "3 Day 2 Night",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        price: "$500.00",
        rating: 4.7,
        description: "Hawaii Island, also known as the Big Island, is a paradise of breathtaking contrasts. H...",
    },
    {
        name: "Bali Island",
        duration: "2 Day 2 Night",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        price: "$350.00",
        rating: 4.7,
        description: "Bali, Indonesia's most iconic destination, offers a perfect blend...",
    },
    {
        name: "Maldives",
        duration: "4 Day 3 Night",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
        price: "$800.00",
        rating: 4.6,
        description: "Maldives is a dream destination for nature lovers and adventure seeker...",
    },
    {
        name: "Santorini",
        duration: "3 Day 2 Night",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
        price: "$650.00",
        rating: 4.8,
        description: "Santorini offers stunning sunsets, white-washed buildings, and crystal clear waters...",
    },
    {
        name: "Tokyo",
        duration: "5 Day 4 Night",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
        price: "$720.00",
        rating: 4.9,
        description: "Tokyo blends ultra-modern architecture with traditional temples and gardens...",
    },
    {
        name: "Paris",
        duration: "4 Day 3 Night",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        price: "$580.00",
        rating: 4.8,
        description: "Paris, the City of Light, captivates visitors with its iconic landmarks and cuisine...",
    },
    {
        name: "Dubai",
        duration: "5 Day 4 Night",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
        price: "$750.00",
        rating: 4.9,
        description: "Dubai offers luxury shopping, ultramodern architecture, and a lively nightlife scene...",
    },
    {
        name: "New York",
        duration: "4 Day 3 Night",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
        price: "$620.00",
        rating: 4.8,
        description: "New York City, the city that never sleeps, offers world-class dining and entertainment...",
    },
];

export const TrendingDestinations = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.offsetWidth / 4;
            const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-8xl px-6 lg:px-12">
                {/* Header */}
                <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div>
                        <span className="inline-block rounded-full bg-[#ff5a5f]/10 px-4 py-1.5 text-sm font-medium text-[#ff5a5f]">
                            Recommendations
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-4xl">
                            Explore Our Popular Destination                            
                        </h2>
                    </div>
                    <p className="max-w-md text-left text-sm text-gray-500 lg:text-right lg:text-base">
                        Discover top destinations and plan your next adventure.
                    </p>
                </div>

                {/* Destinations Carousel */}
                <div
                    ref={carouselRef}
                    className="scrollbar-hide -mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {destinations.map((destination, index) => (
                        <Link
                            key={destination.name}
                            href={`/listing/${index + 100}`}
                            className="group relative w-[calc(100%-1rem)] flex-shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-0.9375rem)]"
                        >
                            {/* Card */}
                            <div className="relative h-[420px] overflow-hidden rounded-3xl">
                                {/* Background Image */}
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Duration Badge */}
                                <div className="absolute left-4 top-4">
                                    <span className="inline-flex items-center rounded-full border border-white/70 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                                        {destination.duration}
                                    </span>
                                </div>

                                {/* Rating Badge */}
                                <div className="absolute right-4 bottom-4 lg:bottom-auto lg:top-4">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
                                        <Star01 className="size-4 fill-[#ff5a5f] text-[#ff5a5f]" />
                                        {destination.rating}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    {/* Destination Name */}
                                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>

                                    {/* Price - Prominent */}
                                    <p className="mt-1 text-2xl font-bold text-white">{destination.price}</p>

                                    {/* Description */}
                                    <p className="mt-2 line-clamp-2 text-sm text-white/80">{destination.description}</p>

                                    {/* Booking Button - Shows on hover */}
                                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                                        <div className="overflow-hidden">
                                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:bg-[#ff5a5f] hover:text-white">
                                                Booking Now
                                                <ArrowUpRight className="size-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Navigation */}
                <div className="mt-8 flex items-center justify-between">
                    {/* Carousel Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-[#ff5a5f] hover:bg-[#ff5a5f] hover:text-white"
                        >
                            <ArrowLeft className="size-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="flex size-12 items-center justify-center rounded-full bg-[#ff5a5f] text-white shadow-sm transition-all hover:bg-[#e04850]"
                        >
                            <ArrowRight className="size-5" />
                        </button>
                    </div>

                    {/* Explore More Button */}
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#e04850] hover:shadow-xl"
                    >
                        Explore More
                        <ArrowUpRight className="size-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
