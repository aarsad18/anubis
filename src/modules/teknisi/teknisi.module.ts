import { Module } from '@nestjs/common';
import { TeknisiService } from './teknisi.service';
import { TeknisiController } from './teknisi.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { teknisiAuth } from 'src/entities/teknisiAuth';
import { teknisiData } from 'src/entities/teknisiData';
import { admin } from 'src/entities/admin';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
    SequelizeModule.forFeature([teknisiAuth, teknisiData, admin]),
  ],
  controllers: [TeknisiController],
  providers: [TeknisiService, AuthService]
})
export class TeknisiModule {}
