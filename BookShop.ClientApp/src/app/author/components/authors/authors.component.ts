import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthorService } from '../../../services/author.service';
import { AuthorModel } from '../../../models/authorModel';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {

  closeResult: string;
  author: AuthorModel = new AuthorModel();   // изменяемый товар
  authors: AuthorModel[];                // массив товаров
  tableMode: boolean = true;

  constructor(private modalService: NgbModal, private authorService: AuthorService) { }

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAuthors().subscribe((data: AuthorModel[]) => this.authors = data);
  }

  save() {
    if (this.author.id == null) {
      this.authorService.createAuthor(this.author)
        .subscribe((data: AuthorModel) => this.loadAuthors());
    } else {
      this.authorService.updateAuthor(this.author)
        .subscribe(data => this.loadAuthors());
    }
    this.cancel();
  }

  cancel() {
    this.author = new AuthorModel();
    this.tableMode = true;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.loadAuthors();
    }, (reason) => {
      this.cancel();
      this.loadAuthors();
    });
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
  delete(author: AuthorModel) {
    this.authorService.deleteAuthor(author.id)
      .subscribe(data => this.loadAuthors());
  }
  editAuthor(a: AuthorModel) {
    this.author = a;
  }

  




}
