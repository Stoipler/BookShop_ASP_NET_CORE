import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ChatListModel } from 'src/app/models/chatModels/chatListModel';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

@Component({
  selector: 'app-chat-management',
  templateUrl: './chat-management.component.html',
  styleUrls: ['./chat-management.component.css']
})
export class ChatManagementComponent implements OnInit {
  public chatListModel: ChatListModel;
  constructor(private chatService: ChatService, private authHelper: AuthenticationHelper) {
    this.chatListModel = new ChatListModel();
  }

  ngOnInit() {
    this.chatService.isConnected.then(
      () => {
        this.chatService.onChatListReceive((data: ChatListModel) => {
          this.chatListModel = data;
        });
      }
    );
  }

  public getCurrentUserId() {
    return this.authHelper.getCurrentUserId();
  }
}

