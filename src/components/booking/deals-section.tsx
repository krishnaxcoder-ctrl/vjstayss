"use client";

import { ArrowRight, Heart, MarkerPin01, Star01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

const deals = [
    {
        name: "The Ritz-Carlton",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 2456,
        originalPrice: 450,
        discountedPrice: 320,
        discount: "29% OFF",
        tag: "Breakfast included",
    },
    {
        name: "Aman Tokyo",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 1892,
        originalPrice: 380,
        discountedPrice: 285,
        discount: "25% OFF",
        tag: "Free cancellation",
    },
    {
        name: "Four Seasons Resort",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 3124,
        originalPrice: 520,
        discountedPrice: 390,
        discount: "25% OFF",
        tag: "Spa access",
    },
    {
        name: "Burj Al Arab",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        rating: 5.0,
        reviews: 4567,
        originalPrice: 890,
        discountedPrice: 712,
        discount: "20% OFF",
        tag: "Airport transfer",
    },
];

export const DealsSection = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-8xl px-6 lg:px-12">
                {/* Header */}
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Weekend Deals</h2>
                        <p className="mt-2 text-gray-500">Save big on your next getaway</p>
                    </div>
                    <a
                        href="#"
                        className="hidden items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 md:flex"
                    >
                        View all deals
                        <ArrowRight className="size-4" />
                    </a>
                </div>

                {/* Deals Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {deals.map((deal) => (
                        <a key={deal.name} href="#" className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl">
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={deal.image}
                                    alt={deal.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Discount Badge */}
                                <div className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
                                    {deal.discount}
                                </div>

                                {/* Wishlist Button */}
                                <button
                                    type="button"
                                    className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Heart className="size-4 text-gray-600" />
                                </button>

                                {/* Tag */}
                                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
                                    {deal.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                {/* Rating */}
                                <div className="mb-2 flex items-center gap-1">
                                    <Star01 className="size-4 fill-amber-400 text-amber-400" />
                                    <span className="text-sm font-semibold text-gray-900">{deal.rating}</span>
                                    <span className="text-sm text-gray-500">({deal.reviews.toLocaleString()} reviews)</span>
                                </div>

                                {/* Hotel Name */}
                                <h3 className="font-semibold text-gray-900 group-hover:text-amber-600">{deal.name}</h3>

                                {/* Location */}
                                <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                                    <MarkerPin01 className="size-3.5" />
                                    {deal.location}
                                </div>

                                {/* Price */}
                                <div className="mt-3 flex items-baseline gap-2">
                                    <span className="text-lg font-bold text-gray-900">${deal.discountedPrice}</span>
                                    <span className="text-sm text-gray-400 line-through">${deal.originalPrice}</span>
                                    <span className="text-sm text-gray-500">/ night</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <a
                    href="#"
                    className="mt-6 flex items-center justify-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 md:hidden"
                >
                    View all deals
                    <ArrowRight className="size-4" />
                </a>
            </div>
        </section>
    );
};
