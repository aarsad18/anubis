import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { admin } from 'src/entities/admin';

@Module({
  imports: [
    SequelizeModule.forFeature([admin]),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
