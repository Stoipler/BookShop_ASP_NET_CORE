import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from 'src/app/models/authorModels/authorModel';
import { environment } from 'src/environments/environment';
import { AuthorRequestModel } from 'src/app/models/authorModels/authorRequestModel';
import { AuthorResponseModel } from 'src/app/models/authorModels/authorResponseModel';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  getAuthors(requestModel: AuthorRequestModel) {
    return this.http.post(environment.apiUrl + 'Author/GetAuthors', requestModel);
  }
  createAuthor(author: AuthorModel) {
    return this.http.post(environment.apiUrl + 'Author/CreateAuthor', author);
  }
  updateAuthor(author: AuthorModel) {
    return this.http.post(environment.apiUrl + 'Author/UpdateAuthor', author);
  }

}
