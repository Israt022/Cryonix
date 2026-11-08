import GetStartedButton from "./Getstartedbutton";


const CtaContent = () => {
    return (
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <h2 className="max-w-[800px] bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-[clamp(32px,3.62vw,52px)] font-normal leading-[1.15] tracking-[-1.8px] text-transparent">
                Join The Cryonix Community And Take Control Of Crypto Today
            </h2>

            <p className="mt-8 max-w-[440px] text-[18px] font-normal leading-[1.5] text-white/80">
                Manage, track, and secure your digital assets with an easy and
                reliable platform built for everyone.
            </p>

            <div className="mt-8">
                <GetStartedButton />
            </div>
        </div>
    );
};

export default CtaContent;