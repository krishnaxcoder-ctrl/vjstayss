import { Building07, Globe01, Heart, Shield01, Star01, Users01 } from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";

export default function AboutPage() {
    return (
        <div>
            <SiteHeader variant="light" />
            {/* Hero Banner */}
            <section className="relative h-80 w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop"
                        alt="Luxury hotel lobby"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                </div>
                <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col items-start justify-center px-6 lg:px-12">
                    <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        About <span className="text-[#ff5a5f]">VJStays</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/80">
                        Your trusted partner for finding the perfect accommodation for your next adventure.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#ff5a5f] py-12">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white md:text-5xl">10K+</p>
                            <p className="mt-2 text-white/80">Properties Listed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white md:text-5xl">50K+</p>
                            <p className="mt-2 text-white/80">Happy Guests</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white md:text-5xl">100+</p>
                            <p className="mt-2 text-white/80">Destinations</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-white md:text-5xl">4.8</p>
                            <p className="mt-2 text-white/80">Average Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Story</h2>
                            <div className="mt-6 space-y-4 text-gray-600">
                                <p>
                                    Founded in 2020, VJStays began with a simple vision: to make finding the perfect accommodation
                                    easy, affordable, and enjoyable for every traveler.
                                </p>
                                <p>
                                    What started as a small collection of handpicked hotels has grown into a comprehensive
                                    platform featuring thousands of properties across India and beyond. From cozy homestays
                                    to luxury resorts, we've curated options for every type of traveler and budget.
                                </p>
                                <p>
                                    Today, we're proud to have helped over 50,000 guests find their perfect stay, and we're
                                    just getting started. Our commitment to quality, transparency, and customer satisfaction
                                    remains at the heart of everything we do.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop"
                                alt="Hotel exterior"
                                className="h-full w-full rounded-2xl object-cover shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Vision */}
            <section className="bg-gray-50 py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                            <div className="flex size-14 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Globe01 className="size-7 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-6 text-2xl font-bold text-gray-900">Our Mission</h3>
                            <p className="mt-4 text-gray-600">
                                To connect travelers with unique stays that offer authentic experiences, comfort, and value.
                                We believe every journey deserves a comfortable place to call home, and we're dedicated to
                                making that a reality for every guest.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                            <div className="flex size-14 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Star01 className="size-7 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-6 text-2xl font-bold text-gray-900">Our Vision</h3>
                            <p className="mt-4 text-gray-600">
                                To become the most trusted and loved accommodation booking platform in India, known for
                                our exceptional service, curated properties, and commitment to creating unforgettable
                                travel experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Why Choose VJStays?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            We go above and beyond to ensure your booking experience is seamless and your stay is memorable.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Shield01 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">Verified Properties</h3>
                            <p className="mt-2 text-gray-600">
                                Every property is personally verified to ensure quality, cleanliness, and accuracy of listings.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Heart className="size-6 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">Best Price Guarantee</h3>
                            <p className="mt-2 text-gray-600">
                                Find a lower price elsewhere? We'll match it and give you an additional 10% off.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Users01 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">24/7 Support</h3>
                            <p className="mt-2 text-gray-600">
                                Our dedicated support team is available round the clock to assist you with any queries.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Building07 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">Diverse Options</h3>
                            <p className="mt-2 text-gray-600">
                                From budget-friendly rooms to luxury suites, find accommodations that fit your style and budget.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Star01 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">Genuine Reviews</h3>
                            <p className="mt-2 text-gray-600">
                                Read authentic reviews from verified guests to make informed booking decisions.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                <Shield01 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">Secure Payments</h3>
                            <p className="mt-2 text-gray-600">
                                Book with confidence using our secure payment gateway with multiple payment options.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-gray-900 py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white md:text-4xl">Our Core Values</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                            These principles guide everything we do at VJStays.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#ff5a5f]">
                                <Heart className="size-8 text-white" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-white">Customer First</h3>
                            <p className="mt-2 text-gray-400">Your satisfaction is our top priority</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#ff5a5f]">
                                <Shield01 className="size-8 text-white" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-white">Trust & Safety</h3>
                            <p className="mt-2 text-gray-400">Building trust through transparency</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#ff5a5f]">
                                <Star01 className="size-8 text-white" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-white">Excellence</h3>
                            <p className="mt-2 text-gray-400">Striving for the best in everything</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#ff5a5f]">
                                <Globe01 className="size-8 text-white" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-white">Innovation</h3>
                            <p className="mt-2 text-gray-400">Continuously improving your experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What Our Guests Say</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Don't just take our word for it. Here's what travelers love about VJStays.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star01 key={i} className="size-5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                ))}
                            </div>
                            <p className="mt-4 text-gray-600">
                                "Amazing experience! The hotel was exactly as described and the booking process was so smooth.
                                Will definitely use VJStays again for my future trips."
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f] text-sm font-semibold text-white">
                                    RK
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Rahul Kumar</p>
                                    <p className="text-sm text-gray-500">Mumbai</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star01 key={i} className="size-5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                ))}
                            </div>
                            <p className="mt-4 text-gray-600">
                                "Best prices I found anywhere! The customer support was incredibly helpful when I needed to
                                modify my booking. Highly recommended!"
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f] text-sm font-semibold text-white">
                                    PS
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                                    <p className="text-sm text-gray-500">Delhi</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star01 key={i} className="size-5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                ))}
                            </div>
                            <p className="mt-4 text-gray-600">
                                "I've been using VJStays for all my business trips. The variety of options and the
                                transparent pricing make it my go-to booking platform."
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-[#ff5a5f] text-sm font-semibold text-white">
                                    AJ
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Amit Joshi</p>
                                    <p className="text-sm text-gray-500">Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#ff5a5f] py-16 lg:py-20">
                <div className="mx-auto max-w-8xl px-6 text-center lg:px-12">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Find Your Perfect Stay?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-white/80">
                        Join thousands of happy travelers who trust VJStays for their accommodation needs.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="/"
                            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-[#ff5a5f] shadow-lg transition-all hover:bg-gray-100"
                        >
                            Browse Properties
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex cursor-pointer items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
