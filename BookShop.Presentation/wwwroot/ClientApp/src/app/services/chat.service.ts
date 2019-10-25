import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as signalR from '@aspnet/signalr';
import { MessageModel } from 'src/app/models/chatModels/messageModel';
import { CurrenUserModel } from 'src/app/models/currentUserModel';
import { SignalRConnectionType } from 'src/app/enums/signalRConnectionType';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private connection: signalR.HubConnection;
  constructor() {
  }

  public async openConnection(connectionType: SignalRConnectionType) {
    const currentUser: CurrenUserModel = JSON.parse(localStorage.getItem('currentUser'));
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.serverUrl}chat`, { accessTokenFactory: () => currentUser.token })
      .build();
    await this.connection.start()
      .then(() => {
        console.log('Connection started');
      })
      .catch(error => { console.log(error); });
    if (connectionType === SignalRConnectionType.AsAdmin) {
      this.connection.invoke('ConnectAsAdmin');
    }
    if (connectionType === SignalRConnectionType.AsUser) {
      this.connection.invoke('ConnectAsUser');
    }
  }

  public closeConnection() {
    this.connection.stop();
  }

  public sendMessage(messageModel: MessageModel) {
    return this.connection.invoke('SendMessage', messageModel);
  }

  public onChatListReceive(eventListenerFunction) {
    this.connection.on('chatListReceive', eventListenerFunction);
  }
  public onChatReceive(eventListenerFunction) {
    this.connection.on('chatReceive', eventListenerFunction);
  }

  public connectToChat(chatId: number) {
    this.connection.invoke('ConnectToChat', chatId);
  }
}
