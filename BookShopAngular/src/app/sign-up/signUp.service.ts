import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SignUpModel } from './signUpModel';

@Injectable()
export class SignUpService {

    private url = '/api/account/signup';

    constructor(private http: HttpClient) {
    }

    createUser(user: SignUpModel) {
        return this.http.post(this.url, user);
    }
}