import { UserModel } from 'src/app/models/userModels/userModel';

export class UserProfileRequestModel extends UserModel {
    currentPassword: string;
    password: string;
    passwordConfirmation: string;

    constructor() {
        super();
        this.currentPassword = '';
        this.password = '';
        this.passwordConfirmation = '';
    }
}