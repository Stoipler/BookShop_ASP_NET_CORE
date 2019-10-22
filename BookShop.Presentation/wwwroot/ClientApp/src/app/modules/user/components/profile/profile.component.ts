import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { UserProfileResponseModel } from 'src/app/models/userModels/userProfileResponseModel';
import { UserProfileRequestModel } from 'src/app/models/userModels/userProfileRequestModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordChangeRequestModel } from 'src/app/models/userModels/passwordChangeRequestModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})

export class ProfileComponent implements OnInit {
  public faUserCircle = faUserCircle;
  public isOnEditing: boolean;
  public userProfileRequestModel: UserProfileRequestModel;
  public passwordChangeRequestModel: PasswordChangeRequestModel;

  constructor(private modalService: NgbModal, private userService: UserService) {
    this.userProfileRequestModel = new UserProfileRequestModel();
    this.passwordChangeRequestModel = new PasswordChangeRequestModel();
    this.isOnEditing = false;
  }

  ngOnInit() {
    this.getProfile();
  }

  public getProfile() {
    this.userService.getUserProfile().subscribe(
      (response: UserProfileResponseModel) => {
        this.userProfileRequestModel = new UserProfileRequestModel();
        this.userProfileRequestModel.id = response.id;
        this.userProfileRequestModel.firstName = response.firstName;
        this.userProfileRequestModel.lastName = response.lastName;
        this.userProfileRequestModel.isRemoved = response.isRemoved;
        this.userProfileRequestModel.email = response.email;
      }
    );
  }

  public updateProfile() {
    this.userService.updateUserProfile(this.userProfileRequestModel).subscribe(
      (success) => {
        this.getProfile();
      }
    );
  }

  public changeEditorMode() {
    this.isOnEditing = !this.isOnEditing;
  }

  public changePassword() {
    this.userService.changeUserPassword(this.passwordChangeRequestModel).subscribe(
      (success) => {
        this.modalService.dismissAll();
      }
    );
  }

  public openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then(
      (result) => {
        this.passwordChangeRequestModel = new PasswordChangeRequestModel();
      },
      (reason) => {
        this.passwordChangeRequestModel = new PasswordChangeRequestModel();
      });
  }
}
