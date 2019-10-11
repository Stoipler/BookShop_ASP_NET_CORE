import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { SignInRequestModel } from 'src/app/models/accountModels/signInRequestModel';
import { SignInResponseModel } from 'src/app/models/accountModels/signInResponseModel';
import { Observable } from 'rxjs';
import { SignUpRequestModel } from 'src/app/models/accountModels/signUpRequestModel';
import { ForgotPasswordRequestModel } from 'src/app/models/accountModels/forgotPasswordRequestModel';
import { ResetPasswordRequestModel } from 'src/app/models/accountModels/resetPasswordRequestModel';

@Injectable()
export class AccountService {

    constructor(private http: HttpClient) {

    }
    signIn(requestModel: SignInRequestModel): Observable<SignInResponseModel> {
        return this.http.post<SignInResponseModel>(environment.apiUrl + 'Account/SignIn', requestModel);
    }
    signUp(requestModel: SignUpRequestModel) {
        return this.http.post(environment.apiUrl + 'Account/SignUp', requestModel);
    }
    forgotPassword(requestModel: ForgotPasswordRequestModel) {
        return this.http.post(environment.apiUrl + 'Account/ForgotPassword', requestModel);
    }
    resetPassword(requestModel: ResetPasswordRequestModel) {
        return this.http.post(environment.apiUrl + 'Account/ResetPassword', requestModel);
    }
}