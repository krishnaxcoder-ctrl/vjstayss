"use client";

import { Mail01, Send01, CheckCircle } from "@untitledui/icons";

export const LanderHero = () => {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2940&auto=format&fit=crop"
                    alt="Aerial view of turquoise ocean"
                    className="h-full w-full object-cover"
                />
                {/* Brand color overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5a5f]/70 via-[#ff5a5f]/50 to-[#e04850]/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-8xl px-6 lg:px-12">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                        <Mail01 className="size-4 text-white" />
                        <span className="text-sm font-medium text-white">Newsletter</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                        Get Exclusive Deals
                        <br />
                        <span className="text-white/90">Straight to Your Inbox</span>
                    </h2>

                    {/* Subheadline */}
                    <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                        Subscribe to our newsletter and be the first to know about special offers, new destinations, and travel tips.
                    </p>

                    {/* Email Form */}
                    <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
                        <div className="relative flex-1">
                            <Mail01 className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full rounded-full border-2 border-white/30 bg-white/10 py-3.5 pl-12 pr-4 text-white placeholder-white/60 backdrop-blur-sm transition-all focus:border-white focus:bg-white/20 focus:outline-none"
                            />
                        </div>
                        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#ff5a5f] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl">
                            Subscribe
                            <Send01 className="size-4" />
                        </button>
                    </div>

                    {/* Features */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="size-4 text-white" />
                            <span>Weekly travel deals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="size-4 text-white" />
                            <span>Exclusive discounts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="size-4 text-white" />
                            <span>No spam, unsubscribe anytime</span>
                        </div>
                    </div>

                    {/* Subscriber Count */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="size-10 rounded-full border-2 border-white bg-gray-300"
                                    style={{
                                        backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg)`,
                                        backgroundSize: "cover",
                                    }}
                                />
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white">50,000+</p>
                            <p className="text-sm text-white/70">Happy subscribers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
