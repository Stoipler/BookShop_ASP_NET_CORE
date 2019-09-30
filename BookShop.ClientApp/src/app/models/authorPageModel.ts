import { AuthorModel } from 'src/app/models/authorModel';

export class AuthorPageModel {
    public currentPage: number;
    public pageSize: number;
    public count: number;
    public authorModels: AuthorModel[];
    constructor() {

    }
}