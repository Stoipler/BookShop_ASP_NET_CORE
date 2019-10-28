import { ChatModel } from 'src/app/models/chatModels/chatModel';

export class ChatListModel {
    public uncheckedChatsCount: number;
    public chatModels: ChatModel[];

    constructor() {
        this.initializeDefaultModel();
    }
    private initializeDefaultModel() {
        this.chatModels = [];
    }
}