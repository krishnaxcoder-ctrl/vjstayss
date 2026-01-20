"use client";

import { ArrowRight, Globe01, MarkerPin01, Star01, Users01, Plane, Sun, Compass, Heart, Calendar, Map01, Building07, Waves, Camera01, Flag01, Briefcase01, Snowflake01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { SiteHeader } from "@/components/layout/site-header";
import Link from "next/link";

const featuredDestinations = [
    {
        id: 1,
        name: "Paris",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        description: "The City of Light beckons with iconic landmarks and world-class cuisine",
        properties: 2450,
        rating: 4.9,
        popular: true,
    },
    {
        id: 2,
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        description: "Tropical paradise with stunning temples and pristine beaches",
        properties: 1890,
        rating: 4.8,
        popular: true,
    },
    {
        id: 3,
        name: "Tokyo",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
        description: "Where ancient tradition meets cutting-edge modernity",
        properties: 3200,
        rating: 4.9,
        popular: true,
    },
    {
        id: 4,
        name: "Santorini",
        country: "Greece",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop",
        description: "Breathtaking sunsets and iconic white-washed architecture",
        properties: 980,
        rating: 4.9,
        popular: true,
    },
    {
        id: 5,
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
        description: "Luxury shopping, ultramodern architecture, and vibrant nightlife",
        properties: 2100,
        rating: 4.7,
        popular: false,
    },
    {
        id: 6,
        name: "Maldives",
        country: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
        description: "Crystal-clear waters and overwater villas in paradise",
        properties: 650,
        rating: 5.0,
        popular: true,
    },
    {
        id: 7,
        name: "New York",
        country: "USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
        description: "The city that never sleeps with iconic skyline and culture",
        properties: 4500,
        rating: 4.8,
        popular: true,
    },
    {
        id: 8,
        name: "London",
        country: "United Kingdom",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
        description: "Historic landmarks, royal palaces, and vibrant neighborhoods",
        properties: 3800,
        rating: 4.8,
        popular: true,
    },
    {
        id: 9,
        name: "Barcelona",
        country: "Spain",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=800&auto=format&fit=crop",
        description: "Gaudí architecture, Mediterranean beaches, and tapas culture",
        properties: 2100,
        rating: 4.7,
        popular: false,
    },
    {
        id: 10,
        name: "Rome",
        country: "Italy",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop",
        description: "Ancient ruins, Renaissance art, and delicious Italian cuisine",
        properties: 2800,
        rating: 4.9,
        popular: true,
    },
    {
        id: 11,
        name: "Sydney",
        country: "Australia",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop",
        description: "Stunning harbor, iconic Opera House, and beautiful beaches",
        properties: 1950,
        rating: 4.8,
        popular: false,
    },
    {
        id: 12,
        name: "Singapore",
        country: "Singapore",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
        description: "Futuristic cityscape, gardens, and world-class dining",
        properties: 1650,
        rating: 4.9,
        popular: true,
    },
];

const continents = [
    { name: "Europe", destinations: 45, image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop" },
    { name: "Asia", destinations: 38, image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=800&auto=format&fit=crop" },
    { name: "Americas", destinations: 32, image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop" },
    { name: "Africa", destinations: 24, image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop" },
    { name: "Oceania", destinations: 18, image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop" },
];

const travelStyles = [
    { icon: Sun, name: "Beach Getaway", count: 156 },
    { icon: Compass, name: "Adventure", count: 89 },
    { icon: Heart, name: "Romantic", count: 124 },
    { icon: Users01, name: "Family", count: 203 },
    { icon: Map01, name: "Mountain Escapes", count: 78 },
    { icon: Building07, name: "City Breaks", count: 245 },
    { icon: Waves, name: "Water Sports", count: 67 },
    { icon: Camera01, name: "Photography Tours", count: 42 },
    { icon: Flag01, name: "Culinary & Food", count: 95 },
    { icon: Briefcase01, name: "Business Travel", count: 180 },
    { icon: Snowflake01, name: "Winter Holidays", count: 54 },
    { icon: Globe01, name: "Cultural Heritage", count: 112 },
];

export default function DestinationsPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#ff5a5f]/5">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0">
                    <div className="absolute -left-40 -top-40 size-[500px] rounded-full bg-[#ff5a5f]/10 blur-[120px]" />
                    <div className="absolute -bottom-40 -right-40 size-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
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
                                <span className="text-sm font-medium text-[#ff5a5f]">100+ Amazing Destinations</span>
                            </div>

                            {/* Heading */}
                            <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl">
                                Explore the
                                <span className="relative mx-3 inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-[#ff5a5f] to-[#ff8a8e] bg-clip-text text-transparent">World's</span>
                                    <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#ff5a5f]/20 blur-sm"></span>
                                </span>
                                <br />
                                Best Places
                            </h1>

                            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
                                From the romantic streets of Paris to the pristine beaches of Maldives — discover handpicked destinations that will take your breath away.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Button
                                    href="/search"
                                    size="xl"
                                    iconTrailing={ArrowRight}
                                    className="bg-[#ff5a5f] hover:bg-[#ff5a5f] border-none"
                                >
                                    Start Exploring
                                </Button>
                                <Button
                                    href="#featured"
                                    size="xl"
                                    color="secondary"
                                    iconLeading={Plane}
                                >
                                    View Featured
                                </Button>
                            </div>

                            {/* Stats Row */}
                            <div className="mt-12 flex items-center gap-8">
                                {[
                                    { value: "100+", label: "Destinations" },
                                    { value: "4.9", label: "Average Rating", icon: Star01 },
                                    { value: "50K+", label: "Happy Travelers" },
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

                        {/* Right Side - Floating Destination Cards */}
                        <div className="relative order-1 h-[500px] lg:order-2 lg:h-[600px]">
                            {/* Main Featured Card - Paris */}
                            <div className="absolute left-1/2 top-1/2 z-20 w-72 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-500 hover:scale-105 md:w-80">
                                <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop"
                                            alt="Paris"
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute left-4 top-4 rounded-full bg-[#ff5a5f] px-3 py-1 text-xs font-bold text-white">
                                            Popular
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-1 text-white/90">
                                                <MarkerPin01 className="size-4" />
                                                <span className="text-sm">France</span>
                                            </div>
                                            <h3 className="mt-1 text-2xl font-bold text-white">Paris</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4">
                                        <div className="flex items-center gap-1">
                                            <Star01 className="size-4 fill-amber-400 text-amber-400" />
                                            <span className="text-sm font-semibold text-gray-900">4.9</span>
                                            <span className="text-sm text-gray-500">(2.4k reviews)</span>
                                        </div>
                                        <p className="text-sm text-gray-500">2,450 properties</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Top Right - Bali */}
                            <div className="absolute right-0 top-0 z-10 hidden w-48 animate-[float_6s_ease-in-out_infinite] md:block">
                                <div className="overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=400&auto=format&fit=crop"
                                        alt="Bali"
                                        className="aspect-square rounded-xl object-cover"
                                    />
                                    <div className="p-2">
                                        <p className="text-xs text-gray-500">Indonesia</p>
                                        <p className="text-sm font-semibold text-gray-900">Bali</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Bottom Left - Santorini */}
                            <div className="absolute bottom-10 left-0 z-10 hidden w-44 animate-[float_5s_ease-in-out_infinite_0.5s] md:block">
                                <div className="overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=400&auto=format&fit=crop"
                                        alt="Santorini"
                                        className="aspect-square rounded-xl object-cover"
                                    />
                                    <div className="p-2">
                                        <p className="text-xs text-gray-500">Greece</p>
                                        <p className="text-sm font-semibold text-gray-900">Santorini</p>
                                    </div>
                                </div>
                            </div>

                            {/* Small Badge - Travelers */}
                            <div className="absolute bottom-32 right-4 z-30 animate-[float_4s_ease-in-out_infinite_1s]">
                                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg shadow-gray-200/50 ring-1 ring-gray-100">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="size-8 rounded-full border-2 border-white bg-gray-300"
                                                style={{
                                                    backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg)`,
                                                    backgroundSize: 'cover'
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-900">1.2k+ exploring</p>
                                        <p className="text-xs text-gray-500">right now</p>
                                    </div>
                                </div>
                            </div>

                            {/* Globe Icon Badge */}
                            <div className="absolute left-10 top-10 z-10 animate-[float_7s_ease-in-out_infinite_0.3s]">
                                <div className="flex size-16 items-center justify-center rounded-2xl bg-[#ff5a5f]/10 shadow-lg shadow-[#ff5a5f]/10 ring-1 ring-[#ff5a5f]/20">
                                    <Globe01 className="size-8 text-[#ff5a5f]" />
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute left-20 top-32 size-20 rounded-full border border-[#ff5a5f]/20" />
                            <div className="absolute bottom-20 right-20 size-32 rounded-full border border-blue-500/10" />
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

            {/* Travel Styles */}
            <section className="py-6">
                <div className="mx-auto max-w-8xl px-6 lg:px-0">
                    <div className="flex flex-wrap justify-center gap-4">
                        {travelStyles.map((style, index) => (
                            <Link
                                key={index}
                                href={`/search?style=${style.name.toLowerCase()}`}
                                className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 transition-all hover:border-[#ff5a5f] hover:shadow-lg"
                            >
                                <div className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f]/10 transition-colors group-hover:bg-[#ff5a5f]">
                                    <style.icon className="size-5 text-[#ff5a5f] transition-colors group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{style.name}</p>
                                    <p className="text-xs text-gray-500">{style.count} destinations</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Destinations */}
            <section id="featured" className="scroll-mt-20 bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                            <Star01 className="size-4 text-[#ff5a5f]" />
                            <span className="text-sm font-semibold text-[#ff5a5f]">Featured</span>
                        </div>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Popular Destinations
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Explore our most loved destinations chosen by thousands of travelers
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {featuredDestinations.map((destination) => (
                            <Link
                                key={destination.id}
                                href={`/search?destination=${destination.name.toLowerCase()}`}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                    {/* Popular Badge */}
                                    {destination.popular && (
                                        <div className="absolute left-3 top-3 rounded-full bg-[#ff5a5f] px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                                            Popular
                                        </div>
                                    )}

                                    {/* Rating */}
                                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
                                        <Star01 className="size-3 fill-amber-400 text-amber-400" />
                                        <span className="text-xs font-bold text-gray-900">{destination.rating}</span>
                                    </div>

                                    {/* Destination Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                                        <div className="flex items-center gap-1 text-white/80">
                                            <MarkerPin01 className="size-3.5" />
                                            <span className="text-xs">{destination.country}</span>
                                        </div>
                                        <p className="mt-2 line-clamp-2 text-xs text-white/70">{destination.description}</p>
                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="text-xs text-white/80">
                                                <span className="font-semibold text-white">{destination.properties.toLocaleString()}</span> properties
                                            </span>
                                            <span className="flex items-center gap-1 text-xs font-semibold text-white transition-colors">
                                                Explore
                                                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Browse by Continent */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Browse by Continent
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Find destinations across every corner of the world
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {continents.map((continent, index) => (
                            <Link
                                key={index}
                                href={`/search?continent=${continent.name.toLowerCase()}`}
                                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={continent.image}
                                    alt={continent.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-xl font-bold text-white">{continent.name}</h3>
                                    <p className="text-sm text-white/80">{continent.destinations} destinations</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#ff5a5f] py-16">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">
                                Ready for your next adventure?
                            </h2>
                            <p className="mt-2 text-lg text-white/80">
                                Sign up now and get exclusive deals on your first booking
                            </p>
                        </div>
                        <Link
                            href="/search"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#ff5a5f] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
                        >
                            <Calendar className="size-5" />
                            Plan Your Trip
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
