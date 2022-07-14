import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { vendor } from 'src/entities/vendor';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthService } from '../auth/auth.service';
import { admin } from 'src/entities/admin';

@Module({
  imports: [
    SequelizeModule.forFeature([vendor, admin]),
  ],
  controllers: [VendorController],
  providers: [VendorService, AuthService]
})
export class VendorModule {}
