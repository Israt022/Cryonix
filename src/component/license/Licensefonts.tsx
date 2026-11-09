import { licenseFonts } from "./licensedata";

const LicenseFonts = () => {
    return (
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-x-16">
            {licenseFonts.map((font) => (
                <div key={font.name} className="flex flex-col gap-4">
                    <p className="text-base font-normal text-white lg:text-lg">
                        {font.label}
                    </p>
                    <p className={`text-sm text-white/80 lg:text-base ${font.weightClass}`}>
                        {font.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default LicenseFonts;