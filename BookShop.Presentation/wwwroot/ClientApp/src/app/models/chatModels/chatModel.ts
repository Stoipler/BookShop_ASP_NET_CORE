import { MessageModel } from 'src/app/models/chatModels/messageModel';

export class ChatModel {
    public id: number;
    public name: string;
    public lastMessageModel: MessageModel;
    public messageModels: MessageModel[];
    public isCheckedByAdmin: boolean;

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.messageModels = [];
        this.lastMessageModel = new MessageModel();
    }
}