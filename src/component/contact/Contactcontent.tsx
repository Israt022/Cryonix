import ContactForm from "./Contactform";

const ContactContent = () => {
    return (
        // header -> form gap 100px
        <div className="relative z-10 flex flex-col gap-[100px]">
            {/* Header: title -> description gap 32px */}
            <div className="flex flex-col items-center gap-8 text-center">
                <h1 className="text-[42px] leading-[1.08] font-normal tracking-[-2.5px] text-white sm:text-[52px] lg:text-[64px] lg:tracking-[-3px]">
                    Get in — touch with us
                </h1>

                <p className="max-w-[560px] text-base leading-[1.5] font-normal text-white/80 lg:text-lg">
                    We’re here to help! Whether you have a question about our services,
                    need assistance with your account, or want to
                </p>
            </div>

            {/* 1440 view: 166px left/right margin (1440 - 2*166 = 1108) */}
            <div className="mx-auto w-full max-w-[1108px]">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactContent;