import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaymentHelper {
    loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            const s = window.document.createElement('script');
            s.id = 'stripe-script';
            s.type = 'text/javascript';
            s.src = 'https://checkout.stripe.com/checkout.js';
            window.document.body.appendChild(s);
        }
    }
}
