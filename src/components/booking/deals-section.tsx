"use client";

import { useRef } from "react";
import { ArrowRight, ArrowLeft, Heart, MarkerPin01, Star01, Clock, Calendar, Users01 } from "@untitledui/icons";

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
        nights: 3,
        guests: 2,
        validUntil: "Dec 25",
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
        nights: 2,
        guests: 2,
        validUntil: "Dec 31",
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
        nights: 4,
        guests: 2,
        validUntil: "Jan 15",
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
        nights: 3,
        guests: 2,
        validUntil: "Dec 28",
    },
    {
        name: "Marina Bay Sands",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 3891,
        originalPrice: 420,
        discountedPrice: 336,
        discount: "20% OFF",
        tag: "Pool access",
        nights: 2,
        guests: 2,
        validUntil: "Jan 5",
    },
    {
        name: "Atlantis The Palm",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        rating: 4.7,
        reviews: 5234,
        originalPrice: 550,
        discountedPrice: 385,
        discount: "30% OFF",
        tag: "Waterpark included",
        nights: 3,
        guests: 4,
        validUntil: "Dec 30",
    },
];

export const DealsSection = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.offsetWidth / 4;
            const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-8xl px-6 lg:px-12">
                {/* Header */}
                <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-1.5 text-sm font-medium text-[#ff5a5f]">
                            <Clock className="size-4" />
                            Limited Time Offers
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Weekend Deals
                        </h2>
                        <p className="mt-2 max-w-lg text-gray-600">
                            Exclusive discounts on handpicked luxury stays. Book now before they're gone!
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Carousel Navigation */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-[#ff5a5f] hover:bg-[#ff5a5f]/10 hover:text-[#ff5a5f]"
                            >
                                <ArrowLeft className="size-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-[#ff5a5f] hover:bg-[#ff5a5f]/10 hover:text-[#ff5a5f]"
                            >
                                <ArrowRight className="size-5" />
                            </button>
                        </div>
                        <a
                            href="#"
                            className="hidden items-center gap-2 text-sm font-semibold text-[#ff5a5f] transition-colors hover:text-[#e04850] sm:flex"
                        >
                            View all deals
                            <ArrowRight className="size-4" />
                        </a>
                    </div>
                </div>

                {/* Deals Carousel */}
                <div
                    ref={carouselRef}
                    className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {deals.map((deal) => (
                        <a
                            key={deal.name}
                            href="#"
                            className="group w-full flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={deal.image}
                                    alt={deal.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                {/* Discount Badge */}
                                <div className="absolute left-4 top-4 rounded-full bg-[#ff5a5f] px-3 py-1 text-xs font-bold text-white shadow-lg">
                                    {deal.discount}
                                </div>

                                {/* Wishlist Button */}
                                <button
                                    type="button"
                                    className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#ff5a5f]"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Heart className="size-4" />
                                </button>

                                {/* Tag & Valid Until */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                    <span className="rounded-full border border-white/50 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                                        {deal.tag}
                                    </span>
                                    <span className="flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 text-xs text-white backdrop-blur-md">
                                        <Calendar className="size-3" />
                                        Until {deal.validUntil}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Rating & Reviews */}
                                <div className="mb-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <div className="flex items-center gap-1 rounded-md bg-[#ff5a5f]/10 px-2 py-0.5">
                                            <Star01 className="size-3.5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                            <span className="text-sm font-bold text-[#ff5a5f]">{deal.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({deal.reviews.toLocaleString()})</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Clock className="size-3.5" />
                                            {deal.nights} nights
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users01 className="size-3.5" />
                                            {deal.guests} guests
                                        </span>
                                    </div>
                                </div>

                                {/* Hotel Name */}
                                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                    {deal.name}
                                </h3>

                                {/* Location */}
                                <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                                    <MarkerPin01 className="size-4 text-gray-400" />
                                    {deal.location}
                                </div>

                                {/* Price & CTA */}
                                <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-4">
                                    <div>
                                        <span className="text-xs text-gray-500">From</span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-gray-900">${deal.discountedPrice}</span>
                                            <span className="text-sm text-gray-400 line-through">${deal.originalPrice}</span>
                                        </div>
                                        <span className="text-xs text-gray-500">per night</span>
                                    </div>
                                    <button className="flex items-center gap-1 rounded-full bg-[#ff5a5f] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#e04850]">
                                        Book Now
                                        <ArrowRight className="size-4" />
                                    </button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <a
                    href="#"
                    className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#ff5a5f] transition-colors hover:text-[#e04850] sm:hidden"
                >
                    View all deals
                    <ArrowRight className="size-4" />
                </a>
            </div>
        </section>
    );
};
