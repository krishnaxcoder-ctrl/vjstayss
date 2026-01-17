import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/booking/footer";
import { CookieConsent } from "@/components/cookies/cookie-consent";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plus-jakarta",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "VJStays - Find Your Perfect Stay",
    description: "Discover amazing hotels, resorts, and unique accommodations at the best prices.",
};

export const viewport: Viewport = {
    themeColor: "#ff5a5f",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(plusJakarta.variable, "font-sans bg-white antialiased")}>
                <RouteProvider>
                    <Theme>
                        {children}
                        <Footer />
                        <CookieConsent />
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
