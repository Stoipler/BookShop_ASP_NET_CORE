import { SortCriteria } from '../enums/sortCriteria';

export class SearchParams {
    public priceFrom: number;
    public priceTo: number;
    public sortCriteria: SortCriteria;
    public page:number;
    public pageSize:number;

    constructor(
        ) { 
            this.priceFrom=0;
            this.priceTo=0;
            this.sortCriteria=SortCriteria.None;
        }
        
}