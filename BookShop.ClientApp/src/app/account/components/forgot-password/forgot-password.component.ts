import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { ForgotPasswordModel } from '../../../models/forgotPasswordModel';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [AccountService]
})
export class ForgotPasswordComponent implements OnInit {

  user: ForgotPasswordModel = new ForgotPasswordModel();
  isEmailSended: boolean=false;
  constructor(private accountService: AccountService) { 
    this.user.redirectUrl='http://localhost:4200/account/resetpassword';
  }

  ngOnInit() {
    
  }

  forgotPassword() {
    this.accountService.forgotPassword(this.user)
      .subscribe(
        (data: ForgotPasswordModel) => {this.isEmailSended=true
        },
        (error) => {

        });
  }
}
