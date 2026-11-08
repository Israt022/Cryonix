import { EllipsisVertical, Hexagon, ShieldCheck } from "lucide-react";
import type { InfraCardProps } from "./InfraCard";

export const infraCards: InfraCardProps[] = [
    {
        title: "On-Chain Execution",
        description: "All core operations run directly on blockchain networks.",
        icon: Hexagon,
        glow: "radial-gradient(ellipse 45% 40% at 85% 100%, rgba(211,40,0,0.45), transparent 75%), radial-gradient(ellipse 40% 30% at 0% 0%, rgba(211,40,0,0.08), transparent 100%)",
    },
    {
        title: "Multi-Standard Tokens",
        description: "Supports widely adopted token formats across major ecosystems.",
        icon: ShieldCheck,
        glow: "radial-gradient(ellipse 55% 60% at 90% 10%, rgba(120,70,50,0.35), transparent 75%), radial-gradient(ellipse 40% 35% at 100% 100%, rgba(211,40,0,0.12), transparent 100%)",
    },
    {
        title: "Cross-Chain Support",
        description: "Built to interact across multiple blockchain environments.",
        icon: EllipsisVertical,
        glow: "radial-gradient(ellipse 55% 40% at 40% 0%, rgba(211,40,0,0.4), transparent 75%)",
    },
];