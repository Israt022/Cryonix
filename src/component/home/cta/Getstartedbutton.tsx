import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Same button as the Hero - use it in HeroContent too
const GetStartedButton = () => {
    return (
        <Link
            href="/register"
            className="inline-flex h-[60px] w-[183px] items-center justify-center gap-1 rounded-[60px] border border-white/30 bg-[radial-gradient(ellipse_at_bottom,#E9917D_0%,#D32800_75%)] px-8 py-4 text-lg font-normal text-white transition-all duration-200 hover:brightness-110"
        >
            Get Started
            <ArrowRight size={14.58} strokeWidth={2} className="shrink-0" />
        </Link>
    );
};

export default GetStartedButton;