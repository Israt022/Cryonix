import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBadge from "./HeroBadge";

const HeroContent = () => {
    return (
        <div className="relative z-10 flex flex-col items-center text-center">
            <HeroBadge />

            <div className="mt-8 flex flex-col items-center gap-8">
                <h1 className="max-w-[850px] text-[42px] leading-[1.08] font-normal tracking-[-2.5px] text-white sm:text-[52px] lg:text-[64px] lg:tracking-[-3px]">
                    Better Control of Your
                    <br />
                    Crypto Assets
                </h1>

                <p className="max-w-[620px] text-base leading-[1.5] font-normal text-white/80 lg:text-lg">
                    Cryonix is an AI-driven crypto platform for tracking, managing, and
                    <br className="hidden sm:block" />
                    growing your digital assets with confidence.
                </p>

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
        </div>
    );
};

export default HeroContent;