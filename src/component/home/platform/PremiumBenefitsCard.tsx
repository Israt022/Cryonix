import { DollarSign, JapaneseYen, PoundSterling } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import PlatformCard from "./PlatformCard";
import Hex, { HEX_CLIP } from "./Hex";

/* ---------- Geometry (card = 648px wide, container center x = 180) ---------- */

const HEX_W = 97;
const HEX_H = 111;
const GHOST_W = 80;
const GHOST_H = 92;

// Center points of the 3 main hexagons
const TOP = { x: 180, y: 70 };
const LEFT = { x: 123, y: 170 };
const RIGHT = { x: 237, y: 170 };

// Faded background hexagons (center points)
const GHOSTS = [
    { x: 84, y: 80 },
    { x: 276, y: 80 },
    { x: 180, y: 247 },
    { x: 69, y: 255 },
    { x: 287, y: 255 },
];

/* ---------- Small pieces ---------- */

const hexPos = (c: { x: number; y: number }, w = HEX_W, h = HEX_H): CSSProperties => ({
    left: c.x - w / 2,
    top: c.y - h / 2,
    width: w,
    height: h,
});

const Coin = ({ at, children }: { at: { x: number; y: number }; children: ReactNode }) => (
    <div
        className="absolute flex size-[51px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_25%,#909090_0%,#4d4d4d_55%,#2f2f2f_100%)] text-white/75 shadow-[0_6px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.35)]"
        style={{ left: at.x, top: at.y }}
    >
        {children}
    </div>
);

const Visual = () => (
    <div className="relative h-[330px] w-[360px]">
        {/* Dotted grid texture */}
        <div className="absolute left-1/2 top-[10px] h-[280px] w-[320px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1.5px)] [background-size:14px_14px] opacity-25 [mask-image:radial-gradient(ellipse_at_50%_45%,black_0%,transparent_70%)]" />

        {/* Faded hexagons behind */}
        {GHOSTS.map((g, i) => (
            <div
                key={i}
                className="absolute bg-gradient-to-b from-white/[0.08] to-transparent"
                style={{ ...hexPos(g, GHOST_W, GHOST_H), clipPath: HEX_CLIP, opacity: i === 2 ? 1 : 0.6 }}
            />
        ))}

        {/* Hanging cord on top */}
        <div className="absolute left-1/2 top-0 h-[36px] w-px -translate-x-1/2 bg-white/55" />
        <div className="absolute left-1/2 top-[30px] size-[8px] -translate-x-1/2 -rotate-45 border-b border-l border-white/50" />

        {/* Main hexagons */}
        <Hex glass className="absolute" style={hexPos(TOP)} />
        <Hex glass className="absolute" style={hexPos(LEFT)} />
        <Hex glass className="absolute" style={hexPos(RIGHT)} />

        {/* Small connector between the lower hexagons */}
        <div className="absolute left-1/2 top-[135px] h-[36px] w-[10px] -translate-x-1/2 rounded-[5px] border border-white/20 bg-white/[0.05]" />

        {/* Coins */}
        <Coin at={TOP}>
            <DollarSign size={22} strokeWidth={3} />
        </Coin>
        <Coin at={LEFT}>
            <PoundSterling size={22} strokeWidth={2.5} />
        </Coin>
        <Coin at={RIGHT}>
            <JapaneseYen size={22} strokeWidth={2.5} />
        </Coin>
    </div>
);

/* Red glow: top-left corner, top-right corner, bottom-middle. Center stays dark. */
const GLOW = [
    "radial-gradient(ellipse 28% 36% at 6% 4%, rgba(211,40,0,0.62) 0%, rgba(211,40,0,0.25) 55%, transparent 100%)",
    "radial-gradient(ellipse 26% 32% at 92% 2%, rgba(211,40,0,0.62) 0%, rgba(211,40,0,0.25) 55%, transparent 100%)",
    "radial-gradient(ellipse 40% 26% at 55% 100%, rgba(211,40,0,0.62) 0%, rgba(211,40,0,0.25) 55%, transparent 100%)",
    "radial-gradient(ellipse 25% 18% at 12% 100%, rgba(211,40,0,0.18) 0%, transparent 100%)",
].join(", ");

const PremiumBenefitsCard = () => (
    <PlatformCard
        title="Premium User Benefits"
        description="Unlock advanced tools and exclusive features designed for active crypto users."
        glow={GLOW}
    >
        <Visual />
    </PlatformCard>
);

export default PremiumBenefitsCard;