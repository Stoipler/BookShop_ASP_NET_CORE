import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserResponseModel } from 'src/app/models/userModels/userResponseModel';
import { UserRequestModel } from 'src/app/models/userModels/userRequestModel';
import { UserModel } from 'src/app/models/userModels/userModel';
import { UserProfileResponseModel } from 'src/app/models/userModels/userProfileResponseModel';
import { UserProfileRequestModel } from 'src/app/models/userModels/userProfileRequestModel';
import { PasswordChangeRequestModel } from 'src/app/models/userModels/passwordChangeRequestModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUsers(requestModel: UserRequestModel): Observable<UserResponseModel> {
    return this.http.post<UserResponseModel>(environment.apiUrl + 'User/GetUsers', requestModel);
  }
  updateUser(requestModel: UserModel) {
    return this.http.post(environment.apiUrl + 'User/UpdateUser', requestModel);
  }
  getUserProfile() {
    return this.http.get<UserProfileResponseModel>(environment.apiUrl + 'User/GetUserProfile');
  }
  updateUserProfile(requestModel: UserProfileRequestModel) {
    return this.http.post(environment.apiUrl + 'User/UpdateUserProfile', requestModel);
  }
  changeUserPassword(requestModel: PasswordChangeRequestModel) {
    return this.http.post(environment.apiUrl + 'User/ChangeUserPassword', requestModel);
  }
}
