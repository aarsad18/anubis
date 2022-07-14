import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/modules/auth/auth.service';

@Injectable()
export class AdminPhoneExistGuard implements CanActivate {
    constructor(private readonly authService: AuthService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        let emailExist = await this.authService.findOneByPhone(request.body.phone);
        if (emailExist) {
            throw new BadRequestException('No HP yang anda masukkan sudah terdaftar');
        }
        return true;
    }
}
