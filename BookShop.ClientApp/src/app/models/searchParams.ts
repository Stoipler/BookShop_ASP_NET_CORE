import { SortCriteria } from 'src/app/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';

export class SearchParams {
    public priceFrom: number;
    public priceTo: number;
    public sortCriteria: SortCriteria;
    public printedEditionType:PrintedEditionType;
    public page:number;
    public pageSize:number;
    public keyWord:string;

    constructor(
        ) { 
            this.keyWord='';
            this.priceFrom=0;
            this.priceTo=0;
            this.sortCriteria=SortCriteria.None;
        }
        
}