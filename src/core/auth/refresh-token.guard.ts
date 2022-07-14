import { BadRequestException, CanActivate, ExecutionContext, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as CryptoJs from 'crypto-js';

@Injectable()
export class RefreshTokenGuard implements CanActivate {
    constructor() { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const response: Response = context.switchToHttp().getResponse();
        return this.validateRequest(request, response);
    }

    async validateRequest(request, resp) {

        let signOptions = {
            issuer: process.env.JWT_ISSUER,
            subject: process.env.JWT_SUBJECT,
            audience: process.env.JWT_AUDIENCE
        };
        if (!request.headers.authorization) {
            throw new BadRequestException("RefreshToken is Required");
        }
        const token = request.headers.authorization.split(" ")[1];
        if (!token) {
            throw new BadRequestException("RefreshToken is Required");
        }
        return await jwt.verify(token, process.env.JWT_REFRESH_SECRET, signOptions, function (error, data) {
            if (error) {
                console.log('masuk error', error);
                let errMsg = JSON.parse(JSON.stringify(error));
                if (errMsg.name === "TokenExpiredError") {
                    throw new UnauthorizedException("004-999-tokenExpired-RefreshToken Expired");
                }
                throw new UnauthorizedException("004-975-unAuthorized-RefreshToken MisMatch");
            }

            let bytes = CryptoJs.AES.decrypt(data.data, process.env.AES_SECRET_KEY);
            var decryptedData = JSON.parse(bytes.toString(CryptoJs.enc.Utf8));

            if (!decryptedData.userName || !decryptedData.email) {
                throw new UnauthorizedException("004-975-unAuthorized-RefreshToken MisMatch");
            }

            request.dataTokenAuth = decryptedData;
            return true;
        });
    }
}
