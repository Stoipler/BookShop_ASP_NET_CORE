import { Component, OnInit } from '@angular/core';
import { faCartPlus, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { stringify } from 'querystring';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCartPlus = faCartPlus;
  faTools = faTools;
  faUserCircle = faUserCircle;
  constructor(private authHelper: AuthenticationHelper) { }

  ngOnInit() {
  }
  logout() {
    this.authHelper.logout();
  }
  isLogedOn(): boolean {
    return this.authHelper.isLogedOn();
  }
  isAdmin(): boolean {
    return this.authHelper.isAdmin();
  }
  currentUserName(): string {
    const user: { firstName: string } = JSON.parse(localStorage.getItem('currentUser'));
    return user.firstName;
  }


}
