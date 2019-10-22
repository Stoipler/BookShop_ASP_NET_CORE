import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResetPasswordRequestModel } from 'src/app/models/accountModels/resetPasswordRequestModel';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [AccountService]
})
export class ResetPasswordComponent implements OnInit {
  requestModel: ResetPasswordRequestModel;
  isPasswordChanged: boolean = false;

  constructor(private accountService: AccountService,
    private route: ActivatedRoute) {

    this.requestModel = new ResetPasswordRequestModel();
  }

  ngOnInit() {

  }

  resetPassword() {
    this.accountService.resetPassword(this.requestModel).subscribe(
      (sucess) => {
        this.isPasswordChanged = true
      });
  }
}
