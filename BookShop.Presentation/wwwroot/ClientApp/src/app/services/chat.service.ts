import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as signalR from '@aspnet/signalr';
import { MessageModel } from 'src/app/models/chatModels/messageModel';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private connection: signalR.HubConnection;
  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.serverUrl}chat`)
      .build();
    this.connection.start()
      .then(() => {
        console.log('Connection started');
      })
      .catch(error => { console.log(error); });
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
}
