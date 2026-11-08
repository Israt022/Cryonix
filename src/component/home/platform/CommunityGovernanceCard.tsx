import { Star } from "lucide-react";
import PlatformCard from "./PlatformCard";
import CoinNode from "./CoinNode";
import Hex from "./Hex";

const Visual = () => (
    <div className="relative h-[260px] w-[300px]">
        {/* Faded side hexes */}
        <Hex className="absolute -left-[90px] top-[110px] h-[90px] w-[78px] opacity-30" />
        <Hex className="absolute -right-[90px] top-[110px] h-[90px] w-[78px] opacity-30" />

        {/* Stars in an arc */}
        <CoinNode size={36} style={{ left: 86, top: 52 }}>
            <Star size={16} className="fill-white/90" strokeWidth={0} />
        </CoinNode>
        <CoinNode size={36} style={{ left: 150, top: 34 }}>
            <Star size={16} className="fill-white/90" strokeWidth={0} />
        </CoinNode>
        <CoinNode size={36} style={{ left: 214, top: 52 }}>
            <Star size={16} className="fill-white/90" strokeWidth={0} />
        </CoinNode>
        <Star
            size={22}
            strokeWidth={1.5}
            className="absolute left-[252px] top-[58px] text-white/50"
        />

        {/* Glass card */}
        <div className="absolute left-1/2 top-[120px] h-[62px] w-[150px] -translate-x-1/2 rounded-[12px] border border-white/15 bg-gradient-to-b from-white/[0.2] to-white/[0.06] p-3 backdrop-blur">
            <div className="flex flex-col gap-2">
                <div className="h-[3px] w-[60%] rounded-full bg-white/50" />
                <div className="h-[3px] w-full rounded-full bg-white/25" />
                <div className="h-[3px] w-[75%] rounded-full bg-white/25" />
            </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute left-1/2 top-[205px] flex -translate-x-1/2 gap-2">
            <span className="size-2 rounded-full bg-white/80" />
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/25" />
        </div>
    </div>
);

const CommunityGovernanceCard = () => (
    <PlatformCard
        title="Community Governance"
        description="Platform decisions guided by an engaged global community."
        descClassName="max-w-[340px]"
        glow="radial-gradient(ellipse 70% 50% at 0% 20%, rgba(211,40,0,0.6), transparent 70%), radial-gradient(ellipse 60% 40% at 60% 100%, rgba(211,40,0,0.3), transparent 70%)"
    >
        <Visual />
    </PlatformCard>
);

export default CommunityGovernanceCard;