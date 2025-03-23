import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/assets/logo.svg"
            alt="Softpet Logo"
            width={182}
            height={48}
            className="z-10"
        />
    )
}