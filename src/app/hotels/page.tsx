"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Heart,
    MarkerPin01,
    Star01,
    Wifi,
    Snowflake01,
    Waves,
    ChevronDown,
    XClose,
    ArrowRight,
    Building07,
    SearchMd,
    Map01,
    ZoomIn,
    ZoomOut,
    Maximize01,
    FilterLines,
    Users01,
    CurrencyDollar,
    Sun,
} from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Slider } from "@/components/base/slider/slider";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

// Extended hotel data with coordinates for map
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
        coords: { x: 25, y: 30 },
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
        coords: { x: 65, y: 45 },
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
        coords: { x: 75, y: 25 },
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
        coords: { x: 35, y: 20 },
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
        coords: { x: 20, y: 35 },
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
        coords: { x: 55, y: 60 },
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
        coords: { x: 40, y: 40 },
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
        coords: { x: 70, y: 55 },
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
        coords: { x: 38, y: 32 },
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
        coords: { x: 50, y: 45 },
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
        coords: { x: 28, y: 22 },
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
        coords: { x: 45, y: 38 },
    },
];

const amenitiesOptions = [
    { id: "wifi", label: "Free WiFi", icon: Wifi },
    { id: "parking", label: "Free Parking", icon: MarkerPin01 },
    { id: "breakfast", label: "Breakfast", icon: Sun },
    { id: "ac", label: "Air Conditioning", icon: Snowflake01 },
    { id: "pool", label: "Pool", icon: Waves },
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
    const [activeMapHotel, setActiveMapHotel] = useState<number | null>(null);
    const [showMap, setShowMap] = useState(true);

    // Filter dropdowns
    const [showPriceDropdown, setShowPriceDropdown] = useState(false);
    const [showStarsDropdown, setShowStarsDropdown] = useState(false);
    const [showAmenitiesDropdown, setShowAmenitiesDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);

    const closeAllDropdowns = () => {
        setShowPriceDropdown(false);
        setShowStarsDropdown(false);
        setShowAmenitiesDropdown(false);
        setShowTypeDropdown(false);
        setShowSortDropdown(false);
    };

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
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return b.rating - a.rating;
        }
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <SiteHeader variant="light" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5f5] via-white to-gray-50 px-6 py-16 lg:py-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff5a5f' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative mx-auto max-w-7xl">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-1.5 text-sm font-medium text-[#ff5a5f]">
                            <Building07 className="size-4" />
                            {hotels.length}+ Properties Available
                        </span>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                            Find Your Perfect Stay
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                            Discover handpicked hotels, resorts, and unique accommodations for your next adventure
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mx-auto mt-10 max-w-4xl">
                        <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl md:flex-row md:items-center">
                            {/* Location Search */}
                            <div className="relative flex-1">
                                <MarkerPin01 className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full rounded-xl border-0 bg-gray-50 py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-500 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden h-10 w-px bg-gray-200 md:block" />

                            {/* Guests */}
                            <div className="relative w-full md:w-40">
                                <Users01 className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                                <select className="w-full appearance-none rounded-xl border-0 bg-gray-50 py-4 pl-12 pr-10 text-gray-900 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20">
                                    <option>2 Guests</option>
                                    <option>1 Guest</option>
                                    <option>3 Guests</option>
                                    <option>4+ Guests</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>

                            {/* Search Button */}
                            <Button size="lg" className="bg-[#ff5a5f] hover:bg-[#e04850] px-8 py-4 h-auto">
                                <SearchMd className="mr-2 size-5" />
                                Search
                            </Button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 text-center">
                        <div>
                            <p className="text-3xl font-bold text-gray-900">{hotels.length}+</p>
                            <p className="text-sm text-gray-500">Properties</p>
                        </div>
                        <div className="h-8 w-px bg-gray-200" />
                        <div>
                            <p className="text-3xl font-bold text-gray-900">50+</p>
                            <p className="text-sm text-gray-500">Destinations</p>
                        </div>
                        <div className="h-8 w-px bg-gray-200" />
                        <div>
                            <p className="text-3xl font-bold text-gray-900">10K+</p>
                            <p className="text-sm text-gray-500">Happy Guests</p>
                        </div>
                        <div className="h-8 w-px bg-gray-200" />
                        <div>
                            <p className="text-3xl font-bold text-gray-900">4.8</p>
                            <p className="text-sm text-gray-500">Avg. Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Split View */}
            <div className="mx-auto max-w-8xl px-4 py-6 lg:px-6">
                {/* Filter Bar */}
                <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Mobile Filter Button */}
                        <button
                            type="button"
                            onClick={() => setShowMobileFilters(true)}
                            className="flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 lg:hidden"
                        >
                            <FilterLines className="size-4" />
                            Filters
                            {hasActiveFilters && (
                                <span className="flex size-5 items-center justify-center rounded-full bg-[#ff5a5f] text-xs text-white">
                                    {selectedAmenities.length + selectedStars.length + selectedTypes.length}
                                </span>
                            )}
                        </button>

                        {/* Desktop Filters */}
                        <div className="hidden flex-1 flex-wrap items-center gap-3 lg:flex">
                            {/* Price Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        closeAllDropdowns();
                                        setShowPriceDropdown(!showPriceDropdown);
                                    }}
                                    className={cx(
                                        "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all",
                                        priceRange[0] !== 100 || priceRange[1] !== 700
                                            ? "border-[#ff5a5f] bg-[#ff5a5f]/5 text-[#ff5a5f]"
                                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                                    )}
                                >
                                    <CurrencyDollar className="size-4" />
                                    ${priceRange[0]} - ${priceRange[1]}
                                    <ChevronDown className="size-4" />
                                </button>
                                {showPriceDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowPriceDropdown(false)} />
                                        <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200">
                                            <p className="mb-4 text-sm font-semibold text-gray-900">Price per night</p>
                                            <Slider
                                                minValue={50}
                                                maxValue={1000}
                                                defaultValue={priceRange}
                                                onChange={(value) => setPriceRange(value as number[])}
                                                formatOptions={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
                                                labelPosition="top-floating"
                                                labelFormatter={(value) => `$${value}`}
                                            />
                                            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                                                <span>${priceRange[0]}</span>
                                                <span>${priceRange[1]}</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Property Type */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        closeAllDropdowns();
                                        setShowTypeDropdown(!showTypeDropdown);
                                    }}
                                    className={cx(
                                        "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all",
                                        selectedTypes.length > 0
                                            ? "border-[#ff5a5f] bg-[#ff5a5f]/5 text-[#ff5a5f]"
                                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                                    )}
                                >
                                    <Building07 className="size-4" />
                                    {selectedTypes.length > 0 ? `${selectedTypes.length} types` : "Property Type"}
                                    <ChevronDown className="size-4" />
                                </button>
                                {showTypeDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowTypeDropdown(false)} />
                                        <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200">
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

                            {/* Star Rating */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        closeAllDropdowns();
                                        setShowStarsDropdown(!showStarsDropdown);
                                    }}
                                    className={cx(
                                        "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all",
                                        selectedStars.length > 0
                                            ? "border-[#ff5a5f] bg-[#ff5a5f]/5 text-[#ff5a5f]"
                                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                                    )}
                                >
                                    <Star01 className="size-4" />
                                    {selectedStars.length > 0 ? `${selectedStars.length} selected` : "Star Rating"}
                                    <ChevronDown className="size-4" />
                                </button>
                                {showStarsDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowStarsDropdown(false)} />
                                        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200">
                                            <p className="mb-3 text-sm font-semibold text-gray-900">Star Rating</p>
                                            <div className="flex flex-wrap gap-2">
                                                {[5, 4, 3, 2, 1].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => toggleStar(star)}
                                                        className={cx(
                                                            "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                                                            selectedStars.includes(star)
                                                                ? "bg-[#ff5a5f] text-white shadow-md"
                                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                        )}
                                                    >
                                                        <Star01 className={cx("size-4", selectedStars.includes(star) && "fill-current")} />
                                                        {star}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Amenities */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        closeAllDropdowns();
                                        setShowAmenitiesDropdown(!showAmenitiesDropdown);
                                    }}
                                    className={cx(
                                        "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all",
                                        selectedAmenities.length > 0
                                            ? "border-[#ff5a5f] bg-[#ff5a5f]/5 text-[#ff5a5f]"
                                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                                    )}
                                >
                                    <Wifi className="size-4" />
                                    {selectedAmenities.length > 0 ? `${selectedAmenities.length} amenities` : "Amenities"}
                                    <ChevronDown className="size-4" />
                                </button>
                                {showAmenitiesDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowAmenitiesDropdown(false)} />
                                        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200">
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

                            {/* Clear Filters */}
                            {hasActiveFilters && (
                                <button
                                    type="button"
                                    onClick={clearAllFilters}
                                    className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition-all hover:bg-red-100"
                                >
                                    <XClose className="size-4" />
                                    Clear All
                                </button>
                            )}
                        </div>

                        {/* Right Side - Sort & View Toggle */}
                        <div className="ml-auto flex items-center gap-3">
                            {/* Results Count */}
                            <span className="hidden text-sm text-gray-500 lg:block">
                                {sortedHotels.length} properties found
                            </span>

                            {/* Sort Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        closeAllDropdowns();
                                        setShowSortDropdown(!showSortDropdown);
                                    }}
                                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-300"
                                >
                                    <span>{sortOptions.find((o) => o.id === sortBy)?.label}</span>
                                    <ChevronDown className="size-4" />
                                </button>
                                {showSortDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowSortDropdown(false)} />
                                        <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl bg-white py-1 shadow-xl ring-1 ring-gray-200">
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

                            {/* Map Toggle */}
                            <button
                                type="button"
                                onClick={() => setShowMap(!showMap)}
                                className={cx(
                                    "hidden items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all lg:flex",
                                    showMap
                                        ? "border-[#ff5a5f] bg-[#ff5a5f] text-white"
                                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                                )}
                            >
                                <Map01 className="size-4" />
                                Map
                            </button>
                        </div>
                    </div>
                </div>

                {/* Split View Container */}
                <div className="flex gap-6">
                    {/* Left Side - Hotel Listings */}
                    <div className={cx("w-full transition-all", showMap ? "lg:w-[55%]" : "lg:w-full")}>
                        {sortedHotels.length > 0 ? (
                            <div className={cx(
                                "grid gap-4",
                                showMap ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            )}>
                                {sortedHotels.map((hotel, index) => (
                                    <Link
                                        key={hotel.id}
                                        href={`/listing/${hotel.id}`}
                                        className={cx(
                                            "group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition-all duration-300",
                                            hoveredHotel === hotel.id || activeMapHotel === hotel.id
                                                ? "ring-[#ff5a5f] shadow-lg shadow-[#ff5a5f]/10 -translate-y-1"
                                                : "ring-gray-100 hover:ring-[#ff5a5f]/50 hover:shadow-lg hover:-translate-y-1"
                                        )}
                                        onMouseEnter={() => setHoveredHotel(hotel.id)}
                                        onMouseLeave={() => setHoveredHotel(null)}
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={hotel.image}
                                                alt={hotel.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                            {/* Top Badges */}
                                            <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                                                {hotel.featured && (
                                                    <span className="rounded-full bg-[#ff5a5f] px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                                                        Featured
                                                    </span>
                                                )}
                                                {!hotel.featured && hotel.originalPrice > hotel.price && (
                                                    <span className="rounded-full bg-green-500 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                                                        {Math.round((1 - hotel.price / hotel.originalPrice) * 100)}% OFF
                                                    </span>
                                                )}
                                            </div>

                                            {/* Wishlist Button */}
                                            <button
                                                type="button"
                                                className={cx(
                                                    "absolute right-3 top-3 flex size-9 items-center justify-center rounded-full backdrop-blur-md transition-all",
                                                    wishlist.includes(hotel.id)
                                                        ? "bg-[#ff5a5f] text-white"
                                                        : "bg-white/20 text-white hover:bg-white hover:text-[#ff5a5f]"
                                                )}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleWishlist(hotel.id);
                                                }}
                                            >
                                                <Heart className={cx("size-5", wishlist.includes(hotel.id) && "fill-current")} />
                                            </button>

                                            {/* Bottom Info */}
                                            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                                                {/* Map Index */}
                                                <span className="flex size-7 items-center justify-center rounded-full bg-[#ff5a5f] text-xs font-bold text-white shadow-lg">
                                                    {index + 1}
                                                </span>

                                                {/* Stars */}
                                                <div className="flex items-center gap-0.5 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
                                                    {[...Array(hotel.stars)].map((_, i) => (
                                                        <Star01 key={i} className="size-3 fill-amber-400 text-amber-400" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            {/* Rating */}
                                            <div className="mb-2 flex items-center gap-2">
                                                <div className="flex items-center gap-1 rounded-md bg-[#ff5a5f]/10 px-2 py-0.5">
                                                    <Star01 className="size-3.5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                                    <span className="text-sm font-bold text-[#ff5a5f]">{hotel.rating}</span>
                                                </div>
                                                <span className="text-xs text-gray-500">({hotel.reviews.toLocaleString()} reviews)</span>
                                                <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                                                    {hotel.type}
                                                </span>
                                            </div>

                                            {/* Name */}
                                            <h3 className="font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                                {hotel.name}
                                            </h3>

                                            {/* Location */}
                                            <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                                                <MarkerPin01 className="size-4 text-gray-400" />
                                                {hotel.location}
                                            </div>

                                            {/* Amenities */}
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {hotel.amenities.slice(0, 3).map((amenity) => {
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
                                                {hotel.amenities.length > 3 && (
                                                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                                                        +{hotel.amenities.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Price */}
                                            <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-4">
                                                <div>
                                                    <div className="flex items-baseline gap-1.5">
                                                        <span className="text-xl font-bold text-gray-900">${hotel.price}</span>
                                                        {hotel.originalPrice > hotel.price && (
                                                            <span className="text-sm text-gray-400 line-through">${hotel.originalPrice}</span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-gray-500">per night</span>
                                                </div>
                                                <span className="flex items-center gap-1 rounded-full bg-[#ff5a5f] px-4 py-2 text-sm font-semibold text-white transition-all group-hover:bg-[#e04850]">
                                                    View
                                                    <ArrowRight className="size-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            /* Empty State */
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 text-center shadow-sm ring-1 ring-gray-100">
                                <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-gray-100">
                                    <Building07 className="size-10 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">No hotels found</h3>
                                <p className="mt-2 max-w-md text-gray-500">
                                    Try adjusting your filters or search criteria to find more options.
                                </p>
                                <Button
                                    onClick={clearAllFilters}
                                    className="mt-6 bg-[#ff5a5f] hover:bg-[#e04850]"
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        )}

                        {/* Load More */}
                        {sortedHotels.length > 0 && (
                            <div className="mt-8 flex justify-center">
                                <Button
                                    size="lg"
                                    className="border-2 border-gray-200 bg-white text-gray-700 hover:border-[#ff5a5f] hover:bg-[#ff5a5f]/5 hover:text-[#ff5a5f]"
                                >
                                    Load More Hotels
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Right Side - Map */}
                    {showMap && (
                        <div className="hidden lg:block lg:w-[45%]">
                            <div className="sticky top-5 h-[calc(95vh)] overflow-hidden rounded-2xl bg-gray-200 shadow-xl ring-1 ring-gray-200">
                                {/* Map Container */}
                                <div className="relative h-full w-full">
                                    {/* Map Background Pattern */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2394a3b8' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                                        }} />
                                    </div>

                                    {/* Hotel Markers */}
                                    {sortedHotels.map((hotel, index) => (
                                        <div
                                            key={hotel.id}
                                            className={cx(
                                                "absolute -translate-x-1/2 -translate-y-full transition-all duration-200",
                                                hoveredHotel === hotel.id || activeMapHotel === hotel.id ? "z-30 scale-110" : "z-10"
                                            )}
                                            style={{ left: `${hotel.coords.x}%`, top: `${hotel.coords.y}%` }}
                                            onMouseEnter={() => {
                                                setHoveredHotel(hotel.id);
                                                setActiveMapHotel(hotel.id);
                                            }}
                                            onMouseLeave={() => {
                                                setHoveredHotel(null);
                                                setActiveMapHotel(null);
                                            }}
                                        >
                                            {/* Price Marker */}
                                            <Link
                                                href={`/listing/${hotel.id}`}
                                                className={cx(
                                                    "relative flex items-center gap-1 rounded-full px-3 py-1.5 font-bold shadow-lg transition-all",
                                                    hoveredHotel === hotel.id || activeMapHotel === hotel.id
                                                        ? "bg-[#ff5a5f] text-white scale-110"
                                                        : "bg-white text-gray-900 hover:bg-[#ff5a5f] hover:text-white"
                                                )}
                                            >
                                                <span className="text-sm">${hotel.price}</span>
                                                {/* Marker Arrow */}
                                                <div className={cx(
                                                    "absolute -bottom-2 left-1/2 -translate-x-1/2 border-[6px] border-transparent transition-colors",
                                                    hoveredHotel === hotel.id || activeMapHotel === hotel.id
                                                        ? "border-t-[#ff5a5f]"
                                                        : "border-t-white"
                                                )} />
                                            </Link>

                                            {/* Hover Card */}
                                            {(hoveredHotel === hotel.id || activeMapHotel === hotel.id) && (
                                                <Link
                                                    href={`/listing/${hotel.id}`}
                                                    className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-xl bg-white p-3 shadow-2xl ring-1 ring-gray-100 transition-all hover:ring-[#ff5a5f]"
                                                >
                                                    <img
                                                        src={hotel.image}
                                                        alt={hotel.name}
                                                        className="h-28 w-full rounded-lg object-cover"
                                                    />
                                                    <div className="mt-3">
                                                        <div className="flex items-center gap-1">
                                                            <Star01 className="size-4 fill-[#ff5a5f] text-[#ff5a5f]" />
                                                            <span className="text-sm font-bold text-gray-900">{hotel.rating}</span>
                                                            <span className="text-xs text-gray-500">({hotel.reviews})</span>
                                                        </div>
                                                        <h4 className="mt-1 font-bold text-gray-900">{hotel.name}</h4>
                                                        <p className="text-xs text-gray-500">{hotel.location}</p>
                                                        <div className="mt-3 flex items-center justify-between">
                                                            <div>
                                                                <span className="text-lg font-bold text-[#ff5a5f]">${hotel.price}</span>
                                                                <span className="text-xs text-gray-500">/night</span>
                                                            </div>
                                                            <span className="flex items-center gap-1 rounded-full bg-[#ff5a5f] px-3 py-1.5 text-xs font-semibold text-white">
                                                                View <ArrowRight className="size-3" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                    ))}

                                    {/* Map Controls */}
                                    <div className="absolute right-4 top-4 flex flex-col gap-2">
                                        <button
                                            type="button"
                                            className="flex size-10 items-center justify-center rounded-xl bg-white shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
                                        >
                                            <ZoomIn className="size-5 text-gray-700" />
                                        </button>
                                        <button
                                            type="button"
                                            className="flex size-10 items-center justify-center rounded-xl bg-white shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
                                        >
                                            <ZoomOut className="size-5 text-gray-700" />
                                        </button>
                                        <button
                                            type="button"
                                            className="flex size-10 items-center justify-center rounded-xl bg-white shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
                                        >
                                            <Maximize01 className="size-5 text-gray-700" />
                                        </button>
                                    </div>

                                    {/* Map Legend */}
                                    <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f]/10">
                                                <Map01 className="size-5 text-[#ff5a5f]" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{sortedHotels.length} properties</p>
                                                <p className="text-xs text-gray-500">in this area</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Search This Area Button */}
                                    <div className="absolute left-1/2 top-4 -translate-x-1/2">
                                        <button
                                            type="button"
                                            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-lg transition-all hover:shadow-xl"
                                        >
                                            <SearchMd className="size-4" />
                                            Search this area
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Filters Modal */}
            {showMobileFilters && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                        onClick={() => setShowMobileFilters(false)}
                    />
                    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white shadow-xl lg:hidden">
                        {/* Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
                            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                            <button
                                type="button"
                                onClick={() => setShowMobileFilters(false)}
                                className="flex size-10 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-gray-100"
                            >
                                <XClose className="size-6" />
                            </button>
                        </div>

                        {/* Filter Content */}
                        <div className="p-6 pb-32 space-y-6">
                            {/* Price Range */}
                            <div>
                                <h3 className="mb-4 font-semibold text-gray-900">Price Range</h3>
                                <Slider
                                    minValue={50}
                                    maxValue={1000}
                                    defaultValue={priceRange}
                                    onChange={(value) => setPriceRange(value as number[])}
                                    formatOptions={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
                                    labelPosition="top-floating"
                                    labelFormatter={(value) => `$${value}`}
                                />
                                <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                                    <span>${priceRange[0]}</span>
                                    <span>${priceRange[1]}</span>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div>
                                <h3 className="mb-4 font-semibold text-gray-900">Star Rating</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[5, 4, 3, 2, 1].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => toggleStar(star)}
                                            className={cx(
                                                "flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                                                selectedStars.includes(star)
                                                    ? "bg-[#ff5a5f] text-white"
                                                    : "bg-gray-100 text-gray-700"
                                            )}
                                        >
                                            <Star01 className={cx("size-4", selectedStars.includes(star) && "fill-current")} />
                                            {star} Star
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Property Type */}
                            <div>
                                <h3 className="mb-4 font-semibold text-gray-900">Property Type</h3>
                                <div className="space-y-3">
                                    {propertyTypes.map((type) => (
                                        <Checkbox
                                            key={type}
                                            isSelected={selectedTypes.includes(type)}
                                            onChange={() => toggleType(type)}
                                            label={type}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Amenities */}
                            <div>
                                <h3 className="mb-4 font-semibold text-gray-900">Amenities</h3>
                                <div className="space-y-3">
                                    {amenitiesOptions.map((amenity) => (
                                        <Checkbox
                                            key={amenity.id}
                                            isSelected={selectedAmenities.includes(amenity.id)}
                                            onChange={() => toggleAmenity(amenity.id)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <amenity.icon className="size-4 text-gray-500" />
                                                <span className="text-gray-700">{amenity.label}</span>
                                            </div>
                                        </Checkbox>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="fixed bottom-0 left-0 right-0 flex gap-3 border-t border-gray-200 bg-white p-4">
                            <Button
                                onClick={clearAllFilters}
                                className="flex-1 border-2 border-gray-200 bg-white text-gray-700"
                            >
                                Clear All
                            </Button>
                            <Button
                                onClick={() => setShowMobileFilters(false)}
                                className="flex-1 bg-[#ff5a5f] hover:bg-[#e04850]"
                            >
                                Show {sortedHotels.length} Hotels
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
