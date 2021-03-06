import { Injectable } from '@angular/core';
import { SignInResponseModel } from 'src/app/models/accountModels/signInResponseModel';
import { ChatService } from 'src/app/services/chat.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationHelper {

    constructor() {
    }

    public isLogedOn() {
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
    public isOrdinaryUser(): boolean {
        const currentUser: { token: string } = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const decodedToken = atob(currentUser.token.split('.')[1]);
            const userClaims: { unique_name: string, role: string } = JSON.parse(decodedToken);
            if (userClaims.role !== 'admin') {
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
        user.id = model.id;
        user.token = model.token;
        user.firstName = model.firstName;
        localStorage.removeItem('cart');
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    public getCurrentUserName(): string {
        const currentUser: SignInResponseModel = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.firstName;
    }
    public getCurrentUserId(): number {
        const currentUser: SignInResponseModel = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.id;
    }
}
