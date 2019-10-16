import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SearchParams } from 'src/app/models/searchParams';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
import { SortCriteria } from 'src/app/enums/sortCriteria';
import { Currency } from 'src/app/enums/currency';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { AuthorSearchParams } from 'src/app/models/authorSearchParams';
let ProductManagementComponent = class ProductManagementComponent {
    constructor(modalService, productManagementService, authorService, config) {
        this.modalService = modalService;
        this.productManagementService = productManagementService;
        this.authorService = authorService;
        this.config = config;
        this.printedEdition = new PrintedEditionModel();
        this.searchParams = new SearchParams();
        this.parametersSetting = new ParametersSetting();
        this.faPencilAlt = faPencilAlt;
        this.sortCriteria = SortCriteria;
        this.currency = Currency;
        this.faBookDead = faBookDead;
        this.faPlusCircle = faPlusCircle;
        this.faTimes = faTimes;
        this.printedEditionType = PrintedEditionType;
        this.authorSearchParams = new AuthorSearchParams();
        config.autoClose = false;
    }
    ngOnInit() {
        this.searchParams.pageSize = 10;
        this.loadPrintedEditions();
        this.parametersSetting.sortCriteria = SortCriteria.None;
    }
    editPrintedEdition(p) {
        this.printedEdition = p;
    }
    addAuthorToList(author) {
        this.printedEdition.authorModels.push(author);
        this.loadAuthors();
    }
    removeFromList(author) {
        this.printedEdition.authorModels.splice(this.authorSearchParams.authorsList.indexOf(author), 1);
        this.loadAuthors();
    }
    loadAuthors() {
        this.authorSearchParams.authorsList = this.printedEdition.authorModels;
        this.authorService.getAuthors(this.authorSearchParams).subscribe((data) => {
            this.authors = data;
        });
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
    open(content) {
        this.loadAuthors();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.loadPrintedEditions();
        }, (reason) => {
            this.cancel();
            this.loadPrintedEditions();
        });
    }
    cancel() {
        this.printedEdition = new PrintedEditionModel();
    }
    save() {
        if (!this.printedEdition.id) {
            this.productManagementService.createPrintedEdition(this.printedEdition)
                .subscribe((data) => this.loadPrintedEditions());
        }
        else {
            this.productManagementService.updatePrintedEdition(this.printedEdition)
                .subscribe(data => this.loadPrintedEditions());
        }
        this.cancel();
    }
    loadPrintedEditions() {
        this.productManagementService.get(this.searchParams)
            .subscribe((data) => {
            this.printedEditions = data.printedEditionModels;
            this.currentPage = data.currentPage;
            this.pageSize = data.pageSize;
            this.count = data.count;
        });
    }
    goTo() {
        this.searchParams.page = this.currentPage;
        this.productManagementService.get(this.searchParams)
            .subscribe((data) => {
            this.printedEditions = data.printedEditionModels;
            this.currentPage = data.currentPage;
            this.pageSize = data.pageSize;
            this.count = data.count;
        });
    }
    setSearchParams() {
        this.searchParams.priceFrom = this.parametersSetting.priceFrom;
        this.searchParams.priceTo = this.parametersSetting.priceTo;
        this.searchParams.printedEditionType = this.parametersSetting.printedEditionType;
        this.searchParams.sortCriteria = this.parametersSetting.sortCriteria;
        this.loadPrintedEditions();
    }
};
ProductManagementComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-management',
        templateUrl: './product-management.component.html',
        styleUrls: ['./product-management.component.css']
    })
], ProductManagementComponent);
export { ProductManagementComponent };
class ParametersSetting {
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
//# sourceMappingURL=product-management.component.js.map