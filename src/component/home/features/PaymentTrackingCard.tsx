import { SlidersHorizontal, SlidersVertical, MousePointer2, } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Panel = ({
    className = "",
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => (
    <div
        className={`
            relative rounded-[14px]
            border border-white/[0.06]
            bg-[#FFFFFF0A]
            ${className}
        `}
        style={{
            backgroundImage:
                "linear-gradient(139.2deg, rgba(211,40,0,0.08) 0.02%, rgba(211,40,0,0) 24.05%)",
        }}
    >
        {children}
    </div>
);

const Line = ({ w = "100%" }: { w?: string }) => (
    <div className="h-[4px] rounded-full fontse bg-white/10" style={{ width: w }} />
);

const ProjectTile = ({
    label,
    active = false,
    icon: Icon = SlidersHorizontal,
}: {
    label: string;
    active?: boolean;
    icon?: React.ElementType;
}) => (
    <div
        className={`relative flex h-[91.69px] w-[97.83px] flex-col items-start rounded-[8px] border p-[10px] ${active
            ? "border-white/10 bg-[#120101] text-white shadow-[0px_19.65px_26.2px_-6.55px_#12121226]"
            : "border-white/[0.04] bg-[#FFFFFF0A] text-white/40"
            }`}
    >
        <Icon size={19.65} strokeWidth={1.5} />

        <span className="relative mt-[18px] text-[12px] leading-none">
            {label}

            {active && (
                <MousePointer2
                    size={13}
                    strokeWidth={1.8}
                    className="absolute -right-[0px] -top-[14px] text-white"
                />
            )}
        </span>
    </div>
);

const PaymentPreview = () => (
    <div className="pointer-events-none absolute right-[133px] top-[53px] hidden md:block">
        {/* Single Back Card */}
        <div className="absolute left-4 right-4 -top-4 h-[409px] rounded-[20px] border border-white/[0.06] bg-white/[0.04]" />

        {/* Main Glass Card */}
        <div
            className="
                relative
                z-10
                h-[409.31px]
                w-[586.14px]
                rounded-[20px]
                border border-white/10
                bg-[linear-gradient(101.17deg,rgba(211,40,0,0.08)_0%,rgba(211,40,0,0.024)_100%)]
                p-6
                backdrop-blur-[20px]
            "
            style={{
                borderImageSource: `
                    linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
                    linear-gradient(138.87deg, rgba(211,40,0,0.25) 0%, rgba(211,40,0,0) 25.72%),
                    linear-gradient(142.28deg, rgba(211,40,0,0) 74.78%, rgba(211,40,0,0.15) 100%)
                `,
                borderImageSlice: 1,
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-base text-white/60">
                    <span className="size-1.5 rounded-full bg-[#D32800]" />
                    My briefs
                    <span className="text-[#A8A8A8]">/</span>
                    <span className="text-white">Webflow Studio 2026</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex h-[26px] w-[64px] items-center justify-center rounded-full bg-white/10">
                        <div className="h-[4.91px] w-[39.29px] rounded-[1.64px] bg-[#7D7D7D]/[0.45]" />
                    </div>

                    <div className="size-7 rounded-full bg-gradient-to-br from-[#DF792C] to-[#7a2a10]" />
                </div>
            </div>

            <p className="mt-3 text-base text-white/50">
                Crypto web
            </p>

            {/* Content: 16px gap */}
            <div className="mt-4 grid grid-cols-[1fr_190px] gap-4 lg:gap-8">

                {/* Left Content */}
                <div className="flex flex-col gap-4">
                    <Panel className="h-[113px] w-[341px] p-[26px]">
                        <p className="text-[11px] font-medium text-white/80">
                            Introduction
                        </p>
                        <div className="mt-3 flex flex-col gap-2">
                            <Line w="45%" />
                            <Line />
                            <Line />
                        </div>
                    </Panel>

                    <Panel className="h-[113px] w-[341px] p-[26px]">
                        <p className="text-[11px] font-medium text-white/80">
                            Goal
                        </p>
                        <div className="relative mt-3 h-[3px] w-[60%] rounded-full bg-[#DF792C]">
                            <div className="absolute left-1/2 top-1/2 flex h-[17px] w-[5px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between">
                                <span className="size-[3px] bg-white" />
                                <span className="h-[7px] w-[2px]  bg-white" />
                                <span className="size-[3px]  bg-white" />
                            </div>
                        </div>
                        <div className="mt-3 flex flex-col gap-2">
                            <Line />
                            <Line w="70%" />
                        </div>
                    </Panel>
                </div>

                {/* Right Content */}
                <div className="absolute -right-[52px] top-[108px] z-20 h-[271px] w-[248.04px] overflow-hidden">
                    <div
                        className="
                            relative h-[366.745px] w-full
                            rounded-t-[13.1px]
                            border border-white/[0.05]
                            bg-[#FFFFFF0A]
                            px-[19.65px] pt-[26.2px]
                            backdrop-blur-[20px]
                        "
                        style={{
                            background: `
                                linear-gradient(#FFFFFF0A, #FFFFFF0A) padding-box,
                                linear-gradient(
                                    0deg,
                                    rgba(253,253,253,0.05),
                                    rgba(253,253,253,0.05)
                                ) border-box,
                                linear-gradient(
                                    330.13deg,
                                    rgba(211,40,0,0) 81.29%,
                                    rgba(211,40,0,0.2) 100.07%
                                ) border-box
                            `,
                            border: "0.82px solid transparent",
                        }}
                    >
                        <p className="text-[16px] leading-normal text-white/80">
                            What type of project?
                        </p>

                        <div className="mt-[13px] grid grid-cols-2 gap-[4px]">
                            <ProjectTile
                                label="Crypto web"
                                active
                                icon={SlidersHorizontal}
                            />
                            <ProjectTile
                                label="UX/UI Design"
                                icon={SlidersVertical}
                            />
                            <ProjectTile
                                label="Mobile App"
                                icon={SlidersHorizontal}
                            />
                            <ProjectTile
                                label="Branding & logo"
                                icon={SlidersVertical}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
);


const PaymentTrackingCard = () => (
    <FeatureCard
        title="Real-Time Payment Tracking"
        description="Monitor incoming and outgoing crypto payments instantly from a unified dashboard."
        layout="split"
        className="h-[432px] rounded-[20px] border border-white/10 bg-[linear-gradient(101.17deg,rgba(211,40,0,0.08)_0%,rgba(211,40,0,0.024)_100%)]"
        glowClassName=""
    >
        {/* Glow Layers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">

            {/* 1st Layer */}
            <div
                className="
                    absolute
                    -left-[304px] -top-[157px]
                    h-[699.86px] w-[158.85px]
                    -rotate-[133deg]
                    bg-[linear-gradient(179.83deg,rgba(252,109,1,0.7)_24.4%,rgba(211,40,0,0.21)_66.31%,rgba(255,255,255,0)_90.62%)]
                    blur-[50px]
                "
            />

            {/* 2nd Layer */}
            <div
                className="
                    absolute
                    -left-[162px] -top-[169px]
                    h-[699.86px] w-[158.85px]
                    -rotate-[133deg]
                    bg-[linear-gradient(179.83deg,rgba(252,109,1,0.7)_24.4%,rgba(252,109,1,0.21)_66.31%,rgba(255,255,255,0)_90.62%)]
                    blur-[50px]
                "
            />

            {/* 3rd Layer */}
            <div
                className="
                    absolute
                    left-[-2.97px] top-[-148px]
                    h-[707.41px] w-[109.84px]
                    -rotate-[133deg]
                    bg-[linear-gradient(179.7deg,rgba(252,109,1,0.7)_21.82%,rgba(211,40,0,0.21)_59.29%,rgba(255,255,255,0)_81.02%)]
                    blur-[30px]
                "
            />

            {/* 4th Layer */}
            <div
                className="
                    absolute
                    left-[3px] top-[-296px]
                    h-[707.52px] w-[100.28px]
                    -rotate-[135deg]
                    bg-[linear-gradient(180.97deg,rgba(211,40,0,0.6)_28.7%,rgba(211,40,0,0)_100.02%)]
                    blur-[70px]
                "
            />

        </div>

        <PaymentPreview />
    </FeatureCard>
);

export default PaymentTrackingCard;
