import { DiscountModel } from 'src/app/models/discountModels/discountModel';

export class DiscountResponseModel {
    public count: number;
    public discountModels: DiscountModel[];

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.discountModels = [];
    }
}