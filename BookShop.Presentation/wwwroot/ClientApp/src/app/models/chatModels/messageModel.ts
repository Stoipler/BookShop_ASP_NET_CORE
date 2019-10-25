export class MessageModel {
    public content: string;
    public userId: number;
    public chatId: number;
    public creationDate: Date;

    constructor() {
        this.initializeDefaultModel();
    }
    private initializeDefaultModel() {
        this.content = '';
    }
}
