import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class DataService {

    private url = "/api/user";

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get(this.url);
    }

    createUser(user: User) {
        return this.http.post(this.url, user);
    }
    updateUser(user: User) {

        return this.http.put(this.url + '/' + user.id, user);
    }
    deleteUser(id: string) {
        return this.http.delete(this.url + '/' + id);
    }
}