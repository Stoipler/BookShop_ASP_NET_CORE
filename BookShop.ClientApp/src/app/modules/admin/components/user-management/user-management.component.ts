import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserRequestModel } from 'src/app/models/userModels/userRequestModel';
import { UserResponseModel } from 'src/app/models/userModels/userResponseModel';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from 'src/app/models/userModels/userModel';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userRequestModel: UserRequestModel;
  userResponseModel: UserResponseModel;
  userModel: UserModel;
  faPencilAlt = faPencilAlt;
  constructor(private userService: UserService,
    private modalService: NgbModal) {

    this.userRequestModel = new UserRequestModel();
    this.userResponseModel = new UserResponseModel();
    this.userModel = new UserModel();
  }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers(this.userRequestModel).subscribe(
      (data: UserResponseModel) => {
        this.userResponseModel = data;
      }
    );
  }
  editUser(userModel: UserModel) {
    this.userModel = userModel;
  }
  cancel() {
    this.userModel = new UserModel();
  }

  saveChanges() {
    this.userService.updateUser(this.userModel).subscribe(
      (success) => {
        this.cancel();
        this.getUsers();
      });
  }
  openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
      }, (reason) => {
        this.cancel();
        this.getUsers();
      });
  }
  changeUserStatus(userModel: UserModel) {
    this.userModel = userModel;
    this.userModel.isRemoved = !this.userModel.isRemoved;
    this.userService.updateUser(this.userModel).subscribe(
      (success) => {
        this.cancel();
      });
  }
}
