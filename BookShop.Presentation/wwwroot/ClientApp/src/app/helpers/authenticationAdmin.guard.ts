import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

@Injectable({ providedIn: 'root' })
export class AuthenticationAdminGuard implements CanActivate {
    constructor(private router: Router, private authHelper: AuthenticationHelper) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authHelper.isLogedOn()) {
            if (!this.authHelper.isAdmin()) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}