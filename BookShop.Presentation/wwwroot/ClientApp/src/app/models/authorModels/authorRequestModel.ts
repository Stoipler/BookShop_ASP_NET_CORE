import { AuthorModel } from 'src/app/models/authorModels/authorModel';

export class AuthorRequestModel {
    public page: number;
    public pageSize: number;
    public name: string;
    public withPagination: boolean;
    public ignoreAuthorsList: AuthorModel[];

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.page = 1;
        this.pageSize = 10;
        this.name = '';
        this.withPagination = false;
        this.ignoreAuthorsList = [];
    }
}
