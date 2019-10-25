import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { SignalRConnectionType } from 'src/app/enums/signalRConnectionType';
import { ActivatedRoute } from '@angular/router';
import { ChatModel } from 'src/app/models/chatModels/chatModel';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { MessageModel } from 'src/app/models/chatModels/messageModel';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  public chatModel: ChatModel;
  public messageModel: MessageModel;
  constructor(private chatService: ChatService, private route: ActivatedRoute, private authHelper: AuthenticationHelper) {
    this.messageModel = new MessageModel();
    this.chatModel = new ChatModel();
  }

  ngOnInit() {
    this.connectToChat();
    this.setOnReceive();
  }

  public sendMessage() {
    this.messageModel.chatId = this.chatModel.id;
    this.messageModel.userId = this.getCurrenUserId();
    this.chatService.sendMessage(this.messageModel).then(() => this.messageModel = new MessageModel());
  }

  public getCurrenUserId(): number {
    const id = this.authHelper.getCurrentUserId();
    return id;
  }

  private connectToChat() {
    this.chatService.openConnection(SignalRConnectionType.AsAdmin).then((success) => {
      this.route.paramMap.subscribe(params => {
        this.chatService.connectToChat(+params.get('chatId'));
      });
    });
  }
  private setOnReceive() {
    this.chatService.onChatReceive((data: ChatModel) => {
      this.chatModel = data;
    });
  }
}
