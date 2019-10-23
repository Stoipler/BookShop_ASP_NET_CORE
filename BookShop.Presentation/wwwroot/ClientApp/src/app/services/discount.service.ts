import { Injectable } from '@angular/core';
import { DiscountCreationModel } from 'src/app/models/discountModels/discountCreationModel';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient) { }

  public addDiscount(requestModel: DiscountCreationModel) {
    return this.http.post(`${environment.apiUrl}Discount/AddDiscount`, requestModel);
  }
}

