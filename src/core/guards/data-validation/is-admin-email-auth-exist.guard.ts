import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/modules/auth/auth.service';

@Injectable()
export class AdminEmailAuthExistGuard implements CanActivate {
    constructor(private readonly authService: AuthService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        let akunAuth = await this.authService.findOneByEmail(request.dataTokenAuth.email);
        if (!akunAuth) {
            throw new UnauthorizedException("03-200-NotMatch-Email Akun tidak ditemukan.");
        }
        request.dataAkunAuth = akunAuth;
        return true;
    }
}
