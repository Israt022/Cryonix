type StatItemProps = {
    value: string;
    label: string;
};

const StatItem = ({ value, label }: StatItemProps) => {
    return (
        <div className="flex items-center justify-between gap-6 border-b border-white/5 py-10 first:pt-0 last:border-b-0 last:pb-0 lg:py-[52px] lg:first:pt-0 lg:last:pb-0">
            <span className="text-[clamp(40px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.5px] text-white">
                {value}
            </span>

            <span className="text-right text-lg font-normal text-white/80">
                {label}
            </span>
        </div>
    );
};

export default StatItem;