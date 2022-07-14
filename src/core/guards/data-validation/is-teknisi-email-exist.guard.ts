import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TeknisiService } from 'src/modules/teknisi/teknisi.service';

@Injectable()
export class TeknisiEmailExistGuard implements CanActivate {
    constructor(private readonly teknisiService: TeknisiService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        let emailExist = await this.teknisiService.findOneByEmail(request.body.email);
        if (emailExist) {
            throw new BadRequestException('Email yang anda masukkan sudah terdaftar');
        }
        return true;
    }
}
