"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Calendar, MarkerPin01, Minus, Plus, SearchLg, Users01 } from "@untitledui/icons";
import { useDateFormatter } from "react-aria";
import type { DateValue } from "react-aria-components";
import {
    DatePicker as AriaDatePicker,
    Dialog as AriaDialog,
    Group as AriaGroup,
    Button as AriaButton,
    Popover as AriaPopover,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Calendar as CalendarComponent } from "@/components/application/date-picker/calendar";
import { cx } from "@/utils/cx";

interface GuestCount {
    adults: number;
    children: number;
    rooms: number;
}

const highlightedDates = [today(getLocalTimeZone())];

export const SearchBar = ({ variant = "hero" }: { variant?: "hero" | "inline" }) => {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState<DateValue | null>(null);
    const [checkOut, setCheckOut] = useState<DateValue | null>(null);
    const [showGuestPicker, setShowGuestPicker] = useState(false);
    const [guests, setGuests] = useState<GuestCount>({ adults: 2, children: 0, rooms: 1 });

    const isHero = variant === "hero";

    const formatter = useDateFormatter({
        month: "short",
        day: "numeric",
    });

    const updateGuests = (type: keyof GuestCount, increment: boolean) => {
        setGuests((prev) => {
            const newValue = increment ? prev[type] + 1 : prev[type] - 1;
            const min = type === "children" ? 0 : 1;
            const max = type === "rooms" ? 10 : 30;
            return { ...prev, [type]: Math.max(min, Math.min(max, newValue)) };
        });
    };

    const totalGuests = guests.adults + guests.children;
    const guestSummary = `${totalGuests} guest${totalGuests > 1 ? "s" : ""}, ${guests.rooms} room${guests.rooms > 1 ? "s" : ""}`;

    const formatDate = (date: DateValue | null) => {
        if (!date) return null;
        return formatter.format(date.toDate(getLocalTimeZone()));
    };

    const formatDateForUrl = (date: DateValue | null) => {
        if (!date) return "";
        const jsDate = date.toDate(getLocalTimeZone());
        return jsDate.toISOString().split("T")[0];
    };

    const handleSearch = () => {
        const params = new URLSearchParams();

        if (location) {
            params.set("location", location);
        }
        if (checkIn) {
            params.set("checkIn", formatDateForUrl(checkIn));
        }
        if (checkOut) {
            params.set("checkOut", formatDateForUrl(checkOut));
        }
        params.set("adults", guests.adults.toString());
        params.set("children", guests.children.toString());
        params.set("rooms", guests.rooms.toString());

        router.push(`/search?${params.toString()}`);
    };

    return (
        <div
            className={cx(
                "w-full rounded-2xl bg-white p-2 shadow-lg ring-1 ring-gray-200/50",
                isHero ? "max-w-4xl" : "max-w-3xl"
            )}
        >
            <div className="flex flex-col lg:flex-row lg:items-center">
                {/* Location Input */}
                <div className="group relative flex-1 lg:border-r lg:border-gray-200">
                    <div className="flex items-center gap-3 px-4 py-3">
                        <MarkerPin01 className="size-5 shrink-0 text-gray-400" />
                        <div className="flex-1">
                            <label className="block text-xs font-medium text-gray-500">Location</label>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="mt-0.5 w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Check-in Date Picker */}
                <div className="group relative flex-1 border-t border-gray-100 lg:border-t-0 lg:border-r lg:border-gray-200">
                    <AriaDatePicker
                        aria-label="Check in date"
                        value={checkIn}
                        onChange={setCheckIn}
                        minValue={today(getLocalTimeZone())}
                    >
                        <AriaGroup>
                            <AriaButton className="flex w-full items-center gap-3 px-4 py-3 text-left outline-none">
                                <Calendar className="size-5 shrink-0 text-gray-400" />
                                <div className="flex-1">
                                    <span className="block text-xs font-medium text-gray-500">Check in</span>
                                    <span className={cx(
                                        "mt-0.5 block text-sm",
                                        checkIn ? "text-gray-900" : "text-gray-400"
                                    )}>
                                        {formatDate(checkIn) || "Add date"}
                                    </span>
                                </div>
                            </AriaButton>
                        </AriaGroup>
                        <AriaPopover
                            offset={8}
                            placement="bottom"
                            className={({ isEntering, isExiting }) =>
                                cx(
                                    "z-50 origin-(--trigger-anchor-point) will-change-transform",
                                    isEntering && "duration-150 ease-out animate-in fade-in slide-in-from-top-1",
                                    isExiting && "duration-100 ease-in animate-out fade-out slide-out-to-top-1"
                                )
                            }
                        >
                            <AriaDialog className="rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200 outline-none">
                                <CalendarComponent highlightedDates={highlightedDates} />
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDatePicker>
                </div>

                {/* Check-out Date Picker */}
                <div className="group relative flex-1 border-t border-gray-100 lg:border-t-0 lg:border-r lg:border-gray-200">
                    <AriaDatePicker
                        aria-label="Check out date"
                        value={checkOut}
                        onChange={setCheckOut}
                        minValue={checkIn || today(getLocalTimeZone())}
                    >
                        <AriaGroup>
                            <AriaButton className="flex w-full items-center gap-3 px-4 py-3 text-left outline-none">
                                <Calendar className="size-5 shrink-0 text-gray-400" />
                                <div className="flex-1">
                                    <span className="block text-xs font-medium text-gray-500">Check out</span>
                                    <span className={cx(
                                        "mt-0.5 block text-sm",
                                        checkOut ? "text-gray-900" : "text-gray-400"
                                    )}>
                                        {formatDate(checkOut) || "Add date"}
                                    </span>
                                </div>
                            </AriaButton>
                        </AriaGroup>
                        <AriaPopover
                            offset={8}
                            placement="bottom"
                            className={({ isEntering, isExiting }) =>
                                cx(
                                    "z-50 origin-(--trigger-anchor-point) will-change-transform",
                                    isEntering && "duration-150 ease-out animate-in fade-in slide-in-from-top-1",
                                    isExiting && "duration-100 ease-in animate-out fade-out slide-out-to-top-1"
                                )
                            }
                        >
                            <AriaDialog className="rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200 outline-none">
                                <CalendarComponent highlightedDates={highlightedDates} />
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDatePicker>
                </div>

                {/* Guests Picker */}
                <div className="relative flex-1 border-t border-gray-100 lg:border-t-0">
                    <button
                        type="button"
                        onClick={() => setShowGuestPicker(!showGuestPicker)}
                        className="flex w-full items-center gap-3 px-4 py-3 text-left"
                    >
                        <Users01 className="size-5 shrink-0 text-gray-400" />
                        <div className="flex-1">
                            <span className="block text-xs font-medium text-gray-500">Guests</span>
                            <span className="mt-0.5 block truncate text-sm text-gray-900">{guestSummary}</span>
                        </div>
                    </button>

                    {/* Guest Picker Dropdown */}
                    {showGuestPicker && (
                        <>
                            <div
                                className="fixed inset-0 z-40"
                                onClick={() => setShowGuestPicker(false)}
                            />
                            <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200 lg:left-auto lg:right-0 lg:w-72">
                                <div className="space-y-4">
                                    {[
                                        { label: "Adults", type: "adults" as const, desc: "Age 13+" },
                                        { label: "Children", type: "children" as const, desc: "Age 0-12" },
                                        { label: "Rooms", type: "rooms" as const, desc: "" },
                                    ].map((item) => (
                                        <div key={item.type} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{item.label}</p>
                                                {item.desc && <p className="text-xs text-gray-500">{item.desc}</p>}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => updateGuests(item.type, false)}
                                                    disabled={guests[item.type] <= (item.type === "children" ? 0 : 1)}
                                                    className="flex size-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300"
                                                >
                                                    <Minus className="size-4" />
                                                </button>
                                                <span className="w-6 text-center text-sm font-medium text-gray-900">
                                                    {guests[item.type]}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateGuests(item.type, true)}
                                                    className="flex size-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gray-400 hover:bg-gray-50"
                                                >
                                                    <Plus className="size-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Button
                                        size="sm"
                                        color="primary"
                                        onClick={() => setShowGuestPicker(false)}
                                        className="bg-gray-900 hover:bg-gray-800"
                                    >
                                        Done
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Search Button */}
                <div className="border-t border-gray-100 p-2 lg:border-t-0 lg:pl-3">
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff5a5f] px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-[#ff5a5f] active:scale-[0.98] lg:w-auto"
                    >
                        <SearchLg className="size-5 transition-transform duration-200 group-hover:scale-110" />
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
