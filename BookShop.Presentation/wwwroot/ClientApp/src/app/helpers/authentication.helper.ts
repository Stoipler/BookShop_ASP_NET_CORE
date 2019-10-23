import { Injectable } from '@angular/core';
import { SignInResponseModel } from 'src/app/models/accountModels/signInResponseModel';

@Injectable({ providedIn: 'root' })
export class AuthenticationHelper {
    public isLogedOn(): boolean {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return true;
        }
        return false;
    }
    public isAdmin(): boolean {
        const currentUser: { token: string } = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const decodedToken = atob(currentUser.token.split('.')[1]);
            const userClaims: { unique_name: string, role: string } = JSON.parse(decodedToken);
            if (userClaims.role === 'admin') {
                return true;
            }
        }
        return false;
    }
    public logout() {
        localStorage.removeItem('currentUser');
        location.reload();
    }
    public setCurrentUser(model: SignInResponseModel) {
        const user: SignInResponseModel = new SignInResponseModel();
        user.token = model.token;
        user.firstName = model.firstName;
        localStorage.removeItem('cart');
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
}