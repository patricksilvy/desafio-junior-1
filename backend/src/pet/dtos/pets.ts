import { IsNotEmpty, IsString, IsIn, IsPhoneNumber } from "class-validator";

export class CreatePetDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    birthDate: string;

    @IsNotEmpty()
    @IsIn(['dog', 'cat'])
    type: 'dog' | 'cat';

    @IsNotEmpty()
    race: string;

    @IsNotEmpty()
    owner: string;

    @IsNotEmpty()
    @IsPhoneNumber('BR')
    phoneNumber: string;
}
