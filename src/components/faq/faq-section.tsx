"use client";

import { useState } from "react";
import { HelpCircle, Plus, Minus, Building07, Wallet03, ShieldTick, Globe01, CreditCard02, Tag01, MarkerPin01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

const faqs = [
    {
        icon: Globe01,
        question: "What are the advantages of online hotel booking?",
        answer: [
            "Book hotels in India or International hotels from home in few simple clicks",
            "Check reviews, images, ratings and amenities of all hotels at one place",
            "Avail great discounts and exclusive offers on hotel booking",
            "Avoid last-minute hotel search with high prices - book at reasonable prices",
            "Get attractive cashback offers on credit cards, debit cards and e-wallets",
            "Customize your stay with plenty of room plans available",
            "Read hotel policies online for a hassle-free experience",
        ],
    },
    {
        icon: ShieldTick,
        question: "Where can we find safe and well sanitized hotels?",
        answer: [
            "goSafe Hotels collection with well sanitized rooms and trained staff",
            "Daily disinfection of rooms with fresh room linens",
            "Regular sanitization of common areas and safe kitchen practices",
            "Social distancing maintenance and temperature checks",
            "Staff equipped with masks and gloves at all times",
            "Available in Goa, Mumbai, Delhi, Bangalore and more cities",
        ],
    },
    {
        icon: MarkerPin01,
        question: "What are the popular Indian cities frequently visited?",
        answer: [
            "Business: Mumbai, Delhi, Bangalore, Ahmedabad, Kolkata, Pune, Hyderabad",
            "Leisure: Goa, Jaipur, Manali, Pondicherry, Ooty, Nainital",
            "Religious: Katra, Shirdi, Amritsar, Tirupati, Puri",
            "Each city offers diverse accommodation from budget to luxury hotels",
        ],
    },
    {
        icon: Building07,
        question: "Which Indian Hotels are popular for Online Booking?",
        answer: [
            "Mumbai: The Taj Mahal Hotel, Grand Hyatt, The Lalit, Trident",
            "Delhi: Le Meridien, Hotel Taj Palace, The Lalit Delhi",
            "Goa: Grand Hyatt, W Goa, The Leela, Taj Exotica",
            "Jaipur: Fairmont, Marriott, Radisson Blu",
            "Free Cancellation, Instant Refund and 24/7 customer support available",
        ],
    },
    {
        icon: Wallet03,
        question: "How can I book hotels at the lowest price?",
        answer: [
            "Earn goCash by inviting friends and referring them",
            "Sync contacts and help others with booking queries for rewards",
            "goCash auto-applies during checkout for instant savings",
            "Check ongoing offers and promo codes before booking",
            "Book in advance for better deals on premium properties",
        ],
    },
    {
        icon: CreditCard02,
        question: "Is online hotel booking safe and reliable?",
        answer: [
            "100% secure payment gateway with SSL encryption",
            "Verified listings with authentic reviews and ratings",
            "24/7 customer support for any booking assistance",
            "Transparent pricing with no hidden charges",
            "Instant booking confirmation via email and SMS",
        ],
    },
    {
        icon: Tag01,
        question: "Where can I check discounts and offers?",
        answer: [
            "Current offers displayed on hotel pages of website and app",
            "Limited period promo codes and seasonal deals",
            "Bank-specific offers on credit and debit cards",
            "Subscribe to newsletter for exclusive deals in your inbox",
            "Check 'Deals' section for curated discount packages",
        ],
    },
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 lg:py-28">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 top-20 size-80 rounded-full bg-[#ff5a5f]/5 blur-3xl" />
                <div className="absolute -left-40 bottom-40 size-80 rounded-full bg-purple-500/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-5 py-2">
                        <HelpCircle className="size-5 text-[#ff5a5f]" />
                        <span className="text-sm font-semibold text-[#ff5a5f]">Frequently Asked Questions</span>
                    </div>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Got questions?
                        <span className="mt-1 block bg-gradient-to-r from-[#ff5a5f] to-[#ff8a8e] bg-clip-text text-transparent pb-1">
                            We've got answers
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Everything you need to know about booking your perfect stay.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            const Icon = faq.icon;

                            return (
                                <div
                                    key={index}
                                    className={cx(
                                        "group rounded-2xl border-2 bg-white transition-all duration-300",
                                        isOpen
                                            ? "border-[#ff5a5f]/30 shadow-lg shadow-[#ff5a5f]/5"
                                            : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center gap-4 p-6 text-left"
                                    >
                                        {/* Icon */}
                                        <div className={cx(
                                            "flex size-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                                            isOpen
                                                ? "bg-[#ff5a5f] shadow-lg shadow-[#ff5a5f]/30"
                                                : "bg-gray-100 group-hover:bg-[#ff5a5f]/10"
                                        )}>
                                            <Icon className={cx(
                                                "size-6 transition-colors duration-300",
                                                isOpen ? "text-white" : "text-gray-500 group-hover:text-[#ff5a5f]"
                                            )} />
                                        </div>

                                        {/* Question */}
                                        <span className={cx(
                                            "flex-1 text-lg font-semibold transition-colors",
                                            isOpen ? "text-[#ff5a5f]" : "text-gray-900"
                                        )}>
                                            {faq.question}
                                        </span>

                                        {/* Toggle Icon */}
                                        <div className={cx(
                                            "flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                                            isOpen
                                                ? "bg-[#ff5a5f] rotate-0"
                                                : "bg-gray-100 group-hover:bg-[#ff5a5f]/10"
                                        )}>
                                            {isOpen ? (
                                                <Minus className="size-5 text-white" />
                                            ) : (
                                                <Plus className={cx(
                                                    "size-5 transition-colors",
                                                    "text-gray-500 group-hover:text-[#ff5a5f]"
                                                )} />
                                            )}
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <div className={cx(
                                        "grid transition-all duration-300 ease-in-out",
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    )}>
                                        <div className="overflow-hidden">
                                            <div className="px-6 pb-6">
                                                <div className="ml-16 border-l-2 border-[#ff5a5f]/20 pl-6">
                                                    <ul className="space-y-3">
                                                        {faq.answer.map((point, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#ff5a5f]" />
                                                                <span className="leading-relaxed">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
