import Image from "next/image";

export default function AddButton() {
    return (
        <button 
          className="flex items-center justify-center gap-2 w-fit h-12 px-4 bg-linear-to-r from-[#00CAFC] to-[#0056E2] rounded-lg "
        >
            <Image
              src="/assets/plus.svg"
              alt="plus"
              width={20}
              height={20}
            />
            <p className="text-white text-sm font-bold">Cadastrar</p>
        </button>
    )
}