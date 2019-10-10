import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserRequestModel } from 'src/app/models/userModels/userRequestModel';
import { UserResponseModel } from 'src/app/models/userModels/userResponseModel';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userRequestModel:UserRequestModel;
  userResponseModel:UserResponseModel;
  constructor(private userService:UserService) {

    this.userRequestModel=new UserRequestModel();
    this.userResponseModel=new UserResponseModel();
   }

  ngOnInit() {
  }

}
