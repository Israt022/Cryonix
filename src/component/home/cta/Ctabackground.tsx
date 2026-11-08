// // Two diagonal glowing bands (top-right + bottom-left), like the design.
// // Each band = soft white edge + orange core, blurred.
// const CtaBackground = () => {
//     return (
//         <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
//             {/* Bottom-left band */}
//             <div className="absolute -bottom-[10%] -left-[12%] h-[200px] w-[78%] rotate-[24deg] rounded-full bg-[#F7D9CC] blur-[60px]" />
//             <div className="absolute bottom-[2%] left-[2%] h-[170px] w-[62%] rotate-[24deg] rounded-full bg-[#D32800] blur-[70px]" />
//             <div className="absolute bottom-[24%] -left-[8%] h-[90px] w-[40%] rotate-[24deg] rounded-full bg-[#FC6D01]/70 blur-[60px]" />

//             {/* Top-right band */}
//             <div className="absolute -right-[12%] -top-[2%] h-[200px] w-[70%] rotate-[24deg] rounded-full bg-[#F7D9CC] blur-[60px]" />
//             <div className="absolute left-[44%] -top-[8%] h-[150px] w-[44%] rotate-[24deg] rounded-full bg-[#D32800] blur-[70px]" />
//             <div className="absolute right-[2%] top-[14%] h-[90px] w-[36%] rotate-[24deg] rounded-full bg-[#FC6D01]/70 blur-[60px]" />

//             {/* Dark center so the text stays readable */}
//             <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#080503]/80 blur-[80px]" />
//         </div>
//     );
// };

// export default CtaBackground;
import Image from "next/image";

// Exact background from the design: /public/asset/CtaBg.png
const CtaBackground = () => {
    return (
        <Image
            src="/asset/CtaBg.png"
            alt=""
            fill
            sizes="(min-width: 1440px) 1320px, 100vw"
            className="pointer-events-none object-cover object-center"
            aria-hidden="true"
        />
    );
};

export default CtaBackground;