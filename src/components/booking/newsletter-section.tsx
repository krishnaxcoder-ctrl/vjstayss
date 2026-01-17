"use client";

import { Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const NewsletterSection = () => {
    return (
        <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-semibold text-white md:text-3xl">
                            Get exclusive deals in your inbox
                        </h2>
                        <p className="mt-2 text-white/80">
                            Subscribe to our newsletter and never miss out on the best hotel deals
                        </p>
                    </div>

                    {/* Form */}
                    <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                        <div className="relative flex-1">
                            <Mail01 className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border-0 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-2 ring-transparent focus:ring-white/50"
                            />
                        </div>
                        <Button size="lg" className="bg-gray-900 hover:bg-gray-800 border-none shadow-sm">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
