import FaqHeader from "./faq/Faqheader";
import FaqList from "./faq/Faqlist";


const Faq = () => {
    return (
        <section
            id="faq"
            className="relative isolate overflow-hidden bg-black"
        >
            {/* Center orange glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D32800]/30 blur-[180px]"
                aria-hidden="true"
            />

            <div className="container-custom relative z-10">
                <FaqHeader />
                <FaqList />
            </div>
        </section>
    );
};

export default Faq;