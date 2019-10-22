import { Component, OnInit } from '@angular/core';
import { faCartPlus, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public faCartPlus = faCartPlus;
  public faTools = faTools;
  public faUserCircle = faUserCircle;
  constructor(private authHelper: AuthenticationHelper) { }

  ngOnInit() {
  }

  public logout() {
    this.authHelper.logout();
  }

  public isLogedOn(): boolean {
    return this.authHelper.isLogedOn();
  }

  public isAdmin(): boolean {
    return this.authHelper.isAdmin();
  }

  public currentUserName(): string {
    const user: { firstName: string } = JSON.parse(localStorage.getItem('currentUser'));
    return user.firstName;
  }
}
