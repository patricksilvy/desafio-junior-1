import Image from "next/image";
import { MdOutlinePets } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PetProps } from "@/utils/pet.type";

interface PetCardProps {
  pet: PetProps;
  openModal: number | null;
  toggleModal: (id: number) => void;
}

export default function PetCard({ pet, openModal, toggleModal }: PetCardProps) {

  function calculateAge(birthDate: Date): string {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    if (age < 1) {
      const months = monthDifference >= 0 ? monthDifference : 12 + monthDifference;
      return `${months} ${months === 1 ? "mês" : "meses"}`;
    }
  
    return `${age} ${age === 1 ? "ano" : "anos"}`;
  }

  return (
    <li className={`relative flex items-center w-full max-w-[275px] rounded-md py-3 my-1 bg-gradient-dark-blue hover:outline-blue-500 hover:outline-2 ${openModal === pet.id ? "outline-2 outline-blue-500" : ""} transition-shadow duration-75 delay-200`}>
      <div className="rounded-full p-3 mx-2 bg-gradient-blue">
        <Image src={pet.type === "cat" ? "/assets/cat.svg" : "/assets/dog.svg"} alt="ícone do animal" className="w-10 h-10" width={15} height={15} />
      </div>

      <div className="flex justify-between flex-1">
        <div>
          <div className="flex items-center gap-2">
            <MdOutlinePets size={22} color="#FFF" />
            <p className="text-white text-lg">{pet.name}</p>
          </div>

          <div className="flex items-center gap-2">
            <LuUser size={22} color="#FFF" />
            <p className="text-white text-lg">{pet.ownerName}</p>
          </div>
        </div>

        <button className="mr-2 cursor-pointer" onClick={() => toggleModal(pet.id)}>
          {openModal === pet.id ? <IoIosArrowUp size={33} color="#FFF" /> : <IoIosArrowDown size={33} color="#FFF" />}
        </button>
      </div>

      {openModal === pet.id && (
        <div className="absolute z-10 left-0 top-full mt-3 w-full rounded-md p-4 border-gradient-blue shadow-blue">
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center w-5">
              <Image
                  src="/assets/dna-icon.svg"
                  alt="DNA Icon"
                  width={11}
                  height={11}
              />
            </div>
            <p className="text-white">Raça: {pet.race}</p>
          </div>
          <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center w-5">
            <Image
                  src="/assets/phone-icon.svg"
                  alt="Phone Icon"
                  width={14}
                  height={14}
              />
          </div>
            <p className="text-white">Telefone: {pet.phone}</p>
          </div>
          <div className="flex items-center gap-1 mb-4">
            <div className="flex items-center w-5">
              <Image
                  src="/assets/calendar-icon.svg"
                  alt="Calendar Icon"
                  width={14}
                  height={14}
              />
            </div>
            <p className="text-white">Idade: {calculateAge(new Date(pet.birthDate))}</p>
          </div>

          {/* Adicione aqui as ações de editar e remover, se necessário */}
        </div>
      )}
    </li>
  );
}