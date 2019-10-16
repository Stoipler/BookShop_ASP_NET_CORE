import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItemsComponent } from 'src/app/modules/cart/components/cart-items/cart-items.component';
import { AuthGuard } from 'src/app/helpers/authentication.guard';
const routes = [{ path: 'cartitems', component: CartItemsComponent, canActivate: [AuthGuard] }];
let CartRoutingModule = class CartRoutingModule {
};
CartRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], CartRoutingModule);
export { CartRoutingModule };
//# sourceMappingURL=cart-routing.module.js.map