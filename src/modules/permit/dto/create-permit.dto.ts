import { IsNotEmpty, IsEmail, Length } from "class-validator";

export class CreatePermitDto {

    // @IsNotEmpty()
    // title: string
    
    @IsNotEmpty()
    adminId: string

    @IsNotEmpty()
    toDo: string

    @IsNotEmpty()
    vendorId: string

    @IsNotEmpty()
    teknisiDataId: string

    @IsNotEmpty()
    waspangId: string

    // @IsNotEmpty()
    description: string

    @IsNotEmpty()
    locationId: number

    @IsNotEmpty()
    lantaiId: number

    @IsNotEmpty()
    ruanganId: number

    @IsNotEmpty()
    noRackId: number
}
