import { Component, OnInit } from '@angular/core';
import { SignUpRequestModel } from 'src/app/models/accountModels/signUpRequestModel';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AccountService]
})
export class SignUpComponent implements OnInit {

  public signUpRequestModel: SignUpRequestModel;
  public isSignUpSuccessful: boolean;

  constructor(private accountService: AccountService, private router: Router) {
    this.signUpRequestModel = new SignUpRequestModel();
    this.signUpRequestModel.redirectUrl = 'http://localhost:4200/account/emailconfirmed';
    this.isSignUpSuccessful = false;
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      this.router.navigate(['/']);
    }
  }
  public signUp() {
    this.accountService.signUp(this.signUpRequestModel).subscribe(
      () => {
        this.isSignUpSuccessful = true;
      }
    );
  }
}
