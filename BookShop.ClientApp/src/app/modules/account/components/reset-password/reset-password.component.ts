import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
import { ResetPasswordModel } from '../../../../models/resetPasswordModel';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [AccountService]
})
export class ResetPasswordComponent implements OnInit {
  user: ResetPasswordModel = new ResetPasswordModel();
  isPasswordChanged: boolean = false;
  private querySubscription: Subscription;

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.user.code = queryParam['code'];
        this.user.email = queryParam['email'];
      }
    );
  }


  ngOnInit() {

  }

  resetPassword(){
    this.accountService.resetPassword(this.user).subscribe(
      (data: ResetPasswordModel) => {this.isPasswordChanged=true
      },
      (error) => {
        

      });
  }
}
