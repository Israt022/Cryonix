import { Sparkles } from "lucide-react";

const HeroBadge = () => {
    return (
        <div className="inline-flex items-center gap-[7px] rounded-full border border-[#D32800]/60 px-5 py-3">
            <Sparkles
                size={14}
                strokeWidth={2}
                className="text-[#D32800]"
            />

            <span className="text-base font-normal text-white">
                AI-Powered Crypto Experience
            </span>
        </div>
    );
};

export default HeroBadge;