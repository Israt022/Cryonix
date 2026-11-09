export type LicenseSectionType = {
    title: string;
    // each item = one line of text
    lines: string[];
};

export const licenseSections: LicenseSectionType[] = [
    {
        title: "Images",
        lines: [
            "Images in this template are created with AI tools or sourced from free stock resources",
            "Always check the original source license before commercial distribution.",
        ],
    },
];
export type LicenseImage = {
    src: string;
    alt: string;
};

export type LicenseFont = {
    label: string;
    name: string;
    weightClass: string;
};

// Put these 3 images in /public/asset/
export const licenseImages: LicenseImage[] = [
    { src: "/asset/License1.png", alt: "Bitcoin coin on a circuit board" },
    { src: "/asset/License2.png", alt: "Glowing blockchain microchip" },
    { src: "/asset/License3.png", alt: "Golden bitcoin on a processor chip" },
];

export const licenseFonts: LicenseFont[] = [
    { label: "Heading font (medium weight)", name: "Manrope Medium", weightClass: "font-medium" },
    { label: "Body font (regular weight)", name: "Manrope Regular", weightClass: "font-normal" },
];

// each item = one line of text
export const imagesText = [
    "Images in this template are created with AI tools or sourced from free stock resources",
    "Always check the original source license before commercial distribution.",
];

export const fontsText = [
    "This template uses the Manrope typeface from Google Fonts It is free for personal",
    "and commercial use.",
];

export const iconsText = [
    "Icons are sourced from open-source icon libraries They are free to use for",
    "personal and commercial projects.",
];