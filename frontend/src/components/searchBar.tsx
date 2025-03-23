import Image from "next/image";

export default function SearchBar() {
    return (
        <div className="flex w-full border-2 border-[#404A5C] rounded-lg">
            <Image
            src="/assets/glass.svg"
            alt="Softpet Logo"
            width={48}
            height={48}
            />

            <input
            type="text"
            className="w-full px-2 border-none outline-none bg-transparent text-white font-bold"
            ></input>

            <button className="w-25 m-1 bg-[#404A5C] text-white text-sm font-bold rounded-lg text-center">
            Pesquisar
            </button>
        </div>
    )
}