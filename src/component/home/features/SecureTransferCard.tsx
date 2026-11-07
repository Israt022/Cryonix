import { DollarSign, Link2 } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Node = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div
        className={`absolute left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white ${className}`}
    >
        {children}
    </div>
);

const Visual = () => (
    <div className="pointer-events-none absolute inset-0">
        {/* Light beams from the top */}
        <div className="absolute -left-10 -top-10 h-[260px] w-[260px] rotate-[35deg] bg-gradient-to-b from-white/50 to-transparent blur-[50px]" />
        <div className="absolute -right-10 -top-10 h-[260px] w-[260px] -rotate-[35deg] bg-gradient-to-b from-white/50 to-transparent blur-[50px]" />

        {/* Concentric rings */}
        {[560, 440, 320].map((size, i) => (
            <div
                key={size}
                className="absolute left-1/2 top-[70px] -translate-x-1/2 rounded-full border border-white/10"
                style={{
                    width: size,
                    height: size,
                    background: `radial-gradient(circle, rgba(211,40,0,${0.05 + i * 0.05}) 0%, transparent 70%)`,
                }}
            />
        ))}

        {/* Center dot */}
        <div className="absolute left-1/2 top-[170px] size-2.5 -translate-x-1/2 rounded-full bg-white/50" />

        <Node className="top-[56px]"><DollarSign size={18} /></Node>
        <Node className="top-[260px]"><Link2 size={18} /></Node>
    </div>
);

const SecureTransferCard = () => (
    <FeatureCard
        title="Secure Transfer Protection"
        description="Keep every transfer protected with advanced security and encryption."
        className="h-[432px] w-full min-w-0"
        glowClassName="-top-[100px] left-1/2 h-[260px] w-[500px] -translate-x-1/2 opacity-50"
    >
        <Visual />
    </FeatureCard>
);

export default SecureTransferCard;