import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
import { SignUpModel } from '../../../../models/signUpModel';
let SignUpComponent = class SignUpComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.user = new SignUpModel();
        this.isSignUpSuccessful = false;
        this.user.redirectUrl = 'http://localhost:4200/account/emailconfirmed';
    }
    ngOnInit() {
    }
    register() {
        this.accountService.createUser(this.user)
            .subscribe((data) => {
            this.isSignUpSuccessful = true;
        }, (error) => {
        });
    }
};
SignUpComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css'],
        providers: [AccountService]
    })
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map