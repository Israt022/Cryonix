import {
    Braces,
    Gift,
    GripVertical,
    Scan,
    Search,
    Ticket,
    User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ---------- Node layout (offsets from the card center, px) ---------- */

type NodeData = { icon: LucideIcon; dx: number; dy: number };

const NODES: NodeData[] = [
    // left column
    { icon: Braces, dx: -124, dy: -71 },
    { icon: Ticket, dx: -96, dy: 0 },
    { icon: Scan, dx: -124, dy: 71 },
    // right column
    { icon: Gift, dx: 124, dy: -71 },
    { icon: Search, dx: 96, dy: 0 },
    { icon: User, dx: 124, dy: 71 },
];

// Tiny sparkles [left %, top %, size px]
const SPECKS: [number, number, number][] = [
    [86, 28, 2],
    [77, 36, 2],
    [40, 72, 2],
    [25, 47, 5],
];

const at = (dx: number, dy: number) => ({
    left: `calc(50% + ${dx}px)`,
    top: `calc(50% + ${dy}px)`,
});

/* ---------- Pieces ---------- */

const Node = ({ icon: Icon, dx, dy }: NodeData) => (
    <div
        className="absolute flex size-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(211,40,0,0.12)_100%)] text-white/75 shadow-[0_6px_20px_rgba(0,0,0,0.4)]"
        style={at(dx, dy)}
    >
        <Icon size={18} strokeWidth={1.6} />
    </div>
);

const Lines = () => (
    <svg
        viewBox="-180 -100 360 200"
        className="absolute left-1/2 top-1/2 h-[200px] w-[360px] -translate-x-1/2 -translate-y-1/2"
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1"
        aria-hidden="true"
    >
        {/* left */}
        <path d="M-75 0H-36" />
        <path d="M-100 -71H-88C-66 -71 -64 0 -44 0" />
        <path d="M-100 71H-88C-66 71 -64 0 -44 0" />
        {/* right (mirrored) */}
        <path d="M75 0H36" />
        <path d="M100 -71H88C66 -71 64 0 44 0" />
        <path d="M100 71H88C66 71 64 0 44 0" />
    </svg>
);

const Dots = ({ className = "" }: { className?: string }) => (
    <div
        className={`absolute bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1.5px)] [background-size:12px_12px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)] ${className}`}
    />
);

/* ---------- Card ---------- */

const ReleaseVisual = () => {
    return (
        <div
            className="h-[300px] rounded-[24px] p-[1.2px] lg:h-[352px]"
            style={{
                backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
                    linear-gradient(138.87deg, rgba(211,40,0,0.3) 0%, rgba(211,40,0,0) 25.72%),
                    linear-gradient(142.28deg, rgba(211,40,0,0) 74.78%, rgba(211,40,0,0.15) 100%)
                `,
            }}
        >
            <div className="relative h-full w-full overflow-hidden rounded-[23px] bg-[#080503]">
                {/* Red glows: big top-left + bottom band */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 55% 70% at 18% 20%, rgba(211,40,0,0.6), transparent 70%), radial-gradient(ellipse 50% 25% at 50% 100%, rgba(211,40,0,0.3), transparent 70%), radial-gradient(ellipse 30% 30% at 100% 0%, rgba(211,40,0,0.1), transparent 70%)",
                    }}
                    aria-hidden="true"
                />

                {/* Dotted texture */}
                <Dots className="left-[34%] top-[6%] h-[30%] w-[30%]" />
                <Dots className="bottom-[8%] left-[34%] h-[22%] w-[30%]" />

                {/* Sparkles */}
                {SPECKS.map(([left, top, size], i) => (
                    <span
                        key={i}
                        className="absolute rounded-full bg-white/70"
                        style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            width: size,
                            height: size,
                            opacity: size > 3 ? 0.25 : 0.8,
                        }}
                    />
                ))}

                {/* Connector lines */}
                <Lines />

                {/* Nodes */}
                {NODES.map((node, i) => (
                    <Node key={i} {...node} />
                ))}

                {/* Center hub (72px) */}
                <div
                    className="absolute flex size-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[16px] border border-white/20 bg-[linear-gradient(180deg,#5a4a44_0%,#2b211e_100%)] text-white/75 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]"
                    style={at(0, 0)}
                >
                    <GripVertical size={20} strokeWidth={2.4} />
                </div>
            </div>
        </div>
    );
};

export default ReleaseVisual;