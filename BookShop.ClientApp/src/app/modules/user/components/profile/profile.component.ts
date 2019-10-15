import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserProfileModel } from 'src/app/models/userProfileModel';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/userModels/userModel';
import { UserProfileResponseModel } from 'src/app/models/userModels/userProfileResponseModel';
import { UserProfileRequestModel } from 'src/app/models/userModels/userProfileRequestModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  faUserCircle = faUserCircle;
  isOnEditing: boolean;
  userProfileRequestModel: UserProfileRequestModel;

  constructor(private userService: UserService) {
    this.userProfileRequestModel = new UserProfileRequestModel();
    this.isOnEditing = false;
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
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
  updateProfile() {
    this.userService.updateUserProfile(this.userProfileRequestModel).subscribe(
      (success) => {
        this.getProfile();
      }
    );
  }
  changeEditorMode() {
    this.isOnEditing = !this.isOnEditing;
  }
}
