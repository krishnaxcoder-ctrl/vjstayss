"use client";

import { Check, Globe02, Headphones02, Settings01, Star01 } from "@untitledui/icons";

const features = [
    {
        icon: Globe02,
        title: "Expert Destination Booking",
        description: "We hand-pick the best destinations, ensuring you have access to top-rated hotels around the world.",
    },
    {
        icon: Settings01,
        title: "Easy-to-Use Platform",
        description: "Our intuitive booking system makes finding and reserving your perfect stay simple and fast.",
    },
    {
        icon: Star01,
        title: "Personalized Recommendations",
        description: "Get tailored suggestions based on your preferences and travel history.",
    },
    {
        icon: Headphones02,
        title: "24/7 Support",
        description: "Our dedicated support team is available around the clock to assist with any questions.",
    },
];

export const FeaturesSection = () => {
    return (
        <section className="bg-gray-50 px-6 py-20 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-4 text-center">
                    <span className="text-sm font-medium uppercase tracking-wider text-[#ff5a5f]">Why Choose Us</span>
                </div>

                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                        Easy Booking, Great prices,{" "}
                        <span className="text-[#0a4a4a]">and Personalized Service.</span>
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left - Video/Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
                            alt="Kayaking in turquoise water"
                            className="h-full min-h-[400px] w-full object-cover"
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                type="button"
                                className="flex size-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110"
                            >
                                <svg className="ml-1 size-6 text-[#0a4a4a]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right - Features List */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#0a4a4a]/10">
                                        <feature.icon className="size-6 text-[#0a4a4a]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
