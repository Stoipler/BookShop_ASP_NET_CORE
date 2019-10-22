import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router, private authHelper: AuthenticationHelper) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authHelper.isLogedOn()) {
            return true;
        }
        this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
