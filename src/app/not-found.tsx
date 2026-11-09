import Cta from "@/component/home/Cta";
import NotFoundContent from "@/component/notfound/NotFoundContent";

const NotFound = () => {
    return (
        <>
            <section
                id="not-found"
                className="relative flex min-h-[calc(100svh-80px)] items-start justify-center overflow-hidden bg-black box-border"
            >
                {/* Top Right Glow (same style as Hero) */}
                <div
                    className="pointer-events-none absolute -top-[300px] -right-[200px] z-0 h-[300px] w-[900px] -rotate-[20deg] rounded-full bg-[#FC6D01]/30 blur-[200px]"
                    aria-hidden="true"
                />

                {/* No container-custom here: the page width is set by the parent */}
                <NotFoundContent />
            </section>

            <Cta />
        </>
    );
};

export default NotFound;