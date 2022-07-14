import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { customResponse, successResponse } from 'src/utils/response';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterAkunDto } from './dto/register-akun.dto';
import { AdminEmailExistGuard } from 'src/core/guards/data-validation/is-admin-email-exist.guard';
import { AdminPhoneExistGuard } from 'src/core/guards/data-validation/is-admin-phone-exist.guard';
import { LoginAkunDto } from './dto/login-akun.dto';
import { RefreshTokenGuard } from 'src/core/auth/refresh-token.guard';
import { AdminEmailAuthExistGuard } from 'src/core/guards/data-validation/is-admin-email-auth-exist.guard';
import { AccessTokenGuard } from 'src/core/auth/access-token.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // @UseGuards(AdminEmailExistGuard, AdminPhoneExistGuard)
  @Post('register')
  async register(@Req() req, @Res() res: Response, @Body() registerAkunDto: RegisterAkunDto) {
    let emailExist = await this.authService.findOneByEmail(registerAkunDto.email);
    if (emailExist) {
      return customResponse(res, {}, '01', 200, "DuplicateEmail", "Email yang anda pakai sudah terdaftar.")
    }

    let data = await this.authService.register(req, registerAkunDto);

    return successResponse(res, data);
  }

  @Post('login')
  async login(@Req() req, @Res() res: Response, @Body() loginAkunDto: LoginAkunDto) {
    let data = await this.authService.login(req, loginAkunDto);
    if (data === 1) {
      return customResponse(res, {}, '01', 200, "NotFound", "Data Akun tidak ditemukan, Silahkan Register dahulu.")
    } else if (data === 2) {
      return customResponse(res, {}, '02', 200, "NotFound", "Password Salah.")
    }
    return successResponse(res, data);
  }

  @UseGuards(RefreshTokenGuard)
  @Get("refresh-token")
  async refreshToken(@Req() req, @Res() res: Response) {
    let data = await this.authService.refreshToken(req, res);
    return successResponse(res, data);
  }

  @UseGuards(AccessTokenGuard)
  @Get("admin/:id")
  async findOneById(@Res() res: Response, @Param('id') id: string) {
    let data = await this.authService.findOneById(id);
    if (data) {
      return successResponse(res, data);
    } else {
      return customResponse(res, {}, '02', 200, "NotFound", "Admin tidak ditemukan.")
    }
  }
}
