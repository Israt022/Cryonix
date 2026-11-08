'use client'
import { useState } from "react";

type AvatarProps = {
    name: string;
    src?: string;
};

/** 40px round avatar. Falls back to initials if the image is missing. */
const Avatar = ({ name, src }: AvatarProps) => {
    const [imageError, setImageError] = useState(false);

    const initials = name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2);

    return (
        <div className="size-10 shrink-0 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-[#DF792C] to-[#7a2a10]">
            {src && !imageError ? (
                <img
                    src={src}
                    alt={name}
                    width={40}
                    height={40}
                    className="size-full object-cover"
                    loading="lazy"
                    onError={() => setImageError(true)}
                />
            ) : (
                <span className="flex size-full items-center justify-center text-[13px] font-medium text-white">
                    {initials}
                </span>
            )}
        </div>
    );
};

export default Avatar;