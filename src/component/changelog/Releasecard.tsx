// import type { Release } from "./changelogData";

import type { Release } from "./changelogdata";

const ReleaseCard = ({ version, sections }: Release) => {
    return (
        <div
            className="rounded-[24px] p-[1.2px] lg:h-[352px]"
            style={{
                backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
                    linear-gradient(138.87deg, rgba(211,40,0,0.3) 0%, rgba(211,40,0,0) 25.72%),
                    linear-gradient(142.28deg, rgba(211,40,0,0) 74.78%, rgba(211,40,0,0.15) 100%)
                `,
            }}
        >
            <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-[23px] bg-[#080503] px-6 py-10 md:px-[52px]">
                {/* Red glow: top-left + bottom-right */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 35% 35% at 12% 0%, rgba(211,40,0,0.4), transparent 75%), radial-gradient(ellipse 35% 30% at 90% 100%, rgba(211,40,0,0.3), transparent 75%)",
                    }}
                    aria-hidden="true"
                />

                <div className="relative">
                    <h2 className="text-[28px] font-normal leading-[1.2] tracking-[-0.5px] text-white">
                        {version}
                    </h2>

                    {sections.map((section) => (
                        <div key={section.title} className="mt-7">
                            <h3 className="text-[20px] font-normal leading-6 text-white">
                                {section.title}
                            </h3>

                            <ul className="mt-4 flex flex-col gap-[15px]">
                                {section.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-base leading-6 text-white/70"
                                    >
                                        <span className="size-[6px] shrink-0 rounded-full bg-white/60" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReleaseCard;