import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserProfileModel } from 'src/app/models/userProfileModel';
import { UserService } from 'src/app/services/user.service';
let ProfileComponent = class ProfileComponent {
    constructor(userService) {
        this.userService = userService;
        this.faUserCircle = faUserCircle;
        this.isOnEditing = false;
        this.user = new UserProfileModel();
    }
    ngOnInit() {
        this.loadUserProfile();
    }
    loadUserProfile() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userParam = JSON.parse(localStorage.getItem('currentUser'));
            const result = yield this.userService.getUser(userParam.id);
            this.user = result;
        });
    }
    setEditorMode() {
        this.isOnEditing = !(this.isOnEditing);
    }
    updateUserProfile() {
        this.userService.updateUser(this.user).subscribe();
        this.setEditorMode();
    }
    cancel() {
        this.loadUserProfile();
        this.setEditorMode();
    }
};
ProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css'],
        providers: [UserService]
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map