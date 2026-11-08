import { Zap } from "lucide-react";
import PlatformCard from "./PlatformCard";

const Visual = () => (
    <div className="relative flex h-[260px] w-full items-center justify-center">
        {/* Horizontal line */}
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Watch band */}
        <div className="absolute h-[250px] w-[84px] rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-white/[0.08]" />

        {/* Side dots */}
        <span className="absolute left-1/2 top-1/2 size-2 -translate-y-1/2 translate-x-[110px] rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-[120px] -translate-y-1/2 rounded-full bg-white/40" />

        {/* Watch face */}
        <div className="relative flex size-[170px] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_30%,#2a2522_0%,#120d0b_70%)] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <div className="flex size-[120px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <div className="flex size-[78px] items-center justify-center rounded-full border border-white/15 bg-gradient-to-b from-white/25 to-white/10">
                    <Zap size={30} strokeWidth={0} className="fill-white/80" />
                </div>
            </div>
        </div>
    </div>
);

const ProtectionFirstCard = () => (
    <PlatformCard
        title="Protection First"
        description="Safeguards and monitoring designed to reduce risk and maintain stability."
        descClassName="max-w-[340px]"
        glow="radial-gradient(ellipse 80% 55% at 10% 0%, rgba(211,40,0,0.7), transparent 70%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(211,40,0,0.25), transparent 70%)"
    >
        <Visual />
    </PlatformCard>
);

export default ProtectionFirstCard;