import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';
import * as moment from 'moment';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/interceptors/http-exception.filter';
import { UpdateRequestInterceptor } from './core/interceptors/req-format.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new UpdateRequestInterceptor())
  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json({limit: "50mb"}))
  app.use(bodyParser.urlencoded({limit: "50mb"}))

  morgan.token('remote-addr', function (req) {
    return req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  });
  morgan.token('date', (req, res, tz) => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  })
  app.use(morgan('combined'));
  let server = await app.listen(process.env.APP_PORT);
  console.log(server.address().address)
  console.log(server.address().port)
}
bootstrap();
