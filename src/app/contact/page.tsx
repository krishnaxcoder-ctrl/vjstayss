"use client";

import { useState } from "react";
import { Send01, Star01, AlertCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
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
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors: Record<string, boolean> = {};
        let message = "";

        if (!formData.firstName.trim()) {
            newErrors.firstName = true;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = true;
        }

        if (!formData.email.trim()) {
            newErrors.email = true;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = true;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = true;
        } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = true;
        }

        if (!formData.message.trim()) {
            newErrors.message = true;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = true;
        }

        if (!agreed) {
            newErrors.agreed = true;
        }

        const errorCount = Object.keys(newErrors).length;
        if (errorCount > 0) {
            message = "Please fill in all required fields correctly to submit the form.";
        }

        setErrors(newErrors);
        setErrorMessage(message);
        return errorCount === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        console.log("Form submitted:", formData);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white">
                <SiteHeader variant="light" />
                <div className="flex h-[calc(100vh-73px)] items-center justify-center px-6 lg:h-[calc(100vh-89px)]">
                    <div className="text-center">
                        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#ff5a5f]/10">
                            <Send01 className="size-10 text-[#ff5a5f]" />
                        </div>
                        <h2 className="mt-6 text-2xl font-bold text-gray-900">Message Sent!</h2>
                        <p className="mt-2 text-gray-700">Thank you for reaching out. We'll get back to you soon.</p>
                        <Button
                            size="lg"
                            className="mt-8 bg-[#ff5a5f] hover:bg-[#e04850]"
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                                setAgreed(false);
                            }}
                        >
                            Send another message
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />
            <div className="flex h-[calc(100vh-73px)] flex-col overflow-hidden lg:h-[calc(100vh-89px)] lg:flex-row">
                {/* Left Side - Form (40%) */}
                <div className="flex w-full flex-col justify-center overflow-y-auto bg-white px-6 py-8 lg:w-[40%] lg:px-12 xl:px-16">
                    <div className="w-full max-w-md">
                        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Get in touch</h1>
                        <p className="mt-3 text-gray-700">Our friendly team would love to hear from you.</p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            {/* Error Banner */}
                            {errorMessage && (
                                <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                                    <AlertCircle className="size-5 shrink-0 text-red-500" />
                                    <p className="text-[13px] font-medium text-red-700">{errorMessage}</p>
                                </div>
                            )}

                            {/* First & Last Name */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-gray-800">
                                        First name <span className="text-[#ff5a5f]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={(e) => {
                                            setFormData({ ...formData, firstName: e.target.value });
                                            if (errors.firstName) {
                                                setErrors({ ...errors, firstName: false });
                                                setErrorMessage("");
                                            }
                                        }}
                                        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-gray-900 placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-[#ff5a5f]/20 ${
                                            errors.firstName
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:border-[#ff5a5f]"
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-gray-800">
                                        Last name <span className="text-[#ff5a5f]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={(e) => {
                                            setFormData({ ...formData, lastName: e.target.value });
                                            if (errors.lastName) {
                                                setErrors({ ...errors, lastName: false });
                                                setErrorMessage("");
                                            }
                                        }}
                                        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-gray-900 placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-[#ff5a5f]/20 ${
                                            errors.lastName
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-300 focus:border-[#ff5a5f]"
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-800">
                                    Email <span className="text-[#ff5a5f]">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                        if (errors.email) {
                                            setErrors({ ...errors, email: false });
                                            setErrorMessage("");
                                        }
                                    }}
                                    className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-gray-900 placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-[#ff5a5f]/20 ${
                                        errors.email
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-gray-300 focus:border-[#ff5a5f]"
                                    }`}
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-800">
                                    Phone number <span className="text-[#ff5a5f]">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={(e) => {
                                        setFormData({ ...formData, phone: e.target.value });
                                        if (errors.phone) {
                                            setErrors({ ...errors, phone: false });
                                            setErrorMessage("");
                                        }
                                    }}
                                    className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-gray-900 placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-[#ff5a5f]/20 ${
                                        errors.phone
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-gray-300 focus:border-[#ff5a5f]"
                                    }`}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-800">
                                    Message <span className="text-[#ff5a5f]">*</span>
                                </label>
                                <textarea
                                    rows={2}
                                    placeholder="Tell us how we can help you..."
                                    value={formData.message}
                                    onChange={(e) => {
                                        setFormData({ ...formData, message: e.target.value });
                                        if (errors.message) {
                                            setErrors({ ...errors, message: false });
                                            setErrorMessage("");
                                        }
                                    }}
                                    className={`w-full resize-none rounded-lg border bg-white px-3.5 py-2.5 text-gray-900 placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-[#ff5a5f]/20 ${
                                        errors.message
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-gray-300 focus:border-[#ff5a5f]"
                                    }`}
                                />
                            </div>

                            {/* Privacy Policy Checkbox */}
                            <div>
                                <Checkbox
                                    isSelected={agreed}
                                    onChange={(checked) => {
                                        setAgreed(checked);
                                        if (errors.agreed) {
                                            setErrors({ ...errors, agreed: false });
                                            setErrorMessage("");
                                        }
                                    }}
                                    isInvalid={!!errors.agreed}
                                    label={
                                        <span className="text-gray-700">
                                            You agree to our friendly{" "}
                                            <a href="#" className="text-[#ff5a5f] underline hover:text-[#e04850]">
                                                privacy policy
                                            </a>
                                            .
                                        </span>
                                    }
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                isLoading={isSubmitting}
                                isDisabled={isSubmitting}
                                iconLeading={Send01}
                                className="w-full bg-[#ff5a5f] hover:bg-[#e04850]"
                            >
                                Get in touch
                            </Button>
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
                                    <Star01 key={i} className="size-5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
