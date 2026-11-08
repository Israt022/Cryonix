import Avatar from "./Avatar";
import type { Testimonial } from "./testimonials";

const TestimonialCard = ({
    name,
    role,
    text,
    date,
    avatar,
    heightClass,
    glow,
}: Testimonial) => {
    return (
        <div
            className={`rounded-[24px] p-[1.2px] ${heightClass}`}
            style={{
                backgroundImage: `
                    linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
                    linear-gradient(138.87deg, rgba(211,40,0,0.25) 0%, rgba(211,40,0,0) 25.72%),
                    linear-gradient(142.28deg, rgba(211,40,0,0) 74.78%, rgba(211,40,0,0.12) 100%)
                `,
            }}
        >
            <div className="relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden rounded-[23px] bg-[linear-gradient(180deg,#0a0605_0%,#0c0705_100%)] px-6 pb-7 pt-[30px]">
                {/* Optional red glow */}
                {glow && (
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{ background: glow }}
                        aria-hidden="true"
                    />
                )}

                <div className="relative">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <Avatar name={name} src={avatar} />
                        <div>
                            <p className="text-base font-medium leading-6 text-white">{name}</p>
                            <p className="text-[13px] leading-5 text-white/70">{role}</p>
                        </div>
                    </div>

                    {/* Review */}
                    <p className="mt-5 text-[15px] font-normal leading-[28px] text-white/80">
                        {text}
                    </p>
                </div>

                {/* Date */}
                <p className="relative text-[14px] text-white/80">{date}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;