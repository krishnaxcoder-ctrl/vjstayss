"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
    ArrowLeft,
    ChevronRight,
    Gift01,
    Building07,
    Snowflake01,
    Tv01,
    BarChart01,
    SwitchVertical01,
    List,
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
    { id: "popularity", label: "Popularity", icon: BarChart01 },
    { id: "rating", label: "Guest Ratings", icon: Star01 },
    { id: "price-low", label: "Price Low to High", icon: SwitchVertical01 },
    { id: "price-high", label: "Price High to Low", icon: SwitchVertical01 },
    { id: "distance", label: "Show Closest OYO", icon: NavigationPointer01 },
];

// Hotel facilities for mobile filter
const hotelFacilities = [
    { id: "refrigerator", label: "Refrigerator", icon: Snowflake01 },
    { id: "king-bed", label: "King Sized Bed", icon: Building07 },
    { id: "mini-fridge", label: "Mini Fridge", icon: Snowflake01 },
    { id: "hair-dryer", label: "Hair Dryer", icon: Zap },
    { id: "dth", label: "DTH", icon: Tv01 },
];

function SearchPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchLocation = searchParams.get("location") || "OYOsnearme";

    const [mapView, setMapView] = useState(false);
    const [mobileMapView, setMobileMapView] = useState(false);
    const [sortBy, setSortBy] = useState("popularity");
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showMobileSortSheet, setShowMobileSortSheet] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [priceRange, setPriceRange] = useState<number[]>([903, 3101]);
    const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [searchAsMove, setSearchAsMove] = useState(false);
    const [payAtHotel, setPayAtHotel] = useState(false);
    const [memberOnly, setMemberOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState(searchLocation);
    const [selectedMapHotel, setSelectedMapHotel] = useState<typeof hotels[0] | null>(null);

    // Date & Room dropdown states
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [showMobileDatePicker, setShowMobileDatePicker] = useState(false);
    const [selectedCheckIn, setSelectedCheckIn] = useState<Date>(new Date(2026, 0, 18)); // Jan 18, 2026
    const [selectedCheckOut, setSelectedCheckOut] = useState<Date>(new Date(2026, 0, 19)); // Jan 19, 2026
    const [selectingCheckOut, setSelectingCheckOut] = useState(false);
    const [checkInTime, setCheckInTime] = useState("12:00 PM");
    const [checkOutTime, setCheckOutTime] = useState("11:00 AM");
    const [rooms, setRooms] = useState(1);
    const [guests, setGuests] = useState(1);

    // Format date for display
    const formatDate = (date: Date) => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
    };

    const checkInDate = formatDate(selectedCheckIn);
    const checkOutDate = formatDate(selectedCheckOut);

    // Calculate nights between dates
    const nightsBetween = Math.ceil((selectedCheckOut.getTime() - selectedCheckIn.getTime()) / (1000 * 60 * 60 * 24));

    // Generate calendar data for a month
    const generateCalendarDays = (year: number, month: number) => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday = 0

        const days: (number | null)[] = [];

        // Add empty slots for days before the 1st
        for (let i = 0; i < startingDay; i++) {
            days.push(null);
        }

        // Add days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return days;
    };

    // Handle date selection
    const handleDateSelect = (year: number, month: number, day: number) => {
        const selectedDate = new Date(year, month, day, 0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) return; // Don't allow past dates

        if (!selectingCheckOut) {
            // Selecting check-in date
            setSelectedCheckIn(selectedDate);
            // Auto-set checkout to next day
            const nextDay = new Date(year, month, day + 1, 0, 0, 0, 0);
            setSelectedCheckOut(nextDay);
            setSelectingCheckOut(true);
        } else {
            // Selecting check-out date
            if (selectedDate > selectedCheckIn) {
                setSelectedCheckOut(selectedDate);
                setSelectingCheckOut(false);
            } else {
                // If selected date is before or same as check-in, make it the new check-in
                setSelectedCheckIn(selectedDate);
                const nextDay = new Date(year, month, day + 1, 0, 0, 0, 0);
                setSelectedCheckOut(nextDay);
            }
        }
    };

    // Helper to compare dates (ignoring time)
    const isSameDay = (date1: Date, date2: Date) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    // Check if a date is selected
    const isDateSelected = (year: number, month: number, day: number) => {
        const date = new Date(year, month, day);
        return isSameDay(date, selectedCheckIn) || isSameDay(date, selectedCheckOut);
    };

    const isCheckInDate = (year: number, month: number, day: number) => {
        const date = new Date(year, month, day);
        return isSameDay(date, selectedCheckIn);
    };

    const isCheckOutDate = (year: number, month: number, day: number) => {
        const date = new Date(year, month, day);
        return isSameDay(date, selectedCheckOut);
    };

    const isDateInRange = (year: number, month: number, day: number) => {
        const date = new Date(year, month, day, 0, 0, 0, 0);
        const checkIn = new Date(selectedCheckIn.getFullYear(), selectedCheckIn.getMonth(), selectedCheckIn.getDate());
        const checkOut = new Date(selectedCheckOut.getFullYear(), selectedCheckOut.getMonth(), selectedCheckOut.getDate());
        return date > checkIn && date < checkOut;
    };

    const isPastDate = (year: number, month: number, day: number) => {
        const date = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const toggleCollection = (id: string) => {
        setSelectedCollections((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
    };

    const toggleCategory = (id: string) => {
        setSelectedCategories((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
    };

    const toggleFacility = (id: string) => {
        setSelectedFacilities((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
    };

    const toggleWishlist = (id: number) => {
        setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]));
    };

    const clearAllFilters = () => {
        setPriceRange([903, 3101]);
        setSelectedCollections([]);
        setSelectedCategories([]);
        setSelectedFacilities([]);
        setPayAtHotel(false);
        setMemberOnly(false);
    };

    const hasActiveFilters = selectedCollections.length > 0 || selectedCategories.length > 0 || selectedFacilities.length > 0 || priceRange[0] !== 903 || priceRange[1] !== 3101 || payAtHotel || memberOnly;

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
        <div className="min-h-screen bg-gray-50 pb-16 lg:pb-0">
            {/* Mobile Header */}
            <header className="sticky top-0 z-40 bg-white lg:hidden">
                {/* Mobile Search Bar */}
                <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="flex shrink-0 items-center justify-center text-gray-700"
                    >
                        <ArrowLeft className="size-5" />
                    </button>
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search location..."
                            className="w-full bg-transparent text-base text-gray-900 placeholder-gray-500 outline-none"
                        />
                    </div>
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="flex shrink-0 items-center justify-center text-gray-400"
                        >
                            <XClose className="size-5" />
                        </button>
                    )}
                </div>

                {/* Mobile Date/Room Selector Row */}
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1 border-b border-gray-200 bg-white px-3 py-3">
                    {/* Check-in */}
                    <button
                        type="button"
                        onClick={() => {
                            setSelectingCheckOut(false);
                            setShowMobileDatePicker(true);
                        }}
                        className="flex flex-col items-center rounded-lg px-2 py-2 active:bg-gray-50"
                    >
                        <span className="text-sm font-semibold text-[#ff5a5f]">{checkInDate}</span>
                        <span className="text-[11px] text-gray-500">{checkInTime}</span>
                    </button>

                    {/* Night Badge */}
                    <div className="flex size-7 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-xs font-medium text-gray-600">
                        {nightsBetween}N
                    </div>

                    {/* Check-out */}
                    <button
                        type="button"
                        onClick={() => {
                            setSelectingCheckOut(true);
                            setShowMobileDatePicker(true);
                        }}
                        className="flex flex-col items-center rounded-lg px-2 py-2 active:bg-gray-50"
                    >
                        <span className="text-sm font-semibold text-gray-900">{checkOutDate}</span>
                        <span className="text-[11px] text-gray-500">{checkOutTime}</span>
                    </button>

                    {/* Divider */}
                    <div className="h-8 w-px bg-gray-200" />

                    {/* Room & Guests */}
                    <button type="button" className="flex flex-col items-center rounded-lg px-2 py-2 active:bg-gray-50">
                        <span className="text-sm font-semibold text-gray-900">{rooms} Room</span>
                        <span className="text-[11px] text-gray-500">{guests} Guest</span>
                    </button>
                </div>
            </header>

            {/* Desktop Header */}
            <header className="sticky top-0 z-40 hidden border-b border-gray-200 bg-white lg:block">
                <div className="mx-auto flex h-16 max-w-8xl items-center gap-4 px-4 lg:gap-6 lg:px-6">
                    {/* Logo */}
                    <Link href="/" className="flex shrink-0 items-center">
                        <img src="/logolight.webp" alt="VJStays" className="h-10 w-auto lg:h-12" />
                    </Link>

                    {/* Inline Search Bar */}
                    <div className="flex flex-1">
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
                    <div className={cx("flex-1", mapView ? "lg:max-w-[480px]" : "", mobileMapView ? "hidden lg:block" : "")}>
                        {/* Mobile Promotional Banner */}
                        <div className="flex items-center gap-3 border-b border-green-200 bg-green-50 px-4 py-3 lg:hidden">
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-green-100">
                                <Gift01 className="size-5 text-green-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm text-green-800">
                                    <span className="font-semibold">upto 80% off.</span> Get upto 80% off using code{" "}
                                    <span className="font-bold">WELCOME80</span>
                                </p>
                            </div>
                        </div>

                        {/* Mobile Results Count */}
                        <div className="flex items-center justify-between bg-white px-4 py-3 lg:hidden">
                            <h1 className="text-lg font-bold text-gray-900">{sortedHotels.length} OYOs found</h1>
                            <span className="text-xs text-gray-500">Price per room per night</span>
                        </div>

                        {/* Desktop Results Header */}
                        <div className="sticky top-16 z-30 hidden items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:flex lg:px-6">
                            <h1 className="text-base font-semibold text-gray-900">
                                {sortedHotels.length} Hotels in {searchLocation}
                            </h1>

                            <div className="flex items-center gap-4">
                                {/* Map View Toggle */}
                                <div className="flex items-center gap-2">
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

                                    {/* Hotel Card - Mobile */}
                                    <Link href={`/listing/${hotel.id}`} className="block p-4 transition-colors hover:bg-gray-50 lg:hidden">
                                        {/* Mobile: Two images side by side */}
                                        <div className="flex gap-2">
                                            <div className="relative h-28 flex-1 overflow-hidden rounded-lg">
                                                <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />
                                                {/* Type Badge */}
                                                <div className="absolute left-2 top-2 flex items-center gap-1 rounded bg-gray-900/80 px-2 py-1">
                                                    <Building07 className="size-3 text-white" />
                                                    <span className="text-[10px] font-medium text-white">
                                                        {hotel.category === "super-collection" ? "Company-Serviced" : hotel.category === "townhouse" ? "Super OYO" : hotel.type}
                                                    </span>
                                                </div>
                                                {/* Rating badge on image */}
                                                <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-sm">
                                                    <Star01 className="size-3 fill-gray-900 text-gray-900" />
                                                    <span className="text-xs font-bold text-gray-900">{hotel.rating}</span>
                                                    <span className="text-xs text-gray-500">({hotel.reviews})</span>
                                                </div>
                                            </div>
                                            <div className="relative h-28 flex-1 overflow-hidden rounded-lg">
                                                <img
                                                    src={hotel.image.replace("q=80", "q=70")}
                                                    alt={hotel.name}
                                                    className="h-full w-full object-cover"
                                                />
                                                {/* Wishlist button */}
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleWishlist(hotel.id);
                                                    }}
                                                    className={cx(
                                                        "absolute right-2 top-2 flex size-8 items-center justify-center rounded-full transition-all",
                                                        wishlist.includes(hotel.id) ? "bg-[#ff5a5f] text-white" : "bg-white text-gray-500"
                                                    )}
                                                >
                                                    <Heart className={cx("size-4", wishlist.includes(hotel.id) && "fill-current")} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Mobile content below images */}
                                        <div className="mt-3">
                                            <h3 className="truncate text-base font-semibold text-gray-900">{hotel.name}</h3>
                                            <p className="mt-0.5 text-xs text-gray-500">
                                                {hotel.distance} · {hotel.location}
                                            </p>
                                            {/* Booking popularity */}
                                            <p className="mt-1.5 flex items-center gap-1 text-xs text-green-600">
                                                <Zap className="size-3" />
                                                <span>{Math.floor(Math.random() * 20) + 5} people booked this hotel today</span>
                                            </p>
                                            {/* Price */}
                                            <div className="mt-2">
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-xl font-bold text-gray-900">₹{hotel.price}</span>
                                                    <span className="text-sm text-gray-400 line-through">₹{hotel.originalPrice}</span>
                                                    <span className="text-sm font-medium text-orange-500">{hotel.discount}% off</span>
                                                </div>
                                                <p className="text-xs text-gray-500">+ ₹{Math.round(hotel.price * 0.18)} taxes & fees</p>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Hotel Card - Desktop */}
                                    <Link href={`/listing/${hotel.id}`} className="hidden gap-4 p-4 transition-colors hover:bg-gray-50 lg:flex lg:px-6">
                                        {/* Image */}
                                        <div className="relative h-32 w-44 shrink-0 overflow-hidden rounded-lg">
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
                                                    <h3 className="truncate text-base font-semibold text-gray-900">{hotel.name}</h3>
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
                                                <div className="flex shrink-0 gap-2">
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

            {/* Mobile Fixed Bottom Bar */}
            {!mobileMapView && (
                <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-gray-200 bg-[#1a1a2e] lg:hidden">
                    <button
                        type="button"
                        onClick={() => setShowMobileFilters(true)}
                        className="flex flex-1 flex-col items-center gap-1 py-3 text-white"
                    >
                        <Sliders01 className="size-5" />
                        <span className="text-xs font-medium">Filter</span>
                    </button>
                    <div className="h-8 w-px bg-gray-700" />
                    <button
                        type="button"
                        onClick={() => setShowMobileSortSheet(true)}
                        className="flex flex-1 flex-col items-center gap-1 py-3 text-white"
                    >
                        <SwitchVertical01 className="size-5" />
                        <span className="text-xs font-medium">Sort</span>
                    </button>
                    <div className="h-8 w-px bg-gray-700" />
                    <button
                        type="button"
                        onClick={() => setMobileMapView(true)}
                        className="flex flex-1 flex-col items-center gap-1 py-3 text-white"
                    >
                        <Map01 className="size-5" />
                        <span className="text-xs font-medium">Map</span>
                    </button>
                </div>
            )}

            {/* Mobile Map View */}
            {mobileMapView && (
                <div className="fixed inset-0 z-40 bg-white lg:hidden">
                    {/* Mobile Map Header */}
                    <div className="absolute left-0 right-0 top-0 z-10 flex items-center gap-3 bg-white px-4 py-3 shadow-sm">
                        <button
                            type="button"
                            onClick={() => setMobileMapView(false)}
                            className="flex shrink-0 items-center justify-center text-gray-700"
                        >
                            <ArrowLeft className="size-5" />
                        </button>
                        <div className="relative flex-1">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search location..."
                                className="w-full bg-transparent text-base text-gray-900 placeholder-gray-500 outline-none"
                            />
                        </div>
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery("")}
                                className="flex shrink-0 items-center justify-center text-gray-400"
                            >
                                <XClose className="size-5" />
                            </button>
                        )}
                    </div>

                    {/* Map Area */}
                    <div className="h-full w-full bg-[#e8e4df] pt-14">
                        {/* Placeholder map background */}
                        <div className="relative h-full w-full">
                            <img
                                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/73.05,19.04,11,0/800x800?access_token=pk.placeholder"
                                alt="Map"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                            />
                            {/* Fallback map styling */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                <Map01 className="size-16 text-gray-400" />
                            </div>

                            {/* Price markers */}
                            {sortedHotels.slice(0, 8).map((hotel, index) => (
                                <button
                                    key={hotel.id}
                                    type="button"
                                    onClick={() => setSelectedMapHotel(hotel)}
                                    className="absolute"
                                    style={{
                                        left: `${15 + (index % 4) * 18}%`,
                                        top: `${20 + Math.floor(index / 4) * 25}%`,
                                    }}
                                >
                                    <div
                                        className={cx(
                                            "rounded-lg px-2 py-1 text-xs font-bold shadow-lg",
                                            selectedMapHotel?.id === hotel.id
                                                ? "bg-[#ff5a5f] text-white"
                                                : "bg-gray-800 text-white"
                                        )}
                                    >
                                        ₹ {hotel.price}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Hotel Card */}
                    {selectedMapHotel && (
                        <div className="absolute bottom-16 left-4 right-4 rounded-xl bg-white p-3 shadow-xl">
                            <Link href={`/listing/${selectedMapHotel.id}`} className="flex gap-3">
                                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                                    <img src={selectedMapHotel.image} alt={selectedMapHotel.name} className="h-full w-full object-cover" />
                                    <div className="absolute bottom-1 left-1 flex items-center gap-0.5 rounded bg-white px-1 py-0.5">
                                        <Star01 className="size-2.5 fill-gray-900 text-gray-900" />
                                        <span className="text-[10px] font-bold">{selectedMapHotel.rating}</span>
                                        <span className="text-[10px] text-gray-500">({selectedMapHotel.reviews})</span>
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="truncate text-sm font-semibold text-gray-900">{selectedMapHotel.name}</h3>
                                    <p className="text-xs text-gray-500">{selectedMapHotel.location}</p>
                                    <div className="mt-1 flex items-baseline gap-2">
                                        <span className="text-base font-bold text-gray-900">₹{selectedMapHotel.price}</span>
                                        <span className="text-xs text-gray-400 line-through">₹{selectedMapHotel.originalPrice}</span>
                                        <span className="text-xs font-medium text-orange-500">{selectedMapHotel.discount}% off</span>
                                    </div>
                                    <p className="text-[10px] text-gray-500">+ ₹{Math.round(selectedMapHotel.price * 0.18)} taxes & fees</p>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Mobile Map Bottom Bar */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-around border-t border-gray-200 bg-[#1a1a2e]">
                        <button
                            type="button"
                            onClick={() => setShowMobileFilters(true)}
                            className="flex flex-1 flex-col items-center gap-1 py-3 text-white"
                        >
                            <Sliders01 className="size-5" />
                            <span className="text-xs font-medium">Filter</span>
                        </button>
                        <div className="h-8 w-px bg-gray-700" />
                        <button
                            type="button"
                            onClick={() => {
                                setMobileMapView(false);
                                setSelectedMapHotel(null);
                            }}
                            className="flex flex-1 flex-col items-center gap-1 py-3 text-white"
                        >
                            <List className="size-5" />
                            <span className="text-xs font-medium">List</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Mobile Sort Bottom Sheet */}
            {showMobileSortSheet && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setShowMobileSortSheet(false)} />
                    <div className="fixed inset-x-0 bottom-0 z-50 rounded-t-2xl bg-white pb-8 lg:hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
                            <h2 className="text-lg font-semibold text-gray-900">Sort by</h2>
                            <button
                                type="button"
                                onClick={() => setShowMobileSortSheet(false)}
                                className="flex size-8 items-center justify-center text-gray-500"
                            >
                                <XClose className="size-5" />
                            </button>
                        </div>

                        {/* Sort Options */}
                        <div className="px-4 py-2">
                            {sortOptions.map((option) => {
                                const Icon = option.icon;
                                return (
                                    <button
                                        key={option.id}
                                        type="button"
                                        onClick={() => {
                                            setSortBy(option.id);
                                            setShowMobileSortSheet(false);
                                        }}
                                        className="flex w-full items-center gap-4 py-4"
                                    >
                                        <Icon className={cx("size-5", sortBy === option.id ? "text-[#ff5a5f]" : "text-gray-400")} />
                                        <span className={cx("flex-1 text-left text-sm", sortBy === option.id ? "font-semibold text-[#ff5a5f]" : "text-gray-700")}>
                                            {option.label}
                                        </span>
                                        <div
                                            className={cx(
                                                "flex size-5 items-center justify-center rounded-full border-2",
                                                sortBy === option.id ? "border-[#ff5a5f] bg-[#ff5a5f]" : "border-gray-300"
                                            )}
                                        >
                                            {sortBy === option.id && <div className="size-2 rounded-full bg-white" />}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}

            {/* Mobile Filters Modal */}
            {showMobileFilters && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setShowMobileFilters(false)} />
                    <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowMobileFilters(false)}
                                    className="flex items-center justify-center text-gray-700"
                                >
                                    <XClose className="size-5" />
                                </button>
                                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                            </div>
                            <button
                                type="button"
                                onClick={clearAllFilters}
                                className="text-sm font-medium text-[#ff5a5f]"
                            >
                                Clear all
                            </button>
                        </div>

                        {/* Filters Content */}
                        <div className="flex-1 overflow-y-auto px-4 py-4">
                            {/* Pay at Hotel */}
                            <div className="flex items-center justify-between py-3">
                                <span className="text-sm font-semibold text-gray-900">Pay at Hotel</span>
                                <button
                                    type="button"
                                    onClick={() => setPayAtHotel(!payAtHotel)}
                                    className={cx(
                                        "flex size-5 items-center justify-center rounded border-2",
                                        payAtHotel ? "border-[#ff5a5f] bg-[#ff5a5f]" : "border-gray-300"
                                    )}
                                >
                                    {payAtHotel && <CheckCircle className="size-3 text-white" />}
                                </button>
                            </div>

                            {/* Show Only Member OYOs */}
                            <div className="flex items-center justify-between border-b border-gray-100 py-3">
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Show Only Wizard Member OYOs</p>
                                    <p className="text-xs text-gray-500">Get 5% off on member hotels</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setMemberOnly(!memberOnly)}
                                    className={cx(
                                        "flex size-5 items-center justify-center rounded border-2",
                                        memberOnly ? "border-[#ff5a5f] bg-[#ff5a5f]" : "border-gray-300"
                                    )}
                                >
                                    {memberOnly && <CheckCircle className="size-3 text-white" />}
                                </button>
                            </div>

                            {/* Price Range */}
                            <div className="py-5">
                                <h3 className="text-sm font-semibold text-gray-900">Price</h3>
                                <p className="text-xs text-gray-500">Excluding taxes & fee</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="rounded-full bg-[#ff5a5f] px-3 py-1 text-xs font-medium text-white">
                                        ₹ {priceRange[0]}
                                    </span>
                                    <span className="rounded-full bg-[#ff5a5f] px-3 py-1 text-xs font-medium text-white">
                                        ₹ {priceRange[1]}
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <input
                                        type="range"
                                        min={500}
                                        max={5000}
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                        className="w-full accent-[#ff5a5f]"
                                    />
                                </div>
                            </div>

                            {/* Hotel Facilities */}
                            <div className="border-t border-gray-100 py-5">
                                <h3 className="mb-4 text-sm font-semibold text-gray-900">Hotel Facilities</h3>
                                <div className="space-y-1">
                                    {hotelFacilities.map((facility) => {
                                        const Icon = facility.icon;
                                        return (
                                            <button
                                                key={facility.id}
                                                type="button"
                                                onClick={() => toggleFacility(facility.id)}
                                                className="flex w-full items-center justify-between py-3"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon className="size-5 text-gray-400" />
                                                    <span className="text-sm text-gray-700">{facility.label}</span>
                                                </div>
                                                <div
                                                    className={cx(
                                                        "flex size-5 items-center justify-center rounded border-2",
                                                        selectedFacilities.includes(facility.id) ? "border-[#ff5a5f] bg-[#ff5a5f]" : "border-gray-300"
                                                    )}
                                                >
                                                    {selectedFacilities.includes(facility.id) && <CheckCircle className="size-3 text-white" />}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Collections */}
                            <div className="border-t border-gray-100 py-5">
                                <h3 className="mb-4 text-sm font-semibold text-gray-900">Collections</h3>
                                <div className="space-y-1">
                                    {collections.map((collection) => (
                                        <button
                                            key={collection.id}
                                            type="button"
                                            onClick={() => toggleCollection(collection.id)}
                                            className="flex w-full items-center justify-between py-3"
                                        >
                                            <span className="text-sm text-gray-700">{collection.label}</span>
                                            <div
                                                className={cx(
                                                    "flex size-5 items-center justify-center rounded border-2",
                                                    selectedCollections.includes(collection.id) ? "border-[#ff5a5f] bg-[#ff5a5f]" : "border-gray-300"
                                                )}
                                            >
                                                {selectedCollections.includes(collection.id) && <CheckCircle className="size-3 text-white" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Apply Button */}
                        <div className="border-t border-gray-200 p-4">
                            <button
                                type="button"
                                onClick={() => setShowMobileFilters(false)}
                                className="w-full rounded-lg bg-[#ff5a5f] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e04850]"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Mobile Date Picker Modal */}
            {showMobileDatePicker && (
                <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
                    {/* Header */}
                    <div className="flex items-center border-b border-gray-100 px-4 py-4">
                        <button
                            type="button"
                            onClick={() => setShowMobileDatePicker(false)}
                            className="flex items-center justify-center text-gray-700"
                        >
                            <XClose className="size-5" />
                        </button>
                    </div>

                    {/* Check-in / Check-out Header */}
                    <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
                        <button
                            type="button"
                            onClick={() => setSelectingCheckOut(false)}
                            className="flex flex-col items-start"
                        >
                            <span className={cx("text-xs", !selectingCheckOut ? "text-[#ff5a5f]" : "text-gray-500")}>Check-in</span>
                            <span className={cx("text-base font-semibold", !selectingCheckOut ? "text-gray-900" : "text-gray-700")}>
                                {checkInDate}
                            </span>
                        </button>

                        <div className="rounded border border-gray-300 px-3 py-1">
                            <span className="text-xs font-medium text-gray-700">{nightsBetween} NIGHT</span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectingCheckOut(true)}
                            className="flex flex-col items-end"
                        >
                            <span className={cx("text-xs", selectingCheckOut ? "text-[#ff5a5f]" : "text-gray-500")}>Check-out</span>
                            <span className={cx("text-base font-semibold", selectingCheckOut ? "text-gray-900" : "text-gray-700")}>
                                {checkOutDate}
                            </span>
                        </button>
                    </div>

                    {/* Calendar */}
                    <div className="flex-1 overflow-y-auto px-4 py-4">
                        {/* January 2026 */}
                        <div className="mb-8">
                            <h3 className="mb-4 text-center text-base font-semibold text-gray-900">January 2026</h3>
                            {/* Days header */}
                            <div className="mb-2 grid grid-cols-7 gap-1">
                                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                    <div key={day} className="py-2 text-center text-xs font-medium text-gray-500">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            {/* Days grid */}
                            <div className="grid grid-cols-7 gap-1">
                                {generateCalendarDays(2026, 0).map((day, index) => (
                                    <div key={index} className="flex aspect-square items-center justify-center">
                                        {day !== null && (
                                            <button
                                                type="button"
                                                onClick={() => handleDateSelect(2026, 0, day)}
                                                disabled={isPastDate(2026, 0, day)}
                                                className={cx(
                                                    "flex size-10 items-center justify-center rounded-full text-sm transition-colors",
                                                    isPastDate(2026, 0, day) && "text-gray-300",
                                                    isCheckInDate(2026, 0, day) && "bg-[#ff5a5f]/20 text-[#ff5a5f] font-semibold",
                                                    isCheckOutDate(2026, 0, day) && "bg-[#ff5a5f] text-white font-semibold",
                                                    isDateInRange(2026, 0, day) && "bg-[#ff5a5f]/10",
                                                    !isPastDate(2026, 0, day) && !isDateSelected(2026, 0, day) && "text-gray-700 hover:bg-gray-100"
                                                )}
                                            >
                                                {day}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* February 2026 */}
                        <div className="mb-8">
                            <h3 className="mb-4 text-center text-base font-semibold text-gray-900">February 2026</h3>
                            {/* Days header */}
                            <div className="mb-2 grid grid-cols-7 gap-1">
                                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                    <div key={day} className="py-2 text-center text-xs font-medium text-gray-500">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            {/* Days grid */}
                            <div className="grid grid-cols-7 gap-1">
                                {generateCalendarDays(2026, 1).map((day, index) => (
                                    <div key={index} className="flex aspect-square items-center justify-center">
                                        {day !== null && (
                                            <button
                                                type="button"
                                                onClick={() => handleDateSelect(2026, 1, day)}
                                                disabled={isPastDate(2026, 1, day)}
                                                className={cx(
                                                    "flex size-10 items-center justify-center rounded-full text-sm transition-colors",
                                                    isPastDate(2026, 1, day) && "text-gray-300",
                                                    isCheckInDate(2026, 1, day) && "bg-[#ff5a5f]/20 text-[#ff5a5f] font-semibold",
                                                    isCheckOutDate(2026, 1, day) && "bg-[#ff5a5f] text-white font-semibold",
                                                    isDateInRange(2026, 1, day) && "bg-[#ff5a5f]/10",
                                                    !isPastDate(2026, 1, day) && !isDateSelected(2026, 1, day) && "text-gray-700 hover:bg-gray-100"
                                                )}
                                            >
                                                {day}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* March 2026 */}
                        <div className="mb-8">
                            <h3 className="mb-4 text-center text-base font-semibold text-gray-900">March 2026</h3>
                            {/* Days header */}
                            <div className="mb-2 grid grid-cols-7 gap-1">
                                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                    <div key={day} className="py-2 text-center text-xs font-medium text-gray-500">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            {/* Days grid */}
                            <div className="grid grid-cols-7 gap-1">
                                {generateCalendarDays(2026, 2).map((day, index) => (
                                    <div key={index} className="flex aspect-square items-center justify-center">
                                        {day !== null && (
                                            <button
                                                type="button"
                                                onClick={() => handleDateSelect(2026, 2, day)}
                                                disabled={isPastDate(2026, 2, day)}
                                                className={cx(
                                                    "flex size-10 items-center justify-center rounded-full text-sm transition-colors",
                                                    isPastDate(2026, 2, day) && "text-gray-300",
                                                    isCheckInDate(2026, 2, day) && "bg-[#ff5a5f]/20 text-[#ff5a5f] font-semibold",
                                                    isCheckOutDate(2026, 2, day) && "bg-[#ff5a5f] text-white font-semibold",
                                                    isDateInRange(2026, 2, day) && "bg-[#ff5a5f]/10",
                                                    !isPastDate(2026, 2, day) && !isDateSelected(2026, 2, day) && "text-gray-700 hover:bg-gray-100"
                                                )}
                                            >
                                                {day}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Done Button */}
                    <div className="border-t border-gray-200 p-4">
                        <button
                            type="button"
                            onClick={() => setShowMobileDatePicker(false)}
                            className="w-full rounded-lg bg-[#ff5a5f] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e04850]"
                        >
                            Done · {nightsBetween} Night, {rooms} Room
                        </button>
                    </div>
                </div>
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
