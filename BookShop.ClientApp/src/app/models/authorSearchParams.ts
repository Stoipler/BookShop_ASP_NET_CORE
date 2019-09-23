import { AuthorModel } from './authorModel';

export class AuthorSearchParams{
    name: string;
    authorsList: AuthorModel[];
    constructor(){
        this.name='';
        this.authorsList=[];
    }
}