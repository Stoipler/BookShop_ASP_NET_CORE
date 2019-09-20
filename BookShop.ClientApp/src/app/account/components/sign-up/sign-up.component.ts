import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { SignUpModel } from '../../../models/signUpModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AccountService]
})
export class SignUpComponent implements OnInit {
  angForm: FormGroup;
  user: SignUpModel = new SignUpModel();
  isSignUpSuccessful:boolean=false;
  constructor(private accountService: AccountService,private router: Router) { 
    this.user.redirectUrl='http://localhost:4200/account/emailconfirmed'
  }

  ngOnInit(): void {
    
  }

  register() {
    this.accountService.createUser(this.user)
      .subscribe(
        (data: SignUpModel) => {
          this.isSignUpSuccessful=true;
        },
        (error) => {

        });
  }
}
