import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { AuthorModel } from 'src/app/models/authorModels/authorModel';
import { AuthorRequestModel } from 'src/app/models/authorModels/authorRequestModel';
import { AuthorResponseModel } from 'src/app/models/authorModels/authorResponseModel';
import { faPencilAlt, faBackspace, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
let AuthorsComponent = class AuthorsComponent {
    constructor(modalService, authorService) {
        this.modalService = modalService;
        this.authorService = authorService;
        this.faPencilAlt = faPencilAlt;
        this.faBackspace = faBackspace;
        this.faPlusCircle = faPlusCircle;
        this.authorRequestModel = new AuthorRequestModel();
        this.authorResponseModel = new AuthorResponseModel();
        this.author = new AuthorModel();
        this.authorRequestModel.pageSize = 10;
        this.authorRequestModel.withPagination = true;
    }
    ngOnInit() {
        this.getAuthors();
    }
    getAuthors() {
        this.authorService.getAuthors(this.authorRequestModel).subscribe((data) => {
            this.authorResponseModel = data;
        });
    }
    editAuthor(author) {
        this.author = author;
    }
    cancel() {
        this.author = new AuthorModel();
    }
    save() {
        if (this.author.id) {
            this.authorService.updateAuthor(this.author).subscribe((success) => {
                this.cancel();
                this.getAuthors();
            });
        }
        if (!this.author.id) {
            this.authorService.createAuthor(this.author).subscribe((success) => {
                this.cancel();
                this.getAuthors();
            });
        }
    }
    openModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then((result) => {
        }, (reason) => {
        });
    }
};
AuthorsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-authors',
        templateUrl: './authors.component.html',
        styleUrls: ['./authors.component.css'],
        providers: [AuthorService]
    })
], AuthorsComponent);
export { AuthorsComponent };
//# sourceMappingURL=authors.component.js.map