import type { ReactNode } from "react";

type DashCardProps = {
    /** Layout classes for the inner content (flex, padding...) */
    className?: string;
    children: ReactNode;
};

/** Shared dark glass card used inside the dashboard panel (height 210px) */
const DashCard = ({ className = "", children }: DashCardProps) => (
    <div
        className="h-[210px] rounded-[20px] p-px"
        style={{
            backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(211,40,0,0.22) 55%, rgba(255,255,255,0.07) 100%)",
        }}
    >
        <div
            className={`h-full overflow-hidden rounded-[19px] bg-[radial-gradient(ellipse_at_100%_100%,rgba(211,40,0,0.2)_0%,transparent_65%),linear-gradient(180deg,#190c0a_0%,#1a0b09_55%,#240d08_100%)] ${className}`}
        >
            {children}
        </div>
    </div>
);

export default DashCard;