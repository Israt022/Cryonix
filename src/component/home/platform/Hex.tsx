import type { CSSProperties, ReactNode } from "react";

export const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

type HexProps = {
    /** Must include a position utility (e.g. "absolute") */
    className?: string;
    style?: CSSProperties;
    /** Adds an inner lighter hexagon (glass look) */
    glass?: boolean;
    children?: ReactNode;
};

/** Dark hexagon tile with a thin light border */
const Hex = ({ className = "", style, glass = false, children }: HexProps) => (
    <div
        className={`bg-white/[0.14] ${className}`}
        style={{ clipPath: HEX_CLIP, ...style }}
    >
        <div
            className="absolute inset-px bg-[linear-gradient(180deg,#1c1512_0%,#0c0806_100%)]"
            style={{ clipPath: HEX_CLIP }}
        />
        {glass && (
            <div
                className="absolute inset-[9px] bg-gradient-to-b from-white/[0.10] to-white/[0.03]"
                style={{ clipPath: HEX_CLIP }}
            />
        )}
        {children}
    </div>
);

export default Hex;