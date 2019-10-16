import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers(requestModel) {
        return this.http.post(environment.apiUrl + 'User/GetUsers', requestModel);
    }
    updateUser(requestModel) {
        return this.http.post(environment.apiUrl + 'User/UpdateUser', requestModel);
    }
    getUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(environment.apiUrl + 'user/getbyid/' + id).toPromise();
        });
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map