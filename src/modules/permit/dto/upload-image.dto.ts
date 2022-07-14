import { IsNotEmpty, IsEmail, Length } from "class-validator";

export class UploadImageDto {
    
    @IsNotEmpty()
    image: string

    @IsNotEmpty()
    description: string

}
