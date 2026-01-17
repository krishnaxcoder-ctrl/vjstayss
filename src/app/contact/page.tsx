"use client";

import { useState } from "react";
import { Star01 } from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div>
            <SiteHeader variant="light" />
            <div className="flex h-[calc(100vh-73px)] flex-col overflow-hidden lg:h-[calc(100vh-89px)] lg:flex-row">
            {/* Left Side - Form (40%) */}
            <div className="flex w-full flex-col justify-center overflow-y-auto px-6 py-8 lg:w-[40%] lg:px-12 xl:px-16">
                <div className=" w-full max-w-md">
                    <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Get in touch</h1>
                    <p className="mt-3 text-gray-600">Our friendly team would love to hear from you.</p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        {/* First & Last Name */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-gray-700">
                                    First name <span className="text-[#ff5a5f]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    required
                                    placeholder="First name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Last name <span className="text-[#ff5a5f]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    required
                                    placeholder="Last name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                                Email <span className="text-[#ff5a5f]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="you@company.com"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                                Phone number <span className="text-[#ff5a5f]">*</span>
                            </label>
                            <div className="flex">
                                <select className="rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20">
                                    <option>IN +91</option>
                                    <option>US +1</option>
                                    <option>UK +44</option>
                                </select>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    placeholder="98765 43210"
                                    className="w-full rounded-r-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                                Message <span className="text-[#ff5a5f]">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={3}
                                required
                                placeholder="Tell us how we can help you..."
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-[#ff5a5f] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/20"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Privacy Policy Checkbox */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="mt-0.5 size-4 cursor-pointer rounded border-gray-300 text-[#ff5a5f] focus:ring-[#ff5a5f]"
                            />
                            <label htmlFor="privacy" className="cursor-pointer text-sm text-gray-600">
                                You agree to our friendly{" "}
                                <a href="#" className="text-[#ff5a5f] underline hover:text-[#e04850]">
                                    privacy policy
                                </a>
                                .
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-[#ff5a5f] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#e04850] focus:outline-none focus:ring-2 focus:ring-[#ff5a5f]/50 focus:ring-offset-2"
                        >
                            Get in touch
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Side - Image & Testimonial (60%) */}
            <div className="relative hidden lg:block lg:w-[60%]">
                <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                    alt="Customer support"
                    className="h-full w-full object-cover object-top"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Testimonial */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <blockquote className="text-xl font-medium leading-relaxed text-white md:text-2xl">
                        "The VJStays team responded within hours and helped us resolve our issue immediately. Their support is exceptional and truly customer-focused."
                    </blockquote>
                    <div className="mt-6 flex items-end justify-between">
                        <div>
                            <p className="font-semibold text-white">— Priya Sharma</p>
                            <p className="text-sm text-white/70">CEO, TechStart India</p>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star01 key={i} className="size-5 fill-white text-white" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
