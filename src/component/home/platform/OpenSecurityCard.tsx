import PlatformCard from "./PlatformCard";
import Hex from "./Hex";

const Line = ({ w = "100%" }: { w?: string }) => (
    <div className="h-[3px] rounded-full bg-white/25" style={{ width: w }} />
);

const Panel = ({ className = "" }: { className?: string }) => (
    <div
        className={`absolute rounded-[12px] border border-white/15 bg-gradient-to-b from-white/[0.18] to-white/[0.05] p-3 backdrop-blur ${className}`}
    >
        <div className="flex flex-col gap-2">
            <Line w="70%" />
            <Line />
            <Line w="85%" />
        </div>
    </div>
);

const Visual = () => (
    <div className="relative h-[280px] w-[240px]">
        {/* Panels */}
        <Panel className="left-0 top-[20px] h-[110px] w-[115px] -rotate-3" />
        <Panel className="right-0 top-[10px] h-[120px] w-[120px] rotate-3" />

        {/* Center vertical scanner line with ticks */}
        <div className="absolute left-1/2 top-[10px] h-[140px] w-px bg-white/70" />
        <div className="absolute left-1/2 top-[10px] h-px w-[10px] -translate-x-1/2 bg-white/70" />
        <div className="absolute left-1/2 top-[150px] h-px w-[10px] -translate-x-1/2 bg-white/70" />

        {/* Faded hexes below */}
        <Hex className="absolute left-1/2 top-[150px] h-[110px] w-[96px] -translate-x-1/2 opacity-50" />
        <Hex className="absolute left-[10px] top-[120px] h-[90px] w-[78px] opacity-25" />
        <Hex className="absolute right-[10px] top-[120px] h-[90px] w-[78px] opacity-25" />
    </div>
);

const OpenSecurityCard = () => (
    <PlatformCard
        title="Open Security Testing"
        description="Help improve the platform by reporting vulnerabilities through our security program."
        glow="radial-gradient(ellipse 70% 60% at 100% 100%, rgba(211,40,0,0.55), transparent 70%), radial-gradient(ellipse 40% 40% at 0% 0%, rgba(211,40,0,0.2), transparent 70%)"
    >
        <Visual />
    </PlatformCard>
);

export default OpenSecurityCard;