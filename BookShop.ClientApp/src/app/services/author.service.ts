import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from 'src/app/models/authorModel';
import { AuthorSearchParams } from 'src/app/models/authorSearchParams';
import { environment } from 'src/environments/environment'
import { AuthorPageModel } from 'src/app/models/authorPageModel';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { 
  }

  getAuthorsWithPagination(authorSearchParams: AuthorSearchParams):Promise<AuthorPageModel>{
    return this.http.post<AuthorPageModel>(environment.apiUrl+'author/getwithpagination',authorSearchParams).toPromise();
  }

  getAuthors(authorSearchParams: AuthorSearchParams){
    return this.http.post(environment.apiUrl+'author/get',authorSearchParams);
  }

  createAuthor(author: AuthorModel){
    return this.http.post(environment.apiUrl+'author/post',author);
  } 
  deleteAuthor(id: number){
      return this.http.delete(environment.apiUrl + 'author/delete/' + id);
  }
  updateAuthor(author: AuthorModel){
    return this.http.put(environment.apiUrl + 'author/put/' + author.id, author);
  }
}
