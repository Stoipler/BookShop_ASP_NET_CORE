import { AuthorModel } from 'src/app/models/authorModels/authorModel';

export class AuthorRequestModel {
    page: number;
    pageSize: number;
    name: string;
    withPagination: boolean;
    ignoreAuthorList: AuthorModel[];

    constructor() {
        this.page = 1;
        this.pageSize = 10;
        this.name = '';
        this.withPagination = false;
        this.ignoreAuthorList = [];
    }
}