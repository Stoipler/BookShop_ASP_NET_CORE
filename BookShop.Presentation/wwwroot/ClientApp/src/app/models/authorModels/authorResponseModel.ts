import { AuthorModel } from 'src/app/models/authorModels/authorModel';

export class AuthorResponseModel {
    count: number;
    authorsList: AuthorModel[];
}