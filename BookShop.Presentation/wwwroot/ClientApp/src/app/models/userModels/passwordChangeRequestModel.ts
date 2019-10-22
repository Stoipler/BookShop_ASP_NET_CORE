export class PasswordChangeRequestModel {
    public currentPassword: string;
    public newPassword: string;
    public newPasswordConfirmation: string;

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.currentPassword = '';
        this.newPassword = '';
        this.newPasswordConfirmation = '';
    }
}
