import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInRequestModel } from 'src/app/models/accountModels/signInRequestModel';
import { SignInResponseModel } from 'src/app/models/accountModels/signInResponseModel';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AccountService]
})
export class SignInComponent implements OnInit {

  signInRequestModel: SignInRequestModel;
  returnUrl: string;

  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) {
    this.signInRequestModel = new SignInRequestModel();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      this.router.navigate(['/']);
    }
  }

  signIn() {
    this.accountService.signIn(this.signInRequestModel).subscribe(
      (data: SignInResponseModel) => {
        const user: SignInResponseModel = new SignInResponseModel();
        user.token = data.token;
        user.firstName = data.firstName;
        localStorage.removeItem('cart');
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate([this.returnUrl]);
      }, (error) => {

      });
  }
}
