"use client";

import { Building07, Home01, Building05, Sun } from "@untitledui/icons";

const propertyTypes = [
    {
        name: "Hotels",
        icon: Building07,
        count: "12,450",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    },
    {
        name: "Apartments",
        icon: Building05,
        count: "8,234",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop",
    },
    {
        name: "Villas",
        icon: Home01,
        count: "3,567",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop",
    },
    {
        name: "Resorts",
        icon: Sun,
        count: "2,891",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
    },
];

export const PropertyTypes = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Browse by Property Type</h2>
                    <p className="mt-2 text-gray-500">Find the perfect accommodation for your stay</p>
                </div>

                {/* Property Types Grid */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                    {propertyTypes.map((type) => (
                        <a
                            key={type.name}
                            href="#"
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={type.image}
                                    alt={type.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-center gap-2">
                                    <type.icon className="size-5 text-amber-600" />
                                    <h3 className="font-semibold text-gray-900">{type.name}</h3>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{type.count} properties</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
