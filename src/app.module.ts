import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { imageAfter } from './entities/imageAfter';
import { AuthModule } from './modules/auth/auth.module';
import { admin } from './entities/admin';
import { PermitModule } from './modules/permit/permit.module';
import { permit } from './entities/permit';
import { VendorModule } from './modules/vendor/vendor.module';
import { vendor } from './entities/vendor';
import { imageBefore } from './entities/imageBefore';
import { imageProcess } from './entities/imageProcess';
import { lantai } from './entities/lantai';
import { location } from './entities/location';
import { locationData } from './entities/locationData';
import { noRack } from './entities/noRack';
import { role } from './entities/role';
import { ruangan } from './entities/ruangan';
import { teknisiAuth } from './entities/teknisiAuth';
import { teknisiData } from './entities/teknisiData';
import { token } from './entities/token';
import { TeknisiModule } from './modules/teknisi/teknisi.module';
import { LokasiModule } from './modules/lokasi/lokasi.module';
import { ImageModule } from './modules/image/image.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    SequelizeModule.forRoot({
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      dialect: 'mysql',
      models: [
        admin,
        imageAfter,
        imageBefore,
        imageProcess,
        lantai,
        location,
        locationData,
        noRack,
        permit,
        role,
        ruangan,
        teknisiAuth,
        teknisiData,
        token,
        vendor,
      ],
      sync: { alter: false },
      define: {
          timestamps: false
      },
      timezone: '+07:00', // for writing to database
  }),
    AuthModule,
    PermitModule,
    VendorModule,
    TeknisiModule,
    LokasiModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
