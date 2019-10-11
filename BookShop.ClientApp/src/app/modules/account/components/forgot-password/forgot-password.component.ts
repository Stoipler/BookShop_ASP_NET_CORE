import { Component, OnInit } from '@angular/core';
import { ForgotPasswordRequestModel } from 'src/app/models/accountModels/forgotPasswordRequestModel';
import { AccountService } from 'src/app/services/account.service';
import { ForgotPasswordModel } from 'src/app/models/forgotPasswordModel';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [AccountService]
})
export class ForgotPasswordComponent implements OnInit {

  requestModel: ForgotPasswordRequestModel;
  isEmailSended: boolean = false;

  constructor(private accountService: AccountService) {
    this.requestModel = new ForgotPasswordRequestModel();
    this.requestModel.redirectUrl = 'http://localhost:4200/account/resetpassword';
  }

  ngOnInit() {

  }

  forgotPassword() {
    this.accountService.forgotPassword(this.requestModel)
      .subscribe(
        (data: ForgotPasswordModel) => {
          this.isEmailSended = true
        });
  }
}
