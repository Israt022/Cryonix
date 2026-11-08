import { Sparkle } from "lucide-react";

// Same badge used in TrustedBy - reuse it in every section
const SectionBadge = ({ label }: { label: string }) => {
    return (
        <div className="rounded-full bg-gradient-to-br from-[#D32800]/40 via-white/10 to-[#D32800]/20 p-px">
            <div className="flex items-center gap-[7px] rounded-full bg-[#080503] px-6 py-3">
                <Sparkle
                    size={13}
                    strokeWidth={2}
                    className="fill-[#D32800] text-[#D32800]"
                />
                <span className="text-[18px] font-normal text-white">{label}</span>
            </div>
        </div>
    );
};

export default SectionBadge;