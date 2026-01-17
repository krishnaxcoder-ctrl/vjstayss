"use client";

import { Building07, Home01, Building05, Sun, ArrowRight } from "@untitledui/icons";

const propertyTypes = [
    {
        name: "Hotels",
        icon: Building07,
        count: "12,450",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
        badge: "Featured",
    },
    {
        name: "Apartments",
        icon: Building05,
        count: "8,234",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop",
        badge: "Popular",
    },
    {
        name: "Villas",
        icon: Home01,
        count: "3,567",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop",
        badge: "Trending",
    },
    {
        name: "Resorts",
        icon: Sun,
        count: "2,891",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
        badge: "Featured",
    },
    {
        name: "Cabins",
        icon: Home01,
        count: "1,456",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=600&auto=format&fit=crop",
        badge: "New",
    },
    {
        name: "Houseboats",
        icon: Sun,
        count: "892",
        image: "https://images.unsplash.com/photo-1559291001-693fb9166cba?q=80&w=600&auto=format&fit=crop",
        badge: "Unique",
    },
    {
        name: "Cottages",
        icon: Home01,
        count: "2,156",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop",
        badge: "Popular",
    },
    {
        name: "Hostels",
        icon: Building05,
        count: "4,320",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop",
        badge: "Budget",
    },
];

export const PropertyTypes = () => {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-8xl px-6 lg:px-12">
                {/* Header */}
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="inline-block rounded-full bg-[#ff5a5f]/10 px-4 py-1.5 text-sm font-medium text-[#ff5a5f]">
                            Property Types
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Browse by Property Type
                        </h2>
                    </div>
                    <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#ff5a5f] transition-colors hover:text-[#e04850]">
                        View all
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Property Types Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                    {propertyTypes.map((type) => (
                        <a
                            key={type.name}
                            href="#"
                            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
                        >
                            {/* Background Image */}
                            <img
                                src={type.image}
                                alt={type.name}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity group-hover:from-black/70" />

                            {/* Icon Badge - Top Left */}
                            <div className="absolute left-4 top-4">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md transition-all group-hover:bg-white/30">
                                    <type.icon className="size-5 text-white" />
                                </div>
                            </div>

                            {/* Text Badge - Top Right */}
                            <div className="absolute right-4 top-4">
                                <span className="inline-flex items-center rounded-full border border-white/70 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                    {type.badge}
                                </span>
                            </div>

                            {/* Content - Bottom */}
                            <div className="absolute inset-x-0 bottom-0 p-4">
                                <h3 className="text-lg font-bold text-white">{type.name}</h3>
                                <p className="mt-1 text-sm text-white/70">{type.count} properties</p>

                                {/* Explore Button - Slides up on Hover */}
                                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                                    <div className="overflow-hidden">
                                        <div className="flex items-center gap-2 pt-3">
                                            <span className="text-sm font-medium text-white">Explore</span>
                                            <ArrowRight className="size-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
