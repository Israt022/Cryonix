import { Astroid } from "lucide-react";

const HeroBadge = () => {
    return (
        <div className="inline-flex items-center gap-[7px] rounded-full border border-[#D32800]/40 px-5 py-3">
            <Astroid
                size={14}
                strokeWidth={2}
                className="fill-[#D32800] text-[#D32800]"
            />

            <span className="text-base font-normal text-white">
                AI-Powered Crypto Experience
            </span>
        </div>
    );
};

export default HeroBadge;