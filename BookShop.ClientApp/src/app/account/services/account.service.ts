import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SignUpModel } from '../models/signUpModel';
import { SignInModel } from '../models/signInModel';
import { ForgotPasswordModel } from '../models/forgotPasswordModel';
import { ResetPasswordModel } from '../models/resetPasswordModel';

@Injectable()
export class AccountService {

    private url = 'https://localhost:44304/api/account';

    constructor(private http: HttpClient) {
    }

    createUser(user: SignUpModel) {
        return this.http.post(this.url+'/signup', user);
    }

    logIn(user: SignInModel){
        return this.http.post(this.url+'/signin',user);
    }

    forgotPassword(user: ForgotPasswordModel){
        return this.http.post(this.url+'/forgotpassword',user);
    }

    resetPassword(user: ResetPasswordModel){
        return this.http.post(this.url+'/resetpassword',user);
    }
}