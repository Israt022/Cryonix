import type { ReactNode } from "react";

type PlatformCardProps = {
    title: string;
    description: string;
    /** CSS background (radial gradients) used for the red glow */
    glow?: string;
    /** Limits the description width, e.g. "max-w-[400px]" */
    descClassName?: string;
    className?: string;
    children?: ReactNode; // visual
};

const PlatformCard = ({
    title,
    description,
    glow,
    descClassName = "max-w-[400px]",
    className = "",
    children,
}: PlatformCardProps) => {
    return (
        <div
            className={`h-[500px] rounded-[24px] p-[1.2px] ${className}`}
            style={{
                backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
                    linear-gradient(138.87deg, rgba(211,40,0,0.35) 0%, rgba(211,40,0,0) 25.72%),
                    linear-gradient(142.28deg, rgba(211,40,0,0) 74.78%, rgba(211,40,0,0.2) 100%)
                `,
            }}
        >
            <div className="relative h-full w-full overflow-hidden rounded-[23px] bg-[#080503]">
                {/* Red glow */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: glow }}
                    aria-hidden="true"
                />

                {/* Visual area (top part of the card) */}
                <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[330px] items-center justify-center">
                    {children}
                </div>

                {/* Text */}
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                    <h3 className="text-[28px] font-normal leading-[1.2] tracking-[-0.5px] text-white md:text-[32px]">
                        {title}
                    </h3>
                    <p className={`mt-3 text-base leading-[1.5] text-white/70 ${descClassName}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PlatformCard;