import { Sparkle } from "lucide-react";

const TestimonialsHeader = () => {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Badge (same as TrustedBy) */}
            <div className="rounded-full bg-gradient-to-br from-[#D32800]/40 via-white/10 to-[#D32800]/20 p-px">
                <div className="flex items-center gap-[7px] rounded-full bg-[#080503] px-6 py-3">
                    <Sparkle
                        size={13}
                        strokeWidth={2}
                        className="fill-[#D32800] text-[#D32800]"
                    />
                    <span className="text-[18px] font-normal text-white">
                        Testimonials
                    </span>
                </div>
            </div>

            {/* Heading (same as TrustedBy) */}
            <h2 className="mt-8 text-[clamp(32px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.8px] text-white">
                What Our{" "}
                <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                    Users Say
                </span>
            </h2>

            <p className="mt-8 text-[18px] font-normal leading-[1.5] text-white/80">
                Real feedback from people using Cryonix.
            </p>
        </div>
    );
};

export default TestimonialsHeader;