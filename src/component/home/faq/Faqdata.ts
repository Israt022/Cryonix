export type FaqType = {
    question: string;
    answer: string;
};

export const faqs: FaqType[] = [
    {
        question: "How does Cryonix work?",
        answer:
            "Connect your wallets and exchanges, and Cryonix tracks your balances, transactions, and performance in one dashboard, with AI-driven insights to help you manage and grow your assets.",
    },
    {
        question: "Is my crypto safe on Cryonix?",
        answer:
            "Cryonix uses modern encryption, secure infrastructure, and continuous monitoring to help protect wallets, transactions, and user data from unauthorized access.",
    },
    {
        question: "Can I use Cryonix on any device?",
        answer:
            "Yes. Cryonix works on desktop, tablet, and mobile, and your data stays in sync across every device you sign in on.",
    },
    {
        question: "Which blockchains are supported?",
        answer:
            "Cryonix supports major networks including Bitcoin and Ethereum, along with popular EVM-compatible chains. More networks are added regularly.",
    },
];