import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
import { SearchParams } from 'src/app/models/searchParams';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PrintedEditionService {

  constructor(private http: HttpClient) {
  }

  createPrintedEdition(printedEdition: PrintedEditionModel) {
    return this.http.post(environment.apiUrl + 'PrintedEdition/Post', printedEdition);
  }
  get(searchParams?: SearchParams) {
    return this.http.post(environment.apiUrl + 'PrintedEdition/Get', searchParams)
  }
  getById(id: number) {
    return this.http.get(environment.apiUrl + 'PrintedEdition/GetbyId/' + id);
  }
}
