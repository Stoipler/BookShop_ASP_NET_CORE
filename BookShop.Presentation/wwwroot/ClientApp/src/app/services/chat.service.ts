import { Injectable, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as signalR from '@aspnet/signalr';
import { MessageModel } from 'src/app/models/chatModels/messageModel';
import { CurrenUserModel } from 'src/app/models/currentUserModel';
import { ChatModel } from 'src/app/models/chatModels/chatModel';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public connection: signalR.HubConnection;
  public isConnected;

  constructor(private authHelper: AuthenticationHelper) {
    this.isConnected = this.openConnection();
  }

  private async openConnection() {
    if (this.authHelper.isLogedOn()) {
      const currentUser: CurrenUserModel = JSON.parse(localStorage.getItem('currentUser'));
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl(`${environment.serverUrl}chat`, { accessTokenFactory: () => currentUser.token })
        .build();
      await this.connection.start()
        .then(() => {
          console.log('Connection started');
        })
        .catch(error => { console.log(error); });
      if (this.authHelper.isAdmin()) {
        this.connection.invoke('ConnectAsAdmin');
      }
      if (this.authHelper.isOrdinaryUser()) {
        this.connection.invoke('ConnectAsUser');
      }
    }
  }

  public closeConnection() {
    this.connection.stop();
  }

  public sendMessage(messageModel: MessageModel) {
    if (messageModel.content !== '') {
      return this.connection.invoke('SendMessage', messageModel);
    }
  }

  public async onChatListReceive(eventListenerFunction) {

    this.connection.invoke('GetChatsList');
    this.connection.on('chatListReceive', eventListenerFunction);
  }
  public onChatReceive(eventListenerFunction) {
    this.connection.on('chatReceive', eventListenerFunction);
  }

  public connectToChat(chatId: number) {
    this.connection.invoke('ConnectToChat', chatId);
  }
  public updateChatStatus(chatModel: ChatModel) {
    this.connection.invoke('UpdateChatStatus', chatModel);
  }
}
