import FeaturesHeader from "./features/FeaturesHeader";
import PaymentTrackingCard from "./features/PaymentTrackingCard";
import TransactionMonitoringCard from "./features/TransactionMonitoringCard";
import SecureTransferCard from "./features/SecureTransferCard";

const Features = () => {
    return (
        <section id="features" className="relative overflow-hidden bg-black py-[100px]">
            {/* container-custom => 60px left/right at 1440 */}
            <div className="container-custom mx-auto ">
                <FeaturesHeader />

                {/* Row gap 24px */}
                <div className="mt-16 flex flex-col gap-6">
                    <PaymentTrackingCard />

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <TransactionMonitoringCard />
                        <SecureTransferCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;