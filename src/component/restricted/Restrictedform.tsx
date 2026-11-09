"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const RestrictedForm = () => {
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: verify password here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                aria-label="Password"
                className="h-[60px] w-full max-w-[360px] rounded-[60px] border border-white/40 bg-transparent px-6 text-sm font-normal text-white outline-none transition-colors duration-200 placeholder:text-white/80 focus:border-white"
            />

            <button
                type="submit"
                className="inline-flex h-[60px] w-full max-w-[360px] shrink-0 items-center justify-center gap-1 rounded-[60px] border border-white/30 bg-[radial-gradient(ellipse_at_bottom,#E9917D_0%,#D32800_75%)] px-8 py-4 text-lg font-normal text-white transition-all duration-200 hover:brightness-110 sm:w-[183px]"
            >
                Submit
                <ArrowRight size={14.58} strokeWidth={2} className="shrink-0" />
            </button>
        </form>
    );
};

export default RestrictedForm;