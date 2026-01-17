"use client";

import { useState } from "react";
import { Calendar, MarkerPin01, MinusCircle, PlusCircle, SearchLg, User01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

interface GuestCount {
    adults: number;
    children: number;
    rooms: number;
}

export const SearchBar = ({ variant = "hero" }: { variant?: "hero" | "inline" }) => {
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [showGuestPicker, setShowGuestPicker] = useState(false);
    const [guests, setGuests] = useState<GuestCount>({ adults: 2, children: 0, rooms: 1 });

    const isHero = variant === "hero";

    const updateGuests = (type: keyof GuestCount, increment: boolean) => {
        setGuests((prev) => {
            const newValue = increment ? prev[type] + 1 : prev[type] - 1;
            const min = type === "children" ? 0 : 1;
            const max = type === "rooms" ? 10 : 30;
            return { ...prev, [type]: Math.max(min, Math.min(max, newValue)) };
        });
    };

    const guestSummary = `${guests.adults} adult${guests.adults > 1 ? "s" : ""}${guests.children > 0 ? `, ${guests.children} child${guests.children > 1 ? "ren" : ""}` : ""}, ${guests.rooms} room${guests.rooms > 1 ? "s" : ""}`;

    return (
        <div
            className={cx(
                "w-full rounded-2xl bg-white p-2 shadow-xl",
                isHero ? "max-w-5xl" : "max-w-4xl"
            )}
        >
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
                {/* Location Input */}
                <div className="group relative flex-1 rounded-xl px-4 py-3 transition-colors hover:bg-gray-50 lg:border-r lg:border-gray-200">
                    <label className="mb-1 block text-xs font-semibold text-gray-500">Where</label>
                    <div className="flex items-center gap-2">
                        <MarkerPin01 className="size-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search destinations"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full bg-transparent text-sm font-medium text-gray-900 placeholder-gray-400 outline-none"
                        />
                    </div>
                </div>

                {/* Check-in Date */}
                <div className="group relative flex-1 rounded-xl px-4 py-3 transition-colors hover:bg-gray-50 lg:border-r lg:border-gray-200">
                    <label className="mb-1 block text-xs font-semibold text-gray-500">Check in</label>
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-gray-400" />
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                            placeholder="Add date"
                        />
                    </div>
                </div>

                {/* Check-out Date */}
                <div className="group relative flex-1 rounded-xl px-4 py-3 transition-colors hover:bg-gray-50 lg:border-r lg:border-gray-200">
                    <label className="mb-1 block text-xs font-semibold text-gray-500">Check out</label>
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-gray-400" />
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                            placeholder="Add date"
                        />
                    </div>
                </div>

                {/* Guests Picker */}
                <div className="relative flex-1">
                    <button
                        type="button"
                        onClick={() => setShowGuestPicker(!showGuestPicker)}
                        className="w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-gray-50"
                    >
                        <label className="mb-1 block text-xs font-semibold text-gray-500">Guests</label>
                        <div className="flex items-center gap-2">
                            <User01 className="size-5 text-gray-400" />
                            <span className="truncate text-sm font-medium text-gray-900">{guestSummary}</span>
                        </div>
                    </button>

                    {/* Guest Picker Dropdown */}
                    {showGuestPicker && (
                        <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                            {[
                                { label: "Adults", type: "adults" as const, desc: "Ages 13 or above" },
                                { label: "Children", type: "children" as const, desc: "Ages 0-12" },
                                { label: "Rooms", type: "rooms" as const, desc: "" },
                            ].map((item) => (
                                <div key={item.type} className="flex items-center justify-between py-3">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                                        {item.desc && <p className="text-xs text-gray-500">{item.desc}</p>}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => updateGuests(item.type, false)}
                                            className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                                            disabled={guests[item.type] <= (item.type === "children" ? 0 : 1)}
                                        >
                                            <MinusCircle className="size-6" />
                                        </button>
                                        <span className="w-6 text-center text-sm font-semibold">{guests[item.type]}</span>
                                        <button
                                            type="button"
                                            onClick={() => updateGuests(item.type, true)}
                                            className="text-gray-400 hover:text-gray-600"
                                        >
                                            <PlusCircle className="size-6" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => setShowGuestPicker(false)}
                                className="mt-2 w-full rounded-lg bg-gray-900 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>

                {/* Search Button */}
                <div className="px-2">
                    <Button
                        size="lg"
                        className="w-full bg-amber-600 hover:bg-amber-700 border-none shadow-none lg:w-auto"
                        iconLeading={SearchLg}
                    >
                        <span className="lg:hidden">Search</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
