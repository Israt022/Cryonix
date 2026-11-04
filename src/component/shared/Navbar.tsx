"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Menu,
    X,
} from "lucide-react";
import Logo from "./Logo";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "AI Features", href: "#features" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-50 w-full bg-transparent">
            <nav className="container-custom flex items-center justify-between py-4">

                {/* Logo */}
                <Logo size={24} />

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-10 min-[1100px]:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="my-[16.5px] text-base font-normal leading-[27px] tracking-[-0.2px] text-white text-center transition-colors duration-200 hover:text-[#D32800]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-6 min-[1100px]:flex">
                    <Link
                        href="/login"
                        className="text-base font-normal text-white transition-colors hover:text-[#D32800]"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="inline-flex h-[60px] w-[183px] items-center justify-center gap-1 rounded-[60px] border border-white/30 bg-[radial-gradient(ellipse_at_bottom,#E9917D_0%,#D32800_75%)] px-8 py-4 text-lg font-normal text-white transition-all duration-200 hover:brightness-110"
                    >
                        Get Started
                        <ArrowRight
                            size={14.58}
                            strokeWidth={2}
                            className="shrink-0"
                        />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 min-[1100px]:hidden"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="container-custom pb-5 min-[1100px]:hidden">
                    <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0A1B22] p-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-normal leading-[27px] tracking-[-0.2px] text-white transition-colors hover:text-[#D32800]"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex items-center gap-5 border-t border-white/10 pt-5">
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-white"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#FFFFFF4D] bg-[#D32800] px-6 text-base font-medium text-white"
                            >
                                Get Started
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
