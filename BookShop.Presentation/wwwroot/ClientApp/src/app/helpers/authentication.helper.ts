import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationHelper {
    isLogedOn(): boolean {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return true;
        }
        return false;
    }
    isAdmin(): boolean {
        const currentUser: { token: string } = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const decodedToken = atob(currentUser.token.split('.')[1]);
            const userClaims: { unique_name: string, role: string } = JSON.parse(decodedToken);
            if (userClaims.role === "admin") {
                return true;
            }
        }
        return false;
    }
    logout() {
        localStorage.removeItem('currentUser');
        location.reload();
    }
}