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
    CreditCard01,
    Bell01,
    Shield01,
    LogOut01,
    Camera01,
    CheckVerified01,
    Globe01,
    Heart,
    Star01,
    Ticket01,
    Gift01,
    Clock,
    Check,
    Plus,
    Trash01,
    Eye,
    EyeOff,
    TrendUp01,
    Award01,
    Zap,
    ChevronRight,
    Copy01,
    Share07,
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
    bio: "Travel enthusiast exploring the world one destination at a time.",
    level: "Gold Member",
    nextLevel: "Platinum",
    levelProgress: 65,
};

const stats = [
    { label: "Total Bookings", value: "12", change: "+3 this month", icon: Ticket01, gradient: "from-blue-500 to-blue-600" },
    { label: "Amount Spent", value: "$4,580", change: "+$850 this month", icon: CreditCard01, gradient: "from-emerald-500 to-emerald-600" },
    { label: "Reward Points", value: "2,450", change: "+320 earned", icon: Gift01, gradient: "from-[#ff5a5f] to-[#e04850]" },
    { label: "Wishlist", value: "8", change: "2 price drops", icon: Heart, gradient: "from-pink-500 to-rose-600" },
];

const tabs = [
    { id: "personal", label: "Personal Info", icon: User01 },
    { id: "security", label: "Security", icon: Shield01 },
    { id: "payments", label: "Payments", icon: CreditCard01 },
    { id: "notifications", label: "Notifications", icon: Bell01 },
    { id: "preferences", label: "Preferences", icon: Globe01 },
];

const savedCards = [
    { id: 1, type: "visa", last4: "4242", expiry: "12/25", isDefault: true },
    { id: 2, type: "mastercard", last4: "8888", expiry: "06/26", isDefault: false },
];

const recentActivity = [
    { action: "Booking confirmed", location: "Grand Plaza Hotel, NYC", time: "2 days ago", icon: Check, color: "bg-green-500" },
    { action: "Added to wishlist", location: "Beachfront Villa, Maldives", time: "1 week ago", icon: Heart, color: "bg-pink-500" },
    { action: "Review submitted", location: "Mountain Lodge, Colorado", time: "2 weeks ago", icon: Star01, color: "bg-amber-500" },
];

const achievements = [
    { name: "Early Bird", desc: "Booked 5 trips", icon: Zap, unlocked: true },
    { name: "Explorer", desc: "Visited 3 countries", icon: Globe01, unlocked: true },
    { name: "VIP", desc: "Spend $10,000", icon: Award01, unlocked: false },
];

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("personal");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        location: userData.location,
        bio: userData.bio,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <SiteHeader variant="light" />

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5a5f] via-[#ff7a7e] to-[#ff5a5f]">
                    <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                </div>
                <div className="relative h-64 md:h-72" />
            </div>

            {/* Profile Content */}
            <div className="mx-auto max-w-8xl px-6 lg:px-12">
                {/* Profile Card */}
                <div className="relative -mt-32 mb-8">
                    <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100 md:p-8">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                            {/* Left: Avatar & Basic Info */}
                            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start lg:w-1/3">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="rounded-2xl bg-gradient-to-br from-[#ff5a5f] to-[#e04850] p-1">
                                        <img
                                            src={userData.avatar}
                                            alt={userData.name}
                                            className="size-28 rounded-xl object-cover md:size-32"
                                        />
                                    </div>
                                    <button className="absolute -bottom-2 -right-2 flex size-10 items-center justify-center rounded-xl bg-white text-gray-700 shadow-lg ring-1 ring-gray-100 transition-all hover:scale-105 hover:bg-gray-50">
                                        <Camera01 className="size-5" />
                                    </button>
                                    {userData.verified && (
                                        <div className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full bg-blue-500 text-white ring-4 ring-white">
                                            <CheckVerified01 className="size-5" />
                                        </div>
                                    )}
                                </div>

                                {/* Name & Info */}
                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                                        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{userData.name}</h1>
                                    </div>
                                    <p className="mt-1 text-gray-500">{userData.bio}</p>

                                    {/* Level Badge */}
                                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
                                        <Award01 className="size-4" />
                                        {userData.level}
                                    </div>

                                    {/* Quick Info */}
                                    <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-500 sm:justify-start">
                                        <span className="flex items-center gap-1.5">
                                            <MarkerPin01 className="size-4" />
                                            {userData.location}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="size-4" />
                                            Since {userData.memberSince}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Center: Level Progress */}
                            <div className="flex-1 lg:px-8">
                                <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Level Progress</p>
                                            <p className="text-lg font-bold text-gray-900">
                                                {userData.levelProgress}% to {userData.nextLevel}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-emerald-600">
                                            <TrendUp01 className="size-4" />
                                            <span className="font-medium">On track</span>
                                        </div>
                                    </div>
                                    <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-[#ff5a5f] to-[#ff7a7e] transition-all duration-500"
                                            style={{ width: `${userData.levelProgress}%` }}
                                        />
                                    </div>
                                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                                        <span>1,550 more points needed</span>
                                        <span>4,000 points</span>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="mt-4 flex items-center gap-3">
                                    {achievements.map((achievement, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
                                                achievement.unlocked
                                                    ? "bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700"
                                                    : "bg-gray-100 text-gray-400"
                                            }`}
                                        >
                                            <achievement.icon className="size-4" />
                                            <span className="text-xs font-medium">{achievement.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Actions */}
                            <div className="flex flex-col gap-3 lg:w-auto">
                                <Link
                                    href="/bookings"
                                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:shadow-xl hover:shadow-[#ff5a5f]/30"
                                >
                                    View My Bookings
                                    <ChevronRight className="size-4" />
                                </Link>
                                <div className="flex gap-2">
                                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50">
                                        <Share07 className="size-4" />
                                        Share
                                    </button>
                                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50">
                                        <Edit02 className="size-4" />
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                    <p className="mt-1 text-3xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
                                        <TrendUp01 className="size-3" />
                                        {stat.change}
                                    </p>
                                </div>
                                <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg`}>
                                    <stat.icon className="size-6" />
                                </div>
                            </div>
                            {/* Decorative gradient */}
                            <div className={`absolute -bottom-12 -right-12 size-24 rounded-full bg-gradient-to-br ${stat.gradient} opacity-10 transition-transform group-hover:scale-150`} />
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-8 pb-12 lg:grid-cols-4">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Tab Navigation */}
                        <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
                            <nav className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all ${
                                            activeTab === tab.id
                                                ? "bg-gradient-to-r from-[#ff5a5f]/10 to-[#ff5a5f]/5 text-[#ff5a5f]"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                    >
                                        <div className={`flex size-9 items-center justify-center rounded-lg ${
                                            activeTab === tab.id ? "bg-[#ff5a5f]/10" : "bg-gray-100"
                                        }`}>
                                            <tab.icon className={`size-5 ${activeTab === tab.id ? "text-[#ff5a5f]" : "text-gray-500"}`} />
                                        </div>
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <ChevronRight className="ml-auto size-4 text-[#ff5a5f]" />
                                        )}
                                    </button>
                                ))}
                            </nav>
                            <div className="mt-3 border-t border-gray-100 pt-3">
                                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium text-red-600 transition-all hover:bg-red-50">
                                    <div className="flex size-9 items-center justify-center rounded-lg bg-red-50">
                                        <LogOut01 className="size-5" />
                                    </div>
                                    Sign Out
                                </button>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900">Recent Activity</h3>
                                <button className="text-xs font-medium text-[#ff5a5f] hover:underline">View All</button>
                            </div>
                            <div className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${activity.color} text-white`}>
                                            <activity.icon className="size-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                            <p className="truncate text-xs text-gray-500">{activity.location}</p>
                                            <p className="mt-0.5 text-xs text-gray-400">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Referral Card */}
                        <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff5a5f] to-[#e04850] p-5 text-white">
                            <div className="mb-3">
                                <Gift01 className="size-8" />
                            </div>
                            <h3 className="text-lg font-bold">Invite Friends</h3>
                            <p className="mt-1 text-sm text-white/80">Get 500 points for each friend who books</p>
                            <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/20 p-2">
                                <input
                                    type="text"
                                    value="JOHN2024"
                                    readOnly
                                    className="flex-1 bg-transparent text-sm font-medium"
                                />
                                <button className="rounded-md bg-white p-1.5 text-[#ff5a5f] transition-all hover:bg-white/90">
                                    <Copy01 className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                            {/* Personal Info Tab */}
                            {activeTab === "personal" && (
                                <div className="p-6 md:p-8">
                                    <div className="mb-8 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
                                            <p className="mt-1 text-sm text-gray-500">Manage your personal details and preferences</p>
                                        </div>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                            Profile Complete
                                        </span>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Avatar Section */}
                                        <div className="flex items-center gap-6 rounded-2xl bg-gray-50 p-6">
                                            <img src={userData.avatar} alt="" className="size-20 rounded-xl object-cover" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Profile Photo</h4>
                                                <p className="mt-1 text-sm text-gray-500">PNG, JPG up to 5MB</p>
                                                <div className="mt-3 flex gap-2">
                                                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                                                        Change
                                                    </button>
                                                    <button className="rounded-lg px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Email Address</label>
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-20 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10"
                                                    />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                        Verified
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Location</label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-gray-700">Bio</label>
                                            <textarea
                                                name="bio"
                                                value={formData.bio}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10"
                                            />
                                            <p className="mt-2 text-xs text-gray-400">{formData.bio.length}/200 characters</p>
                                        </div>
                                        <div className="flex justify-end gap-3 border-t border-gray-100 pt-6">
                                            <button className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50">
                                                Cancel
                                            </button>
                                            <button className="rounded-xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:shadow-xl">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Security Tab */}
                            {activeTab === "security" && (
                                <div className="p-6 md:p-8">
                                    <div className="mb-8">
                                        <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
                                        <p className="mt-1 text-sm text-gray-500">Keep your account safe and secure</p>
                                    </div>

                                    {/* Security Score */}
                                    <div className="mb-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-emerald-600">Security Score</p>
                                                <p className="mt-1 text-3xl font-bold text-emerald-700">85/100</p>
                                                <p className="mt-1 text-sm text-emerald-600">Your account is well protected</p>
                                            </div>
                                            <div className="flex size-20 items-center justify-center rounded-full bg-emerald-100">
                                                <Shield01 className="size-10 text-emerald-600" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Change Password */}
                                    <div className="mb-8">
                                        <h3 className="mb-4 text-sm font-bold text-gray-900">Change Password</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">Current Password</label>
                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Enter current password"
                                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-12 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="mb-2 block text-sm font-medium text-gray-700">New Password</label>
                                                    <input
                                                        type="password"
                                                        placeholder="Enter new password"
                                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm font-medium text-gray-700">Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        placeholder="Confirm new password"
                                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10"
                                                    />
                                                </div>
                                            </div>
                                            <button className="rounded-xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:shadow-xl">
                                                Update Password
                                            </button>
                                        </div>
                                    </div>

                                    {/* Two-Factor Authentication */}
                                    <div className="rounded-2xl border border-gray-200 p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
                                                    <Shield01 className="size-7" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Two-Factor Authentication</h4>
                                                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                                                </div>
                                            </div>
                                            <button className="rounded-xl bg-[#ff5a5f]/10 px-5 py-2.5 text-sm font-semibold text-[#ff5a5f] transition-all hover:bg-[#ff5a5f]/20">
                                                Enable 2FA
                                            </button>
                                        </div>
                                    </div>

                                    {/* Active Sessions */}
                                    <div className="mt-8">
                                        <h3 className="mb-4 text-sm font-bold text-gray-900">Active Sessions</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between rounded-xl border border-green-200 bg-green-50 p-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                                                        <Globe01 className="size-6 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-900">Chrome on Windows</p>
                                                        <p className="text-sm text-gray-500">New York, USA • Active now</p>
                                                    </div>
                                                </div>
                                                <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                                                    Current Session
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between rounded-xl border border-gray-200 p-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex size-12 items-center justify-center rounded-xl bg-gray-100">
                                                        <Phone className="size-6 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-900">Safari on iPhone</p>
                                                        <p className="text-sm text-gray-500">New York, USA • 3 hours ago</p>
                                                    </div>
                                                </div>
                                                <button className="rounded-lg px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
                                                    Revoke
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Payments Tab */}
                            {activeTab === "payments" && (
                                <div className="p-6 md:p-8">
                                    <div className="mb-8 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
                                            <p className="mt-1 text-sm text-gray-500">Manage your cards and billing</p>
                                        </div>
                                        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:shadow-xl">
                                            <Plus className="size-4" />
                                            Add New Card
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        {savedCards.map((card) => (
                                            <div
                                                key={card.id}
                                                className={`relative overflow-hidden rounded-2xl border-2 p-6 transition-all ${
                                                    card.isDefault
                                                        ? "border-[#ff5a5f] bg-gradient-to-br from-[#ff5a5f]/5 to-white"
                                                        : "border-gray-200 hover:border-gray-300"
                                                }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-5">
                                                        <div
                                                            className={`flex size-14 items-center justify-center rounded-xl ${
                                                                card.type === "visa"
                                                                    ? "bg-gradient-to-br from-blue-500 to-blue-600"
                                                                    : "bg-gradient-to-br from-orange-500 to-red-500"
                                                            } text-white shadow-lg`}
                                                        >
                                                            <CreditCard01 className="size-7" />
                                                        </div>
                                                        <div>
                                                            <p className="text-lg font-bold text-gray-900">
                                                                {card.type === "visa" ? "Visa" : "Mastercard"} •••• {card.last4}
                                                            </p>
                                                            <p className="text-sm text-gray-500">Expires {card.expiry}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        {card.isDefault && (
                                                            <span className="rounded-full bg-[#ff5a5f] px-4 py-1.5 text-xs font-semibold text-white">
                                                                Default
                                                            </span>
                                                        )}
                                                        <button className="rounded-xl p-3 text-gray-400 transition-all hover:bg-gray-100 hover:text-red-600">
                                                            <Trash01 className="size-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Transaction History */}
                                    <div className="mt-10">
                                        <div className="mb-6 flex items-center justify-between">
                                            <h3 className="text-lg font-bold text-gray-900">Transaction History</h3>
                                            <button className="text-sm font-semibold text-[#ff5a5f] hover:underline">View All</button>
                                        </div>
                                        <div className="overflow-hidden rounded-2xl border border-gray-200">
                                            <table className="w-full">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                            Description
                                                        </th>
                                                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                            Date
                                                        </th>
                                                        <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                            Amount
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        { desc: "Grand Plaza Hotel, NYC", date: "Jan 15, 2024", amount: "$580.00" },
                                                        { desc: "Mountain Lodge Resort", date: "Dec 28, 2023", amount: "$420.00" },
                                                        { desc: "Seaside Villa, Malibu", date: "Dec 10, 2023", amount: "$750.00" },
                                                    ].map((txn, i) => (
                                                        <tr key={i} className="hover:bg-gray-50">
                                                            <td className="px-6 py-4">
                                                                <p className="font-medium text-gray-900">{txn.desc}</p>
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-500">{txn.date}</td>
                                                            <td className="px-6 py-4 text-right font-semibold text-gray-900">{txn.amount}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Notifications Tab */}
                            {activeTab === "notifications" && (
                                <div className="p-6 md:p-8">
                                    <div className="mb-8">
                                        <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
                                        <p className="mt-1 text-sm text-gray-500">Choose what updates you want to receive</p>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            {
                                                title: "Booking Updates",
                                                desc: "Confirmations, reminders, and changes",
                                                icon: Ticket01,
                                                color: "from-blue-500 to-blue-600",
                                                email: true,
                                                push: true,
                                            },
                                            {
                                                title: "Price Alerts",
                                                desc: "Price drops for your saved properties",
                                                icon: TrendUp01,
                                                color: "from-emerald-500 to-teal-500",
                                                email: true,
                                                push: false,
                                            },
                                            {
                                                title: "Promotions & Offers",
                                                desc: "Deals, discounts, and special offers",
                                                icon: Gift01,
                                                color: "from-purple-500 to-pink-500",
                                                email: false,
                                                push: false,
                                            },
                                            {
                                                title: "Account Security",
                                                desc: "Login alerts and security updates",
                                                icon: Shield01,
                                                color: "from-amber-500 to-orange-500",
                                                email: true,
                                                push: true,
                                            },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between rounded-2xl border border-gray-200 p-5 transition-all hover:border-gray-300">
                                                <div className="flex items-center gap-4">
                                                    <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                                                        <item.icon className="size-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <label className="flex cursor-pointer items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            defaultChecked={item.email}
                                                            className="size-5 rounded border-gray-300 text-[#ff5a5f] focus:ring-[#ff5a5f]"
                                                        />
                                                        <span className="text-sm text-gray-600">Email</span>
                                                    </label>
                                                    <label className="flex cursor-pointer items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            defaultChecked={item.push}
                                                            className="size-5 rounded border-gray-300 text-[#ff5a5f] focus:ring-[#ff5a5f]"
                                                        />
                                                        <span className="text-sm text-gray-600">Push</span>
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex justify-end">
                                        <button className="rounded-xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:shadow-xl">
                                            Save Preferences
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Preferences Tab */}
                            {activeTab === "preferences" && (
                                <div className="p-6 md:p-8">
                                    <div className="mb-8">
                                        <h2 className="text-xl font-bold text-gray-900">General Preferences</h2>
                                        <p className="mt-1 text-sm text-gray-500">Customize your experience</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Language</label>
                                                <select className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10">
                                                    <option>English (US)</option>
                                                    <option>Hindi</option>
                                                    <option>Spanish</option>
                                                    <option>French</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Currency</label>
                                                <select className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10">
                                                    <option>USD ($)</option>
                                                    <option>INR (₹)</option>
                                                    <option>EUR (€)</option>
                                                    <option>GBP (£)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Timezone</label>
                                                <select className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10">
                                                    <option>UTC-05:00 (Eastern Time)</option>
                                                    <option>UTC+05:30 (India Standard Time)</option>
                                                    <option>UTC+00:00 (GMT)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Date Format</label>
                                                <select className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm transition-all focus:border-[#ff5a5f] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ff5a5f]/10">
                                                    <option>MM/DD/YYYY</option>
                                                    <option>DD/MM/YYYY</option>
                                                    <option>YYYY-MM-DD</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Theme Toggle */}
                                        <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-lg font-bold">Dark Mode</h4>
                                                    <p className="mt-1 text-sm text-gray-400">Switch between light and dark themes</p>
                                                </div>
                                                <button className="relative h-7 w-14 rounded-full bg-gray-700 transition-colors">
                                                    <span className="absolute left-1 top-1 size-5 rounded-full bg-white shadow transition-transform" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex justify-end gap-3 border-t border-gray-100 pt-6">
                                            <button className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50">
                                                Reset to Defaults
                                            </button>
                                            <button className="rounded-xl bg-gradient-to-r from-[#ff5a5f] to-[#e04850] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:shadow-xl">
                                                Save Preferences
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
