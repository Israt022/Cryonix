import { Calendar, User } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Node = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex size-[54px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/60 backdrop-blur">
        {children}
    </div>
);

const Digit = ({ value }: { value: string }) => (
    <div className="flex size-[52px] items-center justify-center rounded-[12px] border border-white/[0.08] bg-white/[0.06] text-[24px] font-medium text-white/80">
        {value}
    </div>
);

const Visual = () => (
    <div className="pointer-events-none absolute inset-x-0 top-[28px] flex flex-col items-center gap-0">
        <UserNode />
        <div className="h-8 w-px bg-white/15" />

        <div className="flex gap-3">
            {["8", "5", "0", "_"].map((d, i) => (
                <Digit key={i} value={d} />
            ))}
        </div>

        <div className="h-8 w-px bg-white/15" />
        <Node>
            <Calendar size={18} />
        </Node>
    </div>
);

const UserNode = () => (
    <div className="relative flex size-[54px] items-center justify-center rounded-full border border-white/15 bg-[#100D0C]">
        {/* Binary Background */}
        <span
            className="
                absolute left-1/2 top-1/2 z-0 w-[225px]
                -translate-x-1/2 -translate-y-1/2
                text-center font-['Rubik'] text-[8px] leading-4
                text-white/[0.12]
                [mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]
            "
        >
            01000010 01100101 01101110 01110100 01101111 00100000
            01000100 01100100 01101110 01110010 01101110 01101110
            <br />
            <br />
            00100000 01010011 01111001 01110011 01110100 01100101
            01101101 00111010 00100000 01000011 01100001 01110010
            01100100 01110011
        </span>

        {/* User Icon Background */}
        <div className="relative z-10 flex size-[54px] items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle,#100D0C_35%,#100D0C_55%,rgba(255,255,255,0.3)_85%,rgba(255,255,255,0.8)_100%)]">
            <User size={24} strokeWidth={1.5} className="text-white/70" />
        </div>
    </div>
);

const TransactionMonitoringCard = () => (
    <FeatureCard
        title="Transaction Monitoring"
        description="View detailed transaction history across multiple blockchain networks."
        className="
            relative isolate h-[432px] w-full min-w-0 overflow-hidden
            border border-white/10
            bg-[linear-gradient(101.17deg,rgba(211,40,0,0.08)_0%,rgba(211,40,0,0.024)_100%)]
        "
        glowClassName=""
    >
        {/* Top Center White Glass Layer */}
        <div className="pointer-events-none absolute left-1/2 top-[-340px] z-[1] size-[380px] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] blur-[1px]" />
        {/* Top Left Glow */}
        <div className="pointer-events-none absolute -left-[10px] -top-[50px] z-0 size-[162px] rounded-full bg-[#D32800] blur-[80px]" />

        {/* Bottom Right Glow */}
        <div className="pointer-events-none absolute left-[600px] top-[304px] z-0 size-[248px] rounded-full bg-[#D32800] blur-[90px]" />

        {/* Card Content */}
        <div className="relative z-10">
            <Visual />
        </div>
    </FeatureCard>
);

export default TransactionMonitoringCard;