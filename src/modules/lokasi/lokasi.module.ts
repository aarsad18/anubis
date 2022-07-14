import { Module } from '@nestjs/common';
import { LokasiService } from './lokasi.service';
import { LokasiController } from './lokasi.controller';
import { location } from 'src/entities/location';
import { SequelizeModule } from '@nestjs/sequelize';
import { admin } from 'src/entities/admin';
import { AuthService } from '../auth/auth.service';
import { ruangan } from 'src/entities/ruangan';
import { lantai } from 'src/entities/lantai';
import { noRack } from 'src/entities/noRack';

@Module({
  imports: [
    SequelizeModule.forFeature([location, admin, ruangan, lantai, noRack]),
  ],
  controllers: [LokasiController],
  providers: [LokasiService, AuthService]
})
export class LokasiModule {}
