const ChangelogHeader = () => {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Same size classes as Hero h1 */}
            <h1 className="text-[42px] font-normal leading-[1.08] tracking-[-2.5px] text-white sm:text-[52px] lg:text-[64px] lg:tracking-[-3px]">
                Changelog
            </h1>

            <p className="mt-8 max-w-[460px] text-[18px] font-normal leading-[1.5] text-white/80">
                Discover the latest features and improvements across the Cryonix
                platform today now
            </p>
        </div>
    );
};

export default ChangelogHeader;