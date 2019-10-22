export class UserRequestModel {
    public page: number;
    public pageSize: number;
    public keyWord: string;

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.page = 1;
        this.pageSize = 10;
        this.keyWord = '';
    }
}
