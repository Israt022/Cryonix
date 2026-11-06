import Image from "next/image";
import HeroContent from "./hero/HeroContent";
import HeroVisual from "./hero/HeroVisual";

const Hero = () => {
    return (
        <section
            id="home"
            className="
                relative isolate -mt-[72px] overflow-hidden
                bg-[#080503] pt-[136px]
                min-[1100px]:-mt-[92px]
                min-[1100px]:min-h-[1225px]
                min-[1100px]:pt-[156px]
                min-[1100px]:bg-[url('/asset/Hero.png')]
                min-[1100px]:bg-no-repeat
                min-[1100px]:bg-[length:100%_100%]
                min-[1100px]:bg-center
            "
        >
            {/* Top Left Glow */}
            <div
                className="pointer-events-none absolute -top-[224px] -left-[622px] z-0 h-[187px] w-[1659px] rotate-[4.85deg] rounded-full bg-[#FC6D01]/40 blur-[200px]"
                aria-hidden="true"
            />

            {/* Top Right Glow */}
            <div
                className="pointer-events-none absolute -top-[451px] left-[457px] z-0 h-[203px] w-[1051px] -rotate-[35.77deg] rounded-full bg-[#FC6D01]/40 blur-[350px]"
                aria-hidden="true"
            />

            <div className="container-custom relative z-10">
                <HeroContent />
            </div>

            <HeroVisual />
            {/* Hero Bottom Blur Image */}
            {/* Hero Bottom Blur Image */}
{/* Hero Bottom Blur Image */}
<div
    className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2
        z-20
        h-[448px]
        w-[2296px]
        -translate-x-1/2
    "
    aria-hidden="true"
>
    <Image
        src="/asset/HeroBlur.png"
        alt=""
        fill
        priority
        sizes="2296px"
        className="object-fill"
    />
</div>
        </section>
    );
};

export default Hero;