import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignInRequestModel } from 'src/app/models/accountModels/signInRequestModel';
import { SignUpRequestModel } from 'src/app/models/accountModels/signUpRequestModel';
import { ForgotPasswordRequestModel } from 'src/app/models/accountModels/forgotPasswordRequestModel';
import { ResetPasswordRequestModel } from 'src/app/models/accountModels/resetPasswordRequestModel';

@Injectable()
export class AccountService {

    constructor(private http: HttpClient) {

    }

    public signIn(requestModel: SignInRequestModel) {
        return this.http.post(`${environment.apiUrl}Account/SignIn`, requestModel);
    }

    public signUp(requestModel: SignUpRequestModel) {
        return this.http.post(`${environment.apiUrl}Account/SignUp`, requestModel);
    }

    public forgotPassword(requestModel: ForgotPasswordRequestModel) {
        return this.http.post(`${environment.apiUrl}Account/ForgotPassword`, requestModel);
    }
    public resetPassword(requestModel: ResetPasswordRequestModel) {
        return this.http.post(`${environment.apiUrl}Account/ResetPassword`, requestModel);
    }
}
