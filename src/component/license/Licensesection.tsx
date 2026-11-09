import type { ReactNode } from "react";

type LicenseSectionProps = {
    title: string;
    lines: string[];
    children?: ReactNode;
};

const LicenseSection = ({ title, lines, children }: LicenseSectionProps) => {
    return (
        <div className="flex flex-col items-start text-left">
            {/* Title -> text gap 32px */}
            <div className="flex flex-col items-start gap-8">
                <h2 className="text-[clamp(32px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.8px] text-white">
                    {title}
                </h2>

                <p className="text-base leading-[1.5] font-normal text-white/80 lg:text-lg">
                    {lines.map((line) => (
                        <span key={line} className="block">
                            {line}
                        </span>
                    ))}
                </p>
            </div>

            {/* Text -> extra content gap 64px */}
            {children && <div className="mt-16 w-full">{children}</div>}
        </div>
    );
};

export default LicenseSection;