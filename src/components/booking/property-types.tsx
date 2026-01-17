"use client";

import { useRef } from "react";
import { Building07, Home01, Building05, Sun, Star01, ArrowRight, ArrowLeft, TrendUp01 } from "@untitledui/icons";

const propertyTypes = [
    {
        name: "Hotels",
        icon: Building07,
        count: "12,450",
        description: "From budget-friendly to luxury 5-star",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
        popular: true,
        rating: 4.8,
        trending: true,
    },
    {
        name: "Apartments",
        icon: Building05,
        count: "8,234",
        description: "Home-like comfort with full amenities",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop",
        popular: true,
        rating: 4.7,
        trending: false,
    },
    {
        name: "Villas",
        icon: Home01,
        count: "3,567",
        description: "Private luxury with stunning views",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop",
        popular: false,
        rating: 4.9,
        trending: true,
    },
    {
        name: "Resorts",
        icon: Sun,
        count: "2,891",
        description: "All-inclusive getaways & relaxation",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
        popular: true,
        rating: 4.8,
        trending: false,
    },
    {
        name: "Cabins",
        icon: Home01,
        count: "1,456",
        description: "Rustic retreats in nature",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=600&auto=format&fit=crop",
        popular: false,
        rating: 4.6,
        trending: true,
    },
    {
        name: "Houseboats",
        icon: Sun,
        count: "892",
        description: "Unique stays on the water",
        image: "https://images.unsplash.com/photo-1559291001-693fb9166cba?q=80&w=600&auto=format&fit=crop",
        popular: false,
        rating: 4.7,
        trending: false,
    },
];

export const PropertyTypes = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.offsetWidth / 3;
            const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                                <Building07 className="size-3.5" />
                                Property Types
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Browse by Property Type</h2>
                        <p className="mt-3 max-w-2xl text-lg text-gray-600">Discover the perfect accommodation that suits your travel style and preferences</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Carousel Navigation */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600"
                            >
                                <ArrowLeft className="size-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600"
                            >
                                <ArrowRight className="size-5" />
                            </button>
                        </div>
                        <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700">
                            View all
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Property Types Carousel */}
                <div
                    ref={carouselRef}
                    className="scrollbar-hide -mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {propertyTypes.map((type) => (
                        <a
                            key={type.name}
                            href="#"
                            className="group relative w-[calc(100%-1rem)] flex-shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-amber-200 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.875rem)]"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img src={type.image} alt={type.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Badges */}
                                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                                    {type.popular && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
                                            <Star01 className="size-3 fill-amber-400 text-amber-400" />
                                            Popular
                                        </span>
                                    )}
                                    {type.trending && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
                                            <TrendUp01 className="size-3" />
                                            Trending
                                        </span>
                                    )}
                                </div>

                                {/* Property Count Badge */}
                                <div className="absolute right-4 top-4">
                                    <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                        {type.count} properties
                                    </span>
                                </div>

                                {/* Bottom Content on Image */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-12 items-center justify-center rounded-2xl bg-white/95 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                            <type.icon className="size-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{type.name}</h3>
                                            <div className="mt-0.5 flex items-center gap-1.5">
                                                <Star01 className="size-3.5 fill-amber-400 text-amber-400" />
                                                <span className="text-sm font-medium text-white/90">{type.rating}</span>
                                                <span className="text-sm text-white/70">avg rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Below Image */}
                            <div className="p-5">
                                <p className="text-sm text-gray-600">{type.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xs font-medium uppercase tracking-wide text-gray-400">Explore {type.name.toLowerCase()}</span>
                                    <span className="flex size-8 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-8 md:grid-cols-4">
                    {[
                        { label: "Total Properties", value: "29,000+", icon: Building07 },
                        { label: "Happy Guests", value: "1.2M+", icon: Star01 },
                        { label: "Cities Covered", value: "500+", icon: Home01 },
                        { label: "Verified Hosts", value: "15,000+", icon: Sun },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                                <stat.icon className="size-6 text-amber-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 md:text-3xl">{stat.value}</div>
                            <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
