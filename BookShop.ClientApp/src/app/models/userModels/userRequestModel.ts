export class UserRequestModel {
    page: number;
    pageSize: number;
    keyWord: string;
    constructor() {
        this.page = 1;
        this.pageSize = 10;
        this.keyWord = '';
    }
}