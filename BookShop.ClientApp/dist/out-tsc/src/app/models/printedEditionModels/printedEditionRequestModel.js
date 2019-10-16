import { SortCriteria } from 'src/app/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';
export class PrintedEditionRequestModel {
    constructor() {
        this.page = 1;
        this.pageSize = 6;
        this.keyWord = '';
        this.priceTo = 0;
        this.priceFrom = 0;
        this.sortCriteria = SortCriteria.None;
        this.printedEditionType = PrintedEditionType.None;
    }
}
//# sourceMappingURL=printedEditionRequestModel.js.map