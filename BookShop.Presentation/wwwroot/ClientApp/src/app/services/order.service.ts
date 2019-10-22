import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentDataModel } from 'src/app/models/orderModels/paymentDataModel';
import { CartModel } from 'src/app/models/orderModels/cartModel';
import { OrderRequestModel } from 'src/app/models/orderModels/orderRequestModel';
import { Observable } from 'rxjs';
import { OrderResponseModel } from 'src/app/models/orderModels/orderResponseModel';

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
  getOrdersForUser() {
    return this.http.get<OrderResponseModel>(environment.apiUrl + 'Order/GetOrdersForUser');
  }
  getOrdersForAdmin(requestModel: OrderRequestModel): Observable<OrderResponseModel> {
    return this.http.post<OrderResponseModel>(environment.apiUrl + 'Order/GetOrdersForAdmin', requestModel);
  }
}
