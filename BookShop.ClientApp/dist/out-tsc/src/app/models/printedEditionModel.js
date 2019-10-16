import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { Currency } from 'src/app/enums/currency';
export class PrintedEditionModel {
    constructor() {
        this.type = PrintedEditionType.None;
        this.currency = Currency.None;
        this.authorModels = [];
    }
}
//# sourceMappingURL=printedEditionModel.js.map