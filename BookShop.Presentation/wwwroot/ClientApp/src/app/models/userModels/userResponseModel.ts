import { UserModel } from 'src/app/models/userModels/userModel';

export class UserResponseModel {
    public count: number;
    public userModels: UserModel[];

    constructor() {
        this.initializeDefaulltModel();
    }

    private initializeDefaulltModel() {
        this.count = 0;
        this.userModels = [];
    }
}
