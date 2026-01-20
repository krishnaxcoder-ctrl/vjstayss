"use client";

import { useState } from "react";
import { Send01, Star01, AlertCircle, Mail01, Phone, MarkerPin01, Clock, MessageChatCircle, HelpCircle, ChevronDown, ChevronUp } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { SiteHeader } from "@/components/layout/site-header";

const contactInfo = [
    {
        icon: Mail01,
        title: "Email us",
        description: "Our friendly team is here to help.",
        value: "hello@vjstays.com",
        href: "mailto:hello@vjstays.com",
    },
    {
        icon: MessageChatCircle,
        title: "Live chat",
        description: "Available Mon-Fri, 9am-6pm IST.",
        value: "Start a conversation",
        href: "#",
    },
    {
        icon: MarkerPin01,
        title: "Visit us",
        description: "Come say hello at our office.",
        value: "Mumbai, Maharashtra, India",
        href: "#",
    },
    {
        icon: Phone,
        title: "Call us",
        description: "Mon-Fri from 9am to 6pm.",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
    },
];

const faqs = [
    {
        question: "What is the typical response time?",
        answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line directly.",
    },
    {
        question: "Do you offer 24/7 customer support?",
        answer: "Our live chat and phone support are available Monday to Friday, 9am to 6pm IST. However, you can submit inquiries anytime through our contact form, and we'll get back to you during business hours.",
    },
    {
        question: "Can I schedule a property viewing?",
        answer: "Absolutely! You can request a property viewing through our contact form or by calling us directly. We'll coordinate with the property owner to find a suitable time.",
    },
    {
        question: "What areas do you cover?",
        answer: "VJStays currently operates across major cities in India including Mumbai, Delhi, Bangalore, Pune, and Goa. We're constantly expanding to new locations.",
    },
    {
        question: "How can I list my property with VJStays?",
        answer: "Property owners can list their properties by contacting us through this form or emailing us at partners@vjstays.com. Our team will guide you through the onboarding process.",
    },
];

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
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                            className="mt-8 bg-[#ff5a5f] hover:bg-[#ff5a5f]"
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

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#fff5f5] to-white px-6 py-16 lg:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-block rounded-full bg-[#ff5a5f]/10 px-4 py-1.5 text-sm font-medium text-[#ff5a5f]">Contact Us</span>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">We'd love to hear from you</h1>
                    <p className="mt-4 text-lg text-gray-600">Have questions about our properties or services? Our team is ready to help you find your perfect stay.</p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="border-b border-gray-100 bg-white px-6 py-12">
                <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {contactInfo.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-[#ff5a5f]/30 hover:shadow-lg hover:shadow-[#ff5a5f]/5"
                        >
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10 transition-colors group-hover:bg-[#ff5a5f]/20">
                                <item.icon className="size-6 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            <p className="mt-3 font-medium text-[#ff5a5f]">{item.value}</p>
                        </a>
                    ))}
                </div>
            </section>

            {/* Main Contact Form Section */}
            <div className="flex h-[900px] flex-col border-y-2 border-[#ff5a5f] lg:flex-row">
                {/* Left Side - Form (40%) */}
                <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-[40%] lg:px-12 xl:px-16">
                    <div className="mx-auto w-full max-w-md">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Get in touch</h2>
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
                                            <a href="#" className="text-[#ff5a5f] underline hover:text-[#ff5a5f]">
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
                                className="w-full bg-[#ff5a5f] hover:bg-[#ff5a5f]"
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

            {/* FAQ Section */}
            <section className="bg-gray-50 px-6 py-16 lg:py-20">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-1.5 text-sm font-medium text-[#ff5a5f]">
                            <HelpCircle className="size-4" />
                            FAQs
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">Frequently asked questions</h2>
                        <p className="mt-3 text-gray-600">Can't find the answer you're looking for? Reach out to our customer support team.</p>
                    </div>

                    <div className="mt-10 space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                                >
                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="size-5 shrink-0 text-[#ff5a5f]" />
                                    ) : (
                                        <ChevronDown className="size-5 shrink-0 text-gray-400" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-4">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Office Hours & Map Section */}
            <section className="border-t border-gray-100 bg-white px-6 py-16 lg:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Office Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Our Office</h2>
                            <p className="mt-3 text-gray-600">Visit us at our headquarters or connect with us remotely. We're here to help!</p>

                            <div className="mt-8 space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                        <MarkerPin01 className="size-6 text-[#ff5a5f]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Headquarters</h3>
                                        <p className="mt-1 text-gray-600">123 Business Hub, Andheri West</p>
                                        <p className="text-gray-600">Mumbai, Maharashtra 400053</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                        <Clock className="size-6 text-[#ff5a5f]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                                        <p className="mt-1 text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM IST</p>
                                        <p className="text-gray-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <MarkerPin01 className="mx-auto size-12 text-[#ff5a5f]" />
                                    <p className="mt-2 font-medium text-gray-900">Mumbai, India</p>
                                    <p className="text-sm text-gray-500">View on Google Maps</p>
                                </div>
                            </div>
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#ff5a5f] px-6 py-16">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Still have questions?</h2>
                    <p className="mt-3 text-lg text-white/90">Can't find the answer you're looking for? Please chat with our friendly team.</p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="bg-white text-[#ff5a5f] hover:bg-gray-100">
                            <MessageChatCircle className="mr-2 size-5" />
                            Start a conversation
                        </Button>
                        <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10">
                            <Phone className="mr-2 size-5" />
                            Call us now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
