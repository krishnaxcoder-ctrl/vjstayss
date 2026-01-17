"use client";

import { Footer } from "@/components/booking/footer";
import { Header } from "@/components/marketing/header-navigation/header";

export default function AboutPage() {
    return (
        <main className="bg-white">
            <Header />
            <div className="mx-auto max-w-container px-4 py-16 md:px-8">
                <div className="mx-auto max-w-3xl">
                    <h1 className="mb-6 text-4xl font-bold text-primary md:text-5xl">About VJStays</h1>
                    <p className="mb-8 text-lg text-secondary">
                        Welcome to VJStays – your trusted partner for finding the perfect accommodation for your next adventure.
                    </p>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-semibold text-primary">Our Mission</h2>
                        <p className="text-secondary">
                            At VJStays, we believe that every journey deserves a comfortable place to call home. Our mission is to connect
                            travelers with unique stays that offer authentic experiences, comfort, and value.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-semibold text-primary">What We Offer</h2>
                        <ul className="list-inside list-disc space-y-2 text-secondary">
                            <li>Curated selection of quality accommodations</li>
                            <li>Verified hosts and properties</li>
                            <li>24/7 customer support</li>
                            <li>Secure booking and payment</li>
                            <li>Best price guarantee</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-2xl font-semibold text-primary">Our Story</h2>
                        <p className="text-secondary">
                            Founded with a passion for travel and hospitality, VJStays has grown from a small startup to a trusted
                            platform serving thousands of travelers worldwide. We're dedicated to making your stay memorable and
                            hassle-free.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
