import { SiteHeader } from "@/components/layout/site-header";
import { Lock01, Eye, Database01, Shield01, UserCircle, Globe01, Clock, Mail01 } from "@untitledui/icons";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#ff5a5f]/5 py-16 lg:py-24">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 size-[600px] rounded-full bg-[#ff5a5f]/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-[#ff5a5f]/5 blur-3xl" />

                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #ff5a5f 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

                <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                        <Lock01 className="size-4 text-[#ff5a5f]" />
                        <span className="text-sm font-semibold text-[#ff5a5f]">Privacy</span>
                    </div>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                        Privacy <span className="text-[#ff5a5f]">Policy</span>
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use VJStays.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Clock className="size-4" />
                        <span>Last updated: January 2025</span>
                    </div>
                </div>
            </section>

            {/* Privacy Highlights */}
            <section className="border-b border-gray-100 bg-white py-12">
                <div className="mx-auto max-w-4xl px-6 lg:px-12">
                    <div className="grid gap-6 sm:grid-cols-3">
                        {[
                            {
                                icon: Shield01,
                                title: "Secure Data",
                                description: "Your data is encrypted and stored securely",
                            },
                            {
                                icon: Eye,
                                title: "Transparent",
                                description: "We're clear about what data we collect",
                            },
                            {
                                icon: UserCircle,
                                title: "Your Control",
                                description: "You can access and delete your data anytime",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <item.icon className="size-6 text-[#ff5a5f]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-12">
                    {/* Quick Navigation */}
                    <div className="mb-12 rounded-2xl bg-gray-50 p-6">
                        <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Navigation</h2>
                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                "Information We Collect",
                                "How We Use Your Data",
                                "Data Sharing",
                                "Cookies & Tracking",
                                "Data Security",
                                "Your Rights",
                                "Data Retention",
                                "Contact Us",
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={`#section-${index + 1}`}
                                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-white hover:text-[#ff5a5f]"
                                >
                                    <span className="flex size-6 items-center justify-center rounded-full bg-[#ff5a5f]/10 text-xs font-semibold text-[#ff5a5f]">
                                        {index + 1}
                                    </span>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Privacy Content */}
                    <div className="space-y-12">
                        {/* Section 1 */}
                        <div id="section-1" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Database01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    We collect information to provide better services to our users. The types of information we collect include:
                                </p>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-semibold text-gray-900">Personal Information</h3>
                                        <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                                            <li>Name, email address, and phone number</li>
                                            <li>Billing and payment information</li>
                                            <li>Government-issued ID (for verification purposes)</li>
                                            <li>Profile photo and preferences</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-semibold text-gray-900">Booking Information</h3>
                                        <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                                            <li>Travel dates and destinations</li>
                                            <li>Number of guests and room preferences</li>
                                            <li>Special requests and requirements</li>
                                            <li>Past booking history</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-semibold text-gray-900">Technical Information</h3>
                                        <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                                            <li>IP address and device information</li>
                                            <li>Browser type and settings</li>
                                            <li>Usage data and interaction patterns</li>
                                            <li>Location data (with your consent)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="section-2" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Eye className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Data</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>We use the information we collect to:</p>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        { title: "Process Bookings", desc: "Complete your reservations and send confirmations" },
                                        { title: "Customer Support", desc: "Respond to your inquiries and resolve issues" },
                                        { title: "Personalization", desc: "Recommend properties based on your preferences" },
                                        { title: "Communications", desc: "Send booking updates, offers, and newsletters" },
                                        { title: "Security", desc: "Detect and prevent fraud and unauthorized access" },
                                        { title: "Improvements", desc: "Analyze usage to improve our services" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-3 rounded-xl bg-gray-50 p-4">
                                            <div className="size-2 mt-2 flex-shrink-0 rounded-full bg-[#ff5a5f]" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                                <p className="text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="section-3" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Globe01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">3. Data Sharing</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    We do not sell your personal information. We may share your data with:
                                </p>
                                <ul className="ml-6 list-disc space-y-2">
                                    <li><strong>Property Partners:</strong> To fulfill your booking (name, contact details, special requests)</li>
                                    <li><strong>Payment Processors:</strong> To process secure transactions</li>
                                    <li><strong>Service Providers:</strong> Third parties who help us operate our services</li>
                                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                </ul>
                                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                                    <p className="text-sm text-green-800">
                                        <strong>Our Commitment:</strong> All third parties are required to maintain the confidentiality and security of your information.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="section-4" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Database01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">4. Cookies & Tracking</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    We use cookies and similar technologies to enhance your experience:
                                </p>
                                <div className="overflow-hidden rounded-xl border border-gray-200">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cookie Type</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Essential</td>
                                                <td className="px-4 py-3 text-sm">Required for the website to function</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Functional</td>
                                                <td className="px-4 py-3 text-sm">Remember your preferences and settings</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Analytics</td>
                                                <td className="px-4 py-3 text-sm">Help us understand how you use our site</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">Marketing</td>
                                                <td className="px-4 py-3 text-sm">Deliver relevant advertisements</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm">
                                    You can manage your cookie preferences through your browser settings. Note that disabling certain cookies may affect the functionality of our website.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="section-5" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Shield01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    We implement robust security measures to protect your information:
                                </p>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        { title: "Encryption", desc: "All data is encrypted in transit and at rest using industry-standard protocols" },
                                        { title: "Access Controls", desc: "Strict access controls limit who can view your information" },
                                        { title: "Regular Audits", desc: "We conduct regular security assessments and penetration testing" },
                                        { title: "Secure Payments", desc: "PCI-DSS compliant payment processing" },
                                    ].map((item, index) => (
                                        <div key={index} className="rounded-xl border border-gray-200 p-4">
                                            <div className="flex items-center gap-2">
                                                <Shield01 className="size-5 text-[#ff5a5f]" />
                                                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                            </div>
                                            <p className="mt-2 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div id="section-6" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <UserCircle className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>You have the following rights regarding your personal data:</p>
                                <div className="space-y-3">
                                    {[
                                        { right: "Access", desc: "Request a copy of your personal data" },
                                        { right: "Correction", desc: "Update or correct inaccurate information" },
                                        { right: "Deletion", desc: "Request deletion of your account and data" },
                                        { right: "Portability", desc: "Receive your data in a portable format" },
                                        { right: "Opt-out", desc: "Unsubscribe from marketing communications" },
                                        { right: "Restrict Processing", desc: "Limit how we use your data" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 rounded-lg bg-gray-50 px-4 py-3">
                                            <span className="rounded-lg bg-[#ff5a5f] px-3 py-1 text-sm font-semibold text-white">{item.right}</span>
                                            <span className="text-sm">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm">
                                    To exercise any of these rights, please contact us at privacy@vjstays.com.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div id="section-7" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Clock className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">7. Data Retention</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:
                                </p>
                                <ul className="ml-6 list-disc space-y-2">
                                    <li><strong>Account Data:</strong> Until you delete your account</li>
                                    <li><strong>Booking Records:</strong> 7 years for legal and tax compliance</li>
                                    <li><strong>Marketing Preferences:</strong> Until you opt out</li>
                                    <li><strong>Analytics Data:</strong> 26 months from collection</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 8 - Contact */}
                        <div id="section-8" className="scroll-mt-32">
                            <div className="rounded-2xl bg-gradient-to-br from-[#ff5a5f]/10 to-[#ff5a5f]/5 p-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]">
                                        <Mail01 className="size-5 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">8. Contact Us</h2>
                                </div>
                                <p className="mt-4 text-gray-600">
                                    If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
                                </p>
                                <div className="mt-6 space-y-3">
                                    <p className="text-gray-700">
                                        <strong>Email:</strong> privacy@vjstays.com
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Address:</strong> VJStays Pvt. Ltd., Data Protection Officer, Bangalore, Karnataka, India
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Phone:</strong> +91 80 1234 5678
                                    </p>
                                </div>
                                <p className="mt-6 text-sm text-gray-500">
                                    We will respond to your request within 30 days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
