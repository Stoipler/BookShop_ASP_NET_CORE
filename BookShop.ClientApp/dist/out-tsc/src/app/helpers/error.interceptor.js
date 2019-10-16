import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let ErrorInterceptor = class ErrorInterceptor {
    constructor(toastService) {
        this.toastService = toastService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                localStorage.removeItem('currentUser');
                location.reload(true);
            }
            if (err.status === 400) {
                for (const fieldName in err.error) {
                    if (err.error.hasOwnProperty(fieldName)) {
                        this.toastService.show("Error " + err.status, err.error[fieldName]);
                    }
                }
                return;
            }
            const error = err.error || err.statusText;
            this.toastService.show("Warning", "Unhandled error: something went wrong");
            return throwError(error);
        }));
    }
};
ErrorInterceptor = tslib_1.__decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptor.js.map