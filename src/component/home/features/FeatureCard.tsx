import type { ReactNode } from "react";

type FeatureCardProps = {
    title: string;
    description: string;
    /** "split": title top / description bottom. "bottom": both at bottom. */
    layout?: "split" | "bottom";
    /** Orange glow position inside the card */
    glowClassName?: string;
    className?: string;
    children?: ReactNode; // visual
};

const FeatureCard = ({
    title,
    description,
    layout = "bottom",
    glowClassName = "",
    className = "",
    children,
}: FeatureCardProps) => {
    return (
        <div
            className={`rounded-[24px] p-[1.2px] ${className}`}
            style={{
                backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
                    linear-gradient(138.87deg, rgba(211,40,0,0.35) 0%, rgba(211,40,0,0) 25.72%),
                    linear-gradient(142.28deg, rgba(211,40,0,0) 74.78%, rgba(211,40,0,0.2) 100%)
                `,
            }}
        >
            <div className="relative h-full w-full overflow-hidden rounded-[23px] bg-[#080503]">
                {/* Glow */}
                <div
                    className={`pointer-events-none absolute rounded-full bg-[#D32800] blur-[120px] ${glowClassName}`}
                    aria-hidden="true"
                />

                {/* Visual */}
                {children}

                {/* Text */}
                <div
                    className={`relative z-10 flex h-full flex-col p-6 ${layout === "split" ? "justify-between" : "justify-end"
                        }`}
                >
                    {layout === "split" && (
                        <h3 className="max-w-[260px] text-[32px] font-normal leading-[1.2] tracking-[-0.5px] text-white">
                            {title}
                        </h3>
                    )}

                    <div className={layout === "split" ? "max-w-[506px]" : ""}>
                        {layout === "bottom" && (
                            <h3 className="text-[28px] font-normal leading-[1.2] tracking-[-0.5px] text-white md:text-[32px]">
                                {title}
                            </h3>
                        )}

                        <p
                            className={`text-base leading-[1.5] text-white/70 ${layout === "bottom" ? "mt-3" : ""
                                }`}
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;