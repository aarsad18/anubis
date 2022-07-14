import { Body, Controller, Get, Param, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/core/auth/access-token.guard';
import { TeknisiEmailExistGuard } from 'src/core/guards/data-validation/is-teknisi-email-exist.guard';
import { TeknisiPhoneExistGuard } from 'src/core/guards/data-validation/is-teknisi-phone-exist.guard';
import { customResponse, successResponse } from 'src/utils/response';
import { LoginTeknisiDto } from './dto/login-teknisi.dto';
import { RegisterTeknisiDto } from './dto/register-teknisi.dto';
import { TeknisiService } from './teknisi.service';
import { Response } from 'express'
import { UpdateAuthDto } from './dto/update-auth.dto';
import { TeknisiEmailAuthExistGuard } from 'src/core/guards/data-validation/is-teknisi-email-auth-exist.guard';
import { AdminEmailAuthExistGuard } from 'src/core/guards/data-validation/is-admin-email-auth-exist.guard';
import { RefreshTokenGuard } from 'src/core/auth/refresh-token.guard';

@Controller('teknisi')
export class TeknisiController {
  constructor(private readonly teknisiService: TeknisiService) {}

  async findAll(@Res() res){
    let data = this.teknisiService.findAll()
    return successResponse(res, data)
  }

  @Post('login')
  async login(@Req() req, @Res() res: Response, @Body() loginTeknisiDto: LoginTeknisiDto) {
    let data = await this.teknisiService.login(req, loginTeknisiDto);
    if (data === 1) {
      return customResponse(res, {}, '01', 200, "NotFound", "Data Akun tidak ditemukan, Silahkan Register dahulu.")
    } else if (data === 2) {
      return customResponse(res, {}, '02', 200, "NotFound", "Password Salah.")
    }
    return successResponse(res, data);
  }

  @UseGuards(TeknisiEmailExistGuard, TeknisiPhoneExistGuard)
  @Post('register')
  async register(@Res() res, @Req() req, @Body() registerTeknisiDto: RegisterTeknisiDto){
    let data = await this.teknisiService.register(registerTeknisiDto)
    return successResponse(res, data);
  }

  @UseGuards(AccessTokenGuard)
  @Get('teknisi-by-vendor/:idVendor')
  async findAllTeknisiByVendor(@Res() res, @Param('idVendor') id: string){
    let data = await this.teknisiService.findAllTeknisiByVendor(id)
    return successResponse(res, data);
  }

  @UseGuards(AccessTokenGuard)
  @Get('waspang-by-vendor/:idVendor')
  async findAllWaspangByVendor(@Res() res, @Param('idVendor') id: string){
    let data = await this.teknisiService.findAllWaspangByVendor(id)
    return successResponse(res, data);
  }

  @UseGuards(AccessTokenGuard, TeknisiEmailAuthExistGuard)
  @Patch()
  async updateTeknisiAuth(@Res() res, @Req() req, @Body() updateAuthDto: UpdateAuthDto) {
    let data = await this.teknisiService.updateAuth(req.dataAkunAuth.id, updateAuthDto)
    return successResponse(res, { status: "ok"})
  }

  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string){
    let data = await this.teknisiService.findOneById(id)
    return successResponse(res, data);
  }

  @UseGuards(RefreshTokenGuard)
  @Get("refresh-token")
  async refreshToken(@Req() req, @Res() res: Response) {
    let data = await this.teknisiService.refreshToken(req, res);
    return successResponse(res, data);
  }
}
