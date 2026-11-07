import MarketHeader from "./market/MarketHeader";
import CoinGrid from "./market/CoinGrid";

const MarketAccess = () => {
    return (
        <section id="market" className="relative overflow-hidden bg-black pb-[100px]">
            {/* container-custom => 60px left/right at 1440 */}
            <div className="container-custom mx-auto">
                <MarketHeader />
                <CoinGrid />
            </div>
        </section>
    );
};

export default MarketAccess;