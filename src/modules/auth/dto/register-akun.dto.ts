import { IsNotEmpty, IsEmail, Length, isNotEmpty } from "class-validator";

export class RegisterAkunDto {
    @IsNotEmpty()
    userName: string

    // @Length(9, 15)
    phone: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @Length(8)
    password: string

    roleId: string
}
