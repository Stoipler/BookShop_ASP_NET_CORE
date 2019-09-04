import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author';

@Injectable()
export class AuthorService {

    private url = '/api/author';

    constructor(private http: HttpClient) {
    }

    getAuthors() {
        return this.http.get(this.url);
    }

    createAuthor(author: Author) {
        return this.http.post(this.url, author);
    }
    updateAuthor(author: Author) {
        return this.http.put(this.url + '/' + author.id, author);
    }
    deleteAuthor(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
