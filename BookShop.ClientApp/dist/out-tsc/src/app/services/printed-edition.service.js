import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let PrintedEditionService = class PrintedEditionService {
    constructor(http) {
        this.http = http;
    }
    getPrintedEditions(requestModel) {
        return this.http.post(environment.apiUrl + 'PrintedEdition/GetPrintedEditions', requestModel);
    }
    updatePrintedEdition(printedEditionModel) {
        return this.http.post(environment.apiUrl + 'PrintedEdition/UpdatePrintedEdition', printedEditionModel);
    }
    createPrintedEdition(printedEdition) {
        return this.http.post(environment.apiUrl + 'PrintedEdition/CreatePrintedEditon', printedEdition);
    }
    getById(id) {
        return this.http.get(environment.apiUrl + 'PrintedEdition/GetById/' + id);
    }
};
PrintedEditionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PrintedEditionService);
export { PrintedEditionService };
//# sourceMappingURL=printed-edition.service.js.map