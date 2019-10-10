import { AuthorModel } from 'src/app/models/authorModels/authorModel';

export class AuthorPageModel {
    public currentPage: number;
    public pageSize: number;
    public count: number;
    public authorModels: AuthorModel[];
    constructor() {

    }
}