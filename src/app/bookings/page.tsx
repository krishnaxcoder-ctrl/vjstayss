"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import {
    Calendar,
    MarkerPin01,
    Star01,
    Clock,
    Users01,
    ChevronRight,
    Download01,
    XClose,
    CheckCircle,
    AlertCircle,
    SearchMd,
    Building07,
    CreditCard01,
    Phone,
    Mail01,
    Home01,
    Wifi,
    Sun,
    Moon01,
    ArrowRight,
    Copy01,
    MessageSquare01,
    RefreshCw01,
    Globe01,
    Heart,
    Check,
    ArrowUpRight,
    Snowflake01,
    Waves,
    Settings01,
} from "@untitledui/icons";
import { cx } from "@/utils/cx";

type BookingStatus = "upcoming" | "active" | "completed" | "cancelled";

interface RoomDetails {
    type: string;
    bedType: string;
    view: string;
    floor: string;
    size: string;
    maxOccupancy: number;
}

interface PaymentDetails {
    method: string;
    cardLast4?: string;
    subtotal: number;
    taxes: number;
    fees: number;
    discount?: number;
    total: number;
    paidAt: string;
    status: "paid" | "pending" | "refunded" | "partial";
}

interface Booking {
    id: string;
    hotelName: string;
    hotelImage: string;
    hotelImages: string[];
    location: string;
    address: string;
    checkIn: string;
    checkInTime: string;
    checkOut: string;
    checkOutTime: string;
    nights: number;
    guests: number;
    adults: number;
    children: number;
    rooms: number;
    roomDetails: RoomDetails;
    totalPrice: number;
    pricePerNight: number;
    status: BookingStatus;
    rating: number;
    reviewCount: number;
    bookingDate: string;
    confirmationCode: string;
    amenities: string[];
    specialRequests?: string;
    hotelPhone: string;
    hotelEmail: string;
    cancellationPolicy: string;
    payment: PaymentDetails;
    loyaltyPoints: number;
}

const bookingsData: Booking[] = [
    {
        id: "1",
        hotelName: "The Ritz-Carlton",
        hotelImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
        hotelImages: [
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
        ],
        location: "Paris, France",
        address: "15 Place Vendôme, 75001 Paris, France",
        checkIn: "Feb 15, 2026",
        checkInTime: "3:00 PM",
        checkOut: "Feb 20, 2026",
        checkOutTime: "11:00 AM",
        nights: 5,
        guests: 2,
        adults: 2,
        children: 0,
        rooms: 1,
        roomDetails: {
            type: "Deluxe Suite",
            bedType: "King Bed",
            view: "City View",
            floor: "12th Floor",
            size: "55 m²",
            maxOccupancy: 3,
        },
        totalPrice: 1600,
        pricePerNight: 320,
        status: "upcoming",
        rating: 4.9,
        reviewCount: 2456,
        bookingDate: "Jan 10, 2026",
        confirmationCode: "VJS-2026-001234",
        amenities: ["wifi", "breakfast", "parking", "pool", "spa", "gym", "ac", "minibar"],
        specialRequests: "High floor room preferred, extra pillows requested",
        hotelPhone: "+33 1 43 16 30 30",
        hotelEmail: "reservations.paris@ritzcarlton.com",
        cancellationPolicy: "Free cancellation until Feb 13, 2026",
        payment: {
            method: "Credit Card",
            cardLast4: "4242",
            subtotal: 1450,
            taxes: 120,
            fees: 30,
            total: 1600,
            paidAt: "Jan 10, 2026",
            status: "paid",
        },
        loyaltyPoints: 1600,
    },
    {
        id: "2",
        hotelName: "Seaside Resort & Spa",
        hotelImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
        hotelImages: [
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
        ],
        location: "Bali, Indonesia",
        address: "Jl. Kayu Aya, Seminyak, Bali 80361, Indonesia",
        checkIn: "Mar 01, 2026",
        checkInTime: "2:00 PM",
        checkOut: "Mar 07, 2026",
        checkOutTime: "12:00 PM",
        nights: 6,
        guests: 4,
        adults: 2,
        children: 2,
        rooms: 2,
        roomDetails: {
            type: "Family Ocean Villa",
            bedType: "2 Queen Beds",
            view: "Ocean View",
            floor: "Ground Floor",
            size: "85 m²",
            maxOccupancy: 5,
        },
        totalPrice: 2100,
        pricePerNight: 350,
        status: "upcoming",
        rating: 4.8,
        reviewCount: 1892,
        bookingDate: "Jan 15, 2026",
        confirmationCode: "VJS-2026-001567",
        amenities: ["wifi", "breakfast", "pool", "spa", "beach", "kids_club", "ac"],
        specialRequests: "Crib needed for infant, vegetarian meal options",
        hotelPhone: "+62 361 730 730",
        hotelEmail: "reservations@seasideresortbali.com",
        cancellationPolicy: "Free cancellation until Feb 25, 2026",
        payment: {
            method: "Credit Card",
            cardLast4: "8888",
            subtotal: 1900,
            taxes: 150,
            fees: 50,
            total: 2100,
            paidAt: "Jan 15, 2026",
            status: "paid",
        },
        loyaltyPoints: 2100,
    },
    {
        id: "3",
        hotelName: "Mountain View Lodge",
        hotelImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        hotelImages: [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        ],
        location: "Swiss Alps, Switzerland",
        address: "Bahnhofstrasse 21, 3920 Zermatt, Switzerland",
        checkIn: "Dec 20, 2025",
        checkInTime: "4:00 PM",
        checkOut: "Dec 27, 2025",
        checkOutTime: "10:00 AM",
        nights: 7,
        guests: 2,
        adults: 2,
        children: 0,
        rooms: 1,
        roomDetails: {
            type: "Alpine Chalet Suite",
            bedType: "King Bed",
            view: "Mountain View",
            floor: "3rd Floor",
            size: "70 m²",
            maxOccupancy: 4,
        },
        totalPrice: 3150,
        pricePerNight: 450,
        status: "completed",
        rating: 4.9,
        reviewCount: 3124,
        bookingDate: "Nov 05, 2025",
        confirmationCode: "VJS-2025-008921",
        amenities: ["wifi", "breakfast", "parking", "spa", "ski", "fireplace", "ac"],
        hotelPhone: "+41 27 966 66 00",
        hotelEmail: "info@mountainviewlodge.ch",
        cancellationPolicy: "Non-refundable",
        payment: {
            method: "Credit Card",
            cardLast4: "1234",
            subtotal: 2850,
            taxes: 200,
            fees: 100,
            total: 3150,
            paidAt: "Nov 05, 2025",
            status: "paid",
        },
        loyaltyPoints: 3150,
    },
    {
        id: "4",
        hotelName: "Urban Boutique Hotel",
        hotelImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        hotelImages: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
        ],
        location: "New York, USA",
        address: "123 Madison Avenue, New York, NY 10016, USA",
        checkIn: "Nov 10, 2025",
        checkInTime: "3:00 PM",
        checkOut: "Nov 14, 2025",
        checkOutTime: "11:00 AM",
        nights: 4,
        guests: 1,
        adults: 1,
        children: 0,
        rooms: 1,
        roomDetails: {
            type: "Business King Room",
            bedType: "King Bed",
            view: "City Skyline",
            floor: "18th Floor",
            size: "35 m²",
            maxOccupancy: 2,
        },
        totalPrice: 980,
        pricePerNight: 245,
        status: "completed",
        rating: 4.7,
        reviewCount: 1567,
        bookingDate: "Oct 20, 2025",
        confirmationCode: "VJS-2025-007654",
        amenities: ["wifi", "breakfast", "gym", "business_center", "ac"],
        hotelPhone: "+1 212 555 0123",
        hotelEmail: "reservations@urbanboutiquehotel.com",
        cancellationPolicy: "Free cancellation until Nov 8, 2025",
        payment: {
            method: "Credit Card",
            cardLast4: "5678",
            subtotal: 890,
            taxes: 70,
            fees: 20,
            total: 980,
            paidAt: "Oct 20, 2025",
            status: "paid",
        },
        loyaltyPoints: 980,
    },
    {
        id: "5",
        hotelName: "Beachfront Villa",
        hotelImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        hotelImages: [
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
        ],
        location: "Maldives",
        address: "North Malé Atoll, Maldives",
        checkIn: "Jan 05, 2026",
        checkInTime: "2:00 PM",
        checkOut: "Jan 12, 2026",
        checkOutTime: "12:00 PM",
        nights: 7,
        guests: 2,
        adults: 2,
        children: 0,
        rooms: 1,
        roomDetails: {
            type: "Overwater Villa",
            bedType: "King Bed",
            view: "Ocean Lagoon",
            floor: "Water Level",
            size: "120 m²",
            maxOccupancy: 3,
        },
        totalPrice: 4760,
        pricePerNight: 680,
        status: "cancelled",
        rating: 5.0,
        reviewCount: 892,
        bookingDate: "Dec 01, 2025",
        confirmationCode: "VJS-2025-009876",
        amenities: ["wifi", "breakfast", "pool", "spa", "diving", "butler", "ac"],
        hotelPhone: "+960 664 4100",
        hotelEmail: "reservations@beachfrontvilla.mv",
        cancellationPolicy: "Cancelled - Full refund processed",
        payment: {
            method: "Credit Card",
            cardLast4: "9999",
            subtotal: 4300,
            taxes: 350,
            fees: 110,
            total: 4760,
            paidAt: "Dec 01, 2025",
            status: "refunded",
        },
        loyaltyPoints: 0,
    },
];

const statusConfig = {
    upcoming: {
        label: "Upcoming",
        color: "bg-blue-50 text-blue-700 border-blue-200",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        icon: Clock,
        description: "Your trip is coming up",
    },
    active: {
        label: "Active",
        color: "bg-green-50 text-green-700 border-green-200",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        icon: Home01,
        description: "You are currently staying",
    },
    completed: {
        label: "Completed",
        color: "bg-gray-50 text-gray-600 border-gray-200",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500",
        icon: CheckCircle,
        description: "Trip completed",
    },
    cancelled: {
        label: "Cancelled",
        color: "bg-red-50 text-red-700 border-red-200",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        icon: XClose,
        description: "Booking was cancelled",
    },
};

const amenityIcons: Record<string, { icon: typeof Wifi; label: string }> = {
    wifi: { icon: Wifi, label: "Free WiFi" },
    breakfast: { icon: Sun, label: "Breakfast" },
    parking: { icon: CheckCircle, label: "Parking" },
    pool: { icon: Waves, label: "Pool" },
    spa: { icon: Heart, label: "Spa" },
    gym: { icon: Star01, label: "Gym" },
    ac: { icon: Snowflake01, label: "AC" },
    minibar: { icon: Star01, label: "Minibar" },
    beach: { icon: Waves, label: "Beach Access" },
    kids_club: { icon: Users01, label: "Kids Club" },
    ski: { icon: Moon01, label: "Ski Access" },
    fireplace: { icon: Sun, label: "Fireplace" },
    business_center: { icon: Building07, label: "Business Center" },
    diving: { icon: Globe01, label: "Diving" },
    butler: { icon: Users01, label: "Butler Service" },
};

const filterOptions: { label: string; value: BookingStatus | "all" }[] = [
    { label: "All", value: "all" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
];

export default function BookingsPage() {
    const [activeFilter, setActiveFilter] = useState<BookingStatus | "all">("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [activeTab, setActiveTab] = useState<"details" | "payment" | "policies">("details");
    const [copiedCode, setCopiedCode] = useState(false);

    const filteredBookings = bookingsData.filter((booking) => {
        const matchesFilter = activeFilter === "all" || booking.status === activeFilter;
        const matchesSearch =
            booking.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.confirmationCode.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const stats = {
        upcoming: bookingsData.filter((b) => b.status === "upcoming").length,
        completed: bookingsData.filter((b) => b.status === "completed").length,
        cancelled: bookingsData.filter((b) => b.status === "cancelled").length,
        totalSpent: bookingsData.filter((b) => b.status === "completed").reduce((acc, b) => acc + b.totalPrice, 0),
        totalNights: bookingsData.filter((b) => b.status === "completed").reduce((acc, b) => acc + b.nights, 0),
        totalPoints: bookingsData.reduce((acc, b) => acc + b.loyaltyPoints, 0),
    };

    const copyConfirmationCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
    };

    const getDaysUntilTrip = (checkIn: string) => {
        const today = new Date();
        const checkInDate = new Date(checkIn);
        const diffTime = checkInDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SiteHeader variant="light" />

            <main className="mx-auto max-w-8xl px-6 py-8 lg:px-12">
                {/* Page Header */}
                <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff5a5f] to-[#ff5a5f] shadow-lg shadow-[#ff5a5f]/25">
                                <Calendar className="size-7 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
                                <p className="mt-1 text-gray-500">Manage and track all your reservations</p>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/hotels"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#ff5a5f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:bg-[#ff5a5f] hover:shadow-xl"
                    >
                        <ArrowUpRight className="size-4" />
                        Book New Trip
                    </Link>
                </div>

                {/* Stats Overview */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
                        <div className="absolute -right-4 -top-4 size-24 rounded-full bg-blue-50 transition-transform group-hover:scale-110" />
                        <div className="relative">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100">
                                <Clock className="size-6 text-blue-600" />
                            </div>
                            <p className="mt-4 text-3xl font-bold text-gray-900">{stats.upcoming}</p>
                            <p className="mt-1 text-sm text-gray-500">Upcoming Trips</p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
                        <div className="absolute -right-4 -top-4 size-24 rounded-full bg-green-50 transition-transform group-hover:scale-110" />
                        <div className="relative">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-green-100">
                                <CheckCircle className="size-6 text-green-600" />
                            </div>
                            <p className="mt-4 text-3xl font-bold text-gray-900">{stats.totalNights}</p>
                            <p className="mt-1 text-sm text-gray-500">Nights Stayed</p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
                        <div className="absolute -right-4 -top-4 size-24 rounded-full bg-purple-50 transition-transform group-hover:scale-110" />
                        <div className="relative">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-purple-100">
                                <CreditCard01 className="size-6 text-purple-600" />
                            </div>
                            <p className="mt-4 text-3xl font-bold text-gray-900">${stats.totalSpent.toLocaleString()}</p>
                            <p className="mt-1 text-sm text-gray-500">Total Spent</p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff5a5f] to-[#ff5a5f] p-6 shadow-lg shadow-[#ff5a5f]/20 transition-all hover:shadow-xl">
                        <div className="absolute -right-4 -top-4 size-24 rounded-full bg-white/10 transition-transform group-hover:scale-110" />
                        <div className="relative">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-white/20">
                                <Star01 className="size-6 text-white" />
                            </div>
                            <p className="mt-4 text-3xl font-bold text-white">{stats.totalPoints.toLocaleString()}</p>
                            <p className="mt-1 text-sm text-white/80">Reward Points</p>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:items-center sm:justify-between">
                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto">
                        {filterOptions.map((filter) => {
                            const isActive = activeFilter === filter.value;
                            const count =
                                filter.value === "all"
                                    ? bookingsData.length
                                    : bookingsData.filter((b) => b.status === filter.value).length;
                            return (
                                <button
                                    key={filter.value}
                                    onClick={() => setActiveFilter(filter.value)}
                                    className={cx(
                                        "flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                                        isActive
                                            ? "bg-[#ff5a5f] text-white shadow-md shadow-[#ff5a5f]/25"
                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                    )}
                                >
                                    {filter.label}
                                    <span
                                        className={cx(
                                            "flex size-5 items-center justify-center rounded-full text-xs",
                                            isActive ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                                        )}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <SearchMd className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by hotel, location, or code..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-xl border-0 bg-gray-50 py-3 pl-12 pr-4 text-sm transition-all placeholder:text-gray-400 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20 sm:w-80"
                        />
                    </div>
                </div>

                {/* Bookings List */}
                {filteredBookings.length > 0 ? (
                    <div className="space-y-6">
                        {filteredBookings.map((booking) => {
                            const statusInfo = statusConfig[booking.status];
                            const StatusIcon = statusInfo.icon;
                            const daysUntil = getDaysUntilTrip(booking.checkIn);
                            const isUpcoming = booking.status === "upcoming";

                            return (
                                <div
                                    key={booking.id}
                                    className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-gray-200"
                                >
                                    {/* Upcoming Trip Banner */}
                                    {isUpcoming && daysUntil > 0 && daysUntil <= 7 && (
                                        <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 text-white">
                                            <div className="flex items-center gap-2">
                                                <Clock className="size-4" />
                                                <span className="text-sm font-medium">
                                                    {daysUntil === 1 ? "Tomorrow!" : `${daysUntil} days until your trip`}
                                                </span>
                                            </div>
                                            <Link
                                                href={`/listing/${booking.id}`}
                                                className="text-sm font-semibold underline underline-offset-2"
                                            >
                                                Prepare for trip →
                                            </Link>
                                        </div>
                                    )}

                                    <div className="flex flex-col xl:flex-row">
                                        {/* Image Section */}
                                        <div className="relative h-64 w-full xl:h-auto xl:w-80 xl:min-h-[320px]">
                                            <img
                                                src={booking.hotelImage}
                                                alt={booking.hotelName}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent xl:bg-gradient-to-r" />

                                            {/* Rating Badge */}
                                            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
                                                <Star01 className="size-4 fill-[#ff5a5f] text-[#ff5a5f]" />
                                                <span className="text-sm font-bold text-gray-900">{booking.rating}</span>
                                                <span className="text-xs text-gray-500">({booking.reviewCount})</span>
                                            </div>

                                            {/* Status Badge */}
                                            <div className="absolute right-4 top-4">
                                                <span
                                                    className={cx(
                                                        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm",
                                                        statusInfo.color
                                                    )}
                                                >
                                                    <StatusIcon className="size-3.5" />
                                                    {statusInfo.label}
                                                </span>
                                            </div>

                                            {/* Hotel Quick Info - Bottom */}
                                            <div className="absolute bottom-4 left-4 right-4 xl:hidden">
                                                <h3 className="text-xl font-bold text-white">{booking.hotelName}</h3>
                                                <div className="mt-1 flex items-center gap-1 text-sm text-white/90">
                                                    <MarkerPin01 className="size-4" />
                                                    {booking.location}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex flex-1 flex-col p-6">
                                            {/* Header */}
                                            <div className="mb-4 hidden xl:block">
                                                <Link
                                                    href={`/listing/${booking.id}`}
                                                    className="text-2xl font-bold text-gray-900 transition-colors hover:text-[#ff5a5f]"
                                                >
                                                    {booking.hotelName}
                                                </Link>
                                                <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <MarkerPin01 className="size-4 text-gray-400" />
                                                        {booking.location}
                                                    </div>
                                                    <span className="text-gray-300">•</span>
                                                    <span className="text-gray-400">{booking.address}</span>
                                                </div>
                                            </div>

                                            {/* Trip Timeline */}
                                            <div className="mb-5 rounded-2xl bg-gray-50 p-4">
                                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                                    {/* Check In */}
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex size-12 items-center justify-center rounded-xl bg-green-100">
                                                            <Sun className="size-5 text-green-600" />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Check-in</p>
                                                            <p className="text-lg font-bold text-gray-900">{booking.checkIn}</p>
                                                            <p className="text-sm text-gray-500">From {booking.checkInTime}</p>
                                                        </div>
                                                    </div>

                                                    {/* Duration */}
                                                    <div className="hidden sm:flex flex-col items-center">
                                                        <div className="flex items-center gap-2">
                                                            <div className="h-px w-12 bg-gray-300" />
                                                            <div className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f]/10">
                                                                <Moon01 className="size-4 text-[#ff5a5f]" />
                                                            </div>
                                                            <div className="h-px w-12 bg-gray-300" />
                                                        </div>
                                                        <p className="mt-1 text-sm font-semibold text-[#ff5a5f]">{booking.nights} Nights</p>
                                                    </div>

                                                    {/* Check Out */}
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex size-12 items-center justify-center rounded-xl bg-orange-100">
                                                            <Moon01 className="size-5 text-orange-600" />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Check-out</p>
                                                            <p className="text-lg font-bold text-gray-900">{booking.checkOut}</p>
                                                            <p className="text-sm text-gray-500">By {booking.checkOutTime}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Room & Guest Details */}
                                            <div className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                                                    <Home01 className="size-5 text-gray-400" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Room Type</p>
                                                        <p className="text-sm font-semibold text-gray-900">{booking.roomDetails.type}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                                                    <Users01 className="size-5 text-gray-400" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Guests</p>
                                                        <p className="text-sm font-semibold text-gray-900">
                                                            {booking.adults} Adult{booking.adults > 1 ? "s" : ""}
                                                            {booking.children > 0 && `, ${booking.children} Child${booking.children > 1 ? "ren" : ""}`}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                                                    <Building07 className="size-5 text-gray-400" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Room</p>
                                                        <p className="text-sm font-semibold text-gray-900">
                                                            {booking.rooms} Room{booking.rooms > 1 ? "s" : ""} • {booking.roomDetails.view}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                                                    <Calendar className="size-5 text-gray-400" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Confirmation</p>
                                                        <p className="text-sm font-semibold text-gray-900 font-mono">{booking.confirmationCode}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Amenities */}
                                            <div className="mb-5 flex flex-wrap gap-2">
                                                {booking.amenities.slice(0, 6).map((amenity) => {
                                                    const amenityData = amenityIcons[amenity];
                                                    if (!amenityData) return null;
                                                    const Icon = amenityData.icon;
                                                    return (
                                                        <span
                                                            key={amenity}
                                                            className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                                        >
                                                            <Icon className="size-3.5" />
                                                            {amenityData.label}
                                                        </span>
                                                    );
                                                })}
                                                {booking.amenities.length > 6 && (
                                                    <span className="inline-flex items-center rounded-full bg-[#ff5a5f]/10 px-3 py-1.5 text-xs font-medium text-[#ff5a5f]">
                                                        +{booking.amenities.length - 6} more
                                                    </span>
                                                )}
                                            </div>

                                            {/* Footer - Price & Actions */}
                                            <div className="mt-auto flex flex-col gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-end sm:justify-between">
                                                <div>
                                                    <p className="text-xs text-gray-400">Total Price</p>
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-3xl font-bold text-gray-900">${booking.totalPrice.toLocaleString()}</span>
                                                        <span className="text-sm text-gray-400">
                                                            (${booking.pricePerNight}/night)
                                                        </span>
                                                    </div>
                                                    {booking.loyaltyPoints > 0 && (
                                                        <p className="mt-1 flex items-center gap-1 text-xs text-[#ff5a5f]">
                                                            <Star01 className="size-3" />
                                                            +{booking.loyaltyPoints} reward points
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedBooking(booking);
                                                            setActiveTab("details");
                                                        }}
                                                        className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-200"
                                                    >
                                                        View Details
                                                        <ChevronRight className="size-4" />
                                                    </button>
                                                    {booking.status === "upcoming" && (
                                                        <Link
                                                            href={`/listing/${booking.id}`}
                                                            className="flex items-center gap-2 rounded-xl bg-[#ff5a5f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:bg-[#ff5a5f]"
                                                        >
                                                            Manage Booking
                                                        </Link>
                                                    )}
                                                    {booking.status === "completed" && (
                                                        <button className="flex items-center gap-2 rounded-xl bg-[#ff5a5f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:bg-[#ff5a5f]">
                                                            <RefreshCw01 className="size-4" />
                                                            Book Again
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-white py-20 text-center shadow-sm ring-1 ring-gray-100">
                        <div className="flex size-24 items-center justify-center rounded-full bg-gray-100">
                            <Calendar className="size-12 text-gray-400" />
                        </div>
                        <h2 className="mt-6 text-2xl font-bold text-gray-900">No bookings found</h2>
                        <p className="mt-3 max-w-md text-gray-500">
                            {searchQuery
                                ? "We couldn't find any bookings matching your search. Try adjusting your filters or search terms."
                                : "You haven't made any bookings yet. Start exploring amazing hotels and book your next adventure!"}
                        </p>
                        <div className="mt-8 flex gap-3">
                            {searchQuery && (
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setActiveFilter("all");
                                    }}
                                    className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                                >
                                    Clear Filters
                                </button>
                            )}
                            <Link
                                href="/hotels"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#ff5a5f] px-8 py-4 font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:bg-[#ff5a5f]"
                            >
                                Explore Hotels
                                <ArrowRight className="size-5" />
                            </Link>
                        </div>
                    </div>
                )}
            </main>

            {/* Booking Details Modal */}
            {selectedBooking && (
                <>
                    <div
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedBooking(null)}
                    />
                    <div className="fixed inset-4 z-50 flex items-center justify-center p-4 sm:inset-0">
                        <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                            {/* Modal Header with Image */}
                            <div className="relative h-48 sm:h-56">
                                <img
                                    src={selectedBooking.hotelImage}
                                    alt={selectedBooking.hotelName}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedBooking(null)}
                                    className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                                >
                                    <XClose className="size-5" />
                                </button>

                                {/* Status Badge */}
                                <div className="absolute left-4 top-4">
                                    <span
                                        className={cx(
                                            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm",
                                            statusConfig[selectedBooking.status].color
                                        )}
                                    >
                                        {(() => {
                                            const StatusIcon = statusConfig[selectedBooking.status].icon;
                                            return <StatusIcon className="size-3.5" />;
                                        })()}
                                        {statusConfig[selectedBooking.status].label}
                                    </span>
                                </div>

                                {/* Hotel Info */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2">
                                        <Star01 className="size-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-semibold text-white">{selectedBooking.rating}</span>
                                        <span className="text-sm text-white/70">({selectedBooking.reviewCount} reviews)</span>
                                    </div>
                                    <h3 className="mt-1 text-2xl font-bold text-white">{selectedBooking.hotelName}</h3>
                                    <p className="mt-1 flex items-center gap-1 text-sm text-white/80">
                                        <MarkerPin01 className="size-4" />
                                        {selectedBooking.address}
                                    </p>
                                </div>
                            </div>

                            {/* Confirmation Code Bar */}
                            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-6 py-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">Confirmation:</span>
                                    <span className="font-mono text-sm font-bold text-gray-900">
                                        {selectedBooking.confirmationCode}
                                    </span>
                                </div>
                                <button
                                    onClick={() => copyConfirmationCode(selectedBooking.confirmationCode)}
                                    className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-gray-200 transition-colors hover:bg-gray-50"
                                >
                                    {copiedCode ? (
                                        <>
                                            <Check className="size-3.5 text-green-500" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy01 className="size-3.5" />
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b border-gray-100">
                                {[
                                    { id: "details", label: "Trip Details", icon: Calendar },
                                    { id: "payment", label: "Payment", icon: CreditCard01 },
                                    { id: "policies", label: "Policies & Support", icon: CheckCircle },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as "details" | "payment" | "policies")}
                                        className={cx(
                                            "flex flex-1 items-center justify-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors",
                                            activeTab === tab.id
                                                ? "border-[#ff5a5f] text-[#ff5a5f]"
                                                : "border-transparent text-gray-500 hover:text-gray-700"
                                        )}
                                    >
                                        <tab.icon className="size-4" />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="max-h-[calc(90vh-380px)] overflow-y-auto p-6">
                                {activeTab === "details" && (
                                    <div className="space-y-6">
                                        {/* Trip Timeline */}
                                        <div className="rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 p-5">
                                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                Trip Schedule
                                            </h4>
                                            <div className="flex items-center justify-between">
                                                <div className="text-center">
                                                    <div className="flex size-14 items-center justify-center rounded-2xl bg-green-100">
                                                        <Sun className="size-6 text-green-600" />
                                                    </div>
                                                    <p className="mt-2 text-lg font-bold text-gray-900">{selectedBooking.checkIn}</p>
                                                    <p className="text-sm text-gray-500">Check-in: {selectedBooking.checkInTime}</p>
                                                </div>
                                                <div className="flex flex-1 flex-col items-center px-4">
                                                    <div className="relative w-full">
                                                        <div className="h-0.5 w-full bg-gray-300" />
                                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                            <div className="flex size-12 items-center justify-center rounded-full bg-[#ff5a5f] shadow-lg shadow-[#ff5a5f]/30">
                                                                <Moon01 className="size-5 text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-lg font-bold text-[#ff5a5f]">{selectedBooking.nights} Nights</p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="flex size-14 items-center justify-center rounded-2xl bg-orange-100">
                                                        <Moon01 className="size-6 text-orange-600" />
                                                    </div>
                                                    <p className="mt-2 text-lg font-bold text-gray-900">{selectedBooking.checkOut}</p>
                                                    <p className="text-sm text-gray-500">Check-out: {selectedBooking.checkOutTime}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Room Details */}
                                        <div>
                                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                Room Information
                                            </h4>
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                                                    <Home01 className="size-5 text-[#ff5a5f]" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Room Type</p>
                                                        <p className="font-semibold text-gray-900">{selectedBooking.roomDetails.type}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                                                    <Home01 className="size-5 text-[#ff5a5f]" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Bed Configuration</p>
                                                        <p className="font-semibold text-gray-900">{selectedBooking.roomDetails.bedType}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                                                    <Globe01 className="size-5 text-[#ff5a5f]" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">View</p>
                                                        <p className="font-semibold text-gray-900">{selectedBooking.roomDetails.view}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                                                    <Building07 className="size-5 text-[#ff5a5f]" />
                                                    <div>
                                                        <p className="text-xs text-gray-400">Location</p>
                                                        <p className="font-semibold text-gray-900">
                                                            {selectedBooking.roomDetails.floor} • {selectedBooking.roomDetails.size}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Guest Details */}
                                        <div>
                                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                Guest Information
                                            </h4>
                                            <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                                                <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                                    <Users01 className="size-6 text-[#ff5a5f]" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">
                                                        {selectedBooking.guests} Guest{selectedBooking.guests > 1 ? "s" : ""}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {selectedBooking.adults} Adult{selectedBooking.adults > 1 ? "s" : ""}
                                                        {selectedBooking.children > 0 &&
                                                            `, ${selectedBooking.children} Child${selectedBooking.children > 1 ? "ren" : ""}`}
                                                        {" • "}
                                                        {selectedBooking.rooms} Room{selectedBooking.rooms > 1 ? "s" : ""}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div>
                                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                Included Amenities
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedBooking.amenities.map((amenity) => {
                                                    const amenityData = amenityIcons[amenity];
                                                    if (!amenityData) return null;
                                                    const Icon = amenityData.icon;
                                                    return (
                                                        <span
                                                            key={amenity}
                                                            className="inline-flex items-center gap-1.5 rounded-full bg-[#ff5a5f]/10 px-3 py-2 text-sm font-medium text-[#ff5a5f]"
                                                        >
                                                            <Icon className="size-4" />
                                                            {amenityData.label}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Special Requests */}
                                        {selectedBooking.specialRequests && (
                                            <div>
                                                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                    Special Requests
                                                </h4>
                                                <div className="flex items-start gap-3 rounded-xl bg-yellow-50 p-4">
                                                    <AlertCircle className="size-5 flex-shrink-0 text-yellow-600" />
                                                    <p className="text-sm text-yellow-800">{selectedBooking.specialRequests}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === "payment" && (
                                    <div className="space-y-6">
                                        {/* Payment Status */}
                                        <div
                                            className={cx(
                                                "flex items-center gap-3 rounded-xl p-4",
                                                selectedBooking.payment.status === "paid"
                                                    ? "bg-green-50"
                                                    : selectedBooking.payment.status === "refunded"
                                                    ? "bg-blue-50"
                                                    : "bg-yellow-50"
                                            )}
                                        >
                                            {selectedBooking.payment.status === "paid" ? (
                                                <CheckCircle className="size-6 text-green-600" />
                                            ) : selectedBooking.payment.status === "refunded" ? (
                                                <RefreshCw01 className="size-6 text-blue-600" />
                                            ) : (
                                                <Clock className="size-6 text-yellow-600" />
                                            )}
                                            <div>
                                                <p
                                                    className={cx(
                                                        "font-semibold",
                                                        selectedBooking.payment.status === "paid"
                                                            ? "text-green-800"
                                                            : selectedBooking.payment.status === "refunded"
                                                            ? "text-blue-800"
                                                            : "text-yellow-800"
                                                    )}
                                                >
                                                    {selectedBooking.payment.status === "paid"
                                                        ? "Payment Successful"
                                                        : selectedBooking.payment.status === "refunded"
                                                        ? "Refund Processed"
                                                        : "Payment Pending"}
                                                </p>
                                                <p
                                                    className={cx(
                                                        "text-sm",
                                                        selectedBooking.payment.status === "paid"
                                                            ? "text-green-600"
                                                            : selectedBooking.payment.status === "refunded"
                                                            ? "text-blue-600"
                                                            : "text-yellow-600"
                                                    )}
                                                >
                                                    Processed on {selectedBooking.payment.paidAt}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Payment Method */}
                                        <div>
                                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                Payment Method
                                            </h4>
                                            <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                                                <div className="flex size-12 items-center justify-center rounded-xl bg-gray-200">
                                                    <CreditCard01 className="size-6 text-gray-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{selectedBooking.payment.method}</p>
                                                    {selectedBooking.payment.cardLast4 && (
                                                        <p className="text-sm text-gray-500">
                                                            •••• •••• •••• {selectedBooking.payment.cardLast4}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Price Breakdown */}
                                        <div>
                                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                Price Breakdown
                                            </h4>
                                            <div className="rounded-xl bg-gray-50 p-4">
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">
                                                            Room ({selectedBooking.nights} nights × ${selectedBooking.pricePerNight})
                                                        </span>
                                                        <span className="font-medium text-gray-900">
                                                            ${selectedBooking.payment.subtotal}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Taxes & VAT</span>
                                                        <span className="font-medium text-gray-900">${selectedBooking.payment.taxes}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Service Fees</span>
                                                        <span className="font-medium text-gray-900">${selectedBooking.payment.fees}</span>
                                                    </div>
                                                    {selectedBooking.payment.discount && (
                                                        <div className="flex justify-between text-green-600">
                                                            <span>Discount</span>
                                                            <span className="font-medium">-${selectedBooking.payment.discount}</span>
                                                        </div>
                                                    )}
                                                    <div className="border-t border-gray-200 pt-3">
                                                        <div className="flex justify-between">
                                                            <span className="text-lg font-bold text-gray-900">Total</span>
                                                            <span className="text-lg font-bold text-gray-900">
                                                                ${selectedBooking.payment.total}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Loyalty Points */}
                                        {selectedBooking.loyaltyPoints > 0 && (
                                            <div className="flex items-center gap-3 rounded-xl bg-[#ff5a5f]/10 p-4">
                                                <Star01 className="size-6 text-[#ff5a5f]" />
                                                <div>
                                                    <p className="font-semibold text-[#ff5a5f]">
                                                        +{selectedBooking.loyaltyPoints} Reward Points Earned
                                                    </p>
                                                    <p className="text-sm text-[#ff5a5f]/80">
                                                        Points will be credited after checkout
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === "policies" && (
                                    <div className="space-y-6">
                                        {/* Cancellation Policy */}
                                        <div>
                                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                Cancellation Policy
                                            </h4>
                                            <div
                                                className={cx(
                                                    "flex items-start gap-3 rounded-xl p-4",
                                                    selectedBooking.cancellationPolicy.includes("Free")
                                                        ? "bg-green-50"
                                                        : selectedBooking.cancellationPolicy.includes("Non-refundable")
                                                        ? "bg-red-50"
                                                        : "bg-gray-50"
                                                )}
                                            >
                                                <CheckCircle
                                                    className={cx(
                                                        "size-5 flex-shrink-0",
                                                        selectedBooking.cancellationPolicy.includes("Free")
                                                            ? "text-green-600"
                                                            : selectedBooking.cancellationPolicy.includes("Non-refundable")
                                                            ? "text-red-600"
                                                            : "text-gray-600"
                                                    )}
                                                />
                                                <p
                                                    className={cx(
                                                        "text-sm",
                                                        selectedBooking.cancellationPolicy.includes("Free")
                                                            ? "text-green-800"
                                                            : selectedBooking.cancellationPolicy.includes("Non-refundable")
                                                            ? "text-red-800"
                                                            : "text-gray-800"
                                                    )}
                                                >
                                                    {selectedBooking.cancellationPolicy}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Hotel Contact */}
                                        <div>
                                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                                Hotel Contact
                                            </h4>
                                            <div className="space-y-3">
                                                <a
                                                    href={`tel:${selectedBooking.hotelPhone}`}
                                                    className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                                                >
                                                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#ff5a5f]/10">
                                                        <Phone className="size-5 text-[#ff5a5f]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-400">Phone</p>
                                                        <p className="font-medium text-gray-900">{selectedBooking.hotelPhone}</p>
                                                    </div>
                                                </a>
                                                <a
                                                    href={`mailto:${selectedBooking.hotelEmail}`}
                                                    className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                                                >
                                                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#ff5a5f]/10">
                                                        <Mail01 className="size-5 text-[#ff5a5f]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-400">Email</p>
                                                        <p className="font-medium text-gray-900">{selectedBooking.hotelEmail}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Need Help */}
                                        <div className="rounded-xl bg-gray-900 p-5 text-white">
                                            <h4 className="text-lg font-semibold">Need Help?</h4>
                                            <p className="mt-1 text-sm text-gray-400">
                                                Our support team is available 24/7 to assist you with your booking.
                                            </p>
                                            <div className="mt-4 flex gap-3">
                                                <a
                                                    href="tel:+1234567890"
                                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                                                >
                                                    <Phone className="size-4" />
                                                    Call Support
                                                </a>
                                                <a
                                                    href="mailto:support@vjstays.com"
                                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#ff5a5f] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff5a5f]"
                                                >
                                                    <MessageSquare01 className="size-4" />
                                                    Live Chat
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-6 py-4">
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                                        <Download01 className="size-4" />
                                        Download
                                    </button>
                                    <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                                        <Settings01 className="size-4" />
                                        Print
                                    </button>
                                    <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                                        <ArrowUpRight className="size-4" />
                                        Share
                                    </button>
                                </div>
                                {selectedBooking.status === "upcoming" && (
                                    <div className="flex gap-3">
                                        <button className="rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50">
                                            Cancel Booking
                                        </button>
                                        <Link
                                            href={`/listing/${selectedBooking.id}`}
                                            className="rounded-xl bg-[#ff5a5f] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#ff5a5f]"
                                        >
                                            Modify Booking
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
