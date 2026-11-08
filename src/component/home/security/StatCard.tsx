import { EllipsisVertical, TrendingDown, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";
import DashCard from "./DashCard";

type IconComponent = ComponentType<{
    size?: number | string;
    strokeWidth?: number | string;
    className?: string;
}>;

export type StatCardProps = {
    icon: IconComponent;
    change: string;
    trend: "up" | "down";
    value: string;
    label: string;
};

const StatCard = ({ icon: Icon, change, trend, value, label }: StatCardProps) => {
    const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;

    return (
        <DashCard className="flex flex-col justify-between px-5 pb-[18px] pt-5">
            {/* Icon tile (42px) + menu */}
            <div className="flex items-center justify-between">
                <div className="flex size-[42px] items-center justify-center rounded-[10px] border border-white/25 bg-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    <Icon size={22} strokeWidth={1.6} />
                </div>
                <EllipsisVertical size={16} strokeWidth={2.5} className="text-white/80" />
            </div>

            <div>
                <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-[3px] text-[11px] leading-4 ${
                        trend === "down"
                            ? "bg-[#D32800]/25 text-[#F0503A]"
                            : "bg-white/[0.12] text-white/85"
                    }`}
                >
                    <TrendIcon size={11} />
                    {change}
                </span>
                <p className="mt-[6px] text-[28px] font-semibold leading-[1.2] text-white">
                    {value}
                </p>
                <p className="mt-0.5 text-base leading-6 text-white/55">{label}</p>
            </div>
        </DashCard>
    );
};

export default StatCard;