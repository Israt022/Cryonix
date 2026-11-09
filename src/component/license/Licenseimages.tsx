import Image from "next/image";
import { licenseImages } from "./licensedata";

const LicenseImages = () => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {licenseImages.map((img) => (
                <div
                    key={img.src}
                    className="relative aspect-[424/474] w-full overflow-hidden rounded-[32px]"
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1440px) 424px, (min-width: 640px) 33vw, 100vw"
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default LicenseImages;