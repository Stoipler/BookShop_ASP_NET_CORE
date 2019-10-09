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

  async getPrintedEditions(requestModel: PrintedEditionRequestModel): Promise<PrintedEditionResponseModel> {
    return await this.http.post<PrintedEditionResponseModel>(environment.apiUrl + 'PrintedEdition/GetPrintedEditions', requestModel).toPromise();
  }


  updatePrintedEdition(printedEditionModel: PrintedEditionModel) {
    return this.http.put(environment.apiUrl + 'printededition/put/' + printedEditionModel.id, printedEditionModel);
  }

  createPrintedEdition(printedEdition: PrintedEditionModel) {
    return this.http.post(environment.apiUrl + 'printededition/post', printedEdition);
  }
  getById(id: number) {
    return this.http.get(environment.apiUrl + 'printededition/getbyid/' + id);
  }
}
