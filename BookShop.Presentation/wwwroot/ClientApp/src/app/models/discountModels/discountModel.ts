import { DiscountType } from 'src/app/enums/discountType';

export class DiscountModel {
    public id: number;
    public discountSize: number;
    public startDate: Date;
    public expirationDate: Date;
    public discountType: DiscountType;

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.discountType = DiscountType.None;
    }
}
