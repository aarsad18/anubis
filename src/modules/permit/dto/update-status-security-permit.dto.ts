import { IsNotEmpty, IsEmail, Length } from "class-validator";

export class UpdateStatusSecurityPermitDto {
    
    @IsNotEmpty()
    id: number
    
    @IsNotEmpty()
    statusSecurity: string

    description: string
}
