import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserRequestModel } from 'src/app/models/userModels/userRequestModel';
import { UserResponseModel } from 'src/app/models/userModels/userResponseModel';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/userModels/userModel';
let UserManagementComponent = class UserManagementComponent {
    constructor(userService, modalService) {
        this.userService = userService;
        this.modalService = modalService;
        this.faPencilAlt = faPencilAlt;
        this.userRequestModel = new UserRequestModel();
        this.userResponseModel = new UserResponseModel();
        this.userModel = new UserModel();
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.userService.getUsers(this.userRequestModel).subscribe((data) => {
            this.userResponseModel = data;
        });
    }
    editUser(userModel) {
        this.userModel = userModel;
    }
    cancel() {
        this.userModel = new UserModel();
    }
    saveChanges() {
        this.userService.updateUser(this.userModel).subscribe((success) => {
            this.cancel();
            this.getUsers();
        });
    }
    openModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
            this.cancel();
            this.getUsers();
        });
    }
    changeUserStatus(userModel) {
        this.userModel = userModel;
        this.userModel.isRemoved = !this.userModel.isRemoved;
        this.saveChanges();
    }
};
UserManagementComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-management',
        templateUrl: './user-management.component.html',
        styleUrls: ['./user-management.component.css']
    })
], UserManagementComponent);
export { UserManagementComponent };
//# sourceMappingURL=user-management.component.js.map