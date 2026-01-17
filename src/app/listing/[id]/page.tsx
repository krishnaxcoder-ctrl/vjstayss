"use client";

import { useParams } from "next/navigation";

export default function ListingPage() {
    const params = useParams();
    const id = params.id as string;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Listing {id}
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    This is the listing detail page for ID: {id}
                </p>
            </div>
        </div>
    );
}
