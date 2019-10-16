import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
let CartModule = class CartModule {
};
CartModule = tslib_1.__decorate([
    NgModule({
        declarations: [CartItemsComponent],
        imports: [
            CommonModule,
            CartRoutingModule
        ]
    })
], CartModule);
export { CartModule };
//# sourceMappingURL=cart.module.js.map