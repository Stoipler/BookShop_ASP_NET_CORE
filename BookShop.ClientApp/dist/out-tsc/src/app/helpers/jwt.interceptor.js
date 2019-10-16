import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let JwtInterceptor = class JwtInterceptor {
    constructor() { }
    intercept(request, next) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = tslib_1.__decorate([
    Injectable()
], JwtInterceptor);
export { JwtInterceptor };
//# sourceMappingURL=jwt.interceptor.js.map