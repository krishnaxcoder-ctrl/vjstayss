"use client";

import { useState } from "react";
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
    Building07,
    SearchMd,
    Map01,
    ZoomIn,
    ZoomOut,
    Maximize01,
} from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Slider } from "@/components/base/slider/slider";
import { cx } from "@/utils/cx";

// Extended hotel data for the hotels page
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
        featured: true,
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
        featured: true,
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
        featured: false,
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
        featured: true,
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
        featured: false,
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
        featured: true,
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
        featured: false,
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
        featured: false,
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
        featured: true,
    },
    {
        id: 10,
        name: "Skyline Penthouse Suites",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 2134,
        price: 550,
        originalPrice: 700,
        amenities: ["wifi", "pool", "spa", "parking", "breakfast", "ac"],
        stars: 5,
        type: "Hotel",
        featured: false,
    },
    {
        id: 11,
        name: "Countryside Manor",
        location: "Cotswolds, UK",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
        rating: 4.7,
        reviews: 987,
        price: 245,
        originalPrice: 310,
        amenities: ["wifi", "parking", "breakfast"],
        stars: 4,
        type: "Boutique",
        featured: false,
    },
    {
        id: 12,
        name: "Ocean View Resort",
        location: "Santorini, Greece",
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 3456,
        price: 420,
        originalPrice: 540,
        amenities: ["wifi", "pool", "spa", "breakfast"],
        stars: 5,
        type: "Resort",
        featured: true,
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

export default function HotelsPage() {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sortBy, setSortBy] = useState("recommended");
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [priceRange, setPriceRange] = useState<number[]>([100, 700]);
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
    const [selectedStars, setSelectedStars] = useState<number[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [hoveredHotel, setHoveredHotel] = useState<number | null>(null);

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
        setPriceRange([100, 700]);
        setSelectedAmenities([]);
        setSelectedStars([]);
        setSelectedTypes([]);
        setSearchQuery("");
    };

    const hasActiveFilters =
        selectedAmenities.length > 0 ||
        selectedStars.length > 0 ||
        selectedTypes.length > 0 ||
        priceRange[0] !== 100 ||
        priceRange[1] !== 700 ||
        searchQuery !== "";

    // Filter hotels
    const filteredHotels = hotels.filter((hotel) => {
        const matchesSearch =
            !searchQuery ||
            hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
        const matchesAmenities =
            selectedAmenities.length === 0 ||
            selectedAmenities.every((a) => hotel.amenities.includes(a));
        const matchesStars = selectedStars.length === 0 || selectedStars.includes(hotel.stars);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(hotel.type);
        return matchesSearch && matchesPrice && matchesAmenities && matchesStars && matchesType;
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
                // Recommended - featured first, then by rating
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return b.rating - a.rating;
        }
    });

    const [showPriceDropdown, setShowPriceDropdown] = useState(false);
    const [showStarsDropdown, setShowStarsDropdown] = useState(false);
    const [showAmenitiesDropdown, setShowAmenitiesDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);

    const FilterSidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={cx("space-y-6", isMobile && "pb-24")}>
            {/* Search */}
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">Search Hotels</h3>
                <div className="relative">
                    <SearchMd className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Hotel name or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                    />
                </div>
            </div>

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
            <SiteHeader variant="light" />

            {/* Main Content */}
            <div className="mx-auto max-w-8xl px-6 py-8 lg:px-12">
                {/* Horizontal Filters */}
                <div className="mb-8 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Search */}
                        <div className="relative min-w-[200px] flex-1">
                            <SearchMd className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search hotels..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                            />
                        </div>

                        {/* Price Range Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowPriceDropdown(!showPriceDropdown);
                                    setShowStarsDropdown(false);
                                    setShowAmenitiesDropdown(false);
                                    setShowTypeDropdown(false);
                                }}
                                className={cx(
                                    "flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
                                    priceRange[0] !== 100 || priceRange[1] !== 700
                                        ? "border-[#ff5a5f] bg-[#ff5a5f]/5 text-[#ff5a5f]"
                                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                                )}
                            >
                                ${priceRange[0]} - ${priceRange[1]}
                                <ChevronDown className="size-4" />
                            </button>
                            {showPriceDropdown && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowPriceDropdown(false)} />
                                    <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                                        <p className="mb-3 text-sm font-semibold text-gray-900">Price per night</p>
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
                                        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                                            <span>${priceRange[0]}</span>
                                            <span>${priceRange[1]}</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Star Rating Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowStarsDropdown(!showStarsDropdown);
                                    setShowPriceDropdown(false);
                                    setShowAmenitiesDropdown(false);
                                    setShowTypeDropdown(false);
                                }}
                                className={cx(
                                    "flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
                                    selectedStars.length > 0
                                        ? "border-[#ff5a5f] bg-[#ff5a5f]/5 text-[#ff5a5f]"
                                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                                )}
                            >
                                <Star01 className="size-4" />
                                {selectedStars.length > 0 ? `${selectedStars.length} selected` : "Star Rating"}
                                <ChevronDown className="size-4" />
                            </button>
                            {showStarsDropdown && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowStarsDropdown(false)} />
                                    <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                                        <p className="mb-3 text-sm font-semibold text-gray-900">Star Rating</p>
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
                                </>
                            )}
                        </div>

                        {/* Amenities Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowAmenitiesDropdown(!showAmenitiesDropdown);
                                    setShowPriceDropdown(false);
                                    setShowStarsDropdown(false);
                                    setShowTypeDropdown(false);
                                }}
                                className={cx(
                                    "flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
                                    selectedAmenities.length > 0
                                        ? "border-[#ff5a5f] bg-[#ff5a5f]/5 text-[#ff5a5f]"
                                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                                )}
                            >
                                <Wifi className="size-4" />
                                {selectedAmenities.length > 0 ? `${selectedAmenities.length} selected` : "Amenities"}
                                <ChevronDown className="size-4" />
                            </button>
                            {showAmenitiesDropdown && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowAmenitiesDropdown(false)} />
                                    <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                                        <p className="mb-3 text-sm font-semibold text-gray-900">Amenities</p>
                                        <div className="space-y-2">
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
                                </>
                            )}
                        </div>

                        {/* Property Type Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowTypeDropdown(!showTypeDropdown);
                                    setShowPriceDropdown(false);
                                    setShowStarsDropdown(false);
                                    setShowAmenitiesDropdown(false);
                                }}
                                className={cx(
                                    "flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
                                    selectedTypes.length > 0
                                        ? "border-[#ff5a5f] bg-[#ff5a5f]/5 text-[#ff5a5f]"
                                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                                )}
                            >
                                <Building07 className="size-4" />
                                {selectedTypes.length > 0 ? `${selectedTypes.length} selected` : "Property Type"}
                                <ChevronDown className="size-4" />
                            </button>
                            {showTypeDropdown && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowTypeDropdown(false)} />
                                    <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                                        <p className="mb-3 text-sm font-semibold text-gray-900">Property Type</p>
                                        <div className="space-y-2">
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
                                </>
                            )}
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative ml-auto">
                            <button
                                type="button"
                                onClick={() => setShowSortDropdown(!showSortDropdown)}
                                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                <span className="hidden sm:inline">Sort:</span>
                                <span className="text-gray-900">
                                    {sortOptions.find((o) => o.id === sortBy)?.label}
                                </span>
                                <ChevronDown className="size-4" />
                            </button>
                            {showSortDropdown && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowSortDropdown(false)} />
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

                        {/* Clear Filters */}
                        {hasActiveFilters && (
                            <button
                                type="button"
                                onClick={clearAllFilters}
                                className="flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-medium text-[#ff5a5f] transition-colors hover:bg-[#ff5a5f]/5"
                            >
                                <XClose className="size-4" />
                                Clear
                            </button>
                        )}

                        {/* Mobile Filter Button */}
                        <button
                            type="button"
                            onClick={() => setShowMobileFilters(true)}
                            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 lg:hidden"
                        >
                            <Sliders01 className="size-4" />
                            All Filters
                        </button>
                    </div>
                </div>

                {/* Split Layout: Listings + Map */}
                <div className="flex gap-6">
                    {/* Left Side - Listings */}
                    <div className="w-full lg:w-1/2 xl:w-3/5">
                        {/* Results Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {sortedHotels.length} Hotels Available
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    Showing all available properties
                                </p>
                            </div>
                        </div>

                        {/* Hotel Grid/List */}
                        {sortedHotels.length > 0 ? (
                            <div
                                className={cx(
                                    viewMode === "grid"
                                        ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
                                        : "flex flex-col gap-4"
                                )}
                            >
                                {sortedHotels.map((hotel, index) => (
                                    <Link
                                        key={hotel.id}
                                        href={`/listing/${hotel.id}`}
                                        className={cx(
                                            "group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-[#ff5a5f]/50",
                                            viewMode === "list" && "flex"
                                        )}
                                        onMouseEnter={() => setHoveredHotel(hotel.id)}
                                        onMouseLeave={() => setHoveredHotel(null)}
                                    >
                                        {/* Image */}
                                        <div
                                            className={cx(
                                                "relative overflow-hidden",
                                                viewMode === "grid" ? "aspect-[4/3]" : "aspect-square w-48 shrink-0"
                                            )}
                                        >
                                            <img
                                                src={hotel.image}
                                                alt={hotel.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                            {/* Featured Badge */}
                                            {hotel.featured && (
                                                <div className="absolute left-3 top-3 rounded-full bg-[#ff5a5f] px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                                                    Featured
                                                </div>
                                            )}

                                            {/* Discount Badge */}
                                            {!hotel.featured && hotel.originalPrice > hotel.price && (
                                                <div className="absolute left-3 top-3 rounded-full bg-green-500 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                                                    {Math.round((1 - hotel.price / hotel.originalPrice) * 100)}% OFF
                                                </div>
                                            )}

                                            {/* Wishlist Button */}
                                            <button
                                                type="button"
                                                className={cx(
                                                    "absolute right-3 top-3 flex size-8 items-center justify-center rounded-full backdrop-blur-md transition-all",
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

                                            {/* Map Index Badge */}
                                            <div className="absolute bottom-3 left-3 flex size-6 items-center justify-center rounded-full bg-[#ff5a5f] text-xs font-bold text-white shadow-lg">
                                                {index + 1}
                                            </div>

                                            {/* Star Badge */}
                                            <div className="absolute bottom-3 right-3 flex items-center gap-0.5 rounded-full bg-white/90 px-1.5 py-0.5 backdrop-blur-sm">
                                                {[...Array(hotel.stars)].map((_, i) => (
                                                    <Star01 key={i} className="size-2.5 fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className={cx("p-4", viewMode === "list" && "flex flex-1 flex-col")}>
                                            {/* Rating & Reviews */}
                                            <div className="mb-1.5 flex items-center gap-2">
                                                <div className="flex items-center gap-1 rounded-md bg-[#ff5a5f]/10 px-1.5 py-0.5">
                                                    <Star01 className="size-3 fill-[#ff5a5f] text-[#ff5a5f]" />
                                                    <span className="text-xs font-bold text-[#ff5a5f]">
                                                        {hotel.rating}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-gray-500">
                                                    ({hotel.reviews.toLocaleString()} reviews)
                                                </span>
                                            </div>

                                            {/* Hotel Name */}
                                            <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                                {hotel.name}
                                            </h3>

                                            {/* Location */}
                                            <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                                                <MarkerPin01 className="size-3 text-gray-400" />
                                                {hotel.location}
                                            </div>

                                            {/* Amenities */}
                                            <div className="mt-2 flex flex-wrap gap-1.5">
                                                {hotel.amenities.slice(0, 2).map((amenity) => {
                                                    const amenityData = amenitiesOptions.find((a) => a.id === amenity);
                                                    if (!amenityData) return null;
                                                    return (
                                                        <span
                                                            key={amenity}
                                                            className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                                                        >
                                                            <amenityData.icon className="size-2.5" />
                                                            {amenityData.label.split(" ")[1] || amenityData.label.split(" ")[0]}
                                                        </span>
                                                    );
                                                })}
                                                {hotel.amenities.length > 2 && (
                                                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                                        +{hotel.amenities.length - 2}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Price */}
                                            <div
                                                className={cx(
                                                    "mt-3 flex items-end justify-between border-t border-gray-100 pt-3",
                                                    viewMode === "list" && "mt-auto"
                                                )}
                                            >
                                                <div>
                                                    <div className="flex items-baseline gap-1.5">
                                                        <span className="text-lg font-bold text-gray-900">
                                                            ${hotel.price}
                                                        </span>
                                                        {hotel.originalPrice > hotel.price && (
                                                            <span className="text-xs text-gray-400 line-through">
                                                                ${hotel.originalPrice}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-gray-500">per night</span>
                                                </div>
                                                <span className="flex items-center gap-1 rounded-full bg-[#ff5a5f] px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-[#e04850]">
                                                    View
                                                    <ArrowRight className="size-3" />
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
                                    <Building07 className="size-8 text-gray-400" />
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
                            <div className="mt-6 flex justify-center">
                                <button
                                    type="button"
                                    className="rounded-xl border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-[#ff5a5f] hover:bg-[#ff5a5f]/5 hover:text-[#ff5a5f]"
                                >
                                    Load More Hotels
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Side - Map */}
                    <div className="hidden lg:block lg:w-1/2 xl:w-2/5">
                        <div className="sticky top-4 h-[calc(95vh)] overflow-hidden rounded-2xl bg-gray-200 shadow-lg ring-1 ring-gray-200">
                            {/* Map Container */}
                            <div className="relative h-full w-full">
                                {/* Map Background - Using an actual map image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-2.2426,53.4808,4,0/800x1200?access_token=pk.placeholder')",
                                        backgroundColor: "#e5e7eb"
                                    }}
                                >
                                    {/* Fallback pattern for map */}
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    }} />
                                </div>

                                {/* Hotel Markers */}
                                {sortedHotels.map((hotel, index) => {
                                    // Generate pseudo-random positions based on hotel id
                                    const posX = ((hotel.id * 37) % 70) + 15;
                                    const posY = ((hotel.id * 53) % 70) + 15;

                                    return (
                                        <div
                                            key={hotel.id}
                                            className={cx(
                                                "absolute transform -translate-x-1/2 -translate-y-full cursor-pointer transition-all duration-200",
                                                hoveredHotel === hotel.id ? "z-20 scale-125" : "z-10"
                                            )}
                                            style={{ left: `${posX}%`, top: `${posY}%` }}
                                            onMouseEnter={() => setHoveredHotel(hotel.id)}
                                            onMouseLeave={() => setHoveredHotel(null)}
                                        >
                                            {/* Marker */}
                                            <div className={cx(
                                                "relative flex items-center gap-1 rounded-full px-2 py-1 shadow-lg transition-all",
                                                hoveredHotel === hotel.id
                                                    ? "bg-[#ff5a5f] text-white"
                                                    : "bg-white text-gray-900"
                                            )}>
                                                <span className="text-xs font-bold">${hotel.price}</span>
                                                {/* Marker tail */}
                                                <div className={cx(
                                                    "absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent",
                                                    hoveredHotel === hotel.id
                                                        ? "border-t-[#ff5a5f]"
                                                        : "border-t-white"
                                                )} />
                                            </div>

                                            {/* Hover Card */}
                                            {hoveredHotel === hotel.id && (
                                                <div className="absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 rounded-xl bg-white p-2 shadow-xl ring-1 ring-gray-100">
                                                    <img
                                                        src={hotel.image}
                                                        alt={hotel.name}
                                                        className="h-24 w-full rounded-lg object-cover"
                                                    />
                                                    <div className="mt-2">
                                                        <h4 className="text-sm font-bold text-gray-900">{hotel.name}</h4>
                                                        <div className="mt-0.5 flex items-center gap-1">
                                                            <Star01 className="size-3 fill-[#ff5a5f] text-[#ff5a5f]" />
                                                            <span className="text-xs font-medium text-gray-700">{hotel.rating}</span>
                                                            <span className="text-xs text-gray-500">({hotel.reviews})</span>
                                                        </div>
                                                        <p className="mt-1 text-sm font-bold text-[#ff5a5f]">${hotel.price}<span className="text-xs font-normal text-gray-500">/night</span></p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                {/* Map Controls */}
                                <div className="absolute right-4 top-4 flex flex-col gap-2">
                                    <button
                                        type="button"
                                        className="flex size-10 items-center justify-center rounded-lg bg-white shadow-md transition-colors hover:bg-gray-50"
                                    >
                                        <ZoomIn className="size-5 text-gray-700" />
                                    </button>
                                    <button
                                        type="button"
                                        className="flex size-10 items-center justify-center rounded-lg bg-white shadow-md transition-colors hover:bg-gray-50"
                                    >
                                        <ZoomOut className="size-5 text-gray-700" />
                                    </button>
                                    <button
                                        type="button"
                                        className="flex size-10 items-center justify-center rounded-lg bg-white shadow-md transition-colors hover:bg-gray-50"
                                    >
                                        <Maximize01 className="size-5 text-gray-700" />
                                    </button>
                                </div>

                                {/* Map Legend */}
                                <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 p-3 shadow-md backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                        <Map01 className="size-4 text-[#ff5a5f]" />
                                        <span>{sortedHotels.length} hotels in this area</span>
                                    </div>
                                </div>

                                {/* Search This Area Button */}
                                <div className="absolute left-1/2 top-4 -translate-x-1/2">
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md transition-all hover:shadow-lg"
                                    >
                                        <SearchMd className="size-4" />
                                        Search this area
                                    </button>
                                </div>
                            </div>
                        </div>
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
