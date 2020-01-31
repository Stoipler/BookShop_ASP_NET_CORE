import { Component, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
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
export class ChatRoomComponent implements OnInit, OnDestroy {

  public chatModel: ChatModel;
  public messageModel: MessageModel;
  private markAsReadInterval;
  constructor(private chatService: ChatService, private route: ActivatedRoute, private authHelper: AuthenticationHelper) {
    this.messageModel = new MessageModel();
    this.chatModel = new ChatModel();
  }

  ngOnInit() {
    this.chatService.isConnected.then(() => {
      this.connectToChat();
      this.setOnReceive();
    });
    this.markAsReadInterval = setInterval(() => {
      this.markAsRead();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.markAsReadInterval);
  }

  public sendMessage() {
    this.messageModel.chatId = this.chatModel.id;
    this.messageModel.userId = this.getCurrenUserId();
    this.chatService.sendMessage(this.messageModel).then(() => {
      this.messageModel = new MessageModel();
      this.markAsRead();
    });
  }

  public getCurrenUserId(): number {
    const id = this.authHelper.getCurrentUserId();
    return id;
  }

  private markAsRead() {
    this.chatModel.isCheckedByAdmin = true;
    this.chatService.updateChatStatus(this.chatModel);
  }
  private connectToChat() {
    this.route.paramMap.subscribe(params => {
      this.chatService.connectToChat(+params.get('chatId'));
    });

  }
  private setOnReceive() {
    this.chatService.onChatReceive((data: ChatModel) => {
      this.chatModel = data;
    });
  }

}
