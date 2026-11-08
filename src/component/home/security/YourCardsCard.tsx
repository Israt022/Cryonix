import { Plus } from "lucide-react";
import DashCard from "./DashCard";

const BankCard = ({
    amount,
    number,
    expiry,
    dark = true,
}: {
    amount: string;
    number: string;
    expiry?: string;
    dark?: boolean;
}) => (
    <div
        className={`flex h-[85px] w-[131px] shrink-0 flex-col justify-between rounded-[8px] border p-3 ${
            dark
                ? "border-white/40 bg-black"
                : "border-white/15 bg-[linear-gradient(135deg,#3a3532,#1c1816)]"
        }`}
    >
        <div className="flex items-center justify-between text-sm text-white">
            {amount}
            {dark && (
                <span className="text-xs font-bold italic tracking-tight text-[#1FA971]">
                    VISA
                </span>
            )}
        </div>
        <div className="flex items-center justify-between text-[9px] text-white/80">
            <span>{number}</span>
            {expiry && <span className="text-[10px]">{expiry}</span>}
        </div>
    </div>
);

const YourCardsCard = () => (
    <DashCard className="py-5 pl-5">
        <div className="flex items-center justify-between pr-5">
            <span className="text-lg text-white">Your Cards</span>
            <button
                type="button"
                aria-label="Add card"
                className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black text-white"
            >
                <Plus size={16} />
            </button>
        </div>

        <span className="mt-2 inline-block rounded-full bg-[#D32800]/25 px-2.5 py-1 text-[10px] text-[#F0503A]">
            Premium
        </span>

        {/* Cards overflow to the right on purpose */}
        <div className="mt-4 flex gap-3">
            <BankCard amount="$2,981" number="**** 1777" expiry="20/26" />
            <BankCard amount="$52" number="**** 18" dark={false} />
        </div>
    </DashCard>
);

export default YourCardsCard;