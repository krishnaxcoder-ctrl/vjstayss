"use client";

import { useRef } from "react";
import { ArrowRight, ArrowLeft, Clock } from "@untitledui/icons";
import { ProductCard } from "./product-card";

const deals = [
    {
        id: "1",
        name: "The Ritz-Carlton",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 2456,
        originalPrice: 450,
        price: 320,
        discount: "29% OFF",
        tag: "Breakfast included",
        nights: 3,
        guests: 2,
        validUntil: "Dec 25",
    },
    {
        id: "2",
        name: "Aman Tokyo",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 1892,
        originalPrice: 380,
        price: 285,
        discount: "25% OFF",
        tag: "Free cancellation",
        nights: 2,
        guests: 2,
        validUntil: "Dec 31",
    },
    {
        id: "3",
        name: "Four Seasons Resort",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 3124,
        originalPrice: 520,
        price: 390,
        discount: "25% OFF",
        tag: "Spa access",
        nights: 4,
        guests: 2,
        validUntil: "Jan 15",
    },
    {
        id: "4",
        name: "Burj Al Arab",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        rating: 5.0,
        reviews: 4567,
        originalPrice: 890,
        price: 712,
        discount: "20% OFF",
        tag: "Airport transfer",
        nights: 3,
        guests: 2,
        validUntil: "Dec 28",
    },
    {
        id: "5",
        name: "Marina Bay Sands",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 3891,
        originalPrice: 420,
        price: 336,
        discount: "20% OFF",
        tag: "Pool access",
        nights: 2,
        guests: 2,
        validUntil: "Jan 5",
    },
    {
        id: "6",
        name: "Atlantis The Palm",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        rating: 4.7,
        reviews: 5234,
        originalPrice: 550,
        price: 385,
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
                    <div className="hidden items-center gap-3 sm:flex">
                        {/* Carousel Navigation - Desktop */}
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
                            className="flex items-center gap-2 text-sm font-semibold text-[#ff5a5f] transition-colors hover:text-[#e04850]"
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
                        <ProductCard
                            key={deal.id}
                            id={deal.id}
                            name={deal.name}
                            location={deal.location}
                            image={deal.image}
                            rating={deal.rating}
                            reviews={deal.reviews}
                            price={deal.price}
                            originalPrice={deal.originalPrice}
                            discount={deal.discount}
                            tag={deal.tag}
                            validUntil={deal.validUntil}
                            nights={deal.nights}
                            guests={deal.guests}
                            variant="default"
                            showWishlist={true}
                            showBookButton={true}
                            className="w-full flex-shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
                        />
                    ))}
                </div>

                {/* Mobile Navigation & View All Link */}
                <div className="mt-6 flex items-center justify-between sm:hidden">
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
                        className="flex items-center gap-2 text-sm font-semibold text-[#ff5a5f] transition-colors hover:text-[#e04850]"
                    >
                        View all deals
                        <ArrowRight className="size-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
