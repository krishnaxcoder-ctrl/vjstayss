"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import {
    Heart,
    Trash01,
    MarkerPin01,
    Star01,
    ArrowRight,
    ShoppingCart01,
    Wifi,
    CheckCircle,
    Sun,
    Snowflake01,
    Waves,
} from "@untitledui/icons";

const amenitiesOptions = [
    { id: "wifi", label: "WiFi", icon: Wifi },
    { id: "parking", label: "Parking", icon: CheckCircle },
    { id: "breakfast", label: "Breakfast", icon: Sun },
    { id: "ac", label: "AC", icon: Snowflake01 },
    { id: "pool", label: "Pool", icon: Waves },
];

// Sample saved items
const initialSavedItems = [
    {
        id: 1,
        name: "The Ritz-Carlton",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 2456,
        price: 320,
        originalPrice: 450,
        amenities: ["wifi", "parking", "pool", "breakfast"],
        type: "Luxury Hotel",
    },
    {
        id: 2,
        name: "Seaside Resort & Spa",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 1892,
        price: 285,
        originalPrice: 380,
        amenities: ["wifi", "pool", "breakfast"],
        type: "Resort",
    },
    {
        id: 3,
        name: "Mountain View Lodge",
        location: "Swiss Alps, Switzerland",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 3124,
        price: 450,
        originalPrice: 520,
        amenities: ["wifi", "parking", "breakfast"],
        type: "Lodge",
    },
    {
        id: 4,
        name: "Beachfront Villa",
        location: "Maldives",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        rating: 5.0,
        reviews: 892,
        price: 680,
        originalPrice: 850,
        amenities: ["wifi", "pool", "breakfast", "ac"],
        type: "Villa",
    },
];

export default function SavedPage() {
    const [savedItems, setSavedItems] = useState(initialSavedItems);

    const removeItem = (id: number) => {
        setSavedItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SiteHeader variant="light" />

            <main className="mx-auto max-w-8xl px-6 py-8 lg:px-12">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                            <Heart className="size-6 text-[#ff5a5f]" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Saved Properties</h1>
                            <p className="mt-1 text-gray-600">
                                {savedItems.length} {savedItems.length === 1 ? "property" : "properties"} saved
                            </p>
                        </div>
                    </div>
                </div>

                {savedItems.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {savedItems.map((item) => (
                            <div
                                key={item.id}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    {/* Discount Badge */}
                                    {item.originalPrice > item.price && (
                                        <div className="absolute left-3 top-3 rounded-full bg-[#ff5a5f] px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                                            {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                                        </div>
                                    )}

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white text-[#ff5a5f] shadow-lg transition-all hover:bg-[#ff5a5f] hover:text-white"
                                    >
                                        <Heart className="size-5 fill-current" />
                                    </button>

                                    {/* Type Badge */}
                                    <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm">
                                        {item.type}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Rating */}
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="flex items-center gap-1 rounded-md bg-[#ff5a5f]/10 px-2 py-0.5">
                                            <Star01 className="size-3.5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                            <span className="text-sm font-bold text-[#ff5a5f]">
                                                {item.rating}
                                            </span>
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            ({item.reviews.toLocaleString()} reviews)
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <Link
                                        href={`/listing/${item.id}`}
                                        className="text-lg font-bold text-gray-900 transition-colors hover:text-[#ff5a5f]"
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Location */}
                                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                                        <MarkerPin01 className="size-4 text-gray-400" />
                                        {item.location}
                                    </div>

                                    {/* Amenities */}
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {item.amenities.slice(0, 3).map((amenity) => {
                                            const amenityData = amenitiesOptions.find((a) => a.id === amenity);
                                            if (!amenityData) return null;
                                            return (
                                                <span
                                                    key={amenity}
                                                    className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                                                >
                                                    <amenityData.icon className="size-3" />
                                                    {amenityData.label}
                                                </span>
                                            );
                                        })}
                                        {item.amenities.length > 3 && (
                                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                                                +{item.amenities.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Price & Actions */}
                                    <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-4">
                                        <div>
                                            <span className="text-xs text-gray-500">From</span>
                                            <div className="flex items-baseline gap-1.5">
                                                <span className="text-xl font-bold text-gray-900">
                                                    ${item.price}
                                                </span>
                                                {item.originalPrice > item.price && (
                                                    <span className="text-sm text-gray-400 line-through">
                                                        ${item.originalPrice}
                                                    </span>
                                                )}
                                                <span className="text-sm text-gray-500">/ night</span>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/listing/${item.id}`}
                                            className="flex items-center gap-1 rounded-full bg-[#ff5a5f] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#ff5a5f]"
                                        >
                                            Book
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-gray-100">
                        <div className="flex size-20 items-center justify-center rounded-full bg-gray-100">
                            <Heart className="size-10 text-gray-400" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold text-gray-900">No saved properties</h2>
                        <p className="mt-2 max-w-sm text-gray-500">
                            Start exploring and save your favorite hotels by clicking the heart icon on any property.
                        </p>
                        <Link
                            href="/hotels"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#ff5a5f] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#ff5a5f]"
                        >
                            Explore Hotels
                            <ArrowRight className="size-5" />
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}
