import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
    }
    createUser(user) {
        return this.http.post(environment.apiUrl + 'Account/SignUp', user);
    }
    logIn(signInModel) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(environment.apiUrl + 'Account/SignIn', signInModel).toPromise();
        });
    }
    forgotPassword(user) {
        return this.http.post(environment.apiUrl + 'Account/ForgotPassword', user);
    }
    resetPassword(user) {
        return this.http.post(environment.apiUrl + 'Account/ResetPassword', user);
    }
};
AccountService = tslib_1.__decorate([
    Injectable()
], AccountService);
export { AccountService };
//# sourceMappingURL=account.service.js.map