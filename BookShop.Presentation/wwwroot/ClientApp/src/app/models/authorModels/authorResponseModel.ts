import { AuthorModel } from 'src/app/models/authorModels/authorModel';

export class AuthorResponseModel {
    public count: number;
    public authorsList: AuthorModel[];
}
