import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrintedEditionModel } from '../models/printedEditionModel';
import { SearchParams } from '../models/searchParams';

@Injectable({
  providedIn: 'root'
})
export class PrintedEditionService {

  private url = "https://localhost:44304/api/printededition";

  constructor(private http: HttpClient) {
  }
  
  createPrintedEdition(printedEdition: PrintedEditionModel){
    return this.http.post(this.url+'/post',printedEdition);
  }
  get(searchParams?: SearchParams) {
    return this.http.post(this.url+'/get',searchParams)
  }
}
