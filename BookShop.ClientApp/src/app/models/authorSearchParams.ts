import { AuthorModel } from 'src/app/models/authorModel';

export class AuthorSearchParams {
    name: string;
    page: number;
    pageSize: number;
    authorsList: AuthorModel[];
    constructor() {
        this.name = '';
        this.authorsList = [];
    }
}