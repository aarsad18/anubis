import { IsNotEmpty, IsEmail, Length } from "class-validator";

export class LoginTeknisiDto {

    // @IsNotEmpty()
    // @IsEmail()
    // email: string

    @IsNotEmpty()
    userName: string

    @IsNotEmpty()
    @Length(8)
    password: string
}
