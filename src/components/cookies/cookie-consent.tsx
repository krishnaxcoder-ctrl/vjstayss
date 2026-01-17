"use client";

import { useEffect, useState } from "react";
import { Settings04, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import Link from "next/link";
import { cx } from "@/utils/cx";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem("vjstays-cookie-consent");
        if (!cookieConsent) {
            // Small delay before showing for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    const handleAcceptAll = () => {
        localStorage.setItem("vjstays-cookie-consent", "accepted");
        handleClose();
    };

    const handleRejectAll = () => {
        localStorage.setItem("vjstays-cookie-consent", "rejected");
        handleClose();
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={cx(
                    "fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300",
                    isClosing ? "opacity-0" : "opacity-100"
                )}
                onClick={handleRejectAll}
            />

            {/* Cookie Popup */}
            <div
                className={cx(
                    "fixed bottom-6 left-6 right-6 z-[101] mx-auto max-w-sm transform transition-all duration-300 md:left-auto md:right-6 md:mx-0",
                    isClosing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                )}
            >
                <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 border-b border-gray-100 bg-gradient-to-r from-[#ff5a5f]/5 to-transparent p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Settings04 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Cookie Settings</h3>
                                <p className="text-sm text-gray-500">Manage your preferences</p>
                            </div>
                        </div>
                        <button
                            onClick={handleRejectAll}
                            className="flex size-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                            aria-label="Close"
                        >
                            <XClose className="size-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <p className="text-sm leading-relaxed text-gray-600">
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                        </p>

                        {/* Cookie Types */}
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-2 rounded-full bg-green-500" />
                                    <span className="text-sm font-medium text-gray-700">Essential Cookies</span>
                                </div>
                                <span className="text-xs font-medium text-gray-400">Always Active</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-2 rounded-full bg-[#ff5a5f]" />
                                    <span className="text-sm font-medium text-gray-700">Analytics Cookies</span>
                                </div>
                                <span className="text-xs font-medium text-gray-400">Optional</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-2 rounded-full bg-[#ff5a5f]" />
                                    <span className="text-sm font-medium text-gray-700">Marketing Cookies</span>
                                </div>
                                <span className="text-xs font-medium text-gray-400">Optional</span>
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-gray-500">
                            Read our{" "}
                            <Link href="/privacy" className="text-[#ff5a5f] underline hover:text-[#e04850]">
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link href="/cookies" className="text-[#ff5a5f] underline hover:text-[#e04850]">
                                Cookie Policy
                            </Link>{" "}
                            for more information.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 border-t border-gray-100 bg-gray-50 p-4">
                        <Button
                            color="secondary"
                            size="md"
                            className="flex-1"
                            onPress={handleRejectAll}
                        >
                            Reject All
                        </Button>
                        <Button
                            color="primary"
                            size="md"
                            className="flex-1 bg-[#ff5a5f] hover:bg-[#e04850]"
                            onPress={handleAcceptAll}
                        >
                            Accept All
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
