import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from 'src/app/modules/account/components/account/account.component';
import { SignUpComponent } from 'src/app/modules/account/components/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/modules/account/components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from 'src/app/modules/account/components/forgot-password/forgot-password.component';
import { EmailConfirmedComponent } from 'src/app/modules/account/components/email-confirmed/email-confirmed.component';
import { ResetPasswordComponent } from 'src/app/modules/account/components/reset-password/reset-password.component';


const routes: Routes = [
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'resetpassword', component: ResetPasswordComponent },
      { path: 'emailconfirmed', component: EmailConfirmedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
