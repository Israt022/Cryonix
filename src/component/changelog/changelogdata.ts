export type ReleaseSection = {
    title: string;
    items: string[];
};

export type Release = {
    version: string;
    sections: ReleaseSection[];
};

export const releases: Release[] = [
    {
        version: "Version 1.0",
        sections: [
            {
                title: "Platform Updates",
                items: [
                    "Improved dashboard speed and responsiveness.",
                    "Enhanced wallet security and encryption.",
                    "Added support for popular cryptocurrencies.",
                    "Fixed minor interface and stability issues.",
                ],
            },
        ],
    },
];