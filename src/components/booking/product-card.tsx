"use client";

import Link from "next/link";
import { Heart, MarkerPin01, Star01, Clock, Calendar, Users01, ArrowRight } from "@untitledui/icons";

export interface ProductCardProps {
    id: string | number;
    name: string;
    location: string;
    image: string;
    rating: number;
    reviews?: number;
    price: number;
    originalPrice?: number;
    discount?: string;
    tag?: string;
    validUntil?: string;
    nights?: number;
    guests?: number;
    variant?: "default" | "compact";
    showWishlist?: boolean;
    showBookButton?: boolean;
    onWishlistClick?: (id: string | number) => void;
    isWishlisted?: boolean;
    className?: string;
}

export const ProductCard = ({
    id,
    name,
    location,
    image,
    rating,
    reviews,
    price,
    originalPrice,
    discount,
    tag,
    validUntil,
    nights,
    guests,
    variant = "default",
    showWishlist = true,
    showBookButton = true,
    onWishlistClick,
    isWishlisted = false,
    className = "",
}: ProductCardProps) => {
    const isCompact = variant === "compact";

    return (
        <Link
            href={`/listing/${id}`}
            className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#ff5a5f]/20 ${className}`}
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Discount Badge */}
                {discount && (
                    <div className="absolute left-3 top-3 rounded-full bg-[#ff5a5f] px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                        {discount}
                    </div>
                )}

                {/* Wishlist Button */}
                {showWishlist && (
                    <button
                        type="button"
                        className={`absolute right-3 top-3 flex size-8 items-center justify-center rounded-full backdrop-blur-md transition-all ${
                            isWishlisted
                                ? "bg-[#ff5a5f] text-white"
                                : "bg-white/90 text-gray-600 shadow-sm hover:bg-[#ff5a5f] hover:text-white"
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            onWishlistClick?.(id);
                        }}
                    >
                        <Heart className={`size-4 ${isWishlisted ? "fill-current" : ""}`} />
                    </button>
                )}

                {/* Rating Badge - Bottom Left */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-sm">
                    <Star01 className="size-3.5 fill-[#ff5a5f] text-[#ff5a5f]" />
                    <span className="text-sm font-bold text-gray-900">{rating}</span>
                    {reviews && (
                        <span className="text-xs text-gray-500">({reviews > 1000 ? `${(reviews / 1000).toFixed(1)}k` : reviews})</span>
                    )}
                </div>

                {/* Tag & Valid Until - For default variant */}
                {!isCompact && (tag || validUntil) && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                        {tag && (
                            <span className="rounded-full border border-white/50 bg-white/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                                {tag}
                            </span>
                        )}
                        {validUntil && (
                            <span className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-xs text-white backdrop-blur-md">
                                <Calendar className="size-3" />
                                {validUntil}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={`flex flex-1 flex-col ${isCompact ? "p-4" : "p-5"}`}>
                {/* Meta Info - For default variant */}
                {!isCompact && (nights || guests) && (
                    <div className="mb-2 flex items-center gap-3 text-xs text-gray-500">
                        {nights && (
                            <span className="flex items-center gap-1">
                                <Clock className="size-3.5" />
                                {nights} nights
                            </span>
                        )}
                        {guests && (
                            <span className="flex items-center gap-1">
                                <Users01 className="size-3.5" />
                                {guests} guests
                            </span>
                        )}
                    </div>
                )}

                {/* Hotel Name */}
                <h3 className={`font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f] ${isCompact ? "text-base" : "text-lg"}`}>
                    {name}
                </h3>

                {/* Location */}
                <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-500">
                    <MarkerPin01 className="size-4 shrink-0 text-gray-400" />
                    <span className="truncate">{location}</span>
                </div>

                {/* Price Section */}
                <div className={`mt-auto flex items-end justify-between ${isCompact ? "pt-4" : "border-t border-gray-100 pt-4 mt-4"}`}>
                    <div>
                        {!isCompact && <span className="text-xs text-gray-500">From</span>}
                        <div className="flex items-baseline gap-1.5">
                            <span className={`font-bold text-gray-900 ${isCompact ? "text-xl" : "text-2xl"}`}>
                                ${price}
                            </span>
                            {originalPrice && originalPrice > price && (
                                <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
                            )}
                            <span className="text-sm text-gray-500">/ night</span>
                        </div>
                    </div>

                    {/* Book Now Button - Default variant only */}
                    {showBookButton && !isCompact && (
                        <span className="flex items-center gap-1 rounded-full bg-[#ff5a5f] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#e04850]">
                            Book Now
                            <ArrowRight className="size-4" />
                        </span>
                    )}

                    {/* View Button - Compact variant */}
                    {isCompact && (
                        <span className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f]/10 text-[#ff5a5f] transition-all group-hover:bg-[#ff5a5f] group-hover:text-white">
                            <ArrowRight className="size-5" />
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};
