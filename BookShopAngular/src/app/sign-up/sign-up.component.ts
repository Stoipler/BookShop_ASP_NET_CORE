import { Component, OnInit } from '@angular/core';
import { SignUpService } from './signUp.service';
import { SignUpModel } from '../core/models/signUpModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { error } from 'util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {
  angForm: FormGroup;
  user: SignUpModel = new SignUpModel();
  isSignUpSuccessful:boolean=false;

  constructor(private signUpService: SignUpService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {

  }

  clearForm() {
    this.user = new SignUpModel();
  }

  register() {
    this.signUpService.createUser(this.user)
      .subscribe(
        (data: SignUpModel) => {
          this.isSignUpSuccessful=true;
        },
        (error) => {

        });
  }
}
