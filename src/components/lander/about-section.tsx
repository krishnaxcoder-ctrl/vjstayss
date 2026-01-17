"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const images = [
    {
        src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=800&auto=format&fit=crop",
        alt: "Aerial view of tropical beach",
        className: "col-span-2 row-span-2",
    },
    {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
        alt: "Mountain landscape",
        className: "col-span-1 row-span-1",
    },
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        alt: "White sand beach",
        className: "col-span-1 row-span-1",
    },
];

export const AboutSection = () => {
    return (
        <section className="px-6 py-20 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-4">
                    <span className="text-sm font-medium uppercase tracking-wider text-[#ff5a5f]">About Us</span>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                            Effortless Booking -{" "}
                            <span className="text-[#0a4a4a]">Incredible Destinations</span>
                        </h2>

                        <div className="mt-6 space-y-4">
                            <p className="text-lg text-gray-600">
                                Your trusted travel platform, making dream trips easy with hundreds of destinations for seamless vacations.
                            </p>
                            <p className="text-gray-500">
                                We partner with the best hotels, resorts, and local experiences to bring you unforgettable journeys. From budget-friendly stays to luxury getaways, we have something for every traveler.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Button
                                size="lg"
                                className="bg-[#0a4a4a] hover:bg-[#083838] border-none"
                                iconTrailing={ArrowRight}
                            >
                                Get started
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-8">
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Your Journey Meets</p>
                                <p className="text-sm font-medium text-gray-900">Simple and Memorable</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <img
                                src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=800&auto=format&fit=crop"
                                alt="Aerial view of tropical beach"
                                className="h-64 w-full rounded-2xl object-cover lg:h-80"
                            />
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop"
                                alt="Mountain landscape"
                                className="h-48 w-full rounded-2xl object-cover"
                            />
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
                                alt="White sand beach"
                                className="h-48 w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
