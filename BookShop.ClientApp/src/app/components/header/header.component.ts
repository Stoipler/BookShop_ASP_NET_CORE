import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('currentUser');
    location.reload();
  }
  isUserLogedOn():boolean{
    if(localStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }

}
