import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
import { SignUpRequestModel } from 'src/app/models/accountModels/signUpRequestModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AccountService]
})
export class SignUpComponent implements OnInit {

  signUpRequestModel: SignUpRequestModel;
  isSignUpSuccessful: boolean = false;

  constructor(private accountService: AccountService, private router: Router) {
    this.signUpRequestModel = new SignUpRequestModel();
    this.signUpRequestModel.redirectUrl = 'http://localhost:4200/account/emailconfirmed'
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      this.router.navigate(['/']);
    }
  }
  signUp() {
    this.accountService.signUp(this.signUpRequestModel).subscribe(
      () => {
        this.isSignUpSuccessful = true;
      }
    );
  }
}
