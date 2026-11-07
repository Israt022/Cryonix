import StatItem from "./StatItem";

const stats = [
    { value: "149+", label: "Organizations" },
    { value: "$4T+", label: "Assets Tracked" },
    { value: "$580B+", label: "Transactions Secured" },
];

const AboutStats = () => {
    return (
        <div className="flex flex-col">
            {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
            ))}
        </div>
    );
};

export default AboutStats;