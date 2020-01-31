import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { MessageModel } from 'src/app/models/chatModels/messageModel';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { SignalRConnectionType } from 'src/app/enums/signalRConnectionType';
import { ChatModel } from 'src/app/models/chatModels/chatModel';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {

  public chatModel: ChatModel;
  public messageModel: MessageModel;
  constructor(private chatService: ChatService, private authHelper: AuthenticationHelper) {
    this.messageModel = new MessageModel();
    this.chatModel = new ChatModel();
  }

  ngOnInit() {
    this.chatService.isConnected.then(() => {
      this.setOnReceive();
    });
  }
  public sendMessage() {
    if (this.messageModel.content !== '') {
      this.messageModel.chatId = this.chatModel.id;
      this.messageModel.userId = this.getCurrenUserId();
      this.chatService.sendMessage(this.messageModel).then(() => this.messageModel = new MessageModel());
    }
  }

  public getCurrenUserId(): number {
    const id = this.authHelper.getCurrentUserId();
    return id;
  }

  private setOnReceive() {
    this.chatService.onChatReceive((data: ChatModel) => {
      this.chatModel = data;
    });
  }
}
