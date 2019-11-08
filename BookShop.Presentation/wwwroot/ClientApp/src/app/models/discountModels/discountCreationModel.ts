import { DiscountModel } from 'src/app/models/discountModels/discountModel';
import { PrintedEditionModel } from 'src/app/models/printedEditionModels/printedEditionModel';

export class DiscountCreationModel {
    public discountModel: DiscountModel;
    public printedEditionModels: PrintedEditionModel[];

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.discountModel = new DiscountModel();
        this.printedEditionModels = [];
    }
}