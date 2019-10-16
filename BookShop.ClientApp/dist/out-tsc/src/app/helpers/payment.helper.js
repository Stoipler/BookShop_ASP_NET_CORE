import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PaymentHelper = class PaymentHelper {
    loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            window.document.body.appendChild(s);
        }
    }
};
PaymentHelper = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], PaymentHelper);
export { PaymentHelper };
//# sourceMappingURL=payment.helper.js.map