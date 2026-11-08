"use client";

import { useState } from "react";
import { faqs } from "./Faqdata";
import FaqItem from "./Faqitem";

const FaqList = () => {
    // 2nd item open by default, like the design
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    return (
        <div className="mt-16 lg:mt-20">
            {faqs.map((faq, i) => (
                <FaqItem
                    key={faq.question}
                    index={i}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>
    );
};

export default FaqList;