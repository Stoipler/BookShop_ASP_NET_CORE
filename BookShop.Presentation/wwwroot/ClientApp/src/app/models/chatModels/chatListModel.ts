import { ChatModel } from 'src/app/models/chatModels/chatModel';

export class ChatListModel {
    public chatModels: ChatModel[];

    constructor() {
        this.initializeDefaultModel();
    }
    private initializeDefaultModel() {
        this.chatModels = [];
    }
}