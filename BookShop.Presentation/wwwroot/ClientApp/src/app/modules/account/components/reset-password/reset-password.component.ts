import { Component, OnInit } from '@angular/core';
import { ResetPasswordRequestModel } from 'src/app/models/accountModels/resetPasswordRequestModel';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [AccountService]
})
export class ResetPasswordComponent implements OnInit {
  public requestModel: ResetPasswordRequestModel;
  public isPasswordChanged: boolean;

  constructor(private accountService: AccountService) {
    this.requestModel = new ResetPasswordRequestModel();
    this.isPasswordChanged = false;
  }

  ngOnInit() {

  }

  public resetPassword() {
    this.accountService.resetPassword(this.requestModel).subscribe(
      () => {
        this.isPasswordChanged = true;
      });
  }
}
