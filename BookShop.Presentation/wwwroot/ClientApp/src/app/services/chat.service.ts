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
  constructor(connectionType: SignalRConnectionType) {
    this.openConnection(connectionType);
  }




  public closeConnection() {
    this.connection.stop();
  }
  public sendMessage(message: MessageModel) {
    this.connection.invoke('SendMessage', message);

  }
  public onMessageWaiting(eventListenerFunction) {
    this.connection.on('messageRecieve', eventListenerFunction);
  }

  private openConnection(connectionType: SignalRConnectionType) {
    const currentUser: CurrenUserModel = JSON.parse(localStorage.getItem('currentUser'));
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.serverUrl}chat`, { accessTokenFactory: () => currentUser.token })
      .build();
    this.connection.start()
      .then(() => {
        console.log('Connection started');
        if (connectionType === SignalRConnectionType.AsUser) {
          this.connection.invoke('ConnectAsUser');
        }
        if (connectionType === SignalRConnectionType.AsAdmin) {

        }
      })
      .catch(error => { console.log(error); });
  }
}
