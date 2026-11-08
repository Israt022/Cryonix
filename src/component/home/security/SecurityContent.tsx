import Link from "next/link";
import { ArrowRight, Sparkle } from "lucide-react";

const SecurityContent = () => {
    return (
        <div className="flex flex-col items-start lg:ml-[60px] lg:mt-[60px]">
            {/* Badge (same as TrustedBy) */}
            <div className="w-fit rounded-full bg-gradient-to-br from-[#D32800]/40 via-white/10 to-[#D32800]/20 p-px">
                <div className="flex items-center gap-[7px] rounded-full bg-[#080503] px-6 py-3">
                    <Sparkle
                        size={13}
                        strokeWidth={2}
                        className="fill-[#D32800] text-[#D32800]"
                    />
                    <span className="text-[18px] font-normal text-white">Security</span>
                </div>
            </div>

            {/* Heading (same as TrustedBy) */}
            <h2 className="mt-8 text-[clamp(32px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.8px] text-white">
                Advanced Security{" "}
                <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                    for
                </span>
                <br />
                Your Digital Assets
            </h2>

            <p className="mt-8 max-w-[440px] text-[18px] font-normal leading-[1.5] text-white/80">
                Your wallet is protected with modern encryption and secure
                infrastructure.
            </p>

            {/* Button (same as Hero) */}
            <Link
                href="/register"
                className="mt-8 inline-flex h-[60px] w-[183px] items-center justify-center gap-1 rounded-[60px] border border-white/30 bg-[radial-gradient(ellipse_at_bottom,#E9917D_0%,#D32800_75%)] px-8 py-4 text-lg font-normal text-white transition-all duration-200 hover:brightness-110"
            >
                Get Started
                <ArrowRight size={14.58} strokeWidth={2} className="shrink-0" />
            </Link>
        </div>
    );
};

export default SecurityContent;