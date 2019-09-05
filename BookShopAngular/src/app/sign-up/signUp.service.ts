import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SignUpModel } from '../core/models/signUpModel';

@Injectable()
export class SignUpService {

    private url = '/api/account';

    constructor(private http: HttpClient) {
    }

    createUser(user: SignUpModel) {
        return this.http.post(this.url+'/signup', user);
    }
}