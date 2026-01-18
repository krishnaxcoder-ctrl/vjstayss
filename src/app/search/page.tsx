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
    ChevronDown,
    Sliders01,
    XClose,
    Phone,
    User01,
    Map01,
    Users01,
    Zap,
    SearchLg,
    NavigationPointer01,
    Calendar,
    Minus,
    Plus,
} from "@untitledui/icons";
import { Toggle } from "@/components/base/toggle/toggle";
import { AuthModal } from "@/components/auth/auth-modal";
import { cx } from "@/utils/cx";

// Hotel data
const hotels = [
    {
        id: 1,
        name: "Golden Paradise Hotel Kalamboli New Panvel",
        location: "Kaulgaon Panvel Road, Mumbai",
        distance: "0.7 km",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        rating: 4.5,
        ratingLabel: "Excellent",
        reviews: 1305,
        price: 869,
        originalPrice: 6098,
        discount: 83,
        amenities: ["Reception", "Free Wifi", "Power backup"],
        type: "Premium",
        category: "super-collection",
        tags: [],
        coordinates: { lat: 19.033, lng: 73.029 },
    },
    {
        id: 2,
        name: "Townhouse OAK Hotel Devanshi Inn",
        location: "Nr. A.C.C. Cement, Plot No L/2, Road No.5, Kalamboli, Panvel",
        distance: "1.9 km",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
        rating: 4.6,
        ratingLabel: "Excellent",
        reviews: 455,
        price: 2042,
        originalPrice: 7454,
        discount: 69,
        amenities: ["Parking area", "Reception", "Public washroom"],
        type: "Townhouse",
        category: "townhouse",
        tags: ["24-hour-checkin"],
        coordinates: { lat: 19.041, lng: 73.095 },
    },
    {
        id: 3,
        name: "Hotel Panchratna",
        location: "MG Road Opposite SBI Bank Near Acharya Jagande Chowk Old Panvel, Mumbai",
        distance: "0.8 km",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        rating: 4.2,
        ratingLabel: "Very Good",
        reviews: 387,
        price: 1251,
        originalPrice: 5212,
        discount: 72,
        amenities: ["Daily housekeeping", "Free Wifi", "Power backup"],
        type: "Mid Range",
        category: "collection",
        tags: ["12-hour-stay"],
        coordinates: { lat: 19.028, lng: 73.112 },
    },
    {
        id: 4,
        name: "Home Exotic Studio Kalamboli",
        location: "Kalamboli, Mumbai",
        distance: "0.5 km",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        rating: 4.5,
        ratingLabel: "Excellent",
        reviews: 476,
        price: 1474,
        originalPrice: 5519,
        discount: 69,
        amenities: ["Private entrance", "Reception", "Free Wifi"],
        type: "Home",
        category: "home",
        tags: ["private-space"],
        coordinates: { lat: 19.045, lng: 73.088 },
    },
    {
        id: 5,
        name: "RR Suites Lodha Experia Mall Dombivali",
        location: "Dombivali East, Mumbai",
        distance: "11.3 km",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
        rating: 4.3,
        ratingLabel: "Very Good",
        reviews: 245,
        price: 935,
        originalPrice: 4403,
        discount: 75,
        amenities: ["Elevator", "Free Wifi", "Geyser"],
        type: "Budget",
        category: "super-collection",
        tags: ["8-rooms"],
        coordinates: { lat: 19.218, lng: 73.086 },
    },
    {
        id: 6,
        name: "Hotel Sanpada Railway Junction",
        location: "Vashi, Mumbai",
        distance: "11.8 km",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        rating: 4.5,
        ratingLabel: "Excellent",
        reviews: 407,
        price: 1581,
        originalPrice: 8129,
        discount: 77,
        amenities: ["CCTV cameras"],
        type: "Budget",
        category: "super-collection",
        tags: [],
        coordinates: { lat: 19.063, lng: 73.007 },
    },
    {
        id: 7,
        name: "Hotel Goodwill Lodging",
        location: "Kalachowki, Mumbai",
        distance: "3.5 km",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
        rating: 3.9,
        ratingLabel: "Good",
        reviews: 198,
        price: 961,
        originalPrice: 4001,
        discount: 75,
        amenities: ["Free Wifi", "Geyser", "Power backup"],
        type: "Budget",
        category: "budget",
        tags: ["4-more"],
        coordinates: { lat: 18.992, lng: 72.842 },
    },
    {
        id: 8,
        name: "Guru Heritage Hotel Kalamboli",
        location: "Near Gurupadkar Heritage, Kamthe, Mumbai",
        distance: "1.8 km",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        rating: 4.1,
        ratingLabel: "Very Good",
        reviews: 312,
        price: 1244,
        originalPrice: 4493,
        discount: 67,
        amenities: ["Reception", "Free Wifi", "Power backup"],
        type: "Mid Range",
        category: "collection",
        tags: ["9-more"],
        coordinates: { lat: 19.038, lng: 73.101 },
    },
    {
        id: 9,
        name: "Townhouse Oak Vashi",
        location: "Vashi, Mumbai",
        distance: "8.2 km",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        rating: 4.7,
        ratingLabel: "Excellent",
        reviews: 523,
        price: 1841,
        originalPrice: 6534,
        discount: 66,
        amenities: ["Top Rated", "Elevator", "Toiletries available"],
        type: "Townhouse",
        category: "townhouse",
        tags: ["17-more"],
        coordinates: { lat: 19.076, lng: 72.998 },
    },
    {
        id: 10,
        name: "Hotel Konar Inn",
        location: "Navi Mumbai, Mumbai",
        distance: "12.7 km",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        rating: 4.4,
        ratingLabel: "Excellent",
        reviews: 289,
        price: 1650,
        originalPrice: 5800,
        discount: 71,
        amenities: ["Reception", "Free Wifi", "Breakfast"],
        type: "Premium",
        category: "capital-o",
        tags: ["business-travelers"],
        coordinates: { lat: 19.033, lng: 73.029 },
    },
];

// Collections (filters)
const collections = [
    { id: "family", label: "Family Friendly" },
    { id: "friendly-neighborhood", label: "Your friendly neighbourhood stay" },
    { id: "group-travellers", label: "For Group Travellers" },
    { id: "local-id", label: "Local IDs accepted" },
    { id: "couples", label: "Couples Welcome" },
];

// Categories with descriptions
const categories = [
    {
        id: "oyo-rooms",
        name: "Budget Stays",
        description: "Super affordable stays with essential amenities",
    },
    {
        id: "townhouse",
        name: "Townhouse",
        description: "Your friendly, premium neighbourhood hotel",
    },
    {
        id: "flagship",
        name: "Flagship",
        description: "Affordable hotels at Prime locations",
    },
    {
        id: "home",
        name: "Home",
        description: "Villas and apartments with extra space and privacy",
    },
    {
        id: "capital-o",
        name: "Premium",
        description: "Premium hotels with spacious rooms for business travellers & families",
    },
];

const sortOptions = [
    { id: "popularity", label: "Popularity" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "rating", label: "Guest Rating" },
    { id: "distance", label: "Distance" },
];

function SearchPageContent() {
    const searchParams = useSearchParams();
    const searchLocation = searchParams.get("location") || "Mumbai";

    const [mapView, setMapView] = useState(false);
    const [sortBy, setSortBy] = useState("popularity");
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [priceRange, setPriceRange] = useState<number[]>([869, 3101]);
    const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [searchAsMove, setSearchAsMove] = useState(false);

    // Date & Room dropdown states
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [checkInDate, setCheckInDate] = useState("Sun, 18 Jan");
    const [checkOutDate, setCheckOutDate] = useState("Mon, 19 Jan");
    const [rooms, setRooms] = useState(1);
    const [guests, setGuests] = useState(1);

    const toggleCollection = (id: string) => {
        setSelectedCollections((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
    };

    const toggleCategory = (id: string) => {
        setSelectedCategories((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
    };

    const toggleWishlist = (id: number) => {
        setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]));
    };

    const clearAllFilters = () => {
        setPriceRange([869, 3101]);
        setSelectedCollections([]);
        setSelectedCategories([]);
    };

    const hasActiveFilters = selectedCollections.length > 0 || selectedCategories.length > 0 || priceRange[0] !== 869 || priceRange[1] !== 3101;

    // Filter hotels
    const filteredHotels = hotels.filter((hotel) => {
        const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(hotel.category);
        return matchesPrice && matchesCategory;
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
            case "distance":
                return parseFloat(a.distance) - parseFloat(b.distance);
            default:
                return 0;
        }
    });

    const FilterSidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={cx("space-y-5", isMobile && "pb-24")}>
            {/* Price Range */}
            <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-900">Price per night</h3>
                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <label className="text-xs text-gray-500">Min</label>
                        <div className="mt-1 flex items-center rounded-lg border border-gray-300 px-3 py-2">
                            <span className="text-sm text-gray-500">₹</span>
                            <input
                                type="number"
                                value={priceRange[0]}
                                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                className="w-full bg-transparent pl-1 text-sm text-gray-900 outline-none"
                                min={0}
                            />
                        </div>
                    </div>
                    <span className="mt-5 text-gray-400">–</span>
                    <div className="flex-1">
                        <label className="text-xs text-gray-500">Max</label>
                        <div className="mt-1 flex items-center rounded-lg border border-gray-300 px-3 py-2">
                            <span className="text-sm text-gray-500">₹</span>
                            <input
                                type="number"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                className="w-full bg-transparent pl-1 text-sm text-gray-900 outline-none"
                                min={0}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Collections */}
            <div className="border-t border-gray-200 pt-5">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">Collections</h3>
                <div className="space-y-3">
                    {collections.map((collection) => (
                        <label
                            key={collection.id}
                            className="flex cursor-pointer items-center gap-3"
                            onClick={() => toggleCollection(collection.id)}
                        >
                            <div
                                className={cx(
                                    "flex size-5 shrink-0 items-center justify-center rounded border-2 transition-all",
                                    selectedCollections.includes(collection.id)
                                        ? "border-[#ff5a5f] bg-[#ff5a5f]"
                                        : "border-gray-300 bg-white hover:border-gray-400"
                                )}
                            >
                                {selectedCollections.includes(collection.id) && (
                                    <CheckCircle className="size-3.5 text-white" />
                                )}
                            </div>
                            <span className="text-sm text-gray-700">{collection.label}</span>
                        </label>
                    ))}
                </div>
                <button type="button" className="mt-4 text-sm font-semibold text-[#ff5a5f] hover:text-[#e04850] hover:underline">
                    + View More
                </button>
            </div>

            {/* Categories */}
            <div className="border-t border-gray-200 pt-5">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">Categories</h3>
                <div className="space-y-3">
                    {categories.map((category) => (
                        <label
                            key={category.id}
                            className="flex cursor-pointer items-start gap-3"
                            onClick={() => toggleCategory(category.id)}
                        >
                            <div
                                className={cx(
                                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2 transition-all",
                                    selectedCategories.includes(category.id)
                                        ? "border-[#ff5a5f] bg-[#ff5a5f]"
                                        : "border-gray-300 bg-white hover:border-gray-400"
                                )}
                            >
                                {selectedCategories.includes(category.id) && (
                                    <CheckCircle className="size-3.5 text-white" />
                                )}
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">{category.name}</p>
                                <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{category.description}</p>
                            </div>
                        </label>
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

    // Rating badge color based on rating
    const getRatingColor = (rating: number) => {
        if (rating >= 4.5) return "bg-green-600";
        if (rating >= 4.0) return "bg-green-500";
        if (rating >= 3.5) return "bg-yellow-500";
        return "bg-orange-500";
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-16 max-w-8xl items-center gap-4 px-4 lg:gap-6 lg:px-6">
                    {/* Logo */}
                    <Link href="/" className="flex shrink-0 items-center">
                        <img src="/logolight.webp" alt="VJStays" className="h-10 w-auto lg:h-12" />
                    </Link>

                    {/* Inline Search Bar */}
                    <div className="hidden flex-1 lg:flex">
                        <div className="flex w-full items-center rounded-lg border border-gray-300 bg-white">
                            {/* Location */}
                            <div className="flex flex-1 items-center gap-2 border-r border-gray-300 px-4 py-2">
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    defaultValue={searchLocation !== "Mumbai" ? searchLocation : ""}
                                    className="w-full min-w-0 bg-transparent text-sm text-gray-900 placeholder-gray-500 outline-none"
                                />
                                <button type="button" className="flex shrink-0 items-center gap-1 rounded-full border border-gray-300 px-2.5 py-1 text-xs text-gray-600 hover:bg-gray-50">
                                    <NavigationPointer01 className="size-3" />
                                    Near me
                                </button>
                            </div>

                            {/* Date Range - Clickable Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowDateDropdown(!showDateDropdown);
                                        setShowRoomDropdown(false);
                                    }}
                                    className="flex items-center gap-2 border-r border-gray-300 px-4 py-2.5 hover:bg-gray-50"
                                >
                                    <Calendar className="size-4 text-gray-500" />
                                    <span className="whitespace-nowrap text-sm text-gray-700">
                                        {checkInDate} – {checkOutDate}
                                    </span>
                                    <ChevronDown className="size-4 text-gray-400" />
                                </button>

                                {showDateDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowDateDropdown(false)} />
                                        <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-lg bg-white p-4 shadow-xl ring-1 ring-gray-200">
                                            <p className="mb-3 text-sm font-semibold text-gray-900">Select Dates</p>
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="text-xs text-gray-500">Check-in</label>
                                                    <input
                                                        type="date"
                                                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#ff5a5f] focus:ring-1 focus:ring-[#ff5a5f]"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-xs text-gray-500">Check-out</label>
                                                    <input
                                                        type="date"
                                                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#ff5a5f] focus:ring-1 focus:ring-[#ff5a5f]"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setShowDateDropdown(false)}
                                                className="mt-4 w-full rounded-lg bg-[#ff5a5f] py-2 text-sm font-semibold text-white hover:bg-[#e04850]"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Room & Guests - Clickable Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowRoomDropdown(!showRoomDropdown);
                                        setShowDateDropdown(false);
                                    }}
                                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50"
                                >
                                    <span className="whitespace-nowrap text-sm text-gray-700">
                                        {rooms} Room, {guests} Guest
                                    </span>
                                    <ChevronDown className="size-4 text-gray-400" />
                                </button>

                                {showRoomDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowRoomDropdown(false)} />
                                        <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-lg bg-white p-4 shadow-xl ring-1 ring-gray-200">
                                            <p className="mb-3 text-sm font-semibold text-gray-900">Rooms & Guests</p>
                                            <div className="space-y-4">
                                                {/* Rooms */}
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-700">Rooms</span>
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            type="button"
                                                            onClick={() => setRooms(Math.max(1, rooms - 1))}
                                                            className="flex size-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                                                            disabled={rooms <= 1}
                                                        >
                                                            <Minus className="size-4" />
                                                        </button>
                                                        <span className="w-6 text-center text-sm font-medium">{rooms}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => setRooms(rooms + 1)}
                                                            className="flex size-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                                                        >
                                                            <Plus className="size-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* Guests */}
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-700">Guests</span>
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            type="button"
                                                            onClick={() => setGuests(Math.max(1, guests - 1))}
                                                            className="flex size-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                                                            disabled={guests <= 1}
                                                        >
                                                            <Minus className="size-4" />
                                                        </button>
                                                        <span className="w-6 text-center text-sm font-medium">{guests}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => setGuests(guests + 1)}
                                                            className="flex size-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                                                        >
                                                            <Plus className="size-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setShowRoomDropdown(false)}
                                                className="mt-4 w-full rounded-lg bg-[#ff5a5f] py-2 text-sm font-semibold text-white hover:bg-[#e04850]"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Search Button */}
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded-r-lg bg-[#1ab64f] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#159c42]"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="ml-auto flex shrink-0 items-center gap-3 lg:gap-4">
                        <a href="tel:01244261611" className="hidden items-center gap-2 text-sm text-gray-700 hover:text-gray-900 xl:flex">
                            <Phone className="size-4" />
                            <span>0124-6201611</span>
                        </a>
                        <div className="hidden h-5 w-px bg-gray-300 xl:block" />
                        <AuthModal>
                            <button type="button" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                                <User01 className="size-5" />
                                <span className="hidden lg:inline">Login / Signup</span>
                            </button>
                        </AuthModal>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="mx-auto max-w-8xl">
                <div className="flex">
                    {/* Desktop Filters Sidebar */}
                    <aside className="hidden w-72 shrink-0 border-r border-gray-200 bg-white p-5 lg:block xl:w-80">
                        <div className="sticky top-24">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-base font-semibold text-gray-900">Filters</h2>
                                {hasActiveFilters && (
                                    <button type="button" onClick={clearAllFilters} className="text-sm font-medium text-[#ff5a5f] hover:underline">
                                        Clear All
                                    </button>
                                )}
                            </div>
                            <FilterSidebar />
                        </div>
                    </aside>

                    {/* Results Section */}
                    <div className={cx("flex-1", mapView ? "lg:max-w-[480px]" : "")}>
                        {/* Results Header */}
                        <div className="sticky top-16 z-30 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:px-6">
                            <h1 className="text-base font-semibold text-gray-900">
                                {sortedHotels.length} Hotels in {searchLocation}
                            </h1>

                            <div className="flex items-center gap-4">
                                {/* Map View Toggle */}
                                <div className="hidden items-center gap-2 lg:flex">
                                    <span className="text-sm text-gray-600">Map View</span>
                                    <Toggle isSelected={mapView} onChange={setMapView} size="sm" />
                                </div>

                                {/* Sort Dropdown */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                                        className="flex items-center gap-1 text-sm text-gray-600"
                                    >
                                        <span>Sort By</span>
                                        <span className="font-medium text-gray-900">{sortOptions.find((o) => o.id === sortBy)?.label}</span>
                                        <ChevronDown className="size-4" />
                                    </button>

                                    {showSortDropdown && (
                                        <>
                                            <div className="fixed inset-0 z-40" onClick={() => setShowSortDropdown(false)} />
                                            <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg ring-1 ring-gray-200">
                                                {sortOptions.map((option) => (
                                                    <button
                                                        key={option.id}
                                                        type="button"
                                                        onClick={() => {
                                                            setSortBy(option.id);
                                                            setShowSortDropdown(false);
                                                        }}
                                                        className={cx(
                                                            "w-full px-4 py-2 text-left text-sm transition-colors",
                                                            sortBy === option.id ? "bg-[#ff5a5f]/10 font-medium text-[#ff5a5f]" : "text-gray-700 hover:bg-gray-50"
                                                        )}
                                                    >
                                                        {option.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Mobile Filter Button */}
                                <button
                                    type="button"
                                    onClick={() => setShowMobileFilters(true)}
                                    className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 lg:hidden"
                                >
                                    <Sliders01 className="size-4" />
                                    <span>Filters</span>
                                </button>
                            </div>
                        </div>

                        {/* Hotel Listings */}
                        <div className="divide-y divide-gray-200 bg-white">
                            {sortedHotels.map((hotel, index) => (
                                <div key={hotel.id}>
                                    {/* Promotional Banner (after 5th item) */}
                                    {index === 5 && (
                                        <div className="bg-[#1a1a2e] px-4 py-3 lg:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f]">
                                                        <Zap className="size-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-white">Login now to get upto 15% lower prices</p>
                                                        <p className="text-xs text-gray-400">Enjoy up to 15% extra discount on your bookings</p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="hidden rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 lg:block"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Hotel Card */}
                                    <Link href={`/listing/${hotel.id}`} className="flex gap-4 p-4 transition-colors hover:bg-gray-50 lg:px-6">
                                        {/* Image */}
                                        <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-lg lg:h-32 lg:w-44">
                                            <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />
                                            {/* Type Badge */}
                                            <div className="absolute left-2 top-2 rounded bg-gray-900/80 px-1.5 py-0.5 text-[10px] font-medium text-white">{hotel.type}</div>
                                            {/* Wishlist */}
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleWishlist(hotel.id);
                                                }}
                                                className={cx(
                                                    "absolute right-2 top-2 flex size-7 items-center justify-center rounded-full transition-all",
                                                    wishlist.includes(hotel.id) ? "bg-[#ff5a5f] text-white" : "bg-white/90 text-gray-600 hover:text-[#ff5a5f]"
                                                )}
                                            >
                                                <Heart className={cx("size-4", wishlist.includes(hotel.id) && "fill-current")} />
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="flex min-w-0 flex-1 flex-col">
                                            {/* Header */}
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="truncate text-sm font-semibold text-gray-900 lg:text-base">{hotel.name}</h3>
                                                    <div className="mt-0.5 flex items-center gap-1 text-xs text-gray-500">
                                                        <MarkerPin01 className="size-3 shrink-0" />
                                                        <span className="truncate">{hotel.location}</span>
                                                        <span className="shrink-0">· {hotel.distance}</span>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* Rating */}
                                            <div className="mt-2 flex items-center gap-2">
                                                <span className={cx("flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-bold text-white", getRatingColor(hotel.rating))}>
                                                    {hotel.rating}
                                                    <Star01 className="size-3 fill-current" />
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    ({hotel.reviews} Ratings) · {hotel.ratingLabel}
                                                </span>
                                            </div>

                                            {/* Amenities */}
                                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                                {hotel.amenities.map((amenity, i) => (
                                                    <span key={i} className="flex items-center gap-1 text-xs text-gray-600">
                                                        {amenity === "Free Wifi" && <Wifi className="size-3" />}
                                                        {amenity === "Reception" && <Users01 className="size-3" />}
                                                        {amenity === "Power backup" && <Zap className="size-3" />}
                                                        {amenity === "Parking area" && <CheckCircle className="size-3" />}
                                                        {amenity === "Breakfast" && <CheckCircle className="size-3" />}
                                                        {amenity}
                                                    </span>
                                                ))}
                                                {hotel.tags.some((t) => t.includes("more")) && (
                                                    <span className="text-xs text-gray-400">
                                                        + {hotel.tags.find((t) => t.includes("more"))?.split("-")[0]} more
                                                    </span>
                                                )}
                                            </div>

                                            {/* Price & Actions */}
                                            <div className="mt-auto flex items-end justify-between pt-2">
                                                <div>
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-lg font-bold text-gray-900">₹{hotel.price}</span>
                                                        <span className="text-sm text-gray-400 line-through">₹{hotel.originalPrice}</span>
                                                        <span className="text-sm font-medium text-orange-600">{hotel.discount}% off</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500">+ ₹{Math.round(hotel.price * 0.18)} taxes & fees · per room per night</p>
                                                </div>

                                                {/* Actions */}
                                                <div className="hidden shrink-0 gap-2 lg:flex">
                                                    <button
                                                        type="button"
                                                        onClick={(e) => e.preventDefault()}
                                                        className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={(e) => e.preventDefault()}
                                                        className="rounded-md bg-[#1ab64f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#159c42]"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Load More */}
                        {sortedHotels.length > 0 && (
                            <div className="border-t border-gray-200 bg-white px-4 py-6 text-center lg:px-6">
                                <button
                                    type="button"
                                    className="rounded-lg border border-[#ff5a5f] px-8 py-2.5 text-sm font-semibold text-[#ff5a5f] transition-colors hover:bg-[#ff5a5f]/5"
                                >
                                    Load More Hotels
                                </button>
                            </div>
                        )}

                        {/* Empty State */}
                        {sortedHotels.length === 0 && (
                            <div className="flex flex-col items-center justify-center bg-white py-16 text-center">
                                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-gray-100">
                                    <MarkerPin01 className="size-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">No Hotels found</h3>
                                <p className="mt-2 max-w-sm text-sm text-gray-500">Try adjusting your filters to find more options.</p>
                                <button
                                    type="button"
                                    onClick={clearAllFilters}
                                    className="mt-6 rounded-lg bg-[#ff5a5f] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e04850]"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Map Section (when map view is enabled) */}
                    {mapView && (
                        <div className="hidden flex-1 lg:block">
                            <div className="sticky top-16 h-[calc(100vh-64px)] bg-gray-200">
                                {/* Search as I move checkbox */}
                                <div className="absolute left-4 top-4 z-10">
                                    <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-md">
                                        <input
                                            type="checkbox"
                                            checked={searchAsMove}
                                            onChange={(e) => setSearchAsMove(e.target.checked)}
                                            className="size-4 rounded border-gray-300 text-[#ff5a5f] focus:ring-[#ff5a5f]"
                                        />
                                        <span className="text-sm text-gray-700">Search as I move map</span>
                                    </label>
                                </div>

                                {/* Map placeholder with markers */}
                                <div className="relative h-full w-full overflow-hidden">
                                    {/* Placeholder map background */}
                                    <div className="absolute inset-0 bg-[#e8e4df]">
                                        <img
                                            src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/73.05,19.04,11,0/800x800?access_token=pk.placeholder"
                                            alt="Map"
                                            className="h-full w-full object-cover opacity-50"
                                            onError={(e) => {
                                                e.currentTarget.style.display = "none";
                                            }}
                                        />
                                        {/* Fallback map styling */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <Map01 className="mx-auto size-16 text-gray-400" />
                                                <p className="mt-2 text-sm text-gray-500">Map View</p>
                                                <p className="text-xs text-gray-400">Integrate Google Maps or Mapbox here</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price markers (positioned randomly for demo) */}
                                    {sortedHotels.slice(0, 8).map((hotel, index) => (
                                        <div
                                            key={hotel.id}
                                            className="absolute cursor-pointer"
                                            style={{
                                                left: `${15 + (index % 4) * 20 + Math.random() * 10}%`,
                                                top: `${15 + Math.floor(index / 4) * 30 + Math.random() * 15}%`,
                                            }}
                                        >
                                            <div className="group relative">
                                                <div className="rounded-full bg-white px-2 py-1 text-xs font-bold text-gray-900 shadow-lg ring-1 ring-gray-200 transition-all hover:bg-[#ff5a5f] hover:text-white hover:ring-[#ff5a5f]">
                                                    ₹{hotel.price}
                                                </div>
                                                {/* Tooltip on hover */}
                                                <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs text-white group-hover:block">
                                                    {hotel.name.slice(0, 30)}...
                                                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Map Controls */}
                                    <div className="absolute bottom-4 right-4 flex flex-col gap-1">
                                        <button type="button" className="flex size-10 items-center justify-center rounded-lg bg-white text-gray-700 shadow-lg hover:bg-gray-50">
                                            +
                                        </button>
                                        <button type="button" className="flex size-10 items-center justify-center rounded-lg bg-white text-gray-700 shadow-lg hover:bg-gray-50">
                                            −
                                        </button>
                                    </div>

                                    {/* Google attribution placeholder */}
                                    <div className="absolute bottom-4 left-4 text-xs text-gray-500">Map data © Google</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Filters Modal */}
            {showMobileFilters && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setShowMobileFilters(false)} />
                    <div className="fixed inset-y-0 left-0 z-50 w-full max-w-sm overflow-y-auto bg-white shadow-xl lg:hidden">
                        {/* Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4">
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
                        <div className="p-4">
                            <FilterSidebar isMobile />
                        </div>

                        {/* Footer */}
                        <div className="fixed bottom-0 left-0 right-0 flex gap-3 border-t border-gray-200 bg-white p-4">
                            <button
                                type="button"
                                onClick={clearAllFilters}
                                className="flex-1 rounded-lg border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Clear All
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowMobileFilters(false)}
                                className="flex-1 rounded-lg bg-[#ff5a5f] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e04850]"
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
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <div className="mx-auto size-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#ff5a5f]" />
                        <p className="mt-4 text-gray-600">Loading search results...</p>
                    </div>
                </div>
            }
        >
            <SearchPageContent />
        </Suspense>
    );
}
