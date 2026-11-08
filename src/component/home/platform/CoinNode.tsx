import type { CSSProperties, ReactNode } from "react";

type CoinNodeProps = {
    children: ReactNode;
    size?: number;
    /** left / top = center point of the node inside its container */
    style?: CSSProperties;
    className?: string;
};

/** Round dark icon node with a glass outer ring */
const CoinNode = ({ children, size = 44, style, className = "" }: CoinNodeProps) => (
    <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.14] p-[3px] shadow-[0_6px_24px_rgba(0,0,0,0.55)] ${className}`}
        style={{ width: size, height: size, ...style }}
    >
        <div className="flex size-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_25%,#5a5a5a_0%,#262626_55%,#121212_100%)] text-white/85">
            {children}
        </div>
    </div>
);

export default CoinNode;