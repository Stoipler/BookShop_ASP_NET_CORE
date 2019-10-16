import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { PrintedEditionResponseModel } from 'src/app/models/printedEditionModels/printedEditionResponseModel';
import { PrintedEditionRequestModel } from 'src/app/models/printedEditionModels/printedEditionRequestModel';
import { SortCriteria } from 'src/app/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { Currency } from 'src/app/enums/currency';
let PrintedEditionsComponent = class PrintedEditionsComponent {
    constructor(modalService, printedEditionService) {
        this.modalService = modalService;
        this.printedEditionService = printedEditionService;
        this.Currency = Currency;
        this.SortCriteria = SortCriteria;
        this.PrintedEditionType = PrintedEditionType;
        this.printedEditionsRequestModel = new PrintedEditionRequestModel();
        this.printedEditionsResponseModel = new PrintedEditionResponseModel();
        this.filterForm = new FilterForm();
    }
    ngOnInit() {
        this.getPrintedEditions();
    }
    getPrintedEditions() {
        this.printedEditionService.getPrintedEditions(this.printedEditionsRequestModel).subscribe((data) => {
            this.printedEditionsResponseModel = data;
        });
    }
    setSearchParameters() {
        this.printedEditionsRequestModel.priceFrom = this.filterForm.priceFrom;
        this.printedEditionsRequestModel.priceTo = this.filterForm.priceTo;
        this.printedEditionsRequestModel.printedEditionType = this.filterForm.printedEditionType;
        this.printedEditionsRequestModel.sortCriteria = this.filterForm.sortCriteria;
        this.getPrintedEditions();
    }
    enumMap(typeEnum, defaultOptionText) {
        let keys = Object.keys(typeEnum);
        let startIndexWithoutDefault = (keys.length / 2) + 1;
        keys = keys.slice(startIndexWithoutDefault);
        let items = new Array();
        items.push(new EnumParams(0, defaultOptionText));
        keys.forEach(function (value, index) {
            let item = new EnumParams((index + 1), value);
            items.push(item);
        });
        return items;
    }
};
PrintedEditionsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-printed-editions',
        templateUrl: './printed-editions.component.html',
        styleUrls: ['./printed-editions.component.css'],
        providers: [PrintedEditionService]
    })
], PrintedEditionsComponent);
export { PrintedEditionsComponent };
class FilterForm {
    constructor() {
        this.priceFrom = 0;
        this.priceTo = 0;
        this.sortCriteria = SortCriteria.None;
        this.printedEditionType = PrintedEditionType.None;
    }
}
class EnumParams {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
//# sourceMappingURL=printed-editions.component.js.map