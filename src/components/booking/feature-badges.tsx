"use client";

import { Check, CreditCard02, Shield01, Star01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

const features = [
    {
        icon: Check,
        title: "Best Price Guarantee",
        description: "Find a lower price? We'll refund the difference",
    },
    {
        icon: Shield01,
        title: "Free Cancellation",
        description: "On most bookings, cancel anytime",
    },
    {
        icon: CreditCard02,
        title: "No Hidden Fees",
        description: "What you see is what you pay",
    },
    {
        icon: Star01,
        title: "24/7 Support",
        description: "Get help whenever you need it",
    },
];

export const FeatureBadges = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
    const isDark = variant === "dark";

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className={cx(
                        "flex flex-col items-center rounded-xl p-4 text-center transition-all hover:scale-105",
                        isDark ? "bg-white/10 backdrop-blur-sm" : "bg-gray-50 hover:bg-gray-100"
                    )}
                >
                    <div
                        className={cx(
                            "mb-3 flex size-12 items-center justify-center rounded-full",
                            isDark ? "bg-amber-500/20" : "bg-amber-100"
                        )}
                    >
                        <feature.icon className={cx("size-6", isDark ? "text-amber-400" : "text-amber-600")} />
                    </div>
                    <h3 className={cx("mb-1 text-sm font-semibold", isDark ? "text-white" : "text-gray-900")}>
                        {feature.title}
                    </h3>
                    <p className={cx("text-xs", isDark ? "text-white/70" : "text-gray-500")}>{feature.description}</p>
                </div>
            ))}
        </div>
    );
};
