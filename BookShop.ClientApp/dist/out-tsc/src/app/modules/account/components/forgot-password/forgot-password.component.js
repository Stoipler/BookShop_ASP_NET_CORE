import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
import { ForgotPasswordModel } from '../../../../models/forgotPasswordModel';
let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.user = new ForgotPasswordModel();
        this.isEmailSended = false;
        this.isCorrectEmail = true;
        this.user.redirectUrl = 'http://localhost:4200/account/resetpassword';
    }
    ngOnInit() {
    }
    forgotPassword() {
        this.accountService.forgotPassword(this.user)
            .subscribe((data) => {
            this.isEmailSended = true;
        }, (error) => {
            this.isCorrectEmail = false;
        });
    }
};
ForgotPasswordComponent = tslib_1.__decorate([
    Component({
        selector: 'app-forgot-password',
        templateUrl: './forgot-password.component.html',
        styleUrls: ['./forgot-password.component.css'],
        providers: [AccountService]
    })
], ForgotPasswordComponent);
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map