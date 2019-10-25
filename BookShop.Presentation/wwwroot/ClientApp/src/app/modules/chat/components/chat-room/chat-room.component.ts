import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { MessageModel } from 'src/app/models/chatModels/messageModel';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { SignalRConnectionType } from 'src/app/enums/signalRConnectionType';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  public message: MessageModel;
  public messages: MessageModel[];
  private chatService: ChatService;
  constructor(private authenticationHelper: AuthenticationHelper) {
    this.chatService = new ChatService(SignalRConnectionType.AsUser);
    this.message = new MessageModel();
    this.messages = [];
  }

  ngOnInit() {
    this.chatService.onMessageWaiting((message: MessageModel) => {
      this.messages.push(message);
    });
  }

  public sendMessage() {
    this.message.senderName = this.getCurrentUserName();
    this.message.creationDate = new Date();
    this.chatService.sendMessage(this.message);
    this.message = new MessageModel();
  }

  public getCurrentUserName(): string {
    const name = this.authenticationHelper.getCurrentUserName();
    return name;
  }

}
