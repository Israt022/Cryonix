import RestrictedForm from "./Restrictedform";

const RestrictedContent = () => {
    return (
        <div className="relative z-10 flex flex-col items-center text-center">
            {/* Header -> description gap 32px */}
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-[42px] leading-[1.08] font-normal tracking-[-2.5px] text-white sm:text-[52px] lg:text-[64px] lg:tracking-[-3px]">
                    Restricted Access
                </h1>

                <p className="max-w-[620px] text-base leading-[1.5] font-normal text-white/80 lg:text-lg">
                    Enter your password to access this protected page securely right now.
                </p>
            </div>

            {/* Header + description -> input gap 100px */}
            <div className="mt-[100px] w-full">
                <RestrictedForm />
            </div>
        </div>
    );
};

export default RestrictedContent;