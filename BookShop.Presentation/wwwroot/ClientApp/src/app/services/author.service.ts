import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from 'src/app/models/authorModels/authorModel';
import { environment } from 'src/environments/environment';
import { AuthorRequestModel } from 'src/app/models/authorModels/authorRequestModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  public getAuthors(requestModel: AuthorRequestModel) {
    return this.http.post(`${environment.apiUrl}Author/GetAuthors`, requestModel);
  }
  public createAuthor(author: AuthorModel) {
    return this.http.post(`${environment.apiUrl}Author/CreateAuthor`, author);
  }
  public updateAuthor(author: AuthorModel) {
    return this.http.post(`${environment.apiUrl}Author/UpdateAuthor`, author);
  }

}
