import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { faCartPlus, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.faCartPlus = faCartPlus;
        this.faTools = faTools;
        this.faUserCircle = faUserCircle;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('currentUser');
        location.reload();
    }
    isUserLogedOn() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map