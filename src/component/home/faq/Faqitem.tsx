import { Minus, Plus } from "lucide-react";

type FaqItemProps = {
    index: number;
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
};

const FaqItem = ({ index, question, answer, isOpen, onToggle }: FaqItemProps) => {
    const number = String(index + 1).padStart(3, "0");
    const Icon = isOpen ? Minus : Plus;

    return (
        <div className="relative border-b border-white/[0.06]">
            {/* Active item: glowing top line + orange tip */}
            {isOpen && (
                <>
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/10 via-white/50 to-white/10"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute left-[52%] top-0 h-[14px] w-[80px] -translate-x-1/2 bg-[linear-gradient(to_bottom,#FF5A1F_0%,#FF8B55_25%,#FFE5D5_48%,#FF8B55_70%, blur-[2px] [clip-path:polygon(0_0,100%_0,50%_100%)]"
                        aria-hidden="true"
                    />

                </>
            )}

            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-6 py-8 lg:grid-cols-[10.6%_41.4%_1fr_auto] lg:gap-x-0 lg:py-[48px]">
                <span className="text-[18px] font-normal text-white/70 lg:col-start-1 lg:row-start-1 lg:text-[20px]">
                    ({number})
                </span>

                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="text-left text-[18px] font-normal text-white after:absolute after:inset-0 after:content-[''] lg:col-start-2 lg:row-start-1 lg:text-[20px]"
                >
                    {question}
                </button>

                <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="pointer-events-none text-white lg:col-start-4 lg:row-start-1 lg:justify-self-end"
                    aria-hidden="true"
                />

                <div
                    id={`faq-panel-${index}`}
                    className={`pointer-events-none col-span-3 grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:col-span-1 lg:col-start-3 lg:row-start-1 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        <p className="max-w-[495px] pt-4 text-base font-normal leading-[1.7] text-white/90 lg:pt-0">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;