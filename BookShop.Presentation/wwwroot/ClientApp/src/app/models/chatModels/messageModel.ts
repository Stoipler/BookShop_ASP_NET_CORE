import { UserModel } from 'src/app/models/userModels/userModel';

export class MessageModel {
    public content: string;
    public userId: number;
    public chatId: number;
    public userModel: UserModel;
    public creationDate: Date;

    constructor() {
        this.initializeDefaultModel();
    }
    private initializeDefaultModel() {
        this.content = '';
        this.userModel = new UserModel();
    }
}
