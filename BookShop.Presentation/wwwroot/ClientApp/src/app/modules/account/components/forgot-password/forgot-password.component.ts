import { Component, OnInit } from '@angular/core';
import { ForgotPasswordRequestModel } from 'src/app/models/accountModels/forgotPasswordRequestModel';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [AccountService]
})
export class ForgotPasswordComponent implements OnInit {

  public requestModel: ForgotPasswordRequestModel;
  public isEmailSended: boolean;

  constructor(private accountService: AccountService) {
    this.requestModel = new ForgotPasswordRequestModel();
    this.requestModel.redirectUrl = 'http://localhost:4200/account/resetpassword';
    this.isEmailSended = false;
  }

  ngOnInit() {

  }

  public forgotPassword() {
    this.accountService.forgotPassword(this.requestModel)
      .subscribe(
        (success) => {
          this.isEmailSended = true;
        });
  }
}
