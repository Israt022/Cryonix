export type Testimonial = {
    name: string;
    role: string;
    text: string;
    date: string;
    /** Image path inside /public, e.g. /asset/avatars/alex-morgan.png */
    avatar?: string;
    /** Card height on desktop (full class so Tailwind can detect it) */
    heightClass: string;
    /** CSS background (radial gradient) used for an optional red glow */
    glow?: string;
};

// 3 columns, each with its own card heights (like the design)
export const testimonialColumns: Testimonial[][] = [
    [
        {
            name: "Alex Morgan",
            role: "Crypto Trader",
            text: "Cryonix makes crypto management simple intuitive and secure with a clean interface smooth performance and tools designed for everyday digital asset control.",
            date: "Jan 8, 2026",
            avatar: "/asset/avatars/alex-morgan.png",
            heightClass: "lg:h-[294px]",
        },
        {
            name: "Emily Stone",
            role: "Web3 Enthusiast",
            text: "Clean layout strong features and smooth performance create a great crypto platform experience for beginners and professionals worldwide with confidence and trust.",
            date: "Jan 22, 2026",
            avatar: "/asset/avatars/emily-stone.png",
            heightClass: "lg:h-[292px]",
        },
    ],
    [
        {
            name: "Sofia Carter",
            role: "Product Designer",
            text: "A well designed crypto platform balancing usability security and performance for long term success across global markets.",
            date: "Jan 12, 2026",
            avatar: "/asset/avatars/sofia-carter.png",
            heightClass: "lg:h-[238px]",
            glow: "radial-gradient(ellipse 55% 70% at 100% 100%, rgba(211,40,0,0.4), transparent 75%)",
        },
        {
            name: "Ryan Walker",
            role: "Startup Founder",
            text: "Security focused platform with modern design and excellent usability for managing digital assets confidently and efficiently every single day across multiple blockchains and wallets with full control for users globally.",
            date: "Jan 27, 2026",
            avatar: "/asset/avatars/ryan-walker.png",
            heightClass: "lg:h-[350px]",
        },
    ],
    [
        {
            name: "Daniel Ross",
            role: "Blockchain Analyst",
            text: "The dashboard feels fast reliable and well designed making everyday crypto management easier safer and more enjoyable for all types of users around the world today with confidence always on.",
            date: "Jan 18, 2026",
            avatar: "/asset/avatars/daniel-ross.png",
            heightClass: "lg:h-[296px]",
        },
        {
            name: "Liam Turner",
            role: "UI/UX Designer",
            text: "Easy to use platform that feels safe fast reliable and perfect for daily crypto activity everywhere across devices and networks.",
            date: "Feb 2, 2026",
            avatar: "/asset/avatars/liam-turner.png",
            heightClass: "lg:h-[292px]",
        },
    ],
];