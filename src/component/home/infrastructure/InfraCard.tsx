import type { LucideIcon } from "lucide-react";

export type InfraCardProps = {
    title: string;
    description: string;
    icon: LucideIcon;
    /** CSS background (radial gradients) used for the red glow */
    glow?: string;
};

const InfraCard = ({ title, description, icon: Icon, glow }: InfraCardProps) => {
    return (
        <div
            className="h-[292px] rounded-[24px] p-[1.2px]"
            style={{
                backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
                    linear-gradient(138.87deg, rgba(211,40,0,0.3) 0%, rgba(211,40,0,0) 25.72%),
                    linear-gradient(142.28deg, rgba(211,40,0,0) 74.78%, rgba(211,40,0,0.15) 100%)
                `,
            }}
        >
            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[23px] bg-[#080503] p-6">
                {/* Red glow */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: glow }}
                    aria-hidden="true"
                />

                {/* Icon tile */}
                <div className="relative flex size-[64px] items-center justify-center rounded-[14px] border border-[#E8613A]/50 bg-[linear-gradient(180deg,#8f2308_0%,#4a1005_100%)] text-[#FFD9CC] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                    <Icon size={28} strokeWidth={2} />
                </div>

                {/* Text */}
                <div className="relative">
                    <h3 className="text-[28px] font-normal leading-[1.2] tracking-[-0.5px] text-white md:text-[32px]">
                        {title}
                    </h3>
                    <p className="mt-3 max-w-[300px] text-base leading-[1.5] text-white/70">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfraCard;