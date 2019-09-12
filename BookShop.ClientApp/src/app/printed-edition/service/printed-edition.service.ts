import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrintedEditionModel } from '../models/printedEditionModel';

@Injectable({
  providedIn: 'root'
})
export class PrintedEditionService {

  private url = "https://localhost:44304/api/printededition";

  constructor(private http: HttpClient) {
  }

  getPrintedEditions() {
    return this.http.get(this.url);
  }
  
  createPrintedEdition(printedEdition: PrintedEditionModel){
    return this.http.post(this.url,printedEdition);
  }

}
