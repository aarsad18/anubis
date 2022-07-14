import { IsNotEmpty, IsEmail, Length, isNotEmpty } from "class-validator";

export class RegisterTeknisiDto {
    @IsNotEmpty()
    fullName: string

    @IsNotEmpty()
    userName: string

    @IsNotEmpty()
    @Length(9, 15)
    phone: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @Length(8)
    password: string

    roleId: string
    vendorId: string
}
