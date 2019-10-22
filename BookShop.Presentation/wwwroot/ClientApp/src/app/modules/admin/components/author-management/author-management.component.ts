import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorService } from 'src/app/services/author.service';
import { AuthorModel } from 'src/app/models/authorModels/authorModel';
import { AuthorRequestModel } from 'src/app/models/authorModels/authorRequestModel';
import { AuthorResponseModel } from 'src/app/models/authorModels/authorResponseModel';
import { faPencilAlt, faBackspace, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-author-management',
  templateUrl: './author-management.component.html',
  styleUrls: ['./author-management.component.css'],
  providers: [AuthorService]
})
export class AuthorManagementComponent implements OnInit {

  public authorRequestModel: AuthorRequestModel;
  public authorResponseModel: AuthorResponseModel;
  public author: AuthorModel;
  public faPencilAlt = faPencilAlt;
  public faBackspace = faBackspace;
  public faPlusCircle = faPlusCircle;

  constructor(private modalService: NgbModal, private authorService: AuthorService) {
    this.authorRequestModel = new AuthorRequestModel();
    this.authorResponseModel = new AuthorResponseModel();
    this.author = new AuthorModel();
    this.authorRequestModel.pageSize = 10;
    this.authorRequestModel.withPagination = true;
  }

  ngOnInit() {
    this.getAuthors();

  }
  public getAuthors() {
    this.authorService.getAuthors(this.authorRequestModel).subscribe(
      (data: AuthorResponseModel) => {
        this.authorResponseModel = data;
      }
    );
  }
  public editAuthor(author: AuthorModel) {
    this.author = author;
  }
  public cancel() {
    this.author = new AuthorModel();
  }
  public save() {
    if (this.author.id) {
      this.authorService.updateAuthor(this.author).subscribe(
        (success) => {
          this.cancel();
          this.getAuthors();
        }
      );
    }
    if (!this.author.id) {
      this.authorService.createAuthor(this.author).subscribe(
        (success) => {
          this.cancel();
          this.getAuthors();
        }
      );
    }
  }
  public openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then((result) => {
    }, (reason) => {
    });
  }
}
