import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let AuthorService = class AuthorService {
    constructor(http) {
        this.http = http;
    }
    getAuthors(requestModel) {
        return this.http.post(environment.apiUrl + 'Author/GetAuthors', requestModel);
    }
    createAuthor(author) {
        return this.http.post(environment.apiUrl + 'Author/CreateAuthor', author);
    }
    updateAuthor(author) {
        return this.http.post(environment.apiUrl + 'Author/UpdateAuthor', author);
    }
};
AuthorService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthorService);
export { AuthorService };
//# sourceMappingURL=author.service.js.map