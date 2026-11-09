import ChangelogContent from "@/component/changelog/Changelogcontent";
import Cta from "@/component/home/Cta";

const ChangelogPage = () => {
    return (
        <>
            <section id="changelog" className="relative overflow-hidden bg-black">
                {/* Top Glow (same style as Hero / Not Found) */}
                <div
                    className="pointer-events-none absolute -top-[300px] left-[45%] z-0 h-[300px] w-[1000px] -translate-x-1/2 rounded-full bg-[#FC6D01]/30 blur-[200px]"
                    aria-hidden="true"
                />

                {/* container-custom => 60px left/right at 1440. pt-[64px] = gap from navbar.
                    No bottom padding: Cta already has py-[100px]. */}
                <div className="container-custom relative z-10 pt-[64px]">
                    <ChangelogContent />
                </div>
            </section>

            <Cta />
        </>
    );
};

export default ChangelogPage;