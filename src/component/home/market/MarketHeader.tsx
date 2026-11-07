import { Sparkle } from "lucide-react";

const MarketHeader = () => {
    return (
        <div className="flex flex-col items-start">
            {/* Badge (same as TrustedBy / Features / About) */}
            <div className="w-fit rounded-full bg-gradient-to-br from-[#D32800]/40 via-white/10 to-[#D32800]/20 p-px">
                <div className="flex items-center gap-[7px] rounded-full bg-[#080503] px-6 py-3">
                    <Sparkle
                        size={13}
                        strokeWidth={2}
                        className="fill-[#D32800] text-[#D32800]"
                    />
                    <span className="text-[18px] font-normal text-white">
                        Market Access
                    </span>
                </div>
            </div>

            {/* Heading (same as TrustedBy / Features / About) */}
            <h2 className="mt-8 text-[clamp(32px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.8px] text-white">
                Discover <span className="text-white/60">and Trade</span>
                <br />
                Top Cryptocurrencies
            </h2>

            <p className="mt-8 max-w-[420px] text-[18px] font-normal leading-[1.5] text-white/80">
                Buy, sell, and manage popular digital assets instantly from one
                simple platform.
            </p>
        </div>
    );
};

export default MarketHeader;