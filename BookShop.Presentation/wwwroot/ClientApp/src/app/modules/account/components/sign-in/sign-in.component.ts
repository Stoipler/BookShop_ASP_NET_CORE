import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInRequestModel } from 'src/app/models/accountModels/signInRequestModel';
import { SignInResponseModel } from 'src/app/models/accountModels/signInResponseModel';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AccountService]
})
export class SignInComponent implements OnInit {

  public signInRequestModel: SignInRequestModel;
  public returnUrl: string;

  constructor(private accountService: AccountService,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationHelper: AuthenticationHelper) {
    this.signInRequestModel = new SignInRequestModel();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      this.router.navigate(['/']);
    }
  }

  public signIn() {
    this.accountService.signIn(this.signInRequestModel).subscribe(
      (data: SignInResponseModel) => {
        this.authenticationHelper.setCurrentUser(data);
        this.router.navigate([this.returnUrl]);
      }, (error) => {
      });
  }
}
