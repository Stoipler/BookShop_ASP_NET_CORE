import { SortCriteria } from 'src/app/enums/sortCriteria';
export class SearchParams {
    constructor() {
        this.keyWord = '';
        this.priceFrom = 0;
        this.priceTo = 0;
        this.sortCriteria = SortCriteria.None;
    }
}
//# sourceMappingURL=searchParams.js.map