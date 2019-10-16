import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ProductManagementService = class ProductManagementService {
    constructor(http) {
        this.http = http;
    }
    updatePrintedEdition(printedEditionModel) {
        return this.http.put(environment.apiUrl + 'printededition/put/' + printedEditionModel.id, printedEditionModel);
    }
    createPrintedEdition(printedEdition) {
        return this.http.post(environment.apiUrl + 'printededition/post', printedEdition);
    }
    get(searchParams) {
        return this.http.post(environment.apiUrl + 'printededition/get', searchParams);
    }
    getById(id) {
        return this.http.get(environment.apiUrl + 'printededition/getbyid/' + id);
    }
};
ProductManagementService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductManagementService);
export { ProductManagementService };
//# sourceMappingURL=product-management.service.js.map