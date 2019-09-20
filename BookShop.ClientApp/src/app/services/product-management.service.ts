import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchParams } from '../models/searchParams';
import { PrintedEditionModel } from '../models/printedEditionModel';


@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  private url = "https://localhost:44304/api/printededition";

  constructor(private http: HttpClient) {
  }
  
  createPrintedEdition(printedEdition: PrintedEditionModel){
    return this.http.post(this.url+'/post',printedEdition);
  }
  get(searchParams?: SearchParams) {
    return this.http.post(this.url+'/get',searchParams)
  }
  getById(id: number){
    return this.http.get(this.url+'/getbyid/'+id);
  }
}