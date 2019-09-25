import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from 'src/app/models/authorModel';
import { AuthorSearchParams } from 'src/app/models/authorSearchParams';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { 
  }

  getAuthors(authorSearchParams: AuthorSearchParams){
    return this.http.post(environment.apiUrl+'/api/author/get',authorSearchParams);
  }
  createAuthor(author: AuthorModel){
    return this.http.post(environment.apiUrl+'/api/author/post',author);
  } 
  deleteAuthor(id: number){
      return this.http.delete(environment.apiUrl + '/api/author/delete/' + id);
  }
  updateAuthor(author: AuthorModel){
    return this.http.put(environment.apiUrl + '/api/author/put/' + author.id, author);
  }
}
