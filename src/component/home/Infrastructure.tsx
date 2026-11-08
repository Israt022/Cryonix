import InfrastructureHeader from "./infrastructure/InfrastructureHeader";
import InfraCard from "./infrastructure/InfraCard";
import { infraCards } from "./infrastructure/infraCards";

const Infrastructure = () => {
    return (
        <section id="infrastructure" className="relative overflow-hidden bg-black pb-[100px]">
            {/* container-custom => 60px left/right at 1440 (content = 1320px) */}
            <div className="container-custom mx-auto">
                <InfrastructureHeader />

                {/* 3 cards (424px each at 1440), gap 24px */}
                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {infraCards.map((card) => (
                        <InfraCard key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;