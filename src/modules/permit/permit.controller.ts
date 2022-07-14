import { Body, Controller, Get, Param, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/core/auth/access-token.guard';
import { AdminEmailAuthExistGuard } from 'src/core/guards/data-validation/is-admin-email-auth-exist.guard';
import { CreatePermitDto } from './dto/create-permit.dto';
import { PermitService } from './permit.service';
import { Response } from 'express';
import { successResponse } from 'src/utils/response';
import { LokasiService } from '../lokasi/lokasi.service';
import * as moment from 'moment';
import * as fs from 'fs';
import { v4 as uuid } from 'uuid';
import { VendorService } from '../vendor/vendor.service';
import { UpdateStatusPermitDto } from './dto/update-status-permit.dto';
import { UpdateStatusSecurityPermitDto } from './dto/update-status-security-permit.dto';
import { UploadImageDto } from './dto/upload-image.dto';

@UseGuards(AccessTokenGuard)
@Controller('permit')
export class PermitController {
  constructor(private readonly permitService: PermitService, private readonly lokasiService: LokasiService, private readonly vendorService: VendorService) { }

  @Get()
  async findAllPermit(@Res() res){
    let data = await this.permitService.findAllPermit()
    return successResponse(res, data)
  }

  @Get('/:id')
  async findOnePermit(@Res() res, @Param('id') id: number) {
    let data = await this.permitService.findOne(id)
    return successResponse(res, data)
  }

  @Post()
  async createPermit(@Req() req, @Res() res: Response, @Body() createPermitDto: CreatePermitDto) {
    let nomor = "001";
    let latestPermit = await this.permitService.findOneLatest();
    if (latestPermit != null) {
      nomor = (latestPermit.id + 1).toString().padStart(3, "0")
    }

    let lokasi = await this.lokasiService.findOneLocation(createPermitDto.locationId)
    let tahun = moment().format('YYYY')

    let code = `${nomor}/${lokasi.name.replace(/\s/g, "/")}/${tahun}`

    let vendor = await this.vendorService.findOne(createPermitDto.vendorId)

    let vendorCode = vendor.name.slice(0, 5).replace(/\s/g, "")

    let nde = `${vendorCode}/PMT${nomor}/${createPermitDto.teknisiDataId.slice(0, 5)}-${createPermitDto.waspangId.slice(0, 5)}`

    let simaru = `SIMARU/${lokasi.name.replace(/\s/g, "/")}/${tahun}`

    let data = await this.permitService.create(vendor.name, code, nde, simaru, createPermitDto)

    return successResponse(res, data)
  }

  @Patch('/status')
  async updateStatusPermit(@Res() res, @Body() updateStatusPermitDto: UpdateStatusPermitDto) {
    let data = await this.permitService.updateStatusPermit(updateStatusPermitDto)
    if (data != null) {
      return successResponse(res, { "status": "ok" })
    }
  }

  @Patch('/status-security')
  async updateStatusSecurityPermit(@Res() res, @Body() updateStatusSecurityPermitDto: UpdateStatusSecurityPermitDto) {
    let data = await this.permitService.updateStatusSecurityPermit(updateStatusSecurityPermitDto)
    if (data != null) {
      return successResponse(res, { "status": "ok" })
    }
  }

  @Post('/upload/image-before/:id')
  async uploadImageBefore(@Res() res, @Param('id') id: number, @Body() uploadImageDto: UploadImageDto) {

    const buffer = Buffer.from(uploadImageDto.image, "base64");

    let filename = `${uuid()}.jpg`
    let path = `./public/images/${filename}`;

    fs.writeFileSync(path, buffer);

    uploadImageDto.image = `${process.env.BASE_URL}/images/${filename}`

    await this.permitService.uploadImageBefore(uploadImageDto).then(async (result) => {
      await this.permitService.updatePermitImageBefore(result.id, id)
    })

    return successResponse(res, {status: "ok", image: uploadImageDto.image, description: uploadImageDto.description})
  }

  @Post('/upload/image-process/:id')
  async uploadImageProcess(@Res() res, @Param('id') id: number, @Body() uploadImageDto: UploadImageDto) {

    const buffer = Buffer.from(uploadImageDto.image, "base64");

    let filename = `${uuid()}.jpg`
    let path = `./public/images/${filename}`;

    fs.writeFileSync(path, buffer);

    uploadImageDto.image = `${process.env.BASE_URL}/images/${filename}`

    await this.permitService.uploadImageProcess(uploadImageDto).then(async (result) => {
      await this.permitService.updatePermitImageProcess(result.id, id)
    })

    return successResponse(res, {status: "ok", image: uploadImageDto.image, description: uploadImageDto.description})
  }

  @Post('/upload/image-after/:id')
  async uploadImageAfter(@Res() res, @Param('id') id: number, @Body() uploadImageDto: UploadImageDto) {

    const buffer = Buffer.from(uploadImageDto.image, "base64");

    let filename = `${uuid()}.jpg`
    let path = `./public/images/${filename}`;

    fs.writeFileSync(path, buffer);

    uploadImageDto.image = `${process.env.BASE_URL}/images/${filename}`

    await this.permitService.uploadImageAfter(uploadImageDto).then(async (result) => {
      await this.permitService.updatePermitImageAfter(result.id, id)
    })

    return successResponse(res, {status: "ok", image: uploadImageDto.image, description: uploadImageDto.description})
  }
}
