import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from 'src/app/models/authorModel';
import { AuthorSearchParams } from 'src/app/models/authorSearchParams';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url="https://localhost:44304/api/author";

  constructor(private http: HttpClient) { 

  }

  getAuthors(authorSearchParams: AuthorSearchParams){
    return this.http.post(this.url+'/get',authorSearchParams);
  }
  createAuthor(author: AuthorModel){
    return this.http.post(this.url+'/post',author);
  } 
  deleteAuthor(id: number){
      return this.http.delete(this.url + '/delete/' + id);
  }
  updateAuthor(author: AuthorModel){
    return this.http.put(this.url + '/put/' + author.id, author);
  }
}
