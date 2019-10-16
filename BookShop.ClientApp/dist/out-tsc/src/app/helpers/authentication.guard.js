import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=authentication.guard.js.map