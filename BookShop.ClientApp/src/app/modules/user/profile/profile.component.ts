import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserProfileModel } from 'src/app/models/userProfileModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  faUserCircle = faUserCircle;
  isOnEditing: boolean = false;
  user: UserProfileModel =new UserProfileModel();
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.loadUserProfile();
  }
  async loadUserProfile() {
    const userParam: UserProfileModel= JSON.parse(localStorage.getItem('currentUser'));
    const result= await this.userService.getUser(userParam.id);
    this.user=result;
  }
  setEditorMode(){
    this.isOnEditing=!(this.isOnEditing);
  }
  updateUserProfile(){
    this.userService.updateUser(this.user).subscribe();
    this.setEditorMode();
  }
  cancel(){
    this.loadUserProfile();
    this.setEditorMode();
  }
}
