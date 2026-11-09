import Cta from "@/component/home/Cta";
import RestrictedContent from "@/component/restricted/Restrictedcontent";

const RestrictedAccess = () => {
    return (
        <>
            <section
                id="restricted-access"
                className="relative overflow-hidden bg-black box-border"
            >
                {/* Top right glow */}
                <div
                    className="pointer-events-none absolute -top-[300px] -right-[200px] z-0 h-[300px] w-[900px] -rotate-[20deg] rounded-full bg-[#FC6D01]/30 blur-[200px]"
                    aria-hidden="true"
                />

                {/* 64px gap from navbar, no bottom padding (Cta has py-100px) */}
                <div className="container-custom relative z-10 pt-[64px]">
                    <RestrictedContent />
                </div>
            </section>

            <Cta />
        </>
    );
};

export default RestrictedAccess;