import { Component, OnInit } from '@angular/core';
import { SignUpService } from './signUp.service';
import { SignUpModel } from './signUpModel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {
    user: SignUpModel = new SignUpModel();
    constructor(private signUpService: SignUpService) { }

    ngOnInit() {
    }
    register() {
        this.signUpService.createUser(this.user)
        .subscribe((data: SignUpModel) => this.user = data);
    }
}
