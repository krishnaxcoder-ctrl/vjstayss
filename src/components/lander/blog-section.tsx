"use client";

import { ArrowRight } from "@untitledui/icons";

const posts = [
    {
        id: 1,
        title: "The Ultimate Guide First-Time Travelers",
        excerpt: "Discover tips and tricks for smooth travel experiences on your first adventure abroad.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
        category: "Travel Tips",
    },
    {
        id: 2,
        title: "10 Must-Visit Destinations in Indonesia",
        excerpt: "Explore the most beautiful destinations this year, from hidden gems to popular hotspots.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
        category: "Destinations",
    },
    {
        id: 3,
        title: "Secrets to Scoring the Best Flight Deals",
        excerpt: "Learn insider secrets to finding the cheapest flights without sacrificing comfort.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
        category: "Travel Hacks",
    },
];

export const BlogSection = () => {
    return (
        <section className="px-6 py-20 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <span className="text-sm font-medium uppercase tracking-wider text-[#ff5a5f]">Blog</span>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Get Inspired for Your{" "}
                            <span className="text-[#0a4a4a]">Next Adventure</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">
                            Find travel tips, guides, and<br />
                            secrets for your perfect trip.
                        </p>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative mb-4 overflow-hidden rounded-2xl">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Category Badge */}
                                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-[#ff5a5f]">
                                {post.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                                {post.excerpt}
                            </p>

                            {/* Read More */}
                            <a
                                href="#"
                                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0a4a4a] transition-colors group-hover:text-[#ff5a5f]"
                            >
                                Read more
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
