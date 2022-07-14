import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/core/auth/access-token.guard';
import { AdminEmailAuthExistGuard } from 'src/core/guards/data-validation/is-admin-email-auth-exist.guard';
import { successResponse } from 'src/utils/response';
import { VendorService } from './vendor.service';

@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll(@Res() res){
    let data = await this.vendorService.findAll()
    return successResponse(res, data);
  }

  @Get('list')
  async findAllVendor(@Res() res){
    let data = await this.vendorService.findAll()
    return successResponse(res, data);
  }
}
