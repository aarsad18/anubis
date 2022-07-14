import { Module } from '@nestjs/common';
import { PermitService } from './permit.service';
import { PermitController } from './permit.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { permit } from 'src/entities/permit';
import { admin } from 'src/entities/admin';
import { AuthService } from '../auth/auth.service';
import { LokasiService } from '../lokasi/lokasi.service';
import { location } from 'src/entities/location';
import { lantai } from 'src/entities/lantai';
import { ruangan } from 'src/entities/ruangan';
import { noRack } from 'src/entities/noRack';
import { vendor } from 'src/entities/vendor';
import { VendorService } from '../vendor/vendor.service';
import { teknisiData } from 'src/entities/teknisiData';
import { imageBefore } from 'src/entities/imageBefore';
import { imageProcess } from 'src/entities/imageProcess';
import { imageAfter } from 'src/entities/imageAfter';
import { teknisiAuth } from 'src/entities/teknisiAuth';

@Module({
  imports: [
    SequelizeModule.forFeature([permit, admin, location, lantai, ruangan, noRack, vendor, teknisiData, imageBefore, imageProcess, imageAfter, teknisiAuth]),
  ],
  controllers: [PermitController],
  providers: [PermitService, AuthService, LokasiService, VendorService, teknisiAuth]
})
export class PermitModule {}
