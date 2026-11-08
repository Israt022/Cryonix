import SecurityContent from "./security/SecurityContent";
import DashboardPanel from "./security/DashboardPanel";

const Security = () => {
    return (
        <section
            id="security"
            className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,#140707_0%,#0a0404_55%,#090404_100%)] py-10 lg:[py-0]"
        >
            {/* container-custom => 60px left/right at 1440 (content = 1320px) */}
            <div className="container-custom mx-auto">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-6">
                    <SecurityContent />

                    {/* Panel (616px wide at 1440), aligned to the right edge */}
                    <div className="relative w-full max-w-[616px] lg:justify-self-end lg:my-[60px]">
                        {/* Red glow under the panel */}
                        <div
                            className="pointer-events-none absolute left-[35%] top-full h-[60px] w-[240px] -translate-x-1/2 rounded-full bg-[#D32800]/70 blur-[40px]"
                            aria-hidden="true"
                        />
                        <DashboardPanel />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;