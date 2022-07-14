import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class UpdateRequestInterceptor implements NestInterceptor {
    private readonly logger = new Logger(UpdateRequestInterceptor.name);
    public intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {

        // changing request
        let request = _context.switchToHttp().getRequest();
        if (request.body) {
            request.body.name = 'modify request';
            this.logger.log(`REQUEST ` + JSON.stringify(request.body));
        }

        return next.handle().pipe(
            map(resp => {
                return resp;
            }),
        );
    }
}