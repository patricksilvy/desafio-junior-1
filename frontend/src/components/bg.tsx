import Image from "next/image";

export default function Bg() {
    return (
        <div className="z-0">
            <Image
                src="/assets/ellipse4.png"
                alt="Ellipse 4"
                fill
                draggable="false"
                className="absolute left-0 top-0"
            />
            <Image
                src="/assets/ellipse3.png"
                alt="Ellipse 3"
                fill
                draggable="false"
                className="absolute right-0 bottom-0"
            />
        </div>
    )
}