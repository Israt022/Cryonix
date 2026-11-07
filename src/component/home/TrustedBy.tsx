'use client'
import { Astroid, Sparkles } from "lucide-react";

type Logo = {
    name: string;
    slug?: string;
    textSize?: string;
};

const firstRow: Logo[] = [
    { name: "NEXO", textSize: "text-[14px]" },
    { name: "UNISWAP", slug: "uniswap", textSize: "text-[12px]" },
    { name: "Bitstamp", textSize: "text-[15px]" },
    { name: "CONSENSYS", textSize: "text-[11px]" },
    { name: "Compound", textSize: "text-[14px]" },
    { name: "Gate.io", textSize: "text-[14px]" },
    { name: "coinbase", slug: "coinbase", textSize: "text-[15px]" },
    { name: "crypto.com", textSize: "text-[12px]" },
];

const secondRow: Logo[] = [
    { name: "GITCOIN", textSize: "text-[13px]" },
    { name: "OKX", slug: "okx", textSize: "text-[14px]" },
    { name: "coinone", textSize: "text-[14px]" },
    { name: "Pionex", textSize: "text-[14px]" },
    { name: "KUCOIN", slug: "kucoin", textSize: "text-[13px]" },
    { name: "BINANCE", slug: "binance", textSize: "text-[13px]" },
    { name: "APTOS", textSize: "text-[14px]" },
    { name: "Bitcoin", slug: "bitcoin", textSize: "text-[14px]" },
];

import { Coins } from "lucide-react";
import { useState } from "react";

const LogoCard = ({
            name,
            slug,
            textSize = "text-[13px]",
        }: Logo
) => 
    {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="h-[80px] w-[180px] shrink-0 rounded-[20px] p-[1.2px]"
            style={{
                backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
                    linear-gradient(138.87deg, rgba(211,40,0,0.25) 0%, rgba(211,40,0,0) 25.72%),
                    linear-gradient(142.28deg, rgba(211,40,0,0) 74.78%, rgba(211,40,0,0.15) 100%)
                `,
            }}
        >
            <div className="flex h-full w-full items-center justify-center rounded-[19px] bg-[#080503] bg-[linear-gradient(101.17deg,rgba(211,40,0,0.08)_0%,rgba(211,40,0,0.024)_100%)]">
                <div className="flex h-[29px] w-[145px] items-center justify-center gap-2">

                    {slug && !imageError ? (
                        <img
                            src={`https://cdn.simpleicons.org/${slug}/918986`}
                            alt=""
                            width={20}
                            height={20}
                            className="size-5 shrink-0 object-contain"
                            loading="lazy"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <Coins
                            size={20}
                            strokeWidth={2}
                            className="shrink-0 text-[#918986]"
                        />
                    )}

                    <span
                        className={`${textSize} whitespace-nowrap font-semibold tracking-[-0.3px] text-[#918986]`}
                    >
                        {name}
                    </span>

                </div>
            </div>
        </div>
    );
};


const LogoMarquee = ({
    logos,
    reverse = false,
}: {
    logos: Logo[];
    reverse?: boolean;
}) => {
    return (
        <div className="logo-marquee w-full overflow-hidden">
            <div
                className={`logo-marquee-track flex w-max ${reverse ? "logo-marquee-reverse" : ""
                    }`}
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        className="flex shrink-0 gap-6 pr-6"
                        aria-hidden={copy === 1}
                    >
                        {logos.map((logo) => (
                            <LogoCard
                                key={logo.name}
                                {...logo}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const TrustedBy = () => {
    return (
        <section
            id="clients"
            className="relative overflow-hidden bg-black py-[100px]"
        >
            {/* Heading */}
            <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-gradient-to-br from-[#D32800]/40 via-white/10 to-[#D32800]/20 p-px">
                    <div className="flex items-center gap-[7px] rounded-full bg-[#080503] px-6 py-3">
                        <Astroid
                            size={13}
                            strokeWidth={2}
                            className="fill-[#D32800] text-[#D32800]"
                        />

                        <span className="text-[18px] font-normal text-white">
                            Client
                        </span>
                    </div>
                </div>

                <h2 className="mt-8 text-[clamp(32px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.8px] text-white">
                    Trusted by Crypto Builders
                </h2>
            </div>

            {/* Moving Logo Rows */}
            <div className="mt-16 flex flex-col gap-6">
                <LogoMarquee logos={firstRow} />

                <LogoMarquee
                    logos={secondRow}
                    reverse
                />
            </div>
        </section>
    );
};

export default TrustedBy;
