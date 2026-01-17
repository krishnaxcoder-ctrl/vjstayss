"use client";

import { Check, CreditCard02, Shield01, Headphones02 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

const features = [
    {
        icon: Check,
        title: "Best Price Guarantee",
    },
    {
        icon: Shield01,
        title: "Free Cancellation",
    },
    {
        icon: CreditCard02,
        title: "No Hidden Fees",
    },
    {
        icon: Headphones02,
        title: "24/7 Support",
    },
];

export const FeatureBadges = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
    const isDark = variant === "dark";

    return (
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className="flex items-center gap-2"
                >
                    <div
                        className={cx(
                            "flex size-5 items-center justify-center rounded-full",
                            isDark ? "bg-white/20" : "bg-amber-100"
                        )}
                    >
                        <feature.icon
                            className={cx(
                                "size-3",
                                isDark ? "text-amber-300" : "text-amber-600"
                            )}
                        />
                    </div>
                    <span
                        className={cx(
                            "text-sm font-medium",
                            isDark ? "text-white/80" : "text-gray-600"
                        )}
                    >
                        {feature.title}
                    </span>
                </div>
            ))}
        </div>
    );
};
