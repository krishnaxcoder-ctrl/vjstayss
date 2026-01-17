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
    const [activeSection, setActiveSection] = useState<string | null>(null);
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
                                    <button
                                        key={item.label}
                                        onClick={() => setActiveSection(activeSection === item.href ? null : item.href)}
                                        className="flex w-full items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`flex size-10 items-center justify-center rounded-xl ${activeSection === item.href ? 'bg-[#ff5a5f]/10' : 'bg-gray-100'}`}>
                                                <item.icon className={`size-5 ${activeSection === item.href ? 'text-[#ff5a5f]' : 'text-gray-600'}`} />
                                            </div>
                                            <div className="text-left">
                                                <p className={`font-medium ${activeSection === item.href ? 'text-[#ff5a5f]' : 'text-gray-900'}`}>{item.label}</p>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className={`size-5 transition-transform ${activeSection === item.href ? 'rotate-90 text-[#ff5a5f]' : 'text-gray-400'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Section Content */}
                        {activeSection === "#personal" && (
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                                <div className="border-b border-gray-100 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                                </div>
                                <div className="p-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Full Name</label>
                                            <input type="text" defaultValue={userData.name} className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" defaultValue={userData.email} className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Phone</label>
                                            <input type="tel" defaultValue={userData.phone} className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Location</label>
                                            <input type="text" defaultValue={userData.location} className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                    </div>
                                    <button className="mt-6 rounded-lg bg-[#ff5a5f] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#e04850]">Save Changes</button>
                                </div>
                            </div>
                        )}

                        {activeSection === "#payment" && (
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                                <div className="border-b border-gray-100 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100">
                                                    <CreditCard01 className="size-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                                                    <p className="text-sm text-gray-500">Expires 12/25</p>
                                                </div>
                                            </div>
                                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Default</span>
                                        </div>
                                    </div>
                                    <button className="mt-4 rounded-lg border border-[#ff5a5f] px-6 py-2.5 text-sm font-semibold text-[#ff5a5f] hover:bg-[#ff5a5f]/5">+ Add New Card</button>
                                </div>
                            </div>
                        )}

                        {activeSection === "#notifications" && (
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                                <div className="border-b border-gray-100 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    {[
                                        { label: "Email Notifications", desc: "Receive booking confirmations and updates" },
                                        { label: "SMS Alerts", desc: "Get text messages for important updates" },
                                        { label: "Marketing Emails", desc: "Receive deals and promotional offers" },
                                        { label: "Push Notifications", desc: "Browser notifications for bookings" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">{item.label}</p>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                            <input type="checkbox" defaultChecked={i < 2} className="size-5 rounded border-gray-300 text-[#ff5a5f] focus:ring-[#ff5a5f]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeSection === "#security" && (
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                                <div className="border-b border-gray-100 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-3">Change Password</h4>
                                        <div className="space-y-3">
                                            <input type="password" placeholder="Current Password" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                            <input type="password" placeholder="New Password" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                            <input type="password" placeholder="Confirm New Password" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                        <button className="mt-4 rounded-lg bg-[#ff5a5f] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#e04850]">Update Password</button>
                                    </div>
                                    <div className="border-t border-gray-100 pt-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                                                <p className="text-sm text-gray-500">Add an extra layer of security</p>
                                            </div>
                                            <button className="rounded-lg border border-[#ff5a5f] px-4 py-2 text-sm font-semibold text-[#ff5a5f] hover:bg-[#ff5a5f]/5">Enable</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "#company" && (
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                                <div className="border-b border-gray-100 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Company Details</h3>
                                </div>
                                <div className="p-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Company Name</label>
                                            <input type="text" placeholder="Enter company name" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Business Email</label>
                                            <input type="email" placeholder="company@example.com" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Tax ID / GST Number</label>
                                            <input type="text" placeholder="Enter tax ID" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Billing Address</label>
                                            <input type="text" placeholder="Enter billing address" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20" />
                                        </div>
                                    </div>
                                    <button className="mt-6 rounded-lg bg-[#ff5a5f] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#e04850]">Save Company Details</button>
                                </div>
                            </div>
                        )}

                        {activeSection === "#preferences" && (
                            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                                <div className="border-b border-gray-100 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
                                </div>
                                <div className="p-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Language</label>
                                            <select className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20">
                                                <option>English</option>
                                                <option>Hindi</option>
                                                <option>Spanish</option>
                                                <option>French</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Currency</label>
                                            <select className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20">
                                                <option>USD ($)</option>
                                                <option>INR (₹)</option>
                                                <option>EUR (€)</option>
                                                <option>GBP (£)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Timezone</label>
                                            <select className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20">
                                                <option>UTC-05:00 (Eastern Time)</option>
                                                <option>UTC+05:30 (India Standard Time)</option>
                                                <option>UTC+00:00 (GMT)</option>
                                                <option>UTC+08:00 (Singapore Time)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm font-medium text-gray-700">Date Format</label>
                                            <select className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20">
                                                <option>MM/DD/YYYY</option>
                                                <option>DD/MM/YYYY</option>
                                                <option>YYYY-MM-DD</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="mt-6 rounded-lg bg-[#ff5a5f] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#e04850]">Save Preferences</button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}
