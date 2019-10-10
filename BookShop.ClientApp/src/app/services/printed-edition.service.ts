import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrintedEditionModel } from 'src/app/models/printedEditionModels/printedEditionModel';
import { environment } from 'src/environments/environment'
import { PrintedEditionRequestModel } from 'src/app/models/printedEditionModels/printedEditionRequestModel';
import { PrintedEditionResponseModel } from 'src/app/models/printedEditionModels/printedEditionResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PrintedEditionService {

  constructor(private http: HttpClient) {
  }

  getPrintedEditions(requestModel: PrintedEditionRequestModel) {
    return this.http.post<PrintedEditionResponseModel>(environment.apiUrl + 'PrintedEdition/GetPrintedEditions', requestModel);
  }

  updatePrintedEdition(printedEditionModel: PrintedEditionModel) {
    return this.http.post(environment.apiUrl + 'PrintedEdition/UpdatePrintedEdition', printedEditionModel);
  }

  createPrintedEdition(printedEdition: PrintedEditionModel) {
    return this.http.post(environment.apiUrl + 'PrintedEdition/CreatePrintedEditon', printedEdition);
  }
  getById(id: number) {
    return this.http.get(environment.apiUrl + 'PrintedEdition/GetById/' + id);
  }
}
