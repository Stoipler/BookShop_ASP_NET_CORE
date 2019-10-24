export class MessageModel {
    public senderName: string;
    public message: string;
    public creationDate: Date;

    constructor() {
        this.initializeDefaultModel();
    }
    private initializeDefaultModel() {
        this.senderName = '';
        this.message = '';
    }
}
