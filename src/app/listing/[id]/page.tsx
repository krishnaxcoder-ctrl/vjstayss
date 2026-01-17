"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductCard } from "@/components/booking/product-card";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import {
    Star01,
    Heart,
    Share07,
    MarkerPin01,
    Wifi,
    CheckCircle,
    Home02,
    Sun,
    Snowflake01,
    Tv03,
    Users01,
    Calendar,
    ArrowLeft,
    Clock,
    Map01,
    NavigationPointer01,
} from "@untitledui/icons";

const listings: Record<string, {
    name: string;
    location: string;
    images: string[];
    rating: number;
    reviews: number;
    price: number;
    originalPrice?: number;
    description: string;
    type: string;
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
    amenities: string[];
    host: {
        name: string;
        image: string;
        joined: string;
        responseRate: string;
    };
    highlights: string[];
}> = {
    "1": {
        name: "The Ritz-Carlton",
        location: "Paris, France",
        images: [
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        ],
        rating: 4.9,
        reviews: 2456,
        price: 320,
        originalPrice: 450,
        description: "Experience the epitome of Parisian luxury at The Ritz-Carlton. Nestled in the heart of the city, this stunning property offers breathtaking views of the Eiffel Tower, world-class dining, and impeccable service. Each room is meticulously designed with elegant furnishings, marble bathrooms, and modern amenities to ensure your stay is nothing short of extraordinary.",
        type: "Luxury Hotel",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        amenities: ["Free WiFi", "Parking", "Air Conditioning", "Room Service", "Spa", "Pool", "Gym", "Restaurant"],
        host: {
            name: "Ritz-Carlton Hotels",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
            joined: "2015",
            responseRate: "100%",
        },
        highlights: ["Breakfast included", "Free cancellation", "City center location"],
    },
    "2": {
        name: "Aman Tokyo",
        location: "Tokyo, Japan",
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
        ],
        rating: 4.8,
        reviews: 1892,
        price: 285,
        originalPrice: 380,
        description: "Aman Tokyo offers a serene urban sanctuary in the heart of Japan's bustling capital. Drawing on traditional Japanese design, the hotel features spacious rooms with floor-to-ceiling windows, natural materials, and minimalist aesthetics. Enjoy the tranquil spa, exquisite dining, and unparalleled views of the Imperial Palace gardens.",
        type: "Luxury Hotel",
        guests: 2,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        amenities: ["Free WiFi", "Spa", "Pool", "Gym", "Restaurant", "Concierge", "Room Service", "Bar"],
        host: {
            name: "Aman Resorts",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
            joined: "2014",
            responseRate: "99%",
        },
        highlights: ["Free cancellation", "Traditional Japanese design", "Imperial Palace views"],
    },
    "100": {
        name: "Hawaii Island Paradise",
        location: "Hawaii, USA",
        images: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
        ],
        rating: 4.7,
        reviews: 1234,
        price: 500,
        description: "Hawaii Island, also known as the Big Island, is a paradise of breathtaking contrasts. This beachfront villa offers direct access to pristine white sand beaches, stunning ocean views, and tropical gardens. Experience authentic Hawaiian hospitality with modern comforts in this stunning retreat.",
        type: "Beachfront Villa",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        baths: 2,
        amenities: ["Free WiFi", "Beach Access", "Pool", "Kitchen", "Air Conditioning", "Parking", "BBQ", "Ocean View"],
        host: {
            name: "Hawaiian Retreats",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
            joined: "2018",
            responseRate: "98%",
        },
        highlights: ["Beachfront location", "Private pool", "Sunset views"],
    },
    "101": {
        name: "Bali Island Retreat",
        location: "Bali, Indonesia",
        images: [
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1570789210967-2cac24ba7e8e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=800&auto=format&fit=crop",
        ],
        rating: 4.7,
        reviews: 2100,
        price: 350,
        description: "Bali, Indonesia's most iconic destination, offers a perfect blend of culture, nature, and relaxation. This stunning villa is nestled among rice terraces and tropical forests, offering an authentic Balinese experience with modern luxury. Enjoy private pools, outdoor living spaces, and world-class spa treatments.",
        type: "Private Villa",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        amenities: ["Free WiFi", "Private Pool", "Kitchen", "Garden", "Air Conditioning", "Spa", "Yoga Deck", "Rice Field View"],
        host: {
            name: "Bali Luxury Stays",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
            joined: "2016",
            responseRate: "97%",
        },
        highlights: ["Rice terrace views", "Daily breakfast", "Airport transfer"],
    },
};

const defaultListing = {
    name: "Luxury Stay",
    location: "Beautiful Location",
    images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    ],
    rating: 4.8,
    reviews: 500,
    price: 250,
    description: "Experience an unforgettable stay at this beautiful property. Featuring stunning views, modern amenities, and exceptional service, this is the perfect destination for your next getaway. Relax in comfort and style while exploring everything the area has to offer.",
    type: "Hotel",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    amenities: ["Free WiFi", "Air Conditioning", "Room Service", "Pool", "Gym"],
    host: {
        name: "Premium Stays",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
        joined: "2020",
        responseRate: "95%",
    },
    highlights: ["Great location", "Highly rated", "Excellent service"],
};

const amenityIcons: Record<string, React.ElementType> = {
    "Free WiFi": Wifi,
    "Parking": CheckCircle,
    "Air Conditioning": Snowflake01,
    "Room Service": Sun,
    "Kitchen": Home02,
    "Pool": Home02,
    "Gym": Home02,
    "Spa": Home02,
    "Restaurant": Sun,
    "Beach Access": Home02,
    "Garden": Home02,
    "TV": Tv03,
};

const reviews = [
    {
        id: 1,
        user: {
            name: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
            location: "New York, USA",
        },
        rating: 5,
        date: "December 2024",
        comment: "Absolutely stunning property! The views were breathtaking and the amenities exceeded our expectations. The host was incredibly responsive and made sure we had everything we needed. Would definitely book again!",
    },
    {
        id: 2,
        user: {
            name: "Michael Chen",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
            location: "San Francisco, USA",
        },
        rating: 5,
        date: "November 2024",
        comment: "Perfect getaway spot! The location was ideal - close to restaurants and attractions but still peaceful and private. The room was immaculate and beautifully decorated. Highly recommend!",
    },
    {
        id: 3,
        user: {
            name: "Emma Williams",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
            location: "London, UK",
        },
        rating: 4,
        date: "November 2024",
        comment: "Great stay overall! The property was exactly as pictured and the check-in process was seamless. Only minor issue was the WiFi was a bit slow at times, but otherwise everything was perfect.",
    },
    {
        id: 4,
        user: {
            name: "James Rodriguez",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
            location: "Miami, USA",
        },
        rating: 5,
        date: "October 2024",
        comment: "We celebrated our anniversary here and it was magical! The attention to detail was impressive - from the welcome basket to the perfectly stocked kitchen. The sunset views from the balcony were unforgettable.",
    },
    {
        id: 5,
        user: {
            name: "Lisa Park",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
            location: "Seoul, South Korea",
        },
        rating: 5,
        date: "October 2024",
        comment: "This place is a hidden gem! Super clean, modern amenities, and the host provided excellent local recommendations. The bed was so comfortable I didn't want to leave. Will definitely be back!",
    },
    {
        id: 6,
        user: {
            name: "David Thompson",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
            location: "Sydney, Australia",
        },
        rating: 4,
        date: "September 2024",
        comment: "Lovely property with great character. The location was perfect for exploring the area. The kitchen was well-equipped which was great for preparing meals. Would recommend for couples or solo travelers.",
    },
];

const ratingCategories = [
    { name: "Cleanliness", rating: 4.9 },
    { name: "Accuracy", rating: 4.8 },
    { name: "Communication", rating: 5.0 },
    { name: "Location", rating: 4.9 },
    { name: "Check-in", rating: 5.0 },
    { name: "Value", rating: 4.7 },
];

const relatedListings = [
    {
        id: "3",
        name: "Four Seasons Resort",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
        price: 390,
        rating: 4.9,
        reviews: 3124,
    },
    {
        id: "4",
        name: "Burj Al Arab",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        price: 712,
        rating: 5.0,
        reviews: 4567,
    },
    {
        id: "5",
        name: "Marina Bay Sands",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        price: 336,
        rating: 4.8,
        reviews: 3891,
    },
    {
        id: "102",
        name: "Maldives Paradise",
        location: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
        price: 800,
        rating: 4.6,
        reviews: 2100,
    },
];

export default function ListingPage() {
    const params = useParams();
    const id = params.id as string;
    const listing = listings[id] || defaultListing;

    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            <main className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{listing.name}</h1>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#ff5a5f]"
                        >
                            <ArrowLeft className="size-4" />
                            Back to listings
                        </Link>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Star01 className="size-5 fill-[#ff5a5f] text-[#ff5a5f]" />
                            <span className="font-semibold text-gray-900">{listing.rating}</span>
                            <span className="text-gray-500">({listing.reviews.toLocaleString()} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <MarkerPin01 className="size-5" />
                            <span>{listing.location}</span>
                        </div>
                        <div className="ml-auto flex items-center gap-3">
                            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                                <Share07 className="size-4" />
                                Share
                            </button>
                            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                                <Heart className="size-4" />
                                Save
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-10 grid grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2">
                    <div className="md:col-span-2 md:row-span-2">
                        <img
                            src={listing.images[0]}
                            alt={listing.name}
                            className="h-full max-h-[500px] w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    {listing.images.slice(1, 5).map((image, index) => (
                        <div key={index} className="hidden md:block">
                            <img
                                src={image}
                                alt={`${listing.name} ${index + 2}`}
                                className="h-full max-h-[248px] w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2">
                        {/* Property Type & Stats */}
                        <div className="border-b border-gray-200 pb-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">{listing.type}</h2>
                                    <p className="mt-1 text-gray-600">
                                        {listing.guests} guests · {listing.bedrooms} bedroom{listing.bedrooms > 1 ? "s" : ""} · {listing.beds} bed{listing.beds > 1 ? "s" : ""} · {listing.baths} bath{listing.baths > 1 ? "s" : ""}
                                    </p>
                                </div>
                                <img
                                    src={listing.host.image}
                                    alt={listing.host.name}
                                    className="size-14 rounded-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="border-b border-gray-200 py-8">
                            <div className="space-y-4">
                                {listing.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="flex size-10 items-center justify-center rounded-lg bg-[#ff5a5f]/10">
                                            <CheckCircle className="size-5 text-[#ff5a5f]" />
                                        </div>
                                        <span className="font-medium text-gray-900">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border-b border-gray-200 py-8">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">About this place</h3>
                            <p className="leading-relaxed text-gray-600">{listing.description}</p>
                        </div>

                        {/* Amenities */}
                        <div className="border-b border-gray-200 py-8">
                            <h3 className="mb-6 text-xl font-semibold text-gray-900">What this place offers</h3>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                {listing.amenities.map((amenity, index) => {
                                    const Icon = amenityIcons[amenity] || Home02;
                                    return (
                                        <div key={index} className="flex items-center gap-4">
                                            <Icon className="size-6 text-gray-600" />
                                            <span className="text-gray-700">{amenity}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Host Info */}
                        <div className="border-b border-gray-200 py-8">
                            <h3 className="mb-6 text-xl font-semibold text-gray-900">Hosted by {listing.host.name}</h3>
                            <div className="flex items-start gap-6">
                                <img
                                    src={listing.host.image}
                                    alt={listing.host.name}
                                    className="size-16 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-gray-600">Joined in {listing.host.joined}</p>
                                    <p className="mt-1 text-gray-600">Response rate: {listing.host.responseRate}</p>
                                    <button className="mt-4 rounded-lg border border-gray-900 px-6 py-2 font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                                        Contact Host
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="py-8">
                            {/* Reviews Header */}
                            <div className="mb-8 flex items-center gap-2">
                                <Star01 className="size-6 fill-[#ff5a5f] text-[#ff5a5f]" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {listing.rating} · {listing.reviews.toLocaleString()} reviews
                                </h3>
                            </div>

                            {/* Rating Categories */}
                            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {ratingCategories.map((category) => (
                                    <div key={category.name} className="flex items-center justify-between">
                                        <span className="text-gray-600">{category.name}</span>
                                        <div className="flex items-center gap-3">
                                            <div className="h-1 w-32 overflow-hidden rounded-full bg-gray-200">
                                                <div
                                                    className="h-full rounded-full bg-gray-900"
                                                    style={{ width: `${(category.rating / 5) * 100}%` }}
                                                />
                                            </div>
                                            <span className="w-8 text-sm font-medium text-gray-900">{category.rating}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Individual Reviews */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {reviews.map((review) => (
                                    <div key={review.id} className="space-y-4 rounded-xl border border-gray-200 p-5">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={review.user.image}
                                                alt={review.user.name}
                                                className="size-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-900">{review.user.name}</p>
                                                <p className="text-sm text-gray-500">{review.user.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star01
                                                        key={i}
                                                        className={`size-4 ${i < review.rating ? "fill-[#ff5a5f] text-[#ff5a5f]" : "text-gray-300"}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-500">· {review.date}</span>
                                        </div>
                                        <p className="line-clamp-4 text-gray-600">{review.comment}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Show All Reviews Button */}
                            <button className="mt-8 rounded-lg border border-gray-900 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                                Show all {listing.reviews.toLocaleString()} reviews
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-gray-900">${listing.price}</span>
                                    {listing.originalPrice && (
                                        <span className="text-lg text-gray-400 line-through">${listing.originalPrice}</span>
                                    )}
                                    <span className="text-gray-600">/ night</span>
                                </div>
                                {listing.originalPrice && (
                                    <span className="mt-1 inline-block rounded-full bg-[#ff5a5f]/10 px-3 py-1 text-sm font-medium text-[#ff5a5f]">
                                        {Math.round((1 - listing.price / listing.originalPrice) * 100)}% OFF
                                    </span>
                                )}
                            </div>

                            {/* Date Inputs */}
                            <div className="mb-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Check-in"
                                        type="date"
                                        placeholder="mm/dd/yyyy"
                                        icon={Calendar}
                                    />
                                    <Input
                                        label="Checkout"
                                        type="date"
                                        placeholder="mm/dd/yyyy"
                                        icon={Calendar}
                                    />
                                </div>
                                <Select
                                    label="Guests"
                                    placeholder="Select guests"
                                    selectedKey="2"
                                    items={[
                                        { id: "1", label: "1 guest" },
                                        { id: "2", label: "2 guests" },
                                        { id: "3", label: "3 guests" },
                                        { id: "4", label: "4 guests" },
                                    ]}
                                >
                                    {(item) => <Select.Item key={item.id}>{item.label}</Select.Item>}
                                </Select>
                            </div>

                            {/* Book Button */}
                            <button className="w-full rounded-xl bg-[#ff5a5f] py-4 text-lg font-semibold text-white transition-colors hover:bg-[#e04850]">
                                Reserve Now
                            </button>

                            <p className="mt-4 text-center text-sm text-gray-500">You won't be charged yet</p>

                            {/* Price Breakdown */}
                            <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>${listing.price} x 3 nights</span>
                                    <span>${listing.price * 3}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Cleaning fee</span>
                                    <span>$50</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Service fee</span>
                                    <span>$75</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 pt-3 font-semibold text-gray-900">
                                    <span>Total</span>
                                    <span>${listing.price * 3 + 50 + 75}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Listings Section */}
                <section className="mt-16 border-t border-gray-200 pt-12">
                    <h2 className="mb-8 text-2xl font-bold text-gray-900">You might also like</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {relatedListings.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                location={item.location}
                                image={item.image}
                                rating={item.rating}
                                reviews={item.reviews}
                                price={item.price}
                                variant="compact"
                                showWishlist={true}
                                showBookButton={false}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
