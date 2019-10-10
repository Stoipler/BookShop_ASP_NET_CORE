import { UserModel } from 'src/app/models/userModels/userModel';

export class UserResponseModel {
    count: number;
    userModels: UserModel[];
}