"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Menu,
    X,
    ChevronDown,
} from "lucide-react";
import Logo from "./Logo";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "AI Features", href: "#features" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#security" },
    { name: "FAQ", href: "#faq" },
];

const resourceLinks = [
    { name: "Changelog", href: "/changelog" },
    { name: "License", href: "/license" },
    { name: "Restricted", href: "/restricted" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            // className="relative z-50 w-full bg-transparent"
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "border-b border-white/10 bg-black/60 shadow-lg backdrop-blur-xl"
                : "border-b border-transparent bg-transparent"
                }`}
        >
            <nav className="container-custom flex items-center justify-between py-4">

                {/* Logo */}
                <Logo size={24} />

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-10 min-[1100px]:flex">
                    {/* {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="my-[16.5px] text-base font-normal leading-[27px] tracking-[-0.2px] text-white text-center transition-colors duration-200 hover:text-[#D32800]"
                        >
                            {link.name}
                        </Link>
                    ))} */}
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative">

                            {link.name === "Resources" ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => setResourcesOpen(!resourcesOpen)}
                                        aria-expanded={resourcesOpen}
                                        className="my-[16.5px] inline-flex items-center gap-1 text-base font-normal leading-[27px] tracking-[-0.2px] text-white transition-colors hover:text-[#D32800]"
                                    >
                                        Resources
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {resourcesOpen && (
                                        <div className="absolute left-0 top-full z-50 mt-2 w-[190px] rounded-xl border border-white/10 bg-[#0A0A0A] p-2 shadow-xl">
                                            {resourceLinks.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setResourcesOpen(false)}
                                                    className="block rounded-lg px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-[#D32800]"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="my-[16.5px] text-base font-normal leading-[27px] tracking-[-0.2px] text-white text-center transition-colors duration-200 hover:text-[#D32800]"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
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
                        {/* {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-normal leading-[27px] tracking-[-0.2px] text-white transition-colors hover:text-[#D32800]"
                            >
                                {link.name}
                            </Link>
                        ))} */}
                        {navLinks.map((link) => (
                            <div key={link.name}>

                                {link.name === "Resources" ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setResourcesOpen(!resourcesOpen)}
                                            aria-expanded={resourcesOpen}
                                            className="flex w-full items-center justify-between text-base font-normal leading-[27px] text-white transition-colors hover:text-[#D32800]"
                                        >
                                            Resources
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {resourcesOpen && (
                                            <div className="mt-3 flex flex-col gap-3 border-l border-white/15 pl-4">
                                                {resourceLinks.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setResourcesOpen(false);
                                                        }}
                                                        className="text-sm text-white/60 transition-colors hover:text-[#D32800]"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-base font-normal leading-[27px] tracking-[-0.2px] text-white transition-colors hover:text-[#D32800]"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
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
