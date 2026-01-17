"use client";

import { useState } from "react";
import { Send01, Star01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
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
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid 10-digit phone number";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        if (!agreed) {
            newErrors.agreed = "You must agree to the privacy policy";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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
            <div>
                <SiteHeader variant="light" />
                <div className="flex h-[calc(100vh-73px)] items-center justify-center px-6 lg:h-[calc(100vh-89px)]">
                    <div className="text-center">
                        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#ff5a5f]/10">
                            <Send01 className="size-10 text-[#ff5a5f]" />
                        </div>
                        <h2 className="mt-6 text-2xl font-bold text-gray-900">Message Sent!</h2>
                        <p className="mt-2 text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
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
        <div>
            <SiteHeader variant="light" />
            <div className="flex h-[calc(100vh-73px)] flex-col overflow-hidden lg:h-[calc(100vh-89px)] lg:flex-row">
                {/* Left Side - Form (40%) */}
                <div className="flex w-full flex-col justify-center overflow-y-auto px-6 py-8 lg:w-[40%] lg:px-12 xl:px-16">
                    <div className="w-full max-w-md">
                        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Get in touch</h1>
                        <p className="mt-3 text-gray-600">Our friendly team would love to hear from you.</p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            {/* First & Last Name */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Input
                                    label="First name"
                                    placeholder="First name"
                                    isRequired
                                    isInvalid={!!errors.firstName}
                                    value={formData.firstName}
                                    onChange={(value) => {
                                        setFormData({ ...formData, firstName: value });
                                        if (errors.firstName) setErrors({ ...errors, firstName: "" });
                                    }}
                                    hint={errors.firstName}
                                    wrapperClassName="!bg-slate-50"
                                    inputClassName="!bg-slate-50 !text-gray-900"
                                />
                                <Input
                                    label="Last name"
                                    placeholder="Last name"
                                    isRequired
                                    isInvalid={!!errors.lastName}
                                    value={formData.lastName}
                                    onChange={(value) => {
                                        setFormData({ ...formData, lastName: value });
                                        if (errors.lastName) setErrors({ ...errors, lastName: "" });
                                    }}
                                    hint={errors.lastName}
                                    wrapperClassName="!bg-slate-50"
                                    inputClassName="!bg-slate-50 !text-gray-900"
                                />
                            </div>

                            {/* Email */}
                            <Input
                                label="Email"
                                type="email"
                                placeholder="you@company.com"
                                isRequired
                                isInvalid={!!errors.email}
                                value={formData.email}
                                onChange={(value) => {
                                    setFormData({ ...formData, email: value });
                                    if (errors.email) setErrors({ ...errors, email: "" });
                                }}
                                hint={errors.email}
                                wrapperClassName="!bg-slate-50"
                                inputClassName="!bg-slate-50 !text-gray-900"
                            />

                            {/* Phone Number */}
                            <Input
                                label="Phone number"
                                type="tel"
                                placeholder="+91 98765 43210"
                                isRequired
                                isInvalid={!!errors.phone}
                                value={formData.phone}
                                onChange={(value) => {
                                    setFormData({ ...formData, phone: value });
                                    if (errors.phone) setErrors({ ...errors, phone: "" });
                                }}
                                hint={errors.phone}
                                wrapperClassName="!bg-slate-50"
                                inputClassName="!bg-slate-50 !text-gray-900"
                            />

                            {/* Message */}
                            <TextArea
                                label="Message"
                                placeholder="Tell us how we can help you..."
                                rows={3}
                                isRequired
                                isInvalid={!!errors.message}
                                value={formData.message}
                                onChange={(value) => {
                                    setFormData({ ...formData, message: value });
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                                hint={errors.message}
                                textAreaClassName="!bg-slate-50 !text-gray-900"
                            />

                            {/* Privacy Policy Checkbox */}
                            <div>
                                <Checkbox
                                    isSelected={agreed}
                                    onChange={setAgreed}
                                    isInvalid={!!errors.agreed}
                                    label={
                                        <span className="text-gray-600">
                                            You agree to our friendly{" "}
                                            <a href="#" className="text-[#ff5a5f] underline hover:text-[#e04850]">
                                                privacy policy
                                            </a>
                                            .
                                        </span>
                                    }
                                />
                                {errors.agreed && <p className="mt-1 text-sm text-red-500">{errors.agreed}</p>}
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
