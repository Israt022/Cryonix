// import CtaBackground from "./cta/Ctabackground";
// import CtaContent from "./cta/Ctacontent";

import CtaBackground from "./cta/Ctabackground";
import CtaContent from "./cta/Ctacontent";

// const Cta = () => {
//     return (
//         <section id="cta" className="relative overflow-hidden bg-black py-[100px]">
//             <div className="container-custom">
//                 {/* Gradient border */}
//                 <div className="rounded-[24px] bg-gradient-to-br from-white/20 via-white/5 to-[#D32800]/30 p-px">
//                     <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[23px] bg-[#080503] py-16 min-[1100px]:min-h-[540px]">
//                         <CtaBackground />
//                         <CtaContent />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Cta;


const Cta = () => {
    return (
        <section id="cta" className="relative overflow-hidden bg-black py-[100px]">
            <div className="container-custom">
                {/* Gradient border */}
                <div className="rounded-[20px] bg-gradient-to-br from-white/20 via-white/5 to-[#D32800]/30 p-px">
                    <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[19px] bg-[#080503] py-16 min-[1100px]:min-h-[540px]">
                        <CtaBackground />
                        <CtaContent />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;