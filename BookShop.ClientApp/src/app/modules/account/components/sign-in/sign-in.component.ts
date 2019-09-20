import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignInModel } from '../../../../models/signInModel';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AccountService]
})
export class SignInComponent implements OnInit {

  angForm: FormGroup;
  user: SignInModel = new SignInModel();
  constructor(private accountService: AccountService,private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  logIn() {
    this.accountService.logIn(this.user)
      .subscribe(
        (data: SignInModel) => {
        },
        (error) => {

        });
  }
}
