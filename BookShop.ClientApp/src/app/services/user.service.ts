import { Injectable } from '@angular/core';
import { UserProfileModel } from 'src/app/models/userProfileModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  async getUser(id: number): Promise<UserProfileModel> {
    return await this.http.get<UserProfileModel>(environment.apiUrl + 'user/getbyid/' + id).toPromise();
  }
  updateUser(user: UserProfileModel) { 
    return this.http.post(environment.apiUrl + 'user/update', user);
  }
}
