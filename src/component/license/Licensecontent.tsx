import { fontsText, iconsText, imagesText } from "./licensedata";
import LicenseFonts from "./Licensefonts";
import LicenseImages from "./Licenseimages";
import LicenseSection from "./Licensesection";


const LicenseContent = () => {
    return (
        // header -> section and section -> section gap 100px
        <div className="relative z-10 flex flex-col gap-[100px]">
            {/* Header */}
            <div className="flex flex-col items-center gap-8 text-center">
                <h1 className="text-[42px] leading-[1.08] font-normal tracking-[-2.5px] text-white sm:text-[52px] lg:text-[64px] lg:tracking-[-3px]">
                    License
                </h1>

                <p className="max-w-[400px] text-base leading-[1.5] font-normal text-white/80 lg:text-lg">
                    All assets in this template are free for personal and commercial
                    use.
                </p>
            </div>

            <LicenseSection title="Images" lines={imagesText}>
                <LicenseImages />
            </LicenseSection>

            <LicenseSection title="Fonts" lines={fontsText}>
                <LicenseFonts />
            </LicenseSection>

            <LicenseSection title="Icons" lines={iconsText} />
        </div>
    );
};

export default LicenseContent;