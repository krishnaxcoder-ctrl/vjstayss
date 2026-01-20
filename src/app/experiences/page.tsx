"use client";

import { ArrowRight, Star01, Clock, Users01, MarkerPin01, Heart, Camera03, Compass, Sun, Waves, Globe01, MusicNote02, Building07, Palette, Calendar, CheckCircle } from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/base/buttons/button";
import Link from "next/link";

const featuredExperiences = [
    {
        id: 1,
        name: "Sunrise Hot Air Balloon Ride",
        location: "Cappadocia, Turkey",
        image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop",
        price: 180,
        duration: "3 hours",
        rating: 4.9,
        reviews: 2456,
        category: "Adventure",
        featured: true,
        maxGroup: 12,
    },
    {
        id: 2,
        name: "Authentic Pasta Making Class",
        location: "Rome, Italy",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
        price: 85,
        duration: "4 hours",
        rating: 4.8,
        reviews: 1892,
        category: "Food & Drink",
        featured: true,
        maxGroup: 8,
    },
    {
        id: 3,
        name: "Private Yacht Sunset Cruise",
        location: "Santorini, Greece",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
        price: 350,
        duration: "5 hours",
        rating: 5.0,
        reviews: 987,
        category: "Water Sports",
        featured: true,
        maxGroup: 6,
    },
    {
        id: 4,
        name: "Safari Adventure Drive",
        location: "Serengeti, Tanzania",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
        price: 220,
        duration: "8 hours",
        rating: 4.9,
        reviews: 1567,
        category: "Nature",
        featured: true,
        maxGroup: 6,
    },
];

const allExperiences = [
    {
        id: 5,
        name: "Traditional Tea Ceremony",
        location: "Kyoto, Japan",
        image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=800&auto=format&fit=crop",
        price: 65,
        duration: "2 hours",
        rating: 4.8,
        reviews: 1234,
        category: "Culture",
        maxGroup: 10,
    },
    {
        id: 6,
        name: "Scuba Diving Adventure",
        location: "Great Barrier Reef, Australia",
        image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=800&auto=format&fit=crop",
        price: 195,
        duration: "6 hours",
        rating: 4.9,
        reviews: 2341,
        category: "Water Sports",
        maxGroup: 8,
    },
    {
        id: 7,
        name: "Flamenco Show & Tapas",
        location: "Seville, Spain",
        image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=800&auto=format&fit=crop",
        price: 75,
        duration: "3 hours",
        rating: 4.7,
        reviews: 1890,
        category: "Entertainment",
        maxGroup: 20,
    },
    {
        id: 8,
        name: "Northern Lights Tour",
        location: "Reykjavik, Iceland",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop",
        price: 145,
        duration: "5 hours",
        rating: 4.6,
        reviews: 3421,
        category: "Nature",
        maxGroup: 15,
    },
    {
        id: 9,
        name: "Street Art Walking Tour",
        location: "Berlin, Germany",
        image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=800&auto=format&fit=crop",
        price: 35,
        duration: "3 hours",
        rating: 4.8,
        reviews: 2156,
        category: "Art & Culture",
        maxGroup: 12,
    },
    {
        id: 10,
        name: "Helicopter City Tour",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=800&auto=format&fit=crop",
        price: 280,
        duration: "30 minutes",
        rating: 4.9,
        reviews: 1789,
        category: "Adventure",
        maxGroup: 4,
    },
    {
        id: 11,
        name: "Wine Tasting in Vineyards",
        location: "Tuscany, Italy",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
        price: 120,
        duration: "6 hours",
        rating: 4.8,
        reviews: 1456,
        category: "Food & Drink",
        maxGroup: 10,
    },
    {
        id: 12,
        name: "Desert Camel Trek",
        location: "Marrakech, Morocco",
        image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=800&auto=format&fit=crop",
        price: 95,
        duration: "4 hours",
        rating: 4.7,
        reviews: 2234,
        category: "Adventure",
        maxGroup: 8,
    },
];

const categories = [
    { icon: Compass, name: "Adventure", count: 156 },
    { icon: Building07, name: "Food & Drink", count: 234 },
    { icon: Waves, name: "Water Sports", count: 89 },
    { icon: Globe01, name: "Nature", count: 178 },
    { icon: Palette, name: "Art & Culture", count: 145 },
    { icon: MusicNote02, name: "Entertainment", count: 67 },
];

export default function ExperiencesPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#ff5a5f]/5">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0">
                    <div className="absolute -left-40 -top-40 size-[500px] rounded-full bg-[#ff5a5f]/10 blur-[120px]" />
                    <div className="absolute -bottom-40 -right-40 size-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
                    <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a5f]/5 blur-[100px]" />
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Main Content */}
                <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid min-h-[90vh] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a5f]/30 bg-[#ff5a5f]/10 px-4 py-2">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a5f] opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-[#ff5a5f]"></span>
                                </span>
                                <span className="text-sm font-medium text-[#ff5a5f]">500+ Curated Experiences</span>
                            </div>

                            {/* Heading */}
                            <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl">
                                Discover
                                <span className="relative mx-3 inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-[#ff5a5f] to-[#ff8a8e] bg-clip-text text-transparent">Unique</span>
                                    <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#ff5a5f]/20 blur-sm"></span>
                                </span>
                                <br />
                                Experiences
                            </h1>

                            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
                                From sunrise balloon rides over ancient landscapes to cooking classes with local chefs — discover experiences that transform travel into lasting stories.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Button
                                    href="#featured"
                                    size="xl"
                                    color="primary"
                                    iconTrailing={ArrowRight}
                                    className="bg-[#ff5a5f] hover:bg-[#ff5a5f] border-none"
                                >
                                    Explore Experiences
                                </Button>
                                <Button
                                    href="#categories"
                                    size="xl"
                                    color="secondary"
                                    iconLeading={Compass}
                                >
                                    Browse Categories
                                </Button>
                            </div>

                            {/* Stats Row */}
                            <div className="mt-12 flex items-center gap-8">
                                {[
                                    { value: "50K+", label: "Happy Travelers" },
                                    { value: "4.9", label: "Average Rating", icon: Star01 },
                                    { value: "100+", label: "Destinations" },
                                ].map((stat, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        {stat.icon && <stat.icon className="size-5 fill-amber-400 text-amber-400" />}
                                        <div>
                                            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-xs text-gray-500">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Floating Cards */}
                        <div className="relative order-1 h-[500px] lg:order-2 lg:h-[600px]">
                            {/* Main Featured Card */}
                            <div className="absolute left-1/2 top-1/2 z-20 w-72 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-500 hover:scale-105 md:w-80">
                                <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop"
                                            alt="Hot Air Balloon"
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute left-4 top-4 rounded-full bg-[#ff5a5f] px-3 py-1 text-xs font-bold text-white">
                                            Featured
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-1 text-white/90">
                                                <MarkerPin01 className="size-4" />
                                                <span className="text-sm">Cappadocia, Turkey</span>
                                            </div>
                                            <h3 className="mt-1 text-lg font-bold text-white">Hot Air Balloon Ride</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4">
                                        <div className="flex items-center gap-1">
                                            <Star01 className="size-4 fill-amber-400 text-amber-400" />
                                            <span className="text-sm font-semibold text-gray-900">4.9</span>
                                            <span className="text-sm text-gray-500">(2.4k)</span>
                                        </div>
                                        <p className="text-lg font-bold text-gray-900">$180</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Top Right */}
                            <div className="absolute right-0 top-0 z-10 hidden w-48 animate-[float_6s_ease-in-out_infinite] md:block">
                                <div className="overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop"
                                        alt="Yacht"
                                        className="aspect-square rounded-xl object-cover"
                                    />
                                    <div className="p-2">
                                        <p className="text-xs text-gray-500">Santorini</p>
                                        <p className="text-sm font-semibold text-gray-900">Yacht Cruise</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Bottom Left */}
                            <div className="absolute bottom-10 left-0 z-10 hidden w-44 animate-[float_5s_ease-in-out_infinite_0.5s] md:block">
                                <div className="overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop"
                                        alt="Cooking"
                                        className="aspect-square rounded-xl object-cover"
                                    />
                                    <div className="p-2">
                                        <p className="text-xs text-gray-500">Rome, Italy</p>
                                        <p className="text-sm font-semibold text-gray-900">Pasta Making</p>
                                    </div>
                                </div>
                            </div>

                            {/* Small Badge Cards */}
                            <div className="absolute bottom-32 right-4 z-30 animate-[float_4s_ease-in-out_infinite_1s]">
                                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg shadow-gray-200/50 ring-1 ring-gray-100">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="size-8 rounded-full border-2 border-white bg-gray-300"
                                                style={{
                                                    backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 30}.jpg)`,
                                                    backgroundSize: 'cover'
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-900">2.5k+ joined</p>
                                        <p className="text-xs text-gray-500">this week</p>
                                    </div>
                                </div>
                            </div>

                            {/* Camera Icon Badge */}
                            <div className="absolute left-10 top-10 z-10 animate-[float_7s_ease-in-out_infinite_0.3s]">
                                <div className="flex size-16 items-center justify-center rounded-2xl bg-[#ff5a5f]/10 shadow-lg shadow-[#ff5a5f]/10 ring-1 ring-[#ff5a5f]/20">
                                    <Camera03 className="size-8 text-[#ff5a5f]" />
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute left-20 top-32 size-20 rounded-full border border-[#ff5a5f]/20" />
                            <div className="absolute bottom-20 right-20 size-32 rounded-full border border-purple-500/10" />
                        </div>
                    </div>
                </div>

                {/* Custom Animation Keyframes */}
                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                `}</style>
            </section>

            {/* Categories Section */}
            <section id="categories" className="scroll-mt-20 bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Browse by Category
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Find the perfect experience for your travel style
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/experiences?category=${category.name.toLowerCase()}`}
                                className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all hover:border-[#ff5a5f]/30 hover:shadow-lg"
                            >
                                <div className="flex size-14 items-center justify-center rounded-xl bg-[#ff5a5f]/10 transition-colors group-hover:bg-[#ff5a5f]">
                                    <category.icon className="size-7 text-[#ff5a5f] transition-colors group-hover:text-white" />
                                </div>
                                <h3 className="mt-4 font-semibold text-gray-900">{category.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{category.count} experiences</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Experiences */}
            <section id="featured" className="scroll-mt-20 py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mb-12 flex items-end justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                                <Star01 className="size-4 text-[#ff5a5f]" />
                                <span className="text-sm font-semibold text-[#ff5a5f]">Featured</span>
                            </div>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                                Must-Do Experiences
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Our most popular and highly-rated adventures
                            </p>
                        </div>
                        <Link
                            href="#all"
                            className="hidden items-center gap-2 text-sm font-semibold text-[#ff5a5f] transition-colors hover:text-[#ff5a5f] sm:flex"
                        >
                            View All
                            <ArrowRight className="size-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {featuredExperiences.map((experience) => (
                            <Link
                                key={experience.id}
                                href={`/experiences/${experience.id}`}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={experience.image}
                                        alt={experience.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm">
                                        {experience.category}
                                    </div>

                                    {/* Wishlist */}
                                    <button
                                        type="button"
                                        className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#ff5a5f]"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Heart className="size-5" />
                                    </button>

                                    {/* Duration & Group */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                        <div className="flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                                            <Clock className="size-3.5 text-white" />
                                            <span className="text-xs font-medium text-white">{experience.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                                            <Users01 className="size-3.5 text-white" />
                                            <span className="text-xs font-medium text-white">Max {experience.maxGroup}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Rating */}
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <Star01 className="size-4 fill-amber-400 text-amber-400" />
                                            <span className="text-sm font-bold text-gray-900">{experience.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500">({experience.reviews.toLocaleString()})</span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                        {experience.name}
                                    </h3>

                                    {/* Location */}
                                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                                        <MarkerPin01 className="size-4 text-gray-400" />
                                        {experience.location}
                                    </div>

                                    {/* Price */}
                                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                        <div>
                                            <span className="text-sm text-gray-500">From</span>
                                            <p className="text-xl font-bold text-gray-900">${experience.price}</p>
                                        </div>
                                        <span className="rounded-full bg-[#ff5a5f]/10 px-4 py-2 text-sm font-semibold text-[#ff5a5f] transition-all group-hover:bg-[#ff5a5f] group-hover:text-white">
                                            Book Now
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Experiences */}
            <section id="all" className="scroll-mt-20 bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            All Experiences
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Explore our complete collection of adventures
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {allExperiences.map((experience) => (
                            <Link
                                key={experience.id}
                                href={`/experiences/${experience.id}`}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={experience.image}
                                        alt={experience.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm">
                                        {experience.category}
                                    </div>

                                    {/* Duration */}
                                    <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm">
                                        <Clock className="size-3 text-white" />
                                        <span className="text-xs font-medium text-white">{experience.duration}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <div className="mb-1.5 flex items-center gap-1">
                                        <Star01 className="size-3.5 fill-amber-400 text-amber-400" />
                                        <span className="text-xs font-bold text-gray-900">{experience.rating}</span>
                                        <span className="text-xs text-gray-500">({experience.reviews})</span>
                                    </div>

                                    <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                        {experience.name}
                                    </h3>

                                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                                        <MarkerPin01 className="size-3 text-gray-400" />
                                        {experience.location}
                                    </div>

                                    <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                                        <div>
                                            <span className="text-xs text-gray-500">From </span>
                                            <span className="font-bold text-gray-900">${experience.price}</span>
                                        </div>
                                        <ArrowRight className="size-4 text-[#ff5a5f] transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-12 text-center">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-[#ff5a5f] hover:text-[#ff5a5f]"
                        >
                            Load More Experiences
                            <ArrowRight className="size-5" />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
