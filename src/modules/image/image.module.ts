import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { MulterModule } from '@nestjs/platform-express';
import { imageBefore } from 'src/entities/imageBefore';
import { imageAfter } from 'src/entities/imageAfter';
import { imageProcess } from 'src/entities/imageProcess';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    imageBefore, imageAfter, imageProcess
  ],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}
