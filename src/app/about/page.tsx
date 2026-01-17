import { ArrowRight, Building07, CheckCircle, Globe01, Heart, Mail01, MarkerPin06, Phone01, Shield01, Star01, Users01 } from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            {/* Hero Section - Enhanced with better visual impact */}
            <section className="relative min-h-[90vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop"
                        alt="Luxury hotel lobby"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 size-72 rounded-full bg-[#ff5a5f]/20 blur-3xl" />
                <div className="absolute bottom-20 right-10 size-96 rounded-full bg-[#ff5a5f]/10 blur-3xl" />

                <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-8xl flex-col items-center justify-center px-6 text-center lg:px-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                        <span className="size-2 animate-pulse rounded-full bg-[#ff5a5f]" />
                        <span className="text-sm font-medium text-white">Trusted by 50,000+ travelers</span>
                    </div>

                    <h1 className="mt-8 max-w-4xl text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                        Creating Memorable
                        <span className="relative mt-2 block text-[#ff5a5f]">
                            Travel Experiences
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="#ff5a5f" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                        At VJStays, we believe every journey deserves a perfect place to call home. Discover handpicked accommodations that blend comfort, value, and authentic local experiences.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#ff5a5f] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#ff5a5f]/30 transition-all hover:bg-[#e04850] hover:shadow-xl hover:shadow-[#ff5a5f]/40"
                        >
                            Explore Properties
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#our-story"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
                        >
                            Our Story
                        </Link>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-sm text-white/60">Scroll to explore</span>
                            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
                                <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Floating cards design */}
            <section className="relative -mt-24 z-20 px-6 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                        {[
                            { value: "10K+", label: "Properties Listed", icon: Building07 },
                            { value: "50K+", label: "Happy Guests", icon: Users01 },
                            { value: "100+", label: "Destinations", icon: MarkerPin06 },
                            { value: "4.8", label: "Average Rating", icon: Star01 },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div className="absolute -right-4 -top-4 size-20 rounded-full bg-[#ff5a5f]/5 transition-transform group-hover:scale-150" />
                                <stat.icon className="relative size-8 text-[#ff5a5f]" />
                                <p className="relative mt-4 text-3xl font-bold text-gray-900 md:text-4xl">{stat.value}</p>
                                <p className="relative mt-1 text-sm text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section - Enhanced with better layout */}
            <section id="our-story" className="scroll-mt-20 py-24 lg:py-32">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Image collage */}
                        <div className="relative">
                            <div className="relative grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop"
                                        alt="Hotel exterior"
                                        className="h-48 w-full rounded-2xl object-cover shadow-lg md:h-64"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop"
                                        alt="Pool area"
                                        className="h-32 w-full rounded-2xl object-cover shadow-lg md:h-48"
                                    />
                                </div>
                                <div className="mt-8 space-y-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop"
                                        alt="Room interior"
                                        className="h-32 w-full rounded-2xl object-cover shadow-lg md:h-48"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940&auto=format&fit=crop"
                                        alt="Hotel view"
                                        className="h-48 w-full rounded-2xl object-cover shadow-lg md:h-64"
                                    />
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-[#ff5a5f] p-6 shadow-xl shadow-[#ff5a5f]/30 md:p-8">
                                <p className="text-3xl font-bold text-white md:text-4xl">5+</p>
                                <p className="text-sm text-white/80">Years of Excellence</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                                <Heart className="size-4 text-[#ff5a5f]" />
                                <span className="text-sm font-semibold text-[#ff5a5f]">Our Story</span>
                            </div>

                            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                                From a Simple Idea to
                                <span className="text-[#ff5a5f]"> Thousands of Smiles</span>
                            </h2>

                            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
                                <p>
                                    Founded in 2020, VJStays began with a simple vision: to make finding the perfect accommodation easy, affordable, and enjoyable for every traveler.
                                </p>
                                <p>
                                    What started as a small collection of handpicked hotels has grown into a comprehensive platform featuring thousands of properties across India and beyond. From cozy homestays to luxury resorts, we've curated options for every type of traveler and budget.
                                </p>
                            </div>

                            <div className="mt-8 space-y-4">
                                {[
                                    "Personally verified properties for quality assurance",
                                    "24/7 customer support for peace of mind",
                                    "Best price guarantee on all bookings",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="size-6 text-[#ff5a5f]" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Modern feature grid */}
            <section className="py-24 lg:py-32">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid items-start gap-16 lg:grid-cols-2">
                        <div className="lg:sticky lg:top-32">
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                                <Shield01 className="size-4 text-[#ff5a5f]" />
                                <span className="text-sm font-semibold text-[#ff5a5f]">Why VJStays</span>
                            </div>
                            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                                Why Travelers
                                <span className="text-[#ff5a5f]"> Choose Us</span>
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                We go above and beyond to ensure your booking experience is seamless and your stay is memorable. Here's what sets us apart.
                            </p>

                            <div className="mt-10">
                                <Link
                                    href="/"
                                    className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800"
                                >
                                    Start Exploring
                                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2">
                            {[
                                {
                                    icon: Shield01,
                                    title: "Verified Properties",
                                    description: "Every property is personally verified to ensure quality, cleanliness, and accuracy of listings.",
                                },
                                {
                                    icon: Heart,
                                    title: "Best Price Guarantee",
                                    description: "Find a lower price elsewhere? We'll match it and give you an additional 10% off.",
                                },
                                {
                                    icon: Users01,
                                    title: "24/7 Support",
                                    description: "Our dedicated support team is available round the clock to assist you with any queries.",
                                },
                                {
                                    icon: Building07,
                                    title: "Diverse Options",
                                    description: "From budget-friendly rooms to luxury suites, find accommodations that fit your style.",
                                },
                                {
                                    icon: Star01,
                                    title: "Genuine Reviews",
                                    description: "Read authentic reviews from verified guests to make informed booking decisions.",
                                },
                                {
                                    icon: Shield01,
                                    title: "Secure Payments",
                                    description: "Book with confidence using our secure payment gateway with multiple options.",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="group border border-gray-100 bg-white p-6 transition-all hover:border-[#ff5a5f]/20 hover:shadow-xl hover:shadow-[#ff5a5f]/5"
                                >
                                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10 transition-colors group-hover:bg-[#ff5a5f]">
                                        <feature.icon className="size-6 text-[#ff5a5f] transition-colors group-hover:text-white" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="mt-2 text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Modern dark section */}
            <section className="relative overflow-hidden bg-gray-900 py-24 lg:py-32">
                {/* Background decorations */}
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-[#ff5a5f]/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-[#ff5a5f]/5 blur-3xl" />

                <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Our Core Values</h2>
                        <p className="mt-4 text-lg text-gray-400">
                            These principles guide everything we do at VJStays.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: Heart, title: "Customer First", description: "Your satisfaction is our top priority in every interaction" },
                            { icon: Shield01, title: "Trust & Safety", description: "Building trust through transparency and secure practices" },
                            { icon: Star01, title: "Excellence", description: "Striving for the best in everything we do for you" },
                            { icon: Globe01, title: "Innovation", description: "Continuously improving to enhance your experience" },
                        ].map((value, index) => (
                            <div key={index} className="group text-center">
                                <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff5a5f] to-[#ff7a7f] shadow-lg shadow-[#ff5a5f]/30 transition-transform group-hover:scale-110">
                                    <value.icon className="size-10 text-white" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-white">{value.title}</h3>
                                <p className="mt-2 text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Enhanced design */}
            <section className="py-24 lg:py-32">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                            <Star01 className="size-4 text-[#ff5a5f]" />
                            <span className="text-sm font-semibold text-[#ff5a5f]">Testimonials</span>
                        </div>
                        <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                            What Our Guests Say
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Don't just take our word for it. Here's what travelers love about VJStays.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                quote: "Amazing experience! The hotel was exactly as described and the booking process was so smooth. Will definitely use VJStays again for my future trips.",
                                name: "Rahul Kumar",
                                location: "Mumbai",
                                initials: "RK",
                            },
                            {
                                quote: "Best prices I found anywhere! The customer support was incredibly helpful when I needed to modify my booking. Highly recommended!",
                                name: "Priya Sharma",
                                location: "Delhi",
                                initials: "PS",
                            },
                            {
                                quote: "I've been using VJStays for all my business trips. The variety of options and the transparent pricing make it my go-to booking platform.",
                                name: "Amit Joshi",
                                location: "Bangalore",
                                initials: "AJ",
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="group relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-2xl"
                            >
                                {/* Quote mark */}
                                <div className="absolute -top-4 left-8 flex size-10 items-center justify-center rounded-full bg-[#ff5a5f] text-2xl font-serif text-white shadow-lg shadow-[#ff5a5f]/30">
                                    "
                                </div>

                                <div className="mt-4 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star01 key={i} className="size-5 fill-[#ff5a5f] text-[#ff5a5f]" />
                                    ))}
                                </div>

                                <p className="mt-6 text-lg leading-relaxed text-gray-600">"{testimonial.quote}"</p>

                                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                                    <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5a5f] to-[#ff7a7f] text-sm font-semibold text-white shadow-lg shadow-[#ff5a5f]/20">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info Bar */}
            <section className="border-y border-gray-100 bg-gray-50 py-12">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid gap-8 sm:grid-cols-3">
                        <div className="flex items-center gap-4">
                            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#ff5a5f]/10">
                                <Phone01 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Call us at</p>
                                <p className="font-semibold text-gray-900">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#ff5a5f]/10">
                                <Mail01 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email us at</p>
                                <p className="font-semibold text-gray-900">hello@vjstays.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#ff5a5f]/10">
                                <MarkerPin06 className="size-6 text-[#ff5a5f]" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Located at</p>
                                <p className="font-semibold text-gray-900">Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Enhanced with gradient */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#ff5a5f] via-[#ff6b6f] to-[#ff7a7f] py-24 lg:py-32">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -left-20 -top-20 size-96 rounded-full border-[40px] border-white" />
                    <div className="absolute -bottom-20 -right-20 size-96 rounded-full border-[40px] border-white" />
                </div>

                <div className="relative mx-auto max-w-8xl px-6 text-center lg:px-12">
                    <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        Ready to Find Your
                        <br />
                        Perfect Stay?
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
                        Join thousands of happy travelers who trust VJStays for their accommodation needs. Start your journey today.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#ff5a5f] shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                        >
                            Browse Properties
                            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
