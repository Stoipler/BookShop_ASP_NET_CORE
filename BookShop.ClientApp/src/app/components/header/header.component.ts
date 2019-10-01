import { Component, OnInit } from '@angular/core';
import { faCartPlus,faTools, faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCartPlus=faCartPlus;
  faTools=faTools;
  faUserCircle=faUserCircle;
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
