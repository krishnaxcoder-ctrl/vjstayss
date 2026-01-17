"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const CTASection = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=2940&auto=format&fit=crop"
                    alt="Aerial view of tropical waters"
                    className="h-full w-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d3d]/95 via-[#0a4a4a]/90 to-[#0a5555]/85" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 py-20 lg:px-12 lg:py-28">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                        Explore More to{" "}
                        <span className="text-[#ff5a5f]">Get Your Comfort Zone</span>
                    </h2>
                    <p className="mt-6 text-lg text-white/70">
                        Start your journey today and discover amazing destinations that will create memories for a lifetime.
                    </p>
                    <div className="mt-10">
                        <Button
                            size="lg"
                            className="bg-[#ff5a5f] hover:bg-[#e04850] border-none px-8"
                            iconTrailing={ArrowRight}
                        >
                            Get Start
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
