import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dtos/pets';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetService {
    constructor(private prismaService: PrismaService) {}

    async createPet(data: CreatePetDto) {
        const pet = await this.prismaService.pet.create({ data });

        return pet;
    }

    async listPets() {
        const pets = await this.prismaService.pet.findMany();
        return pets;
    }

    async searchPetsByName(query: string) {
        const pets = await this.prismaService.pet.findMany({
            where: {
                name: {
                    contains: query, 
                    mode: 'insensitive', 
                },
            },
            select: {
                id: true,
                name: true,
            },
        });
    
        return pets;
    }

    async updatePet(id: number, data: CreatePetDto) {
        const updatedPet = await this.prismaService.pet.update({
            where: { id },
            data,
        });
        return updatedPet;
    }
    
    async deletePet(id: number) {
        await this.prismaService.pet.delete({
            where: { id },
        });
        return { message: 'Pet removed successfully!' };
    }
}
