import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignInModel } from 'src/app/models/signInModel';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AccountService]
})
export class SignInComponent implements OnInit {

  returnUrl: string;
  error = '';
  user: SignInModel = new SignInModel();
  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  logIn() {
    this.accountService.logIn(this.user)
    .subscribe(
      (data: SignInModel) => {
        localStorage.setItem('currentUser',JSON.stringify(data));
        this.router.navigate([this.returnUrl]);
      },
      (error) => {

      });
    
  }
}
