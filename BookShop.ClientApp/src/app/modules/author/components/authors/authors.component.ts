import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthorService } from 'src/app/services/author.service';
import { AuthorModel } from 'src/app/models/authorModel';
import { AuthorSearchParams } from 'src/app/models/authorSearchParams';
import { AuthorPageModel } from 'src/app/models/authorPageModel';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {

  currentPage: number;
  pageSize: number;
  count: number;
  author: AuthorModel = new AuthorModel();
  authors: AuthorModel[];
  searchParams: AuthorSearchParams = new AuthorSearchParams();
  constructor(private modalService: NgbModal, private authorService: AuthorService) { }

  ngOnInit() {
    this.currentPage=1;
    this.searchParams.pageSize=5;
    this.loadAuthors();
  }

  async loadAuthors() {
    this.searchParams.page = this.currentPage;
    const data:AuthorPageModel=await this.authorService.getAuthorsWithPagination(this.searchParams);
        this.authors = data.authorModels;
        this.currentPage = data.currentPage;
        this.pageSize = data.pageSize;
        this.count = data.count;
      debugger;
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
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.loadAuthors();
    }, (reason) => {
      this.cancel();
      this.loadAuthors();
    });
  }
  delete(author: AuthorModel) {
    this.authorService.deleteAuthor(author.id)
      .subscribe(data => this.loadAuthors());
  }
  editAuthor(a: AuthorModel) {
    this.author = a;
  }
}
