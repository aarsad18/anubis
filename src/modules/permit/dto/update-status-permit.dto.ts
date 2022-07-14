import { IsNotEmpty, IsEmail, Length } from "class-validator";

export class UpdateStatusPermitDto {
    
    @IsNotEmpty()
    id: number
    
    @IsNotEmpty()
    status: string

    description: string

}
