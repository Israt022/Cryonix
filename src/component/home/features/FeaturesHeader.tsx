import { Sparkle } from "lucide-react";

const FeaturesHeader = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Badge (same as TrustedBy) */}
            <div className="w-fit rounded-full bg-gradient-to-br from-[#D32800]/40 via-white/10 to-[#D32800]/20 p-px">
                <div className="flex items-center gap-[7px] rounded-full bg-[#080503] px-6 py-3">
                    <Sparkle
                        size={13}
                        strokeWidth={2}
                        className="fill-[#D32800] text-[#D32800]"
                    />
                    <span className="text-[18px] font-normal text-white">Features</span>
                </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-end lg:justify-between">
                <h2 className="max-w-[640px] bg-[linear-gradient(92.65deg,#FFFFFF_28.97%,rgba(255,255,255,0.5)_105.67%)] bg-clip-text text-[clamp(32px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.8px] text-transparent">
                    Everything You <span>Need to</span>
                    <br className="hidden sm:block" /> Manage Crypto in{" "}
                    <span>One Place</span>
                </h2>

                <p className="max-w-[400px] text-[18px] font-normal leading-[1.5] text-white/80 lg:mb-2">
                    Buy, sell, and manage popular digital assets instantly from one
                    simple platform.
                </p>
            </div>
        </div>
    );
};

export default FeaturesHeader;