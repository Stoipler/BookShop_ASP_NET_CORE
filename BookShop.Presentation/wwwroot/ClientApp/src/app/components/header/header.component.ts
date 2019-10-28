import { Component, OnInit } from '@angular/core';
import { faCartPlus, faTools, faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { ChatService } from 'src/app/services/chat.service';
import { ChatListModel } from 'src/app/models/chatModels/chatListModel';
import { SignalRConnectionType } from 'src/app/enums/signalRConnectionType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public faCartPlus = faCartPlus;
  public faTools = faTools;
  public faUserCircle = faUserCircle;
  public faBell = faBell;

  public uncheckedChatsCount: number;

  constructor(private authHelper: AuthenticationHelper, private chatService: ChatService) {
  }

  ngOnInit() {
    if (this.authHelper.isLogedOn()) {
      this.chatService.isConnected.then(() => {
        this.chatService.onChatListReceive((data: ChatListModel) => {
          this.uncheckedChatsCount = data.uncheckedChatsCount;
        });
      });
    }
  }

  public logout() {
    this.authHelper.logout();
  }
  public isLogedOn(): boolean {
    return this.authHelper.isLogedOn();
  }
  public isOrdinaryUser() {
    return this.authHelper.isOrdinaryUser();
  }
  public isAdmin(): boolean {
    return this.authHelper.isAdmin();
  }
  public currentUserName(): string {
    const user: { firstName: string } = JSON.parse(localStorage.getItem('currentUser'));
    return user.firstName;
  }
}
