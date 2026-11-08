import SectionBadge from "./Sectionbadge";


const FaqHeader = () => {
    return (
        <div className="flex flex-col items-start gap-8">
            <SectionBadge label="FAQ" />

            <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <h2 className="text-[clamp(32px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.8px] text-white">
                    Frequently <span className="text-[#B5B5B5]">Asked</span>
                    <br />
                    Questions <span className="text-[#B5B5B5]">Section</span>
                </h2>

                <p className="max-w-[460px] text-[18px] font-normal leading-[1.5] text-white/80 lg:pb-2">
                    Buy, sell, and manage popular digital assets instantly from one
                    simple platform.
                </p>
            </div>
        </div>
    );
};

export default FaqHeader;