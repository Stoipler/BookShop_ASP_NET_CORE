import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentDataModel } from 'src/app/models/paymentDataModel';
import { CartItemModel } from 'src/app/models/cartItemModel';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http: HttpClient) {

  }

  sendPaymentData(model: PaymentDataModel) {
    return this.http.post(environment.apiUrl + 'Order/SendPaymentData', model);
  }
  getCartItems(items:   CartItemModel[]) {
    return this.http.post(environment.apiUrl + 'Order/GetOrderItems', items,this.httpOptions).toPromise();
  }
}
