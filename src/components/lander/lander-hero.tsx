"use client";

import { MarkerPin01, Star01, Send01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const LanderHero = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2940&auto=format&fit=crop"
                    alt="Aerial view of turquoise ocean"
                    className="h-full w-full object-cover"
                />
                {/* Brand color overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5a5f]/90 via-[#ff5a5f]/75 to-[#e04850]/80" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-8xl flex-col px-6 py-16 lg:flex-row lg:items-center lg:px-12">
                {/* Left Content */}
                <div className="flex-1 lg:max-w-2xl">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                        <span className="text-sm font-medium text-white">Waypoint</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                        Explore Your Dream Journey{" "}
                        <span className="text-[#ff5a5f]">your Gateway</span> to Unforgettable Travel
                    </h1>

                    {/* Subheadline */}
                    <p className="mt-6 max-w-xl text-lg text-white/70">
                        Discover breathtaking destinations around the world. From serene beaches to majestic mountains, your dream vacation starts here. Start planning your next adventure today.
                    </p>

                    {/* CTA Button */}
                    <Button
                        size="lg"
                        className="mt-8 bg-[#ff5a5f] hover:bg-[#e04850] border-none px-8"
                    >
                        Get Start
                    </Button>

                    {/* Category Tags */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {["Tours", "Travel", "Meals", "Trip"].map((category) => (
                            <button
                                key={category}
                                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content - Featured Destination Cards */}
                <div className="hidden flex-1 lg:flex lg:justify-end">
                    <div className="relative w-full max-w-md">
                        {/* Main Featured Card */}
                        <div className="relative overflow-hidden rounded-3xl bg-white/10 p-2 backdrop-blur-md">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
                                    alt="Bali, Indonesia"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Card Content */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <div className="flex items-center gap-2 text-white/80">
                                        <MarkerPin01 className="size-4" />
                                        <span className="text-sm">Bali, Indonesia</span>
                                    </div>
                                    <h3 className="mt-1 text-xl font-bold text-white">Tropical Paradise</h3>
                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            <Star01 className="size-4 fill-[#ff5a5f] text-[#ff5a5f]" />
                                            <span className="text-sm font-medium text-white">4.9</span>
                                            <span className="text-sm text-white/60">(2.4k reviews)</span>
                                        </div>
                                        <span className="text-lg font-bold text-white">$350<span className="text-sm font-normal text-white/60">/trip</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card - Top Right */}
                        <div className="absolute -right-6 -top-4 rounded-2xl bg-white p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f]/10">
                                    <Send01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Next Trip</p>
                                    <p className="font-semibold text-gray-900">Maldives</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card - Bottom Left */}
                        <div className="absolute -bottom-4 -left-6 rounded-2xl bg-white p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="size-8 rounded-full border-2 border-white bg-gray-300"
                                            style={{
                                                backgroundImage: `url(https://randomuser.me/api/portraits/women/${i + 20}.jpg)`,
                                                backgroundSize: "cover",
                                            }}
                                        />
                                    ))}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Travelers</p>
                                    <p className="font-semibold text-gray-900">+500 joined</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
