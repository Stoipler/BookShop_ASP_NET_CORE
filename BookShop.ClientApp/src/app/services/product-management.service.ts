import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchParams } from 'src/app/models/searchParams';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) {
  }
  updatePrintedEdition(printedEditionModel: PrintedEditionModel) {
    return this.http.put(environment.apiUrl + '/api/printededition/put/'+printedEditionModel.id, printedEditionModel);
  }

  createPrintedEdition(printedEdition: PrintedEditionModel) {
    return this.http.post(environment.apiUrl + '/api/printededition/post', printedEdition);
  }
  get(searchParams?: SearchParams) {
    return this.http.post(environment.apiUrl + '/api/printededition/get', searchParams)
  }
  getById(id: number) {
    return this.http.get(environment.apiUrl + '/api/printededition/getbyid/' + id);
  }
}
