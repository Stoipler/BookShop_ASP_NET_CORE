import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from '../models/authorModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url="https://localhost:44304/api/author";

  constructor(private http: HttpClient) { 

  }

  getAuthors(){
    return this.http.get(this.url);
  }
  createAuthor(author: AuthorModel){
    return this.http.post(this.url,author);
  } 
  deleteAuthor(id: number){
      return this.http.delete(this.url + '/' + id);
  }
  updateAuthor(author: AuthorModel){
    return this.http.put(this.url + '/' + author.id, author);
  }
}
