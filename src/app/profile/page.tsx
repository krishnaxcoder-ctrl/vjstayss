"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import {
    User01,
    Mail01,
    Phone,
    MarkerPin01,
    Calendar,
    Edit02,
    Settings01,
    CreditCard01,
    Bell01,
    Shield01,
    LogOut01,
    ChevronRight,
    Camera01,
    CheckCircle,
    Building07,
    Globe01,
} from "@untitledui/icons";

// Sample user data
const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    memberSince: "January 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    verified: true,
    totalBookings: 12,
    totalSpent: 4580,
    rewardPoints: 2450,
};

const menuItems = [
    { icon: User01, label: "Personal Information", description: "Update your profile details", href: "#personal" },
    { icon: CreditCard01, label: "Payment Methods", description: "Manage your payment options", href: "#payment" },
    { icon: Bell01, label: "Notifications", description: "Configure alerts and emails", href: "#notifications" },
    { icon: Shield01, label: "Security", description: "Password and 2FA settings", href: "#security" },
    { icon: Building07, label: "Company Details", description: "Business travel information", href: "#company" },
    { icon: Globe01, label: "Preferences", description: "Language, currency, timezone", href: "#preferences" },
];

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        location: userData.location,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Save logic would go here
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SiteHeader variant="light" />

            <main className="mx-auto max-w-8xl px-6 py-8 lg:px-12">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                            <User01 className="size-6 text-[#ff5a5f]" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                            <p className="mt-1 text-gray-600">Manage your account settings and preferences</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Left Column - Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                            {/* Cover Image */}
                            <div className="relative h-24 bg-gradient-to-r from-[#ff5a5f] to-[#e04850]">
                                <div className="absolute -bottom-12 left-6">
                                    <div className="relative">
                                        <img
                                            src={userData.avatar}
                                            alt={userData.name}
                                            className="size-24 rounded-full border-4 border-white object-cover shadow-lg"
                                        />
                                        <button className="absolute bottom-0 right-0 flex size-8 items-center justify-center rounded-full bg-[#ff5a5f] text-white shadow-lg transition-colors hover:bg-[#e04850]">
                                            <Camera01 className="size-4" />
                                        </button>
                                        {userData.verified && (
                                            <div className="absolute -right-1 top-0 flex size-6 items-center justify-center rounded-full bg-green-500 text-white ring-2 ring-white">
                                                <CheckCircle className="size-4" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="px-6 pb-6 pt-16">
                                <h2 className="text-xl font-bold text-gray-900">{userData.name}</h2>
                                <p className="mt-1 text-sm text-gray-500">Member since {userData.memberSince}</p>

                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Mail01 className="size-4 text-gray-400" />
                                        {userData.email}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Phone className="size-4 text-gray-400" />
                                        {userData.phone}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MarkerPin01 className="size-4 text-gray-400" />
                                        {userData.location}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-gray-900">{userData.totalBookings}</p>
                                        <p className="text-xs text-gray-500">Bookings</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-gray-900">${userData.totalSpent}</p>
                                        <p className="text-xs text-gray-500">Spent</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-[#ff5a5f]">{userData.rewardPoints}</p>
                                        <p className="text-xs text-gray-500">Points</p>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="mt-6 flex gap-3">
                                    <Link
                                        href="/bookings"
                                        className="flex-1 rounded-xl bg-[#ff5a5f] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#e04850]"
                                    >
                                        View Bookings
                                    </Link>
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                                    >
                                        <Edit02 className="size-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100">
                            <LogOut01 className="size-4" />
                            Sign Out
                        </button>
                    </div>

                    {/* Right Column - Settings & Edit Form */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Edit Profile Form */}
                        {isEditing && (
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                                <div className="border-b border-gray-100 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Edit Profile</h3>
                                    <p className="text-sm text-gray-500">Update your personal information</p>
                                </div>
                                <div className="p-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-end gap-3">
                                        <button
                                            onClick={() => setIsEditing(false)}
                                            className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSave}
                                            className="rounded-xl bg-[#ff5a5f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e04850]"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Settings Menu */}
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                            <div className="border-b border-gray-100 px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900">Account Settings</h3>
                                <p className="text-sm text-gray-500">Manage your account preferences</p>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex size-10 items-center justify-center rounded-xl bg-gray-100">
                                                <item.icon className="size-5 text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{item.label}</p>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="size-5 text-gray-400" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Reward Points Card */}
                        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] p-6 text-white shadow-lg">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm font-medium text-white/80">VJStays Rewards</p>
                                    <p className="mt-1 text-3xl font-bold">{userData.rewardPoints} Points</p>
                                    <p className="mt-2 text-sm text-white/80">
                                        Earn points with every booking and redeem for discounts
                                    </p>
                                </div>
                                <div className="flex size-12 items-center justify-center rounded-xl bg-white/20">
                                    <CreditCard01 className="size-6" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="text-white/80">Progress to Gold Status</span>
                                    <span className="font-medium">2,450 / 5,000</span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-white/20">
                                    <div className="h-full w-[49%] rounded-full bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
