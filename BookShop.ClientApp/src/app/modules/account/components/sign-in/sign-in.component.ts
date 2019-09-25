import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignInModel } from 'src/app/models/signInModel';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { first } from 'rxjs/operators';
import { error } from 'util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AccountService, AuthenticationService]
})
export class SignInComponent implements OnInit {

  returnUrl: string;
  error = '';
  user: SignInModel = new SignInModel();
  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  logIn() { debugger;
    this.authenticationService.login(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
        });
  }
}
