import { Logger } from "@nestjs/common";
import { Response } from "express";

export class ResponseJson {
    rc: string;
    error: string;
    message: any;
    data: any;
}

export function successResponse(resp: Response, data: any): Response {
    return customResponse(resp, data, "00", 200, "", "SUCCESS")
}

export function customResponse(resp: Response, data: any, rc: string, httpStatus: number, error: string, message: any): Response {
    let logger = new Logger('UpdateRequestInterceptor');

    let dataSend: ResponseJson = {
        rc: rc,
        error: error,
        message: message,
        data: data
    }

    logger.log(`RESPONSE ` + JSON.stringify(dataSend));

    return resp.status(httpStatus).json(dataSend)
}