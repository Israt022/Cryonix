import { Calendar, User } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Node = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex size-[54px] items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle,#100D0C_35%,#100D0C_55%,rgba(255,255,255,0.3)_85%,rgba(255,255,255,0.8)_100%)] text-white/70 backdrop-blur">
        {children}
    </div>
);
const Digit = ({ value }: { value: string }) => (
    <div className="flex size-[52px] items-center justify-center rounded-[12px] border border-white/[0.1] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_45%,rgba(255,255,255,0.015)_100%)] text-[24px] font-medium text-white/80 backdrop-blur">
        {value}
    </div>
);

const Visual = () => (
    <div className="pointer-events-none absolute inset-x-0 top-[28px] flex flex-col items-center">

        {/* Background Circuit Rails */}
        <svg
            viewBox="0 0 720 250"
            fill="none"
            className="
                absolute left-1/2 top-[40px] z-0
                h-[250px] w-[75%] -translate-x-1/2
                [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]
            "
        >
            <defs>
                <filter
                    id="rail-blur"
                    x="-10%"
                    y="-200%"
                    width="120%"
                    height="500%"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur stdDeviation="12" />
                </filter>
            </defs>
            {/* Upper Rail - Glass Shade */}
            <path
                d="M0 55 H72 Q82 55 91 44 L119 13 Q125 7 136 7 H584 Q595 7 603 17 L632 48 Q640 58 650 58 H720"
                stroke="white"
                strokeOpacity="0.12"
                strokeWidth="24"
                transform="translate(0 -10)"
                filter="url(#rail-blur)"
            />
            {/* Upper Rail 1 */}
            <path
                d="M0 55 H72 Q82 55 91 44 L119 13 Q125 7 136 7 H584 Q595 7 603 17 L632 48 Q640 58 650 58 H720"
                stroke="white"
                strokeOpacity="0.16"
                strokeWidth="1.5"
            />

            {/* Upper Rail 2 */}
            <path
                d="M0 78 H72 Q82 78 91 67 L119 36 Q125 30 136 30 H584 Q595 30 603 40 L632 71 Q640 81 650 81 H720"
                stroke="white"
                strokeOpacity="0.10"
                strokeWidth="1.5"
            />

            {/* Lower Rail 1 */}
            <path
                d="M0 92 H72 Q82 92 91 103 L119 134 Q125 140 136 140 H584 Q595 140 603 130 L632 99 Q640 89 650 89 H720"
                stroke="white"
                strokeOpacity="0.055"
                strokeWidth="1.5"
            />

            {/* Lower Rail 2 */}
            <path
                d="M0 115 H72 Q82 115 91 126 L119 157 Q125 163 136 163 H584 Q595 163 603 153 L632 122 Q640 112 650 112 H720"
                stroke="white"
                strokeOpacity="0.035"
                strokeWidth="1.5"
            />
        </svg>

        {/* User Icon */}
        <div className="relative z-10">
            <UserNode />
        </div>

        {/* User to Digits Curved Branch */}
        <svg
            width="244"
            height="44"
            viewBox="0 0 244 44"
            fill="none"
            className="relative z-10"
        >
            <path
                d="
                    M122 0 V9
                    C122 23 26 12 26 44

                    M122 9
                    C122 23 90 17 90 44

                    M122 9
                    C122 23 154 17 154 44

                    M122 9
                    C122 23 218 12 218 44
                "
                stroke="white"
                strokeOpacity="0.20"
                strokeWidth="1.2"
            />
        </svg>

        {/* Digit Boxes */}
        <div className="relative z-10 flex gap-3">
            {["8", "5", "0", "_"].map((d, i) => (
                <Digit key={i} value={d} />
            ))}
        </div>

        {/* Digits to Calendar Curved Branch */}
        <svg
            width="244"
            height="64"
            viewBox="0 0 244 64"
            fill="none"
            className="relative z-10"
        >
            <path
                d="
                    M26 0 V15
                    C26 39 122 15 122 64

                    M90 0 V15
                    C90 38 122 25 122 64

                    M154 0 V15
                    C154 38 122 25 122 64

                    M218 0 V15
                    C218 39 122 15 122 64
                "
                stroke="white"
                strokeOpacity="0.16"
                strokeWidth="1.2"
            />
        </svg>

        {/* Calendar */}
        <div className="relative flex size-[76px] items-center justify-center">
            {/* Outer Circle */}
            <div className="absolute inset-0 rounded-full border border-white/20 [mask-image:linear-gradient(to_bottom,black_0%,black_35%,transparent_100%)]" />

            <Node>
                <Calendar size={18} />
            </Node>
        </div>
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