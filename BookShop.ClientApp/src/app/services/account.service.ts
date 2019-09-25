import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpModel } from 'src/app/models/signUpModel';
import { SignInModel } from 'src/app/models/signInModel';
import { ForgotPasswordModel } from 'src/app/models/forgotPasswordModel';
import { ResetPasswordModel } from 'src/app/models/resetPasswordModel';
import { environment } from 'src/environments/environment'

@Injectable()
export class AccountService {

    constructor(private http: HttpClient) {
    }

    createUser(user: SignUpModel) {
        return this.http.post(environment.apiUrl + '/api/account/signup', user);
    }

    logIn(signInModel: SignInModel){
        return this.http.post(environment.apiUrl+'/api/account/signin',signInModel);
    }

    forgotPassword(user: ForgotPasswordModel) {
        return this.http.post(environment.apiUrl + '/api/account/forgotpassword', user);
    }

    resetPassword(user: ResetPasswordModel) {
        return this.http.post(environment.apiUrl + '/api/account/resetpassword', user);
    }
}