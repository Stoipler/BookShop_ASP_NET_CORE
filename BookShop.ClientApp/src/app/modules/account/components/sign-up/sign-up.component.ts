import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
import { SignUpRequestModel } from 'src/app/models/accountModels/signUpRequestModel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AccountService]
})
export class SignUpComponent implements OnInit {

  signUpRequestModel: SignUpRequestModel;
  isSignUpSuccessful: boolean = false;

  constructor(private accountService: AccountService) {
    this.signUpRequestModel = new SignUpRequestModel();
    this.signUpRequestModel.redirectUrl = 'http://localhost:4200/account/emailconfirmed'
  }

  ngOnInit() {

  }
  signUp() {
    this.accountService.signUp(this.signUpRequestModel).subscribe(
      () => {
        this.isSignUpSuccessful = true;
      }
    );
  }
}
