import { PrintedEditionType } from '../enums/printedEditionType';
import { Currency } from '../enums/currency';
import { AuthorModel } from 'src/app/models/authorModel';

export class PrintedEditionModel {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public type: PrintedEditionType;
    public currency: Currency;
    public authorModels: AuthorModel[];

    constructor() {

        this.type = PrintedEditionType.None as number;
        this.currency= Currency.None as number;
        this.authorModels=[];
    }
}