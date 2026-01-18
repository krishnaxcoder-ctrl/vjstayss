"use client";

import { ArrowRight, Clock, Tag01, Star01, MarkerPin01, Heart, Zap, CheckCircle, AlertCircle, TrendUp01, Users01, Lightning01 } from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";
import Link from "next/link";

const flashDeals = [
    {
        id: 1,
        name: "Luxury Beachfront Resort",
        location: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
        originalPrice: 850,
        discountedPrice: 499,
        discount: 41,
        rating: 4.9,
        reviews: 892,
        endsIn: "2h 45m",
        limited: true,
    },
    {
        id: 2,
        name: "Mountain View Chalet",
        location: "Swiss Alps",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        originalPrice: 520,
        discountedPrice: 299,
        discount: 42,
        rating: 4.8,
        reviews: 1234,
        endsIn: "5h 20m",
        limited: true,
    },
    {
        id: 3,
        name: "City Center Boutique",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        originalPrice: 380,
        discountedPrice: 219,
        discount: 42,
        rating: 4.7,
        reviews: 2456,
        endsIn: "8h 15m",
        limited: false,
    },
];

const weeklyDeals = [
    {
        id: 4,
        name: "Tropical Paradise Villa",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        originalPrice: 290,
        discountedPrice: 189,
        discount: 35,
        rating: 4.8,
        reviews: 1890,
        dealType: "Early Bird",
    },
    {
        id: 5,
        name: "Historic Grand Hotel",
        location: "Rome, Italy",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
        originalPrice: 210,
        discountedPrice: 149,
        discount: 29,
        rating: 4.6,
        reviews: 3421,
        dealType: "Weekend Special",
    },
    {
        id: 6,
        name: "Seaside Resort & Spa",
        location: "Santorini, Greece",
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=800&auto=format&fit=crop",
        originalPrice: 480,
        discountedPrice: 329,
        discount: 31,
        rating: 4.9,
        reviews: 1567,
        dealType: "Member Exclusive",
    },
    {
        id: 7,
        name: "Downtown Luxury Suites",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        originalPrice: 550,
        discountedPrice: 385,
        discount: 30,
        rating: 4.8,
        reviews: 2134,
        dealType: "Last Minute",
    },
    {
        id: 8,
        name: "Countryside Manor",
        location: "Cotswolds, UK",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
        originalPrice: 310,
        discountedPrice: 219,
        discount: 29,
        rating: 4.7,
        reviews: 987,
        dealType: "Early Bird",
    },
    {
        id: 9,
        name: "Urban Boutique Hotel",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        originalPrice: 250,
        discountedPrice: 175,
        discount: 30,
        rating: 4.7,
        reviews: 1234,
        dealType: "Weekend Special",
    },
];

const heroStats = [
    { value: "50%", label: "Max Savings", icon: TrendUp01 },
    { value: "2.5K+", label: "Active Deals", icon: Lightning01 },
    { value: "98%", label: "Happy Guests", icon: Users01 },
];

export default function DealsPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="dark" />

            {/* Hero Section - 21Magic Style */}
            <section className="relative min-h-[90vh] overflow-hidden bg-gray-950">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff5a5f]/20 via-gray-950 to-gray-950" />
                    <div className="absolute right-0 top-0 h-[800px] w-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#ff5a5f]/10 via-transparent to-transparent blur-3xl" />
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

                {/* Floating Cards - Left Side */}
                <div className="absolute left-8 top-1/4 hidden rotate-[-8deg] xl:block">
                    <div className="group relative overflow-hidden rounded-2xl bg-white/10 p-1 backdrop-blur-xl transition-all duration-500 hover:scale-105">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop"
                                alt="Deal"
                                className="h-48 w-36 object-cover"
                            />
                        </div>
                        <div className="absolute left-2 top-2 rounded-full bg-[#ff5a5f] px-2 py-1 text-xs font-bold text-white">
                            -45%
                        </div>
                    </div>
                </div>

                {/* Floating Cards - Right Side */}
                <div className="absolute right-12 top-1/3 hidden rotate-[8deg] xl:block">
                    <div className="group relative overflow-hidden rounded-2xl bg-white/10 p-1 backdrop-blur-xl transition-all duration-500 hover:scale-105">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=400&auto=format&fit=crop"
                                alt="Deal"
                                className="h-52 w-40 object-cover"
                            />
                        </div>
                        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
                            <Star01 className="size-3 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-bold text-white">4.9</span>
                        </div>
                    </div>
                </div>

                {/* Another Floating Card */}
                <div className="absolute bottom-32 right-32 hidden rotate-[-4deg] xl:block">
                    <div className="rounded-2xl bg-gradient-to-br from-[#ff5a5f] to-[#e04850] p-4 shadow-2xl shadow-[#ff5a5f]/20">
                        <div className="flex items-center gap-3">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-white/20">
                                <Zap className="size-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white/80">Flash Deal</p>
                                <p className="text-lg font-bold text-white">Save $350</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative mx-auto flex min-h-[90vh] max-w-8xl flex-col items-center justify-center px-6 py-32 lg:px-12">
                    {/* Animated Badge */}
                    <div className="group mb-8 inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-2 pr-6 backdrop-blur-sm transition-all hover:border-[#ff5a5f]/30 hover:bg-white/10">
                        <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-3 py-1.5 text-xs font-bold text-white">
                            <Zap className="size-3.5" />
                            NEW
                        </span>
                        <span className="text-sm text-gray-300">Winter Sale is Live — Save up to 50%</span>
                        <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="max-w-4xl text-center text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                        Unbeatable{" "}
                        <span className="relative">
                            <span className="relative z-10 bg-gradient-to-r from-[#ff5a5f] via-[#ff7a7e] to-[#ff5a5f] bg-clip-text text-transparent">
                                Travel Deals
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                <path d="M2 10C50 4 150 4 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                                        <stop stopColor="#ff5a5f" />
                                        <stop offset="1" stopColor="#ff7a7e" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <br />
                        <span className="text-gray-400">Await You</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-gray-400 md:text-xl">
                        Discover exclusive savings on handpicked hotels and resorts worldwide.
                        <span className="text-white"> Limited-time offers</span> that will make your dream vacation a reality.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                        <Link
                            href="#flash-deals"
                            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[#ff5a5f]/25 transition-all hover:shadow-[#ff5a5f]/40"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#e04850] to-[#ff5a5f] opacity-0 transition-opacity group-hover:opacity-100" />
                            <Zap className="relative size-5" />
                            <span className="relative">Explore Flash Deals</span>
                        </Link>
                        <Link
                            href="#weekly-deals"
                            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                        >
                            Browse All Deals
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 flex items-center gap-8 md:gap-16">
                        {heroStats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <stat.icon className="size-5 text-[#ff5a5f]" />
                                    <span className="text-3xl font-bold text-white md:text-4xl">{stat.value}</span>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs text-gray-500">Scroll to explore</span>
                            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
                                <div className="h-2 w-1 animate-bounce rounded-full bg-[#ff5a5f]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Flash Deals */}
            <section id="flash-deals" className="scroll-mt-20 bg-gray-50 py-20 lg:py-28">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 shadow-lg shadow-amber-500/25">
                                <Zap className="size-4 text-white" />
                                <span className="text-sm font-bold text-white">Flash Deals</span>
                            </div>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                                Limited Time Offers
                            </h2>
                            <p className="mt-3 max-w-lg text-lg text-gray-600">
                                These exclusive deals won't last long. Book now before they disappear!
                            </p>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-red-50 px-5 py-3 ring-1 ring-red-100">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-red-500">
                                <AlertCircle className="size-5 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-red-600">Ending Soon!</p>
                                <p className="text-sm text-red-500">Only hours left</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {flashDeals.map((deal) => (
                            <Link
                                key={deal.id}
                                href={`/listing/${deal.id}`}
                                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-gray-200/50 ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-300/50"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={deal.image}
                                        alt={deal.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    {/* Discount Badge */}
                                    <div className="absolute left-4 top-4 overflow-hidden rounded-xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-4 py-2 shadow-xl shadow-[#ff5a5f]/30">
                                        <span className="text-lg font-black text-white">{deal.discount}% OFF</span>
                                    </div>

                                    {/* Timer */}
                                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-xl bg-black/60 px-3 py-2 backdrop-blur-md">
                                        <Clock className="size-4 text-amber-400" />
                                        <span className="font-mono text-sm font-bold text-white">{deal.endsIn}</span>
                                    </div>

                                    {/* Limited Badge */}
                                    {deal.limited && (
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-3 py-2 shadow-lg">
                                            <Lightning01 className="size-4 text-white" />
                                            <span className="text-xs font-bold text-white">Only 3 left!</span>
                                        </div>
                                    )}

                                    {/* Wishlist */}
                                    <button
                                        type="button"
                                        className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-[#ff5a5f]"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Heart className="size-5" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Rating */}
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex items-center gap-1 rounded-lg bg-[#ff5a5f]/10 px-2.5 py-1">
                                            <Star01 className="size-4 fill-[#ff5a5f] text-[#ff5a5f]" />
                                            <span className="text-sm font-bold text-[#ff5a5f]">{deal.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({deal.reviews.toLocaleString()} reviews)</span>
                                    </div>

                                    {/* Name & Location */}
                                    <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                        {deal.name}
                                    </h3>
                                    <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                                        <MarkerPin01 className="size-4 text-gray-400" />
                                        {deal.location}
                                    </div>

                                    {/* Price */}
                                    <div className="mt-5 flex items-end justify-between border-t border-gray-100 pt-5">
                                        <div>
                                            <span className="text-sm text-gray-400 line-through">${deal.originalPrice}/night</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-3xl font-black text-[#ff5a5f]">${deal.discountedPrice}</span>
                                                <span className="text-sm text-gray-500">/ night</span>
                                            </div>
                                        </div>
                                        <span className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all group-hover:shadow-xl group-hover:shadow-[#ff5a5f]/30">
                                            Book Now
                                            <ArrowRight className="size-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Weekly Deals */}
            <section id="weekly-deals" className="scroll-mt-20 py-20 lg:py-28">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff5a5f]/10 to-purple-500/10 px-4 py-2">
                            <Tag01 className="size-4 text-[#ff5a5f]" />
                            <span className="text-sm font-bold text-[#ff5a5f]">Weekly Deals</span>
                        </div>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                            This Week's Best Offers
                        </h2>
                        <p className="mx-auto mt-3 max-w-lg text-lg text-gray-600">
                            Handpicked deals refreshed every week for maximum savings
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {weeklyDeals.map((deal) => (
                            <Link
                                key={deal.id}
                                href={`/listing/${deal.id}`}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={deal.image}
                                        alt={deal.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    {/* Deal Type Badge */}
                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-900 shadow-lg backdrop-blur-sm">
                                        {deal.dealType}
                                    </div>

                                    {/* Discount Badge */}
                                    <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg">
                                        {deal.discount}% OFF
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Rating */}
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <Star01 className="size-4 fill-amber-400 text-amber-400" />
                                            <span className="text-sm font-bold text-gray-900">{deal.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({deal.reviews.toLocaleString()})</span>
                                    </div>

                                    {/* Name & Location */}
                                    <h3 className="font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                        {deal.name}
                                    </h3>
                                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                                        <MarkerPin01 className="size-4 text-gray-400" />
                                        {deal.location}
                                    </div>

                                    {/* Price */}
                                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-bold text-gray-900">${deal.discountedPrice}</span>
                                            <span className="text-sm text-gray-400 line-through">${deal.originalPrice}</span>
                                            <span className="text-sm text-gray-500">/ night</span>
                                        </div>
                                        <ArrowRight className="size-5 text-[#ff5a5f] transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All */}
                    <div className="mt-16 text-center">
                        <Link
                            href="/hotels"
                            className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-[#ff5a5f] hover:bg-[#ff5a5f]/5 hover:text-[#ff5a5f]"
                        >
                            View All Hotels
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Price Match Guarantee */}
            <section className="relative overflow-hidden bg-gray-950 py-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff5a5f]/10 via-transparent to-transparent" />
                <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
                        <div className="flex flex-col items-center gap-6 md:flex-row">
                            <div className="flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff5a5f] to-[#e04850] shadow-2xl shadow-[#ff5a5f]/30">
                                <CheckCircle className="size-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">Price Match Guarantee</h3>
                                <p className="mt-2 text-lg text-gray-400">Find a lower price? We'll match it + give you 10% off</p>
                            </div>
                        </div>
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-xl transition-all hover:bg-gray-100"
                        >
                            Learn More
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
