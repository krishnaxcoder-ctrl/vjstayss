"use client";

import { useState } from "react";
import { Mail01, Lock01, User01, Eye, EyeOff } from "@untitledui/icons";
import { DialogTrigger, ModalOverlay, Modal, Dialog } from "@/components/application/modals/modal";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { cx } from "@/utils/cx";

interface AuthModalProps {
    children: React.ReactNode;
}

export const AuthModal = ({ children }: AuthModalProps) => {
    const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
    const [showPassword, setShowPassword] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
            {children}
            <ModalOverlay>
                <Modal className="max-w-md overflow-visible">
                    <Dialog>
                        <div className="relative w-full rounded-2xl bg-white shadow-xl overflow-hidden">
                            {/* Close Button */}
                            <CloseButton
                                onPress={() => setIsOpen(false)}
                                className="absolute right-3 top-3 z-10 bg-white/20 text-white hover:bg-white/30 hover:text-white"
                                size="xs"
                            />

                            {/* Header */}
                            <div className="bg-gradient-to-br from-[#ff5a5f] to-[#e04850] px-6 pb-10 pt-6 text-center text-white">
                                <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-xl p-1.5">
                                    <img
                                        src="/loginpopuplogo.png"
                                        alt="VJStays"
                                        className="size-full object-contain"
                                    />
                                </div>
                                <h2 className="text-xl font-bold">Welcome to VJStays</h2>
                                <p className="mt-1 text-sm text-white/80">
                                    {activeTab === "login"
                                        ? "Sign in to access your bookings"
                                        : "Create an account to get started"}
                                </p>
                            </div>

                            {/* Tab Switcher */}
                            <div className="relative -mt-5 px-6">
                                <div className="flex rounded-lg bg-gray-100 p-1">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("login")}
                                        className={cx(
                                            "flex-1 rounded-md py-2 text-sm font-semibold transition-all",
                                            activeTab === "login"
                                                ? "bg-white text-gray-900 shadow-sm"
                                                : "text-gray-600 hover:text-gray-900"
                                        )}
                                    >
                                        Login
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("signup")}
                                        className={cx(
                                            "flex-1 rounded-md py-2 text-sm font-semibold transition-all",
                                            activeTab === "signup"
                                                ? "bg-white text-gray-900 shadow-sm"
                                                : "text-gray-600 hover:text-gray-900"
                                        )}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>

                            {/* Form Content */}
                            <div className="p-6">
                                {activeTab === "login" ? (
                                    <LoginForm
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                        onClose={() => setIsOpen(false)}
                                    />
                                ) : (
                                    <SignupForm
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                        onClose={() => setIsOpen(false)}
                                    />
                                )}

                                {/* Divider */}
                                <div className="my-4 flex items-center gap-3">
                                    <div className="h-px flex-1 bg-gray-200" />
                                    <span className="text-xs text-gray-500">or continue with</span>
                                    <div className="h-px flex-1 bg-gray-200" />
                                </div>

                                {/* Social Buttons */}
                                <div className="grid grid-cols-2 gap-2">
                                    <SocialButton social="google" theme="color" size="sm">
                                        Google
                                    </SocialButton>
                                    <SocialButton social="facebook" theme="brand" size="sm">
                                        Facebook
                                    </SocialButton>
                                </div>

                                {/* Footer */}
                                <p className="mt-4 text-center text-xs text-gray-500">
                                    By continuing, you agree to our{" "}
                                    <a href="/terms" className="text-[#ff5a5f] hover:underline">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="/privacy" className="text-[#ff5a5f] hover:underline">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    );
};

interface FormProps {
    showPassword: boolean;
    setShowPassword: (show: boolean) => void;
    onClose: () => void;
}

const LoginForm = ({ showPassword, setShowPassword, onClose }: FormProps) => {
    return (
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                </label>
                <div className="relative">
                    <Mail01 className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none transition-all focus:border-[#ff5a5f] focus:ring-2 focus:ring-[#ff5a5f]/20"
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <Lock01 className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-9 text-sm outline-none transition-all focus:border-[#ff5a5f] focus:ring-2 focus:ring-[#ff5a5f]/20"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="size-3.5 rounded border-gray-300 text-[#ff5a5f] focus:ring-[#ff5a5f]"
                    />
                    <span className="text-xs text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-xs font-medium text-[#ff5a5f] hover:underline">
                    Forgot password?
                </a>
            </div>

            {/* Submit */}
            <Button
                type="submit"
                className="w-full bg-[#ff5a5f] hover:bg-[#e04850] border-none shadow-none"
                size="md"
            >
                Login
            </Button>
        </form>
    );
};

const SignupForm = ({ showPassword, setShowPassword, onClose }: FormProps) => {
    return (
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <div className="relative">
                    <User01 className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none transition-all focus:border-[#ff5a5f] focus:ring-2 focus:ring-[#ff5a5f]/20"
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                </label>
                <div className="relative">
                    <Mail01 className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none transition-all focus:border-[#ff5a5f] focus:ring-2 focus:ring-[#ff5a5f]/20"
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <Lock01 className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-9 text-sm outline-none transition-all focus:border-[#ff5a5f] focus:ring-2 focus:ring-[#ff5a5f]/20"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">
                    Must be at least 8 characters
                </p>
            </div>

            {/* Terms Agreement */}
            <label className="flex items-start gap-2">
                <input
                    type="checkbox"
                    className="mt-0.5 size-3.5 rounded border-gray-300 text-[#ff5a5f] focus:ring-[#ff5a5f]"
                />
                <span className="text-xs text-gray-600">
                    I agree to receive marketing emails and special offers
                </span>
            </label>

            {/* Submit */}
            <Button
                type="submit"
                className="w-full bg-[#ff5a5f] hover:bg-[#e04850] border-none shadow-none"
                size="md"
            >
                Create Account
            </Button>
        </form>
    );
};
