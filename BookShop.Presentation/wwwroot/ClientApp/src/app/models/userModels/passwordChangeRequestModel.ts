export class PasswordChangeRequestModel {
    currentPassword: string;
    newPassword: string;
    newPasswordConfirmation: string;

    constructor() {
        this.currentPassword = '';
        this.newPassword = '';
        this.newPasswordConfirmation = '';
    }
}