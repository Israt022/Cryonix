import { Wallet } from "lucide-react";
import TotalBalanceCard from "./TotalBalanceCard";
import YourCardsCard from "./YourCardsCard";
import StatCard, { type StatCardProps } from "./StatCard";
import { ExpenseIcon, IncomeIcon } from "./icons";

const stats: StatCardProps[] = [
    { icon: ExpenseIcon, change: "- 1.78 %", trend: "down", value: "$43,000", label: "Total Expense" },
    { icon: Wallet, change: "+ 1.24 %", trend: "up", value: "$56,000", label: "Total Savings" },
    { icon: IncomeIcon, change: "+ 1.78 %", trend: "up", value: "$78,000", label: "Total Income" },
];

const DashboardPanel = () => {
    return (
        <div
            className="rounded-[28px] p-px"
            style={{
                backgroundImage:
                    "linear-gradient(135deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.08) 45%, rgba(211,40,0,0.2) 100%)",
            }}
        >
            {/* Inner gap 18px, panel padding 28px */}
            <div className="flex flex-col gap-[18px] rounded-[27px] bg-[radial-gradient(ellipse_at_100%_30%,rgba(211,40,0,0.1)_0%,transparent_55%),linear-gradient(180deg,#140808_0%,#0e0606_100%)] p-7">
                {/* Row 1: 335 + 205 */}
                <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[335px_205px]">
                    <TotalBalanceCard />
                    <YourCardsCard />
                </div>

                {/* Row 2: 3 x 174 */}
                <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-3">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPanel;