"use client";

import { ArrowLeft, ArrowRight, Heart, Star01 } from "@untitledui/icons";
import { useState } from "react";

const destinations = [
    {
        id: 1,
        name: "Tropical Oasis",
        location: "Bali, Indonesia",
        price: "$500.00",
        rating: 4.9,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        featured: true,
    },
    {
        id: 2,
        name: "Bali Paradise",
        location: "Bali, Indonesia",
        price: "$350.00",
        rating: 4.8,
        reviews: 96,
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Maldives",
        location: "Male, Maldives",
        price: "$800.00",
        rating: 5.0,
        reviews: 256,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Santorini",
        location: "Greece",
        price: "$450.00",
        rating: 4.7,
        reviews: 184,
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop",
    },
];

export const PopularDestinations = () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    const toggleFavorite = (id: number) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
        );
    };

    return (
        <section className="px-6 py-20 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <span className="text-sm font-medium uppercase tracking-wider text-[#ff5a5f]">Destination</span>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Explore Our Popular{" "}
                            <span className="text-[#0a4a4a]">Destination</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-gray-500">
                            Discover top destinations<br />
                            and plan your next adventure.
                        </p>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
                            >
                                <ArrowLeft className="size-5" />
                            </button>
                            <button
                                type="button"
                                className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
                            >
                                <ArrowRight className="size-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Destinations Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Favorite Button */}
                                <button
                                    type="button"
                                    onClick={() => toggleFavorite(destination.id)}
                                    className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:bg-white"
                                >
                                    <Heart
                                        className={`size-5 ${
                                            favorites.includes(destination.id)
                                                ? "fill-[#ff5a5f] text-[#ff5a5f]"
                                                : "text-gray-600"
                                        }`}
                                    />
                                </button>
                                {/* Featured Badge */}
                                {destination.featured && (
                                    <div className="absolute left-3 top-3 rounded-full bg-[#0a4a4a] px-3 py-1 text-xs font-medium text-white">
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{destination.name}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{destination.location}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star01 className="size-4 fill-amber-400 text-amber-400" />
                                        <span className="text-sm font-medium text-gray-900">{destination.rating}</span>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="text-lg font-bold text-[#0a4a4a]">{destination.price}</p>
                                    <p className="text-xs text-gray-400">{destination.reviews} reviews</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="mt-8 text-right">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#ff5a5f] hover:underline"
                    >
                        View More
                        <ArrowRight className="size-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
