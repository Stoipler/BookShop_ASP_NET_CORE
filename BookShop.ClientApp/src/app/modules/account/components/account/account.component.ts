import { Component, OnInit } from '@angular/core';
import {faUserCircle, faAtom} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  faUserCircle=faUserCircle;
  faAtom=faAtom;
  constructor() { }

  ngOnInit() {
  }

}
