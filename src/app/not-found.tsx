"use client";

import { ArrowLeft, Home01 } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />
            <section className="flex min-h-[calc(100vh-89px)] items-center justify-center px-6 py-16">
                <div className="text-center">
                    {/* 404 Badge */}
                    <span className="inline-block rounded-full bg-[#ff5a5f]/10 px-4 py-1.5 text-sm font-semibold text-[#ff5a5f]">
                        404 error
                    </span>

                    {/* Heading */}
                    <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                        Page not found
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-4 max-w-md text-lg text-gray-600">
                        Sorry, the page you are looking for doesn't exist or has been moved.
                    </p>

                    {/* Illustration */}
                    <div className="mx-auto mt-10 flex size-40 items-center justify-center rounded-full bg-[#ff5a5f]/10">
                        <span className="text-7xl font-bold text-[#ff5a5f]">404</span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:bg-gray-50"
                        >
                            <ArrowLeft className="size-5" />
                            Go back
                        </button>
                        <Link
                            href="/"
                            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#ff5a5f] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#e04850]"
                        >
                            <Home01 className="size-5" />
                            Take me home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
