import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AccountComponent } from 'src/app/modules/account/components/account/account.component';
import { AccountService } from '../../services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { EmailConfirmedComponent } from './components/email-confirmed/email-confirmed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
let AccountModule = class AccountModule {
};
AccountModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            SignUpComponent,
            AccountComponent,
            SignInComponent,
            ForgotPasswordComponent,
            ResetPasswordComponent,
            EmailConfirmedComponent
        ],
        imports: [
            CommonModule,
            AccountRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            FontAwesomeModule
        ],
        providers: [AccountService]
    })
], AccountModule);
export { AccountModule };
//# sourceMappingURL=account.module.js.map