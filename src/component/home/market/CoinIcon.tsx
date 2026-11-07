'use client'
import { useState } from "react";
import { Coins } from "lucide-react";

type CoinIconProps = {
    slug: string;
    color: string;
    symbol: string;
};

const CoinIcon = ({ slug, color, symbol }: CoinIconProps) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="flex size-[64px] items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.06]">
            {!imageError ? (
                <img
                    src={`https://cdn.simpleicons.org/${slug}/${color}`}
                    alt={symbol}
                    width={32}
                    height={32}
                    className="size-8 object-contain"
                    loading="lazy"
                    onError={() => setImageError(true)}
                />
            ) : (
                <Coins size={28} strokeWidth={2} className="text-white/70" />
            )}
        </div>
    );
};

export default CoinIcon;