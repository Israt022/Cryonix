import CoinCard from "./CoinCard";
import { coins } from "./coins";

const CoinGrid = () => {
    return (
        // Gap 24px between rows and columns
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coins.map((coin) => (
                <CoinCard key={coin.symbol} {...coin} />
            ))}
        </div>
    );
};

export default CoinGrid;