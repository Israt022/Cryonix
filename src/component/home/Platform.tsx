import PlatformHeader from "./platform/PlatformHeader";
import PremiumBenefitsCard from "./platform/PremiumBenefitsCard";
import OpenSecurityCard from "./platform/OpenSecurityCard";
import ProtectionFirstCard from "./platform/ProtectionFirstCard";
import CommunityGovernanceCard from "./platform/CommunityGovernanceCard";
import HighAvailabilityCard from "./platform/HighAvailabilityCard";

const Platform = () => {
    return (
        <section id="platform" className="relative overflow-hidden bg-black pb-[100px]">
            {/* container-custom => 60px left/right at 1440 (content = 1320px) */}
            <div className="container-custom mx-auto">
                <PlatformHeader />

                {/* Row gap 24px */}
                <div className="mt-16 flex flex-col gap-6">
                    {/* Row 1: 2 cards (648px each) */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <PremiumBenefitsCard />
                        <OpenSecurityCard />
                    </div>

                    {/* Row 2: 3 cards (424px each) */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <ProtectionFirstCard />
                        <CommunityGovernanceCard />
                        <HighAvailabilityCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Platform;