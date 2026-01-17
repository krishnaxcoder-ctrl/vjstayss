import { ArrowRight, Building07, CheckCircle, Globe01, Heart, Mail01, MarkerPin06, Phone01, Play, Shield01, Star01, Users01 } from "@untitledui/icons";
import { SiteHeader } from "@/components/layout/site-header";
import { LanderHero } from "@/components/lander/lander-hero";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            {/* Hero Section - Modern split layout */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#ff5a5f]/5 py-16 lg:py-24">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 size-[600px] rounded-full bg-[#ff5a5f]/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-[#ff5a5f]/5 blur-3xl" />

                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #ff5a5f 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

                <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* Left content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                                <span className="size-2 animate-pulse rounded-full bg-[#ff5a5f]" />
                                <span className="text-sm font-semibold text-[#ff5a5f]">About VJStays</span>
                            </div>

                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                                We Make Travel
                                <span className="mt-1 block text-[#ff5a5f]">Unforgettable</span>
                            </h1>

                            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                Since 2020, we've been on a mission to transform how people discover and book accommodations. With over 10,000 handpicked properties and 50,000 happy travelers, we're just getting started.
                            </p>

                            {/* Quick stats inline */}
                            <div className="mt-8 flex flex-wrap gap-8">
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">5+</p>
                                    <p className="text-sm text-gray-500">Years Experience</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">50K+</p>
                                    <p className="text-sm text-gray-500">Happy Travelers</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">4.8</p>
                                    <p className="text-sm text-gray-500">Average Rating</p>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="/"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5a5f] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#ff5a5f]/25 transition-all hover:bg-[#e04850] hover:shadow-xl"
                                >
                                    Explore Properties
                                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="#our-story"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
                                >
                                    <Play className="size-5 text-[#ff5a5f]" />
                                    Watch Our Story
                                </Link>
                            </div>
                        </div>

                        {/* Right - Image grid */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative grid grid-cols-12 gap-4">
                                {/* Main large image */}
                                <div className="col-span-8 row-span-2">
                                    <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop"
                                            alt="Luxury hotel lobby"
                                            className="h-full min-h-[300px] w-full object-cover md:min-h-[400px]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </div>
                                </div>

                                {/* Top right small image */}
                                <div className="col-span-4">
                                    <div className="overflow-hidden rounded-3xl shadow-xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop"
                                            alt="Pool area"
                                            className="h-32 w-full object-cover md:h-48"
                                        />
                                    </div>
                                </div>

                                {/* Bottom right small image */}
                                <div className="col-span-4">
                                    <div className="overflow-hidden rounded-3xl shadow-xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop"
                                            alt="Room interior"
                                            className="h-32 w-full object-cover md:h-48"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats card */}
                            <div className="absolute -bottom-6 -left-6 z-10 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-gray-100 md:p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="size-10 rounded-full border-2 border-white bg-gray-200 shadow-sm"
                                                style={{
                                                    backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 20}.jpg)`,
                                                    backgroundSize: "cover",
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Join 50K+ travelers</p>
                                        <p className="text-xs text-gray-500">Who trust VJStays</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Horizontal bar */}
            <section className="border-y border-gray-100 bg-white py-8">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {[
                            { value: "10K+", label: "Properties Listed", icon: Building07 },
                            { value: "50K+", label: "Happy Guests", icon: Users01 },
                            { value: "100+", label: "Destinations", icon: MarkerPin06 },
                            { value: "4.8", label: "Average Rating", icon: Star01 },
                        ].map((stat, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <stat.icon className="size-6 text-[#ff5a5f]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </div>
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

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Newsletter Section */}
            <LanderHero />
        </div>
    );
}
