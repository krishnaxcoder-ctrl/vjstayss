"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
    Heart,
    MarkerPin01,
    Star01,
    Wifi,
    CheckCircle,
    Sun,
    Snowflake01,
    Waves,
    Grid01,
    List,
    ChevronDown,
    Sliders01,
    XClose,
    ArrowRight,
} from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";
import { SearchBar } from "@/components/booking/search-bar";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Slider } from "@/components/base/slider/slider";
import { cx } from "@/utils/cx";

// Sample hotel data
const hotels = [
    {
        id: 1,
        name: "The Grand Palace Hotel",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 2456,
        price: 320,
        originalPrice: 450,
        amenities: ["wifi", "parking", "pool", "breakfast"],
        stars: 5,
        type: "Hotel",
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
        amenities: ["wifi", "pool", "spa", "breakfast"],
        stars: 5,
        type: "Resort",
    },
    {
        id: 3,
        name: "Urban Boutique Hotel",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        rating: 4.7,
        reviews: 1234,
        price: 195,
        originalPrice: 250,
        amenities: ["wifi", "breakfast", "ac"],
        stars: 4,
        type: "Boutique",
    },
    {
        id: 4,
        name: "Mountain View Lodge",
        location: "Swiss Alps, Switzerland",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 3124,
        price: 450,
        originalPrice: 520,
        amenities: ["wifi", "parking", "spa", "breakfast"],
        stars: 5,
        type: "Lodge",
    },
    {
        id: 5,
        name: "Downtown City Hotel",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
        rating: 4.5,
        reviews: 4567,
        price: 275,
        originalPrice: 340,
        amenities: ["wifi", "ac", "breakfast"],
        stars: 4,
        type: "Hotel",
    },
    {
        id: 6,
        name: "Beachfront Villa",
        location: "Maldives",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        rating: 5.0,
        reviews: 892,
        price: 680,
        originalPrice: 850,
        amenities: ["wifi", "pool", "spa", "breakfast", "parking"],
        stars: 5,
        type: "Villa",
    },
    {
        id: 7,
        name: "Historic City Inn",
        location: "Rome, Italy",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
        rating: 4.6,
        reviews: 2341,
        price: 165,
        originalPrice: 210,
        amenities: ["wifi", "breakfast"],
        stars: 3,
        type: "Inn",
    },
    {
        id: 8,
        name: "Tropical Paradise Resort",
        location: "Phuket, Thailand",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 3891,
        price: 225,
        originalPrice: 290,
        amenities: ["wifi", "pool", "spa", "parking", "breakfast"],
        stars: 4,
        type: "Resort",
    },
    {
        id: 9,
        name: "Lakeside Retreat",
        location: "Lake Como, Italy",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 1567,
        price: 395,
        originalPrice: 480,
        amenities: ["wifi", "parking", "spa", "breakfast"],
        stars: 5,
        type: "Resort",
    },
];

const amenitiesOptions = [
    { id: "wifi", label: "Free WiFi", icon: Wifi },
    { id: "parking", label: "Free Parking", icon: CheckCircle },
    { id: "breakfast", label: "Breakfast Included", icon: Sun },
    { id: "ac", label: "Air Conditioning", icon: Snowflake01 },
    { id: "pool", label: "Swimming Pool", icon: Waves },
];

const propertyTypes = ["Hotel", "Resort", "Villa", "Boutique", "Lodge", "Inn"];

const sortOptions = [
    { id: "recommended", label: "Recommended" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "rating", label: "Highest Rated" },
    { id: "reviews", label: "Most Reviewed" },
];

function SearchPageContent() {
    const searchParams = useSearchParams();

    // Read search parameters from URL
    const searchLocation = searchParams.get("location") || "";
    const searchCheckIn = searchParams.get("checkIn") || "";
    const searchCheckOut = searchParams.get("checkOut") || "";
    const searchAdults = searchParams.get("adults") || "2";
    const searchChildren = searchParams.get("children") || "0";
    const searchRooms = searchParams.get("rooms") || "1";

    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sortBy, setSortBy] = useState("recommended");
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [priceRange, setPriceRange] = useState<number[]>([100, 600]);
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
    const [selectedStars, setSelectedStars] = useState<number[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [wishlist, setWishlist] = useState<number[]>([]);

    // Format dates for display
    const formatDisplayDate = (dateStr: string) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };

    const totalGuests = parseInt(searchAdults) + parseInt(searchChildren);

    const toggleAmenity = (id: string) => {
        setSelectedAmenities((prev) =>
            prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
        );
    };

    const toggleStar = (star: number) => {
        setSelectedStars((prev) =>
            prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
        );
    };

    const toggleType = (type: string) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const toggleWishlist = (id: number) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
        );
    };

    const clearAllFilters = () => {
        setPriceRange([100, 600]);
        setSelectedAmenities([]);
        setSelectedStars([]);
        setSelectedTypes([]);
    };

    const hasActiveFilters =
        selectedAmenities.length > 0 ||
        selectedStars.length > 0 ||
        selectedTypes.length > 0 ||
        priceRange[0] !== 100 ||
        priceRange[1] !== 600;

    // Filter hotels based on selected filters and search location
    const filteredHotels = hotels.filter((hotel) => {
        const matchesLocation =
            !searchLocation ||
            hotel.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
            hotel.name.toLowerCase().includes(searchLocation.toLowerCase());
        const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
        const matchesAmenities =
            selectedAmenities.length === 0 ||
            selectedAmenities.every((a) => hotel.amenities.includes(a));
        const matchesStars = selectedStars.length === 0 || selectedStars.includes(hotel.stars);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(hotel.type);
        return matchesLocation && matchesPrice && matchesAmenities && matchesStars && matchesType;
    });

    // Sort hotels
    const sortedHotels = [...filteredHotels].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price;
            case "price-high":
                return b.price - a.price;
            case "rating":
                return b.rating - a.rating;
            case "reviews":
                return b.reviews - a.reviews;
            default:
                return 0;
        }
    });

    const FilterSidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={cx("space-y-6", isMobile && "pb-24")}>
            {/* Price Range */}
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">Price Range</h3>
                <div className="px-1">
                    <Slider
                        minValue={50}
                        maxValue={1000}
                        defaultValue={priceRange}
                        onChange={(value) => setPriceRange(value as number[])}
                        formatOptions={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
                        labelPosition="top-floating"
                        labelFormatter={(value) => `$${value}`}
                    />
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>

            {/* Star Rating */}
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">Star Rating</h3>
                <div className="flex flex-wrap gap-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => toggleStar(star)}
                            className={cx(
                                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                                selectedStars.includes(star)
                                    ? "bg-[#ff5a5f] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            )}
                        >
                            <Star01 className="size-4" />
                            {star}
                        </button>
                    ))}
                </div>
            </div>

            {/* Amenities */}
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">Amenities</h3>
                <div className="space-y-3">
                    {amenitiesOptions.map((amenity) => (
                        <Checkbox
                            key={amenity.id}
                            isSelected={selectedAmenities.includes(amenity.id)}
                            onChange={() => toggleAmenity(amenity.id)}
                            className="cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <amenity.icon className="size-4 text-gray-500" />
                                <span className="text-sm text-gray-700">{amenity.label}</span>
                            </div>
                        </Checkbox>
                    ))}
                </div>
            </div>

            {/* Property Type */}
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">Property Type</h3>
                <div className="space-y-3">
                    {propertyTypes.map((type) => (
                        <Checkbox
                            key={type}
                            isSelected={selectedTypes.includes(type)}
                            onChange={() => toggleType(type)}
                            label={type}
                            className="cursor-pointer"
                        />
                    ))}
                </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <button
                    type="button"
                    onClick={clearAllFilters}
                    className="w-full rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                    Clear All Filters
                </button>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <SiteHeader variant="light" />

            {/* Search Bar Section */}
            <div className="border-b border-gray-200 bg-white px-6 py-6 lg:px-12">
                <div className="mx-auto max-w-8xl">
                    <div className="flex justify-center">
                        <SearchBar variant="inline" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-8xl px-6 py-8 lg:px-12">
                <div className="flex gap-8">
                    {/* Desktop Filters Sidebar */}
                    <aside className="hidden w-72 shrink-0 lg:block">
                        <div className="sticky top-8">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                                {hasActiveFilters && (
                                    <button
                                        type="button"
                                        onClick={clearAllFilters}
                                        className="text-sm font-medium text-[#ff5a5f] hover:text-[#e04850]"
                                    >
                                        Clear all
                                    </button>
                                )}
                            </div>
                            <FilterSidebar />
                        </div>
                    </aside>

                    {/* Results Section */}
                    <div className="flex-1">
                        {/* Results Header */}
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {sortedHotels.length} Hotels Found
                                    {searchLocation && (
                                        <span className="font-normal text-gray-600"> in {searchLocation}</span>
                                    )}
                                </h1>
                                <p className="mt-1 text-sm text-gray-500">
                                    {searchCheckIn && searchCheckOut ? (
                                        <>
                                            {formatDisplayDate(searchCheckIn)} - {formatDisplayDate(searchCheckOut)}
                                            {" · "}
                                        </>
                                    ) : null}
                                    {totalGuests} guest{totalGuests !== 1 ? "s" : ""}, {searchRooms} room{parseInt(searchRooms) !== 1 ? "s" : ""}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Mobile Filter Button */}
                                <button
                                    type="button"
                                    onClick={() => setShowMobileFilters(true)}
                                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 lg:hidden"
                                >
                                    <Sliders01 className="size-4" />
                                    Filters
                                    {hasActiveFilters && (
                                        <span className="flex size-5 items-center justify-center rounded-full bg-[#ff5a5f] text-xs text-white">
                                            {selectedAmenities.length + selectedStars.length + selectedTypes.length}
                                        </span>
                                    )}
                                </button>

                                {/* Sort Dropdown */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                                        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                                    >
                                        <span className="hidden sm:inline">Sort by:</span>
                                        <span className="text-gray-900">
                                            {sortOptions.find((o) => o.id === sortBy)?.label}
                                        </span>
                                        <ChevronDown className="size-4" />
                                    </button>

                                    {showSortDropdown && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-40"
                                                onClick={() => setShowSortDropdown(false)}
                                            />
                                            <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl bg-white py-1 shadow-lg ring-1 ring-gray-200">
                                                {sortOptions.map((option) => (
                                                    <button
                                                        key={option.id}
                                                        type="button"
                                                        onClick={() => {
                                                            setSortBy(option.id);
                                                            setShowSortDropdown(false);
                                                        }}
                                                        className={cx(
                                                            "w-full px-4 py-2.5 text-left text-sm transition-colors",
                                                            sortBy === option.id
                                                                ? "bg-[#ff5a5f]/10 font-medium text-[#ff5a5f]"
                                                                : "text-gray-700 hover:bg-gray-50"
                                                        )}
                                                    >
                                                        {option.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* View Mode Toggle */}
                                <div className="hidden items-center rounded-lg border border-gray-200 bg-white p-1 sm:flex">
                                    <button
                                        type="button"
                                        onClick={() => setViewMode("grid")}
                                        className={cx(
                                            "flex size-8 items-center justify-center rounded-md transition-colors",
                                            viewMode === "grid"
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-500 hover:text-gray-700"
                                        )}
                                    >
                                        <Grid01 className="size-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setViewMode("list")}
                                        className={cx(
                                            "flex size-8 items-center justify-center rounded-md transition-colors",
                                            viewMode === "list"
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-500 hover:text-gray-700"
                                        )}
                                    >
                                        <List className="size-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Hotel Grid/List */}
                        {sortedHotels.length > 0 ? (
                            <div
                                className={cx(
                                    viewMode === "grid"
                                        ? "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
                                        : "flex flex-col gap-4"
                                )}
                            >
                                {sortedHotels.map((hotel) => (
                                    <Link
                                        key={hotel.id}
                                        href={`/listing/${hotel.id}`}
                                        className={cx(
                                            "group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                                            viewMode === "list" && "flex"
                                        )}
                                    >
                                        {/* Image */}
                                        <div
                                            className={cx(
                                                "relative overflow-hidden",
                                                viewMode === "grid" ? "aspect-[4/3]" : "aspect-square w-64 shrink-0"
                                            )}
                                        >
                                            <img
                                                src={hotel.image}
                                                alt={hotel.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                            {/* Discount Badge */}
                                            {hotel.originalPrice > hotel.price && (
                                                <div className="absolute left-4 top-4 rounded-full bg-[#ff5a5f] px-3 py-1 text-xs font-bold text-white shadow-lg">
                                                    {Math.round((1 - hotel.price / hotel.originalPrice) * 100)}% OFF
                                                </div>
                                            )}

                                            {/* Wishlist Button */}
                                            <button
                                                type="button"
                                                className={cx(
                                                    "absolute right-4 top-4 flex size-9 items-center justify-center rounded-full backdrop-blur-md transition-all",
                                                    wishlist.includes(hotel.id)
                                                        ? "bg-[#ff5a5f] text-white"
                                                        : "bg-white/20 text-white hover:bg-white hover:text-[#ff5a5f]"
                                                )}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleWishlist(hotel.id);
                                                }}
                                            >
                                                <Heart
                                                    className={cx(
                                                        "size-4",
                                                        wishlist.includes(hotel.id) && "fill-current"
                                                    )}
                                                />
                                            </button>

                                            {/* Star Badge */}
                                            <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
                                                {[...Array(hotel.stars)].map((_, i) => (
                                                    <Star01 key={i} className="size-3 fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className={cx("p-5", viewMode === "list" && "flex flex-1 flex-col")}>
                                            {/* Rating & Reviews */}
                                            <div className="mb-2 flex items-center gap-2">
                                                <div className="flex items-center gap-1 rounded-md bg-[#ff5a5f]/10 px-2 py-0.5">
                                                    <Star01 className="size-3.5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                                    <span className="text-sm font-bold text-[#ff5a5f]">
                                                        {hotel.rating}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    ({hotel.reviews.toLocaleString()} reviews)
                                                </span>
                                            </div>

                                            {/* Hotel Name */}
                                            <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                                {hotel.name}
                                            </h3>

                                            {/* Location */}
                                            <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                                                <MarkerPin01 className="size-4 text-gray-400" />
                                                {hotel.location}
                                            </div>

                                            {/* Amenities */}
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {hotel.amenities.slice(0, 3).map((amenity) => {
                                                    const amenityData = amenitiesOptions.find((a) => a.id === amenity);
                                                    if (!amenityData) return null;
                                                    return (
                                                        <span
                                                            key={amenity}
                                                            className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                                                        >
                                                            <amenityData.icon className="size-3" />
                                                            {amenityData.label.split(" ")[1] || amenityData.label.split(" ")[0]}
                                                        </span>
                                                    );
                                                })}
                                                {hotel.amenities.length > 3 && (
                                                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                                                        +{hotel.amenities.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Price & CTA */}
                                            <div
                                                className={cx(
                                                    "mt-4 flex items-end justify-between border-t border-gray-100 pt-4",
                                                    viewMode === "list" && "mt-auto"
                                                )}
                                            >
                                                <div>
                                                    <span className="text-xs text-gray-500">From</span>
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-2xl font-bold text-gray-900">
                                                            ${hotel.price}
                                                        </span>
                                                        {hotel.originalPrice > hotel.price && (
                                                            <span className="text-sm text-gray-400 line-through">
                                                                ${hotel.originalPrice}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-gray-500">per night</span>
                                                </div>
                                                <span className="flex items-center gap-1 rounded-full bg-[#ff5a5f] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#e04850]">
                                                    View Deal
                                                    <ArrowRight className="size-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            /* Empty State */
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-gray-100">
                                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-gray-100">
                                    <MarkerPin01 className="size-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">No hotels found</h3>
                                <p className="mt-2 max-w-sm text-sm text-gray-500">
                                    Try adjusting your filters or search criteria to find more options.
                                </p>
                                <button
                                    type="button"
                                    onClick={clearAllFilters}
                                    className="mt-6 rounded-lg bg-[#ff5a5f] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e04850]"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}

                        {/* Load More */}
                        {sortedHotels.length > 0 && (
                            <div className="mt-8 flex justify-center">
                                <button
                                    type="button"
                                    className="rounded-xl border border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-[#ff5a5f] hover:bg-[#ff5a5f]/5 hover:text-[#ff5a5f]"
                                >
                                    Load More Hotels
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filters Modal */}
            {showMobileFilters && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                        onClick={() => setShowMobileFilters(false)}
                    />
                    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-gray-50 shadow-xl lg:hidden">
                        {/* Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                            <button
                                type="button"
                                onClick={() => setShowMobileFilters(false)}
                                className="flex size-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                            >
                                <XClose className="size-6" />
                            </button>
                        </div>

                        {/* Filters */}
                        <div className="p-6">
                            <FilterSidebar isMobile />
                        </div>

                        {/* Footer */}
                        <div className="fixed bottom-0 left-0 right-0 flex gap-3 border-t border-gray-200 bg-white p-4">
                            <button
                                type="button"
                                onClick={clearAllFilters}
                                className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Clear All
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowMobileFilters(false)}
                                className="flex-1 rounded-xl bg-[#ff5a5f] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e04850]"
                            >
                                Show {sortedHotels.length} Hotels
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="mx-auto size-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#ff5a5f]" />
                    <p className="mt-4 text-gray-600">Loading search results...</p>
                </div>
            </div>
        }>
            <SearchPageContent />
        </Suspense>
    );
}
