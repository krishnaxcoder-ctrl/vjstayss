import { SiteHeader } from "@/components/layout/site-header";
import { File01, Scale01, Shield01, AlertCircle, CheckCircle, Clock } from "@untitledui/icons";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <SiteHeader variant="light" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#ff5a5f]/5 py-16 lg:py-6">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 size-[600px] rounded-full bg-[#ff5a5f]/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-[#ff5a5f]/5 blur-3xl" />

                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #ff5a5f 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

                <div className="relative mx-auto max-w-8xl px-6 text-center lg:px-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#ff5a5f]/10 px-4 py-2">
                        <File01 className="size-4 text-[#ff5a5f]" />
                        <span className="text-sm font-semibold text-[#ff5a5f]">Legal</span>
                    </div>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-5xl">
                        Terms of <span className="text-[#ff5a5f]">Service</span>
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
                        Please read these terms carefully before using our services. By accessing or using VJStays, you agree to be bound by these terms.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Clock className="size-4" />
                        <span>Last updated: January 2025</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-12">
                    {/* Terms Content */}
                    <div className="space-y-12">
                        {/* Section 1 */}
                        <div id="section-1" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Scale01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    By accessing or using VJStays ("the Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                                </p>
                                <p>
                                    These terms apply to all visitors, users, and others who access or use the Service. We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the modified terms.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="section-2" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Shield01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">2. User Accounts</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    To access certain features of our Service, you may be required to create an account. You are responsible for:
                                </p>
                                <ul className="ml-6 list-disc space-y-2">
                                    <li>Maintaining the confidentiality of your account credentials</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Providing accurate and complete information during registration</li>
                                    <li>Updating your information to keep it current</li>
                                </ul>
                                <p>
                                    You must notify us immediately of any unauthorized use of your account or any other security breach.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="section-3" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <CheckCircle className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">3. Booking & Payments</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    When you make a booking through VJStays, you agree to the following terms:
                                </p>
                                <div className="rounded-xl bg-gray-50 p-6">
                                    <h3 className="mb-3 font-semibold text-gray-900">Payment Terms</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="mt-0.5 size-5 flex-shrink-0 text-[#ff5a5f]" />
                                            <span>Full payment is required at the time of booking unless otherwise specified</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="mt-0.5 size-5 flex-shrink-0 text-[#ff5a5f]" />
                                            <span>Prices are displayed in Indian Rupees (INR) unless otherwise indicated</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="mt-0.5 size-5 flex-shrink-0 text-[#ff5a5f]" />
                                            <span>All applicable taxes and fees are included in the displayed price</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="mt-0.5 size-5 flex-shrink-0 text-[#ff5a5f]" />
                                            <span>We accept major credit cards, debit cards, UPI, and net banking</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="section-4" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <AlertCircle className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">4. Cancellation Policy</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Cancellation policies vary by property and rate type. Please review the specific cancellation policy before completing your booking. General guidelines include:
                                </p>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="rounded-xl bg-green-50 p-4">
                                        <h4 className="font-semibold text-green-800">Free Cancellation</h4>
                                        <p className="mt-1 text-sm text-green-700">Cancel up to 48 hours before check-in for a full refund</p>
                                    </div>
                                    <div className="rounded-xl bg-amber-50 p-4">
                                        <h4 className="font-semibold text-amber-800">Partial Refund</h4>
                                        <p className="mt-1 text-sm text-amber-700">50% refund if cancelled within 24-48 hours of check-in</p>
                                    </div>
                                    <div className="rounded-xl bg-red-50 p-4">
                                        <h4 className="font-semibold text-red-800">No Refund</h4>
                                        <p className="mt-1 text-sm text-red-700">No refund for cancellations within 24 hours of check-in</p>
                                    </div>
                                    <div className="rounded-xl bg-blue-50 p-4">
                                        <h4 className="font-semibold text-blue-800">Flexible Rate</h4>
                                        <p className="mt-1 text-sm text-blue-700">Special rates with extended cancellation windows available</p>
                                    </div>
                                </div>
                                <p>
                                    Refunds will be processed within 5-7 business days to the original payment method.
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="section-5" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Shield01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">5. User Conduct</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>You agree not to:</p>
                                <ul className="ml-6 list-disc space-y-2">
                                    <li>Use the Service for any unlawful purpose</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Post false, misleading, or fraudulent content</li>
                                    <li>Interfere with or disrupt the Service</li>
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Impersonate any person or entity</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 6 */}
                        <div id="section-6" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <File01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">6. Intellectual Property</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    All content on VJStays, including but not limited to text, graphics, logos, images, and software, is the property of VJStays or its content suppliers and is protected by intellectual property laws.
                                </p>
                                <p>
                                    You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                                </p>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <div id="section-7" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <AlertCircle className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">7. Limitation of Liability</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    VJStays acts as an intermediary between you and accommodation providers. We are not liable for:
                                </p>
                                <ul className="ml-6 list-disc space-y-2">
                                    <li>The quality, safety, or legality of accommodations listed</li>
                                    <li>The accuracy of property descriptions or photos</li>
                                    <li>Any disputes between you and property owners</li>
                                    <li>Any indirect, incidental, or consequential damages</li>
                                </ul>
                                <div className="rounded-xl bg-[#ff5a5f]/5 p-4">
                                    <p className="text-sm text-gray-700">
                                        <strong>Note:</strong> Our maximum liability is limited to the amount paid for the booking in question.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 8 */}
                        <div id="section-8" className="scroll-mt-32">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[#ff5a5f]/10">
                                    <Scale01 className="size-5 text-[#ff5a5f]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">8. Governing Law</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-2xl bg-gradient-to-br from-[#ff5a5f]/10 to-[#ff5a5f]/5 p-8">
                                <h2 className="text-2xl font-bold text-gray-900">Questions About Our Terms?</h2>
                                <p className="mt-2 text-gray-600">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="mt-4 space-y-2">
                                    <p className="text-gray-700">
                                        <strong>Email:</strong> legal@vjstays.com
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Address:</strong> VJStays Pvt. Ltd., Bangalore, Karnataka, India
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-8">
                                <h2 className="text-2xl font-bold text-gray-900">Need Immediate Help?</h2>
                                <p className="mt-2 text-gray-600">
                                    Our customer support team is available 24/7 to assist you with any concerns.
                                </p>
                                <div className="mt-4 space-y-2">
                                    <p className="text-gray-700">
                                        <strong>Phone:</strong> +91 80 1234 5678
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Live Chat:</strong> Available on our website
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
