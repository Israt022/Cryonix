import { Bell, Calendar, Layers, LayoutGrid, Mail } from "lucide-react";
import PlatformCard from "./PlatformCard";
import Hex from "./Hex";

const MiniTile = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={`absolute flex size-[34px] items-center justify-center rounded-[9px] border border-white/10 bg-white/[0.1] text-white/70 backdrop-blur ${className}`}
    >
        {children}
    </div>
);

const Visual = () => (
    <div className="relative h-[260px] w-[260px]">
        {/* Connector lines */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Faint ring */}
        <div className="absolute left-1/2 top-1/2 size-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        {/* Mini tiles */}
        <MiniTile className="left-1/2 top-[6px] -translate-x-1/2"><Bell size={14} /></MiniTile>
        <MiniTile className="left-[6px] top-1/2 -translate-y-1/2"><Mail size={14} /></MiniTile>
        <MiniTile className="right-[6px] top-1/2 -translate-y-1/2"><LayoutGrid size={14} /></MiniTile>
        <MiniTile className="bottom-[6px] left-1/2 -translate-x-1/2"><Calendar size={14} /></MiniTile>

        {/* Center cube */}
        <Hex className="absolute left-1/2 top-1/2 h-[130px] w-[116px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-1/2 top-1/2 flex size-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[0.1] text-white/85">
            <Layers size={32} strokeWidth={1.8} />
        </div>
    </div>
);

const HighAvailabilityCard = () => (
    <PlatformCard
        title="High Availability"
        description="Optimized systems built for fast and reliable transactions."
        descClassName="max-w-[340px]"
        glow="radial-gradient(ellipse 80% 50% at 50% 100%, rgba(211,40,0,0.45), transparent 70%), radial-gradient(ellipse 60% 40% at 0% 0%, rgba(211,40,0,0.25), transparent 70%)"
    >
        <Visual />
    </PlatformCard>
);

export default HighAvailabilityCard;