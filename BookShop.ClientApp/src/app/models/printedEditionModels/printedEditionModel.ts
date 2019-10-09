import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { Currency } from 'src/app/enums/currency';
import { AuthorModel } from 'src/app/models/authorModel';

export class PrintedEditionModel {
    id: number;
    name: string;
    description: string;
    price: number;
    isRemoved: boolean;
    type: PrintedEditionType;
    currency: Currency;
    authorModels: AuthorModel[];

    constructor() {

        this.type = PrintedEditionType.None as number;
        this.currency = Currency.None as number;
        this.authorModels = [];
    }
}