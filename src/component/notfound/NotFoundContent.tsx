import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * No container / page width here on purpose.
 * The parent (Hero section or app/not-found.tsx) already controls the width,
 * so adding container-custom here would apply the padding twice.
 */
const NotFoundContent = () => {
    return (
        <div className="relative z-10 -mt-8 flex flex-col items-center text-center">
            {/* 404 (352px at 1440, scales down on smaller screens) */}
            <h1
                className="text-[clamp(120px,24.44vw,352px)] font-bold leading-[120%] tracking-[-0.5px] text-white"
                aria-label="404"
            >
                4<span className="text-[#D32800]">0</span>4
            </h1>

            <div className="mt-8 flex flex-col items-center gap-8">
                {/* Page Not Found (52px at 1440) */}
                <h2 className="text-[clamp(32px,3.62vw,52px)] font-normal leading-[120%] tracking-[-0.5px] text-white">
                    Page Not Found
                </h2>

                {/* Description (18px) */}
                <p className="max-w-[460px] text-[18px] font-normal leading-[27px] tracking-[-0.2px] text-white/80">
                    The page you&apos;re looking for doesn&apos;t exist or has been
                    moved.
                </p>

                {/* Button (same class as Hero "Get Started") */}
                <Link
                    href="/"
                    className="inline-flex h-[60px] min-w-[183px] items-center justify-center gap-1 whitespace-nowrap rounded-[60px] border border-white/30 bg-[radial-gradient(ellipse_at_bottom,#E9917D_0%,#D32800_75%)] px-8 py-4 text-lg font-normal text-white transition-all duration-200 hover:brightness-110"
                >
                    Back To Home
                    <ArrowRight size={14.58} strokeWidth={2} className="shrink-0" />
                </Link>
            </div>
        </div>
    );
};

export default NotFoundContent;