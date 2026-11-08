import { DollarSign, Link as LinkIcon } from "lucide-react";
import FeatureCard from "./FeatureCard";

/* ---------- Geometry (tuned for 648 x 432 card) ---------- */

// All rings share one center that sits slightly above the card
const RING_CENTER_Y = -18;
// Ring diameters, largest first so smaller rings stack on top
const RING_SIZES = [494, 395, 298, 201, 104];

// Small dots that sit on the arcs (offset from horizontal center, top)
const ARC_DOTS = [
    { dx: 108, top: 84 },
    { dx: 141, top: 119 },
];

// Tiny sparkles [left %, top px]
const SPECKS: [number, number][] = [
    [57, 89],
    [59, 122],
    [45, 143],
    [48, 143],
    [60, 171],
    [68, 200],
    [42, 198],
    [34, 203],
];

/* ---------- Small pieces ---------- */

const IconNode = ({
    children,
    top,
}: {
    children: React.ReactNode;
    top: number;
}) => (
    <div
        className="absolute left-1/2 z-10 size-[50px] -translate-x-1/2 rounded-full   p-[3px] "
        style={{ top }}
    >
        <div className="flex size-full items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle,#292321_35%,#292321_55%,rgba(255,255,255,0.3)_85%,rgba(255,255,255,0.8)_100%)] text-white/85">
            {children}
        </div>
    </div>
);
const Visual = () => (
    <div className="pointer-events-none absolute inset-0">
        {/* Left / Right red glow (top corners) */}
        <div className="absolute left-0 top-0 h-[62%] w-[55%] bg-[radial-gradient(ellipse_at_8%_0%,rgba(211,40,0,0.9)_0%,rgba(211,40,0,0.35)_40%,transparent_70%)]" />
        <div className="absolute right-0 top-0 h-[62%] w-[55%] bg-[radial-gradient(ellipse_at_92%_0%,rgba(211,40,0,0.9)_0%,rgba(211,40,0,0.35)_40%,transparent_70%)]" />

        {/* White glass beams (angled toward the center) */}
        <div className="absolute left-[28px] -top-[50px] h-[250px] w-[110px] -rotate-[28deg] bg-gradient-to-b from-white/85 via-white/30 to-transparent blur-[22px] mix-blend-screen" />
        <div className="absolute right-[28px] -top-[50px] h-[250px] w-[110px] rotate-[28deg] bg-gradient-to-b from-white/85 via-white/30 to-transparent blur-[22px] mix-blend-screen" />

        {/* Concentric rings */}
        {RING_SIZES.map((size, i) => (
            <div
                key={size}
                className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/[0.13]"
                style={{
                    width: size,
                    height: size,
                    top: RING_CENTER_Y - size / 2,
                    background: `radial-gradient(circle, rgba(211,40,0,${0.03 + i * 0.015
                        }) 0%, rgba(211,40,0,${0.1 + i * 0.01}) 70%, rgba(255,255,255,0.03) 100%)`,
                }}
            />
        ))}

        {/* Faint grid */}
        {/* <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_50%_60%,black_0%,transparent_70%)]" /> */}

        {/* Bottom fade so the text stays readable */}
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent via-[#080503]/80 to-[#080503]" />

        {/* Vertical connector: center dot -> link icon */}
        <div className="absolute left-1/2 top-[160px] h-[50px] w-px -translate-x-1/2 bg-white/15" />
        {/* Small tick under the $ icon */}
        <div className="absolute left-1/2 top-[108px] h-[5px] w-px -translate-x-1/2 bg-white/50" />

        {/* Dots sitting on the arcs */}
        {ARC_DOTS.map(({ dx, top }) =>
            [-1, 1].map((side) => (
                <span
                    key={`${dx}-${side}`}
                    className="absolute size-[15px] rounded-full bg-white/25 shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                    style={{ top: top - 7, left: `calc(50% + ${side * dx}px - 7.5px)` }}
                />
            ))
        )}

        {/* Sparkles */}
        {SPECKS.map(([left, top], i) => (
            <span
                key={i}
                className="absolute size-[2px] rounded-full bg-white/70"
                style={{ left: `${left}%`, top }}
            />
        ))}

        {/* Center dot */}
        <span className="absolute left-1/2 top-[147px] size-[15px] -translate-x-1/2 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.35)]" />

        {/* Icons */}
        <IconNode top={46}>
            <DollarSign size={20} strokeWidth={3} />
        </IconNode>
        <IconNode top={208}>
            <LinkIcon size={20} strokeWidth={2.5} className="text-white/70" />
        </IconNode>
    </div>
);

const SecureTransferCard = () => (
    <FeatureCard
        title="Secure Transfer Protection"
        description="Keep every transfer protected with advanced security and encryption."
        className="h-[432px] w-full min-w-0"
        glowClassName="-top-[100px] left-1/2 h-[260px] w-[500px] -translate-x-1/2 opacity-0"
    >
        <Visual />
    </FeatureCard>
);

export default SecureTransferCard;