"use client";

import { useState } from "react";
import { ArrowRight, Star01 } from "@untitledui/icons";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Travel Blogger",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "I've tried many travel sites, but this one truly stands out for its simplicity and great prices.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Digital Nomad",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "The personalized recommendations are spot on. Every trip has been amazing thanks to this platform.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Adventure Seeker",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "24/7 support saved my trip when I had last-minute changes. Couldn't be happier!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=800&auto=format&fit=crop",
    },
];

export const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="bg-gray-50 px-6 py-20 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <span className="text-sm font-medium uppercase tracking-wider text-[#ff5a5f]">Testimonials</span>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            What Our Customer{" "}
                            <span className="text-[#0a4a4a]">Says About Us</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">
                            See why travelers love<br />
                            booking their trips with us!
                        </p>
                    </div>
                </div>

                {/* Testimonial Content */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <img
                            src={activeTestimonial.image}
                            alt="Travel destination"
                            className="h-full min-h-[400px] w-full object-cover"
                        />
                    </div>

                    {/* Quote */}
                    <div className="flex flex-col justify-center">
                        {/* Rating */}
                        <div className="mb-6 flex gap-1">
                            {[...Array(activeTestimonial.rating)].map((_, i) => (
                                <Star01 key={i} className="size-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-2xl font-medium leading-relaxed text-gray-900 lg:text-3xl">
                            "{activeTestimonial.quote}"
                        </blockquote>

                        {/* Author */}
                        <div className="mt-8 flex items-center gap-4">
                            <img
                                src={activeTestimonial.avatar}
                                alt={activeTestimonial.name}
                                className="size-14 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-900">{activeTestimonial.name}</p>
                                <p className="text-sm text-gray-500">{activeTestimonial.role}</p>
                            </div>
                        </div>

                        {/* Read More */}
                        <a
                            href="#"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#ff5a5f] hover:underline"
                        >
                            Read more
                            <ArrowRight className="size-4" />
                        </a>

                        {/* Pagination Dots */}
                        <div className="mt-8 flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`size-2.5 rounded-full transition-colors ${
                                        index === activeIndex
                                            ? "bg-[#0a4a4a]"
                                            : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
