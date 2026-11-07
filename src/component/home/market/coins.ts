export type Coin = {
    symbol: string;
    name: string;
    /** simple-icons slug */
    slug: string;
    /** brand color, hex without # */
    color: string;
    change: string;
    price: string;
};

export const coins: Coin[] = [
    { symbol: "BTC", name: "Bitcoin", slug: "bitcoin", color: "F7931A", change: "10.22 %", price: "$126.61" },
    { symbol: "ETH", name: "Ethereum", slug: "ethereum", color: "FFFFFF", change: "9.73 %", price: "$124.33" },
    { symbol: "USDT", name: "Tether", slug: "tether", color: "26A17B", change: "8.73 %", price: "$146.36" },
    { symbol: "BNB", name: "BNB", slug: "binance", color: "F3BA2F", change: "8.53 %", price: "$144.24" },
    { symbol: "XRP", name: "XRP", slug: "xrp", color: "FFFFFF", change: "54.76 %", price: "$156.44" },
    { symbol: "USDC", name: "USD Coin", slug: "usdc", color: "2775CA", change: "54.76 %", price: "$178.40" },
    { symbol: "BUSD", name: "Bianca USD", slug: "binance", color: "F3BA2F", change: "54.76 %", price: "$140.60" },
    { symbol: "DOGE", name: "Dogecoin", slug: "dogecoin", color: "C2A633", change: "54.76 %", price: "$164.20" },
];