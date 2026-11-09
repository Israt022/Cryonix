const Loading = () => {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
            {/* Background Glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D32800]/15 blur-[120px]"
                aria-hidden="true"
            />

            {/* Loader */}
            <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="relative flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-white/10" />

                    <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#D32800]" />

                    <span className="text-xl font-semibold tracking-tight text-white">
                        C
                    </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-medium tracking-[0.2em] text-white">
                        CRYONIX
                    </p>

                    <p className="text-xs text-white/40">
                        Preparing your experience...
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Loading;