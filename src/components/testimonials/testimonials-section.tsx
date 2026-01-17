"use client";

import { Star01 } from "@untitledui/icons";

const testimonials = [
    {
        stars: 5,
        badge: "50% Saved",
        badgeColor: "bg-green-100 text-green-700",
        quote: "I've booked over 20 stays in the past 6 months. The deals are incredible - saved over ₹1,50,000 on hotel bookings! The platform makes finding the perfect stay so easy and enjoyable.",
        name: "Rajesh Kumar",
        role: "Frequent Traveler",
        location: "Mumbai, India",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        stars: 5,
        badge: "40% Off",
        badgeColor: "bg-green-100 text-green-700",
        quote: "Got a luxury resort for 40% off retail. The booking process is exciting and the platform is super easy to use! Customer support is always helpful and responsive.",
        name: "Arjun Sharma",
        role: "Business Traveler",
        location: "Bangalore, India",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        stars: 5,
        badge: "100+ Stays",
        badgeColor: "bg-[#ff5a5f]/10 text-[#ff5a5f]",
        quote: "Best hotel booking platform I've used. Great selection of properties, verified listings, and fast confirmation. Highly recommend to anyone looking for quality accommodations!",
        name: "Vikram Patel",
        role: "Travel Blogger",
        location: "Ahmedabad, India",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        stars: 5,
        badge: "60% Saved",
        badgeColor: "bg-green-100 text-green-700",
        quote: "Found boutique hotels I couldn't find anywhere else. The verification process gives me complete confidence in every booking. Truly a game-changer for travelers.",
        name: "Priya Nair",
        role: "Solo Traveler",
        location: "Chennai, India",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        stars: 5,
        badge: "45% Off",
        badgeColor: "bg-green-100 text-green-700",
        quote: "I've won amazing deals on premium resorts at incredible prices. The real-time availability feature is so convenient! Love the instant confirmations that keep me updated.",
        name: "Amit Singh",
        role: "Family Vacationer",
        location: "Delhi, India",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
        stars: 5,
        badge: "30+ Trips",
        badgeColor: "bg-[#ff5a5f]/10 text-[#ff5a5f]",
        quote: "Found hidden gem properties I've been searching for years. The host verification gives me peace of mind. Booking was fast and stays were exactly as described.",
        name: "Sneha Reddy",
        role: "Adventure Seeker",
        location: "Hyderabad, India",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="border-y-2 border-[#ff5a5f] py-16 lg:py-24">
            <div className="mx-auto max-w-8xl px-6 lg:px-12">
                {/* Header */}
                <div className="text-center">
                    <span className="inline-flex rounded-full border border-[#ff5a5f]/30 bg-white px-4 py-1.5 text-sm font-medium text-[#ff5a5f]">
                        Testimonials
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                        Loved by travelers worldwide
                    </h2>
                    <p className="mt-3 text-lg text-gray-600">
                        See what our guests are saying about their amazing experiences.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
                        >
                            {/* Stars and Badge */}
                            <div className="flex items-center justify-between">
                                <div className="flex gap-0.5">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <Star01 key={i} className="size-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${testimonial.badgeColor}`}>
                                    {testimonial.badge}
                                </span>
                            </div>

                            {/* Quote */}
                            <p className="mt-4 flex-1 text-gray-600">"{testimonial.quote}"</p>

                            {/* Divider */}
                            <div className="my-5 h-px bg-gray-100" />

                            {/* User Info */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="size-11 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.role} • {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
