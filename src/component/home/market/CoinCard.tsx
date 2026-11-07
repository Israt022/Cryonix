import { ArrowUpRight } from "lucide-react";
import CoinIcon from "./CoinIcon";
import type { Coin } from "./coins";

const CoinCard = ({ symbol, name, slug, color, change, price }: Coin) => {
    return (
        <div className="flex h-[340px] flex-col justify-between rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,#080503_0%,#0d0603_55%,rgba(211,40,0,0.16)_100%)] p-6">
            <div>
                <CoinIcon slug={slug} color={color} symbol={symbol} />

                <h3 className="mt-5 text-[32px] font-normal leading-[1.1] tracking-[-0.5px] text-white">
                    {symbol}
                </h3>
                <p className="mt-1 text-sm font-normal text-white/60">{name}</p>
            </div>

            <div>
                <div className="flex items-center gap-1.5 text-sm text-[#22C55E]">
                    <span className="flex size-3.5 items-center justify-center rounded-full border border-[#22C55E]">
                        <ArrowUpRight size={9} strokeWidth={3} />
                    </span>
                    {change}
                </div>

                <p className="mt-2 text-[32px] font-normal leading-[1.1] tracking-[-0.5px] text-white">
                    {price}
                </p>
            </div>
        </div>
    );
};

export default CoinCard;