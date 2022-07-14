import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { customResponse } from 'src/utils/response';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let msg = exception instanceof HttpException
            ? JSON.parse(JSON.stringify(exception.getResponse()))
            : {
                error: "Internal Server Error",
                message: "Error Connection Database"
            };
        let rc;
        console.log(exception);

        let status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        // Format Error to Token
        if (status === 401) {
            let dataResp = msg.message.split("-");
            status = dataResp[1];
            rc = dataResp[0]
            msg = {
                error: dataResp[2],
                message: dataResp[3]
            }
        }

        return customResponse(response, {}, rc || status.toString(), status, msg.error || '', msg.message || '')
    }
}