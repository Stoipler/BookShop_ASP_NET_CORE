import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private toastService: ToastService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                localStorage.removeItem('currentUser');
                location.reload();
            }
            if (err.status === 400) {
                for (const fieldName in err.error) {
                    if (err.error.hasOwnProperty(fieldName)) {
                        this.toastService.show('Error ' + err.status, err.error[fieldName]);
                    }
                }
                return;
            }
            if (err.status === 0) {
                this.toastService.show('Warning', 'No connection to server');
                return;
            }
            const error = err.error || err.statusText;
            this.toastService.show('Warning', 'Unhandled error: something went wrong');
            return throwError(error);
        }));
    }
}
