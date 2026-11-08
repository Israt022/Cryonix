import { EllipsisVertical, Plus } from "lucide-react";
import DashCard from "./DashCard";

const TotalBalanceCard = () => (
    <DashCard className="flex flex-col p-5">
        {/* Title row (30px) */}
        <div className="flex h-[30px] items-center justify-between">
            <div className="flex items-center gap-2 text-[18px] font-normal text-white">
                Total Balance
                <span className="flex size-[13px] items-center justify-center rounded-full bg-white/50 text-[9px] font-bold leading-none text-black/80">
                    i
                </span>
            </div>
            <button
                type="button"
                aria-label="More"
                className="flex size-[30px] items-center justify-center rounded-full border border-white/25 bg-[#0b0605] text-white"
            >
                <EllipsisVertical size={16} strokeWidth={2.5} />
            </button>
        </div>

        {/* Amount + pill */}
        <div className="mt-[25px] flex items-center gap-4">
            <span className="text-[32px] font-semibold leading-[1.1] tracking-[-0.5px] text-white">
                $1,750.82
            </span>
            <span className="rounded-full bg-[#D32800]/20 px-3 py-1 text-[12px] leading-4 text-[#F0503A]">
                Last 15 days
            </span>
        </div>

        {/* Divider */}
        <div className="mt-[23px] h-px w-full bg-white/15" />

        {/* Buttons (42px high, gap 20px) */}
        <div className="mt-[13px] flex gap-5">
            <button
                type="button"
                className="flex h-[42px] w-[141px] shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(180deg,#2d2826_0%,#1f1a18_100%)] text-[13px] text-white"
            >
                <Plus size={16} strokeWidth={1.5} /> Transfer Founds
            </button>
            <button
                type="button"
                className="flex h-[42px] flex-1 items-center justify-center gap-2 rounded-full border border-white/25 bg-black text-[13px] text-white"
            >
                <Plus size={16} strokeWidth={1.5} /> Found Request
            </button>
        </div>
    </DashCard>
);

export default TotalBalanceCard;