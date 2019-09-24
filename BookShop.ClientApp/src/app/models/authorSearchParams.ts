import { AuthorModel } from 'src/app/models/authorModel';

export class AuthorSearchParams{
    name: string;
    authorsList: AuthorModel[];
    constructor(){
        this.name='';
        this.authorsList=[];
    }
}