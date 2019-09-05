import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { Author } from '../core/models/author';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
    providers: [AuthorService]
})
export class AuthorComponent implements OnInit {
    author: Author = new Author();
    authors: Author[];
    tableMode: boolean = true;
    constructor(private authorService: AuthorService) { }

    ngOnInit() {
        this.loadAuthors();
    }
    loadAuthors() {
        this.authorService.getAuthors()
            .subscribe((data: Author[]) => this.authors = data);
        // TODO
    }
    save() {
        if (this.author.id == null) {
            this.authorService.createAuthor(this.author)
                .subscribe((data: Author) => this.authors.push(data));
        } else {
            this.authorService.updateAuthor(this.author)
                .subscribe(data => this.loadAuthors());
        }
        this.cancel();
    }
    editAuthor(author: Author) {
        this.author = author;
    }
    cancel() {
        this.author = new Author();
        this.tableMode = true;
    }
    delete(author: Author) {
        this.authorService.deleteAuthor(author.id)
            .subscribe(data => this.loadAuthors());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }

}
