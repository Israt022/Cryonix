
'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
    {
        title: "Learn",
        links: [
            { name: "Blog", href: "#blog" },
            { name: "Knowledge Base", href: "#knowledge-base" },
            { name: "Guides", href: "#guides" },
            { name: "Community", href: "#community" },
            { name: "Help Center", href: "#help-center" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "#about" },
            { name: "Careers", href: "#careers" },
            { name: "Contact Us", href: "/contact" },
            { name: "FAQ", href: "#faq" },
            { name: "Security", href: "#security" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-black">

            {/* Footer Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/asset/FooterBG.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-fill scale-[1.08] origin-center"
                />
            </div>

            {/* Footer Content */}
            <div className="container-custom relative z-10 pt-[60px] pb-[24px]">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 min-[1100px]:grid-cols-[282px_minmax(0,1fr)] min-[1100px]:gap-x-12 min-[1440px]:gap-x-[284px]">

                    {/* Left Section */}
                    <div className="flex h-[127px] w-full max-w-[282px] flex-col">

                        <Logo size={24} />

                        <div className="my-6 h-px w-full bg-white/20" />

                        <p className="text-lg font-normal leading-[30px] text-white/70">
                            Smarter control of your digital assets.
                        </p>

                    </div>

                    {/* Right Sections */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 min-[744px]:grid-cols-3 min-[744px]:gap-x-12 min-[1440px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_358px] min-[1440px]:gap-x-[100px]">

                        {/* Learn & Company */}
                        {footerLinks.map((section) => (
                            <div key={section.title} className="flex min-w-0 flex-col">

                                <h3 className="mb-5 text-xl font-normal text-white">
                                    {section.title}
                                </h3>

                                <div className="flex flex-col gap-2">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="w-fit text-base font-normal leading-[27px] text-white/70 transition-colors duration-200 hover:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        ))}

                        {/* Subscribe */}
                        <div className="col-span-2 flex min-w-0 flex-col min-[744px]:col-span-1">

                            <h3 className="mb-5 text-xl font-normal text-white">
                                Subscribe
                            </h3>

                            <form
                                onSubmit={(event) => event.preventDefault()}
                                className="relative h-[60px] w-full max-w-[358px] min-[1440px]:w-[358px] min-[1440px]:max-w-none"
                            >
                                {/* Email Input */}
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    aria-label="Email address"
                                    required
                                    className="absolute inset-0 box-border h-full w-full rounded-full border border-white/20 bg-white/5 py-[16px] pl-[32px] pr-[145px] text-base font-normal leading-6 text-white outline-none placeholder:text-white/50 focus:border-white/50"
                                />

                                {/* Subscribe Button */}
                                <button
                                    type="submit"
                                    className="absolute right-[4px] top-[4px] inline-flex h-[52px] w-[129px] items-center justify-center rounded-[60px] border border-white/30 bg-[radial-gradient(ellipse_at_bottom,#E9917D_0%,#D32800_75%)] text-base font-normal text-white transition-all duration-200 hover:brightness-110"
                                >
                                    Subscribe Us
                                </button>

                            </form>

                        </div>

                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="mt-[100px] h-px w-full bg-white/30" />

                {/* Bottom Footer */}
                <div className="mt-[24px] flex flex-col items-center justify-between gap-5 min-[744px]:flex-row">

                    {/* Copyright */}
                    <p className="text-sm font-normal text-white/70">
                        © 2026 Cryonix. All rights reserved.
                    </p>

                    {/* Legal Links */}
                    <div className="flex items-center gap-[40px]">

                        <Link
                            href="/terms"
                            className="text-sm font-normal text-white/70 transition-colors hover:text-white"
                        >
                            Terms & Conditions
                        </Link>

                        {/* Gradient Separator */}
                        <span
                            aria-hidden="true"
                            className="h-px w-[27px] shrink-0 rotate-90"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, #FFFFFF 50.21%, rgba(255,255,255,0) 100%)",
                            }}
                        />

                        <Link
                            href="/privacy"
                            className="text-sm font-normal text-white/70 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
