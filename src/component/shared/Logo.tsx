import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    size?: number;
};

const Logo = ({ size = 24 }: LogoProps) => {
    return (
        <Link
            href="/"
            className="inline-flex w-fit shrink-0 items-center gap-2"
        >
            <Image
                src="/asset/Logo.svg"
                alt="Cryonix logo"
                width={size}
                height={size}
                className="shrink-0 rounded-[7px] object-contain"
                priority
            />

            <span
                className="font-semibold tracking-tight"
                style={{ fontSize: size }}
            >
                Cryonix
            </span>
        </Link>
    );
};

export default Logo;
