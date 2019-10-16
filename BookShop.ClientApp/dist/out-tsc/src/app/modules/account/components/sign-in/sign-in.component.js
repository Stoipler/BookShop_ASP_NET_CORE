import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { SignInModel } from 'src/app/models/signInModel';
let SignInComponent = class SignInComponent {
    constructor(accountService, route, router) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.error = '';
        this.user = new SignInModel();
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    logIn() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.accountService.logIn(this.user);
            localStorage.setItem('currentUser', JSON.stringify(result));
            this.router.navigate([this.returnUrl]);
        });
    }
};
SignInComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css'],
        providers: [AccountService]
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map