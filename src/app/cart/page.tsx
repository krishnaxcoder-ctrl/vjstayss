"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import {
    ShoppingCart01,
    Trash01,
    Calendar,
    Users01,
    MarkerPin01,
    Star01,
    ArrowRight,
    Plus,
    Minus,
    ShieldTick,
    Clock01,
} from "@untitledui/icons";

// Sample cart items
const initialCartItems = [
    {
        id: 1,
        name: "The Ritz-Carlton",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 2456,
        price: 320,
        originalPrice: 450,
        checkIn: "2025-02-15",
        checkOut: "2025-02-18",
        guests: 2,
        rooms: 1,
        nights: 3,
    },
    {
        id: 2,
        name: "Seaside Resort & Spa",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 1892,
        price: 285,
        originalPrice: 380,
        checkIn: "2025-03-10",
        checkOut: "2025-03-14",
        guests: 2,
        rooms: 1,
        nights: 4,
    },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const removeItem = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateRooms = (id: number, delta: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, rooms: Math.max(1, item.rooms + delta) }
                    : item
            )
        );
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.nights * item.rooms,
        0
    );
    const taxes = Math.round(subtotal * 0.12);
    const serviceFee = cartItems.length * 25;
    const total = subtotal + taxes + serviceFee;

    return (
        <div className="min-h-screen bg-gray-50">
            <SiteHeader variant="light" />

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
                    <p className="mt-2 text-gray-600">
                        {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
                    </p>
                </div>

                {cartItems.length > 0 ? (
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
                                >
                                    <div className="flex flex-col sm:flex-row">
                                        {/* Image */}
                                        <div className="relative h-48 sm:h-auto sm:w-64 flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                            {item.originalPrice > item.price && (
                                                <div className="absolute left-3 top-3 rounded-full bg-[#ff5a5f] px-2.5 py-1 text-xs font-bold text-white">
                                                    {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                                                </div>
                                            )}
                                        </div>

                                        {/* Details */}
                                        <div className="flex flex-1 flex-col p-5">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <Link
                                                        href={`/listing/${item.id}`}
                                                        className="text-lg font-bold text-gray-900 hover:text-[#ff5a5f]"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                                                        <MarkerPin01 className="size-4" />
                                                        {item.location}
                                                    </div>
                                                    <div className="mt-2 flex items-center gap-2">
                                                        <div className="flex items-center gap-1 rounded-md bg-[#ff5a5f]/10 px-2 py-0.5">
                                                            <Star01 className="size-3.5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                                            <span className="text-sm font-bold text-[#ff5a5f]">
                                                                {item.rating}
                                                            </span>
                                                        </div>
                                                        <span className="text-sm text-gray-500">
                                                            ({item.reviews.toLocaleString()} reviews)
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="flex size-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                                                >
                                                    <Trash01 className="size-5" />
                                                </button>
                                            </div>

                                            {/* Booking Details */}
                                            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 sm:grid-cols-4">
                                                <div>
                                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                                        <Calendar className="size-3.5" />
                                                        Check-in
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                                        {formatDate(item.checkIn)}
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                                        <Calendar className="size-3.5" />
                                                        Check-out
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                                        {formatDate(item.checkOut)}
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                                        <Users01 className="size-3.5" />
                                                        Guests
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                                        {item.guests} guests
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-500">Rooms</div>
                                                    <div className="mt-1 flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateRooms(item.id, -1)}
                                                            className="flex size-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-50"
                                                        >
                                                            <Minus className="size-4" />
                                                        </button>
                                                        <span className="w-6 text-center text-sm font-medium text-gray-900">
                                                            {item.rooms}
                                                        </span>
                                                        <button
                                                            onClick={() => updateRooms(item.id, 1)}
                                                            className="flex size-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-50"
                                                        >
                                                            <Plus className="size-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-4">
                                                <div>
                                                    <span className="text-sm text-gray-500">
                                                        ${item.price} x {item.nights} nights x {item.rooms} room{item.rooms > 1 ? "s" : ""}
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold text-gray-900">
                                                        ${item.price * item.nights * item.rooms}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                                <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>

                                <div className="mt-6 space-y-4">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Taxes (12%)</span>
                                        <span>${taxes}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Service fee</span>
                                        <span>${serviceFee}</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex justify-between text-lg font-bold text-gray-900">
                                            <span>Total</span>
                                            <span>${total}</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-6 w-full rounded-xl bg-[#ff5a5f] py-4 text-center font-semibold text-white transition-colors hover:bg-[#e04850]">
                                    Proceed to Checkout
                                </button>

                                {/* Trust Badges */}
                                <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <ShieldTick className="size-5 text-green-500" />
                                        <span>Secure payment</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <Clock01 className="size-5 text-[#ff5a5f]" />
                                        <span>Free cancellation available</span>
                                    </div>
                                </div>

                                {/* Continue Shopping */}
                                <Link
                                    href="/hotels"
                                    className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-[#ff5a5f] transition-colors hover:text-[#e04850]"
                                >
                                    Continue Shopping
                                    <ArrowRight className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Empty Cart */
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-gray-100">
                        <div className="flex size-20 items-center justify-center rounded-full bg-gray-100">
                            <ShoppingCart01 className="size-10 text-gray-400" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold text-gray-900">Your cart is empty</h2>
                        <p className="mt-2 max-w-sm text-gray-500">
                            Looks like you haven't added any hotels to your cart yet. Start exploring and find your perfect stay!
                        </p>
                        <Link
                            href="/hotels"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#ff5a5f] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#e04850]"
                        >
                            Browse Hotels
                            <ArrowRight className="size-5" />
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}
