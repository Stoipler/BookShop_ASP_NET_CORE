import { SortCriteria } from 'src/app/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';

export class PrintedEditionRequestModel {
    page: number;
    pageSize: number;
    keyWord: string;
    priceTo: number;
    priceFrom: number;
    sortCriteria: SortCriteria;
    printedEditionType: PrintedEditionType;

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