import Image from "next/image";
import { ArrowUpRight, Bitcoin, ChevronDown, Copy, Plus, Send } from "lucide-react";

const Sparkline = () => (
    <svg
        viewBox="0 0 80 28"
        className="h-7 w-20"
        fill="none"
        aria-hidden="true"
    >
        <path
            d="M1 22 L10 19 L17 21 L25 14 L32 16 L40 11 L48 15 L57 7 L65 9 L79 2"
            stroke="#22C55E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const LeftCards = () => (
    <div className="absolute left-[5.56%] top-0 z-10 w-[clamp(220px,23.96vw,345px)]">
        {/* BTC Balance Card */}
        <div className="h-[195px] rounded-[30px] bg-gradient-to-br from-white/40 via-white/10 to-transparent p-px">
            <div className="h-full rounded-[29px] border border-white/[0.04] bg-[#FFFFFF0F] p-[14px] backdrop-blur-xl">

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full bg-white/10 p-1">
                        <div className="rounded-full bg-[#F7931A] p-1">
                            <Bitcoin size={22} strokeWidth={2.5} className="text-white" />
                        </div>
                        <div className="flex gap-1 items-center justify-center">
                            <span className="text-base font-medium text-white">BTC</span>
                            <ChevronDown size={16} />
                        </div>
                    </div>

                    <span className="rounded-full bg-white/10 px-4 py-1.5 font-medium text-[14px] text-white/80">
                        Send
                    </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-4 py-1.5 text-[14px] text-white font-medium">
                        Half
                    </span>

                    <span className="text-[46px] font-medium text-white">
                        1,04
                    </span>

                    <span className="rounded-full bg-white/10 px-4 py-1.5 text-[14px] text-white ">
                        Max
                    </span>
                </div>

                <p className="mt-2 text-center text-base font-medium text-[#B5B5B5]">
                    Balance: 0.5987 BTC
                </p>
            </div>
        </div>

        {/* Ethereum Card */}
        <div className="mt-6 h-[67.13px] rounded-[16px] bg-gradient-to-br from-white/40 via-white/10 to-transparent p-px">
            <div className="flex h-full items-center justify-between rounded-[15px] bg-[#FFFFFF0F] p-3 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center rounded-full bg-white px-3 py-2">
                        <Image
                            src="/asset/Ethereum.png"
                            alt="Ethereum"
                            width={14}
                            height={24}
                            className="object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-base font-semibold text-white">Ethereum</p>
                        <p className="text-xs text-white/40">(ETH)</p>
                    </div>
                </div>

                <Sparkline />

                <div className="text-right">
                    <p className="text-base font-semibold text-white">$0.80%</p>
                    <p className="text-xs text-green-400 flex gap2">
                        <span>+0.1</span>
                        <span>+4.00%</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const RightCards = () => (
    <div className="absolute right-[5.56%] top-0 z-10 w-[clamp(220px,23.96vw,345px)]">

        {/* Card Balance */}
        <div className="h-[101.19px] rounded-[20px] bg-gradient-to-r from-[#D32800] to-[#DF792C] p-4 shadow-lg shadow-orange-900/20">
            <div className="flex items-center justify-between">
                <span className="text-xs text-white">Card balance</span>
                <span className="text-xs text-white/80">**** 8562</span>
            </div>

            <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-medium text-white">
                    $18,652.11
                </span>

                <div className="flex -space-x-2">
                    <span className="size-3 rounded-full bg-[#E51B23]" />
                    <span className="size-3 rounded-full bg-[#F59E0B]/80" />
                </div>
            </div>
        </div>

        {/* Bitcoin Card */}
        <div className="mt-[42px] h-[67.13px] rounded-[16px] bg-gradient-to-br from-white/40 via-white/10 to-transparent p-px">
            <div className="flex h-full items-center justify-between rounded-[15px] bg-[#FFFFFF0F] px-3 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-full bg-[#F7931A] text-white">
                        ₿
                    </div>

                    <div>
                        <p className="text-xs text-white">Bitcoin</p>
                        <p className="text-[9px] text-white/40">(BTC)</p>
                    </div>
                </div>

                <Sparkline />

                <div className="text-right">
                    <p className="text-xs text-white">$0.80%</p>
                    <p className="text-[9px] text-green-400">+1.40%</p>
                </div>
            </div>
        </div>
    </div>
);

const HeroVisual = () => {
    return (
        <div className="relative z-10 mt-16 w-full">

            <div className="relative mx-auto w-full max-w-[1440px]">

                {/* Desktop Side Cards */}
                <div className="relative hidden h-[520px] min-[768px]:block">

                    <div className="absolute left-0 top-0 w-full">
                        <div className="translate-y-[100px]">
                            <LeftCards />
                        </div>

                        <div className="translate-y-[100px]">
                            <RightCards />
                        </div>
                    </div>

                    {/* Center Phone */}
                    <div className="relative z-20 mx-auto w-[clamp(260px,29.2vw,420px)]">
                        <Image
                            src="/asset/HeroMobile.png"
                            alt="Cryonix mobile dashboard"
                            width={750}
                            height={900}
                            priority
                            sizes="(min-width: 1440px) 420px, 29.2vw"
                            className="h-auto w-full object-contain"
                        />
                    </div>

                </div>

                {/* Mobile Phone Only */}
                <div className="mx-auto w-full max-w-[750px] min-[768px]:hidden">
                    <Image
                        src="/asset/HeroMobile.png"
                        alt="Cryonix mobile dashboard"
                        width={750}
                        height={900}
                        priority
                        sizes="100vw"
                        className="h-auto w-full object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default HeroVisual;