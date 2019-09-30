import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { SignInModel } from 'src/app/models/signInModel';
import { ActivatedRoute, Router } from '@angular/router';

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


  async logIn() {
    const result: SignInModel = await this.accountService.logIn(this.user);
    localStorage.setItem('currentUser', JSON.stringify(result));
    this.router.navigate([this.returnUrl]);

  }
}
