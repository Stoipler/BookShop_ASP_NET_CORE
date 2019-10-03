import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentDataModel } from 'src/app/models/paymentDataModel';
import { CartModel } from 'src/app/models/cartModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {

  }

  sendPaymentData(model: PaymentDataModel) {
    return this.http.post(environment.apiUrl + 'Order/SendPaymentData', model);
  }
  getCheckout(items: CartModel) {
    return this.http.post(environment.apiUrl + 'Order/GetCheckout', items);
  }
}
