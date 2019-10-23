import { DiscountType } from 'src/app/enums/discountType';
import { PrintedEditionModel } from 'src/app/models/printedEditionModels/printedEditionModel';

export class DiscountModel {
    public id: number;
    public discountSize: number;
    public description: string;
    public startDate: Date;
    public expirationDate: Date;
    public discountType: DiscountType;
    public printedEditionModels: PrintedEditionModel[];

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.discountType = DiscountType.None;
        this.printedEditionModels = [];
    }
}
