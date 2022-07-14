import { Controller, Get, Param, Res, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/core/auth/access-token.guard';
import { AdminEmailAuthExistGuard } from 'src/core/guards/data-validation/is-admin-email-auth-exist.guard';
import { successResponse } from 'src/utils/response';
import { LokasiService } from './lokasi.service';

@UseGuards(AccessTokenGuard)
@Controller('lokasi')
export class LokasiController {
  constructor(private readonly lokasiService: LokasiService) {}

  @Get()
  async findAllLocation(@Res() res) {
    let data = await this.lokasiService.findAllLocation()
    return successResponse(res, data)
  }

  @Get('lantai/:locationId')
  async findAllLantaiByLocation(@Res() res, @Param('locationId') locationId: string) {
    let data = await this.lokasiService.findAllLantaiByLocation(locationId)
    return successResponse(res, data)
  }

  @Get('ruangan/:locationId/:lantaiId')
  async findAllRuanganByLocationAndLantai(@Res() res, @Param('locationId') locationId: string, @Param('lantaiId') lantaiId: string) {
    let data = await this.lokasiService.findAllRuanganByLocationAndLantai(locationId, lantaiId)
    return successResponse(res, data)
  }

  @Get('no-rack/:locationId/:lantaiId/:ruanganId')
  async findAllNoRackByLocationAndLantaiAndRuangan(@Res() res, @Param('locationId') locationId: string, @Param('lantaiId') lantaiId: string, @Param('ruanganId') ruanganId: string) {
    let data = await this.lokasiService.findAllNoRackByLocationAndLantaiAndRuangan(locationId, lantaiId, ruanganId)
    return successResponse(res, data)
  }

}
