import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { CreatePetDto } from './dtos/pets';
import { PetService } from './pet.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';

@Controller('pet')
export class PetController {
    constructor(private petService: PetService) {}
    
    @Get('list')
    async listPets() {
        return this.petService.listPets();
    }

    @Get('search')
    async searchPetsByName(@Param('query') query: string) {
        return this.petService.searchPetsByName(query);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Post('create')
    async createPet(@Body() body: CreatePetDto) {
        return this.petService.createPet(body);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Patch('update/:id')
    async updatePet(@Param('id') id: number, @Body() body: CreatePetDto) {
        return this.petService.updatePet(Number(id), body);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Delete('delete/:id')
    async deletePet(@Param('id') id: number) {
        return this.petService.deletePet(Number(id));
    }
}
