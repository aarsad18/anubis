import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { successResponse } from 'src/utils/response';
import { multerOptions } from 'src/utils/multerConfig';
import { join } from 'path';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) { }

  @Post('upload-before/:id')
  @UseInterceptors(
    FileInterceptor('image', multerOptions))
  async uploadedFile(@Res() res, @UploadedFile() file) {

    // {
    //   fieldname: 'image',
    //   originalname: 'retail-klik.png',
    //   encoding: '7bit',
    //   mimetype: 'image/png',
    //   destination: './uploads',
    //   filename: 'eed5372e-b753-493f-936c-1a192a243d7f.png',
    //   path: 'uploads/eed5372e-b753-493f-936c-1a192a243d7f.png',
    //   size: 15149
    // }

    console.log(file)
    // console.log(join(__dirname, 'public'),)
    let data = {
      originalName: file.originalname,
      fileName: file.filename
    }

    return successResponse(res, data)
  }
}
