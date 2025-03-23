"use client";

import { useEffect, useState } from "react";

import AddButton from "@/components/addButton";
import SearchBar from "@/components/searchBar";
import Logo from "@/components/logo";
import Bg from "@/components/bg";
import PetCard from "@/components/PetCard";
import { PetProps } from "@/utils/pet.type";

export default function Home() {
  const [pets, setPets] = useState<PetProps[]>([]);
  const [openModal, setOpenModal] = useState<number | null>(null);

  const toggleModal = (id: number) => {
    setOpenModal(openModal === id ? null : id);
  };

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch('https://softpet-production.up.railway.app/pet/list'); // substitua pela URL da sua API
        if (!response.ok) {
          throw new Error('Erro ao buscar os pets');
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPets();
  }, []);



  return (
    <>
      <div className="flex flex-col w-screen py-13 px-14 z-10">
        <Logo/>

        <div className="flex justify-center items-center gap-6 z-10 mt-6">
          <SearchBar />
          <AddButton />
        </div>

        <ul className="flex flex-wrap gap-4 justify-center z-10  mt-6">
          {pets.map((pet) => (
            <PetCard 
              key={pet.id} 
              pet={pet} 
              openModal={openModal} 
              toggleModal={toggleModal} 
            />
          ))}
        </ul>
      <Bg />
      </div>

    </>
  );
}
