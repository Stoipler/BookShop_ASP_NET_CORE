import { SortCriteria } from 'src/app/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';

export class PrintedEditionRequestModel {
    public page: number;
    public pageSize: number;
    public keyWord: string;
    public priceTo: number;
    public priceFrom: number;
    public withPagination: boolean;
    public sortCriteria: SortCriteria;
    public printedEditionType: PrintedEditionType;

    constructor() {
        this.initializeDefaultModel();
    }

    private initializeDefaultModel() {
        this.page = 1;
        this.pageSize = 6;
        this.keyWord = '';
        this.priceTo = 0;
        this.priceFrom = 0;
        this.withPagination = true;
        this.sortCriteria = SortCriteria.None;
        this.printedEditionType = PrintedEditionType.None;
    }
}
