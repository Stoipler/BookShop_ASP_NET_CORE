import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { Currency } from 'src/app/enums/currency';
import { AuthorModel } from 'src/app/models/authorModels/authorModel';

export class PrintedEditionModel {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public isRemoved: boolean;
    public type: PrintedEditionType;
    public currency: Currency;
    public authorModels: AuthorModel[];

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.type = PrintedEditionType.None;
        this.currency = Currency.None;
        this.authorModels = [];
        this.price = 0;
    }
}
