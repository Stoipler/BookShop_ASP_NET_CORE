import { MessageModel } from 'src/app/models/chatModels/messageModel';

export class ChatModel {
    public id: number;
    public name: string;
    public messageModels: MessageModel[];

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.messageModels = [];
    }
}