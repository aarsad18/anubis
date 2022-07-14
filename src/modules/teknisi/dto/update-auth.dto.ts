import { IsNotEmpty, IsEmail, Length } from "class-validator";

export class UpdateAuthDto {

    @IsNotEmpty()
    playerIds: string
}
